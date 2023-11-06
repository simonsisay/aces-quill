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
    <div className="pb-20 max-w-[800px] w-[90%] flex justify-center items-center flex-col">
      <div className="flex flex-col items-center mt-6 mb-10">
        <div className="flex my-8 flex-col items-center md:flex-row justify-center">
          <div className="mb-4">
            <img
              src={about.photo.url}
              className="rounded-full inline-block border-[#C7A291] border-[4px] border-solid  md:mr-4 w-[180px] h-[180px]"
            />
          </div>
          <div className="md:text-lg flex flex-col items-center ml-3">
            <Nav />
            <p className="max-w-[400px] text-[15px] mt-2 md:mt-7 text-[#605f5f] text-center md:text-left">
              {RichText.render(about.about)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {data.map((blog, i) => (
          <div className="max-w-[650px]" key={i}>
            <BlogCard blog={blog} key={blog._meta.uid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
