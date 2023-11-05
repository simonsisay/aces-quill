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
      <div className="flex flex-col items-center mt-6 mb-16">
        <div>
          <Nav />
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
            <p className="max-w-[600px]">{RichText.render(about.about)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {data.map((blog) => (
          <div className="max-w-[650px]">
            <BlogCard blog={blog} key={blog._meta.uid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
