import githubConfig from '@/helpers/githubConfig';

const endpoint = 'https://api.github.com/graphql';

const query = async (request) => {
  const body = JSON.stringify({ query: request });
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${githubConfig.apiKey}`,
    },
    body,
  })
    .then(res => res.json())
    .catch(() => false);
};

const fetchRepository = async (name, owner) => {
  const request = `{
    repository(name: "${name}", owner: "${owner}") {
      name
      nameWithOwner
      description
      createdAt
    }
  }`;
  return query(request);
};

const buildSearchRequest = (repositories, searchQuery) => {
  const request = [];
  repositories.forEach((repository) => {
    const key = repository.nameWithOwner.replace('/', '');
    const newRequest = `{
    const key = repository.nameWithOwner.replace(/[^\w\s]/gi, '');
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
    }`;
    request.push(newRequest);
  });
  return request.join();
};

const fetchIssue = async (repositories, searchQuery) => {
  const request = buildSearchRequest(repositories, searchQuery);
  return query(request);
};

export { fetchRepository, fetchIssue };
