import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import ReposDir from "@/app/components/ReposDir";
import Link from "next/link";

async function RepoPage({ params }) {
  const { name } = await params;
  return (
    <div className="card">
      <Link href="/codes/repos">
        <div className="btn btn-back">Back to repos</div>
      </Link>
      <Suspense fallback={<div>loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading dir...</div>}>
        <ReposDir name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
