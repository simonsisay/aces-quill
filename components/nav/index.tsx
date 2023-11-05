import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <Link href="/" passHref>
        <h1 className="cursor-pointer no-underline text-[24px] header md:text-[3.3rem] text-primary-01">
          {"Ace's Quill"}
        </h1>
      </Link>
    </div>
  );
};

export default Nav;
