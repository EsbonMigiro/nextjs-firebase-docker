import Link from "next/link";
// import { resolve } from "styled-jsx/css";
// import { FaStar, FaCodeBranch, FaEye } from "react-icos/fa";

async function fetchRepos() {
  const repository = await fetch(
    "https://api.github.com/users/EsbonMigiro/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return repository.json();
}

async function page() {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h1>Repositories</h1>
      <div className="repo-list">
        <ul>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <Link href={`repos/${repo.name}`}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className="repo-details">
                    <span>{repo.stargazers_count}</span>
                    <span>{repo.forks_count}</span>
                    <span>{repo.watchers_count}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default page;
