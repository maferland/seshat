const endpoint = 'https://api.github.com/graphql';

const query = async (request) => {
  const body = JSON.stringify({ query: request });
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer 792dfc952b33de598e9d2e074f5b9f67c7ece0ba',
    },
    body,
  })
    .then(res => res.json())
    .catch(() => false);
};

const getRepository = async (name, owner) => {
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

const getIssues = async () => {
  const request = {};
  return query(request);
};

export { getRepository, getIssues };
