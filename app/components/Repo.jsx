async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/EsbonMigiro/${name}`,
    {
      next: {
        validate: 60,
      },
    }
  );
  return response.json();
}

async function Repo({ name }) {
  const repo = await fetchRepo(name);
  //   console.log(repo);

  return (
    <>
      <h1>{repo.name}</h1>
      <div className="card-stat">
        <span>{repo.forks_count}</span>
        <span>{repo.watchers_count}</span>
      </div>
    </>
  );
}

export default Repo;
