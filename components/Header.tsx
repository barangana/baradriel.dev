import Link from "next/link";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <Link href={"/#"}>About</Link>
        <Link href={"/#"}>Projects</Link>
        <Link href={"/#"}>Technologies</Link>
        <Link href={"/#"}>Contact</Link>
      </ul>
    </nav>
  );
};

export default Header;
