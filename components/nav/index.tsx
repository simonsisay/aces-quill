import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <Link href="/">
        <h1 className="cursor-pointer no-underline text-[24px] header md:text-[3.3rem] text-primary-01">
          Literal Talks
        </h1>
      </Link>
    </div>
  );
};

export default Nav;
