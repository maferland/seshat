import githubConfig from '@/helpers/githubConfig';

const endpoint = 'https://api.github.com/graphql';

const query = async (request) => {
  const body = { query: request };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${githubConfig.apiKey}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(() => false);
};

const searchRepository = async (searchQuery) => {
  const request = `{
    search(first: 3, type: REPOSITORY, query: "${searchQuery}") {
      nodes {
        ... on Repository {
          name
          nameWithOwner
          description
          createdAt
        }
      }
    }
  }`;
  return query(request);
};

const buildSearchIssueRequest = (repositories, searchQuery) => {
  const request = [];
  repositories.forEach((repository) => {
    const key = repository.nameWithOwner.replace(/[^\w\s]/gi, '');
    const newRequest = `
      ${key}: search(first: 10, type: ISSUE, query: "repo:${repository.nameWithOwner} ${searchQuery}") {
        nodes {
          ... on Issue {
            title
            url
            closed
            labels(first: 5) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `;
    request.push(newRequest);
  });
  return `{${request.join('')}}`;
};

const searchIssue = async (repositories, searchQuery) => {
  const request = buildSearchIssueRequest(repositories, searchQuery);
  return query(request);
};

export { searchRepository, searchIssue };
