import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Nav from "../../nav";
import BlogCard from "../../blog-card";
import { About, Blogs } from "../../../src/types/generated/graphql";
import { RichText } from "prismic-reactjs";

type Props = {
  data: Blogs[];
  about: About;
};

const HomePage = ({ data, about }: Props) => {
  return (
    <div className="pb-20">
      <Nav />
      <div className="flex items-center mt-12 mb-20">
        <div className="flex items-center mr-4 w-[120px] h-[120px] rounded-full relative">
          <Image
            width={"100%"}
            height={"100%"}
            layout="fixed"
            src={about.photo.url}
            className="rounded-full"
          />
        </div>
        <div className="md:text-lg">
          <p className="max-w-[300px]">{RichText.render(about.about)}</p>
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
