import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center justify-center md:justify-start w-full">
      <Link href="/" passHref>
        <h1 className="cursor-pointer no-underline text-[24px] text-center header md:text-[3.3rem] text-[#C7A291]">
          {"Ace's Quill"}
        </h1>
      </Link>
    </div>
  );
};

export default Nav;
