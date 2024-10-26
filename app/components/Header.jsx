import Link from "next/link";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">CodeE</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/codes/repos">Code</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
