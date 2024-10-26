import Link from "next/link";

async function fetchRepoContent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/EsbonMigiro/${name}/contents`,
    {
      next: {
        validate: 60,
      },
    }
  );
  return response.json();
}
async function ReposDir({ name }) {
  const dirsContent = await fetchRepoContent(name);
  const dirs = dirsContent.filter((dir) => dir.type === "dir");

  //   console.log("dirs", dirs);

  return (
    <>
      <h2>Repo dirs</h2>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/codes/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReposDir;
