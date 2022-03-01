import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Nav from "../../nav";
import BlogCard from "../../blog-card";
import { Blogs } from "../../../src/types/generated/graphql";

type Props = {
  data: Blogs[];
};

const HomePage = ({ data }: Props) => {
  return (
    <div className="pb-20">
      <Nav />
      <div className="flex items-center mt-12 mb-20">
        <div className="mr-4 w-[90px] h-[90px] relative">
          <Image layout="fill" src={avatar} className="rounded-full" />
        </div>
        <div className="md:text-lg">
          <p className="">
            Hi, I&apos;m Betsi. <p className="md:inline">Welcome to my blog.</p>{" "}
            <p>I write about books I read.</p>
          </p>
          <div className="mt-3 flex w-[50%] md:w-[34%] text-primary-01 justify-between text-2xl">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/betselot5656/"
            >
              <AiFillInstagram className="cursor-pointer hover:scale-101" />
            </a>
            <BsTwitter className="cursor-pointer hover:scale-101" />
            <FaTelegram className="cursor-pointer hover:scale-101" />
          </div>
        </div>
      </div>
      <div>
        {data.map((blog) => (
          <BlogCard blog={blog} key={blog._meta.uid} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
