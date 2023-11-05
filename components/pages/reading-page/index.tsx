import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import { BsArrowLeftSquareFill, BsStarFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Blogs } from "../../../src/types/generated/graphql";

type Props = {
  data: Blogs;
};

const placeholderImage =
  "https://images.unsplash.com/photo-1598024055266-e772a5f8c128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const ReadingPage = ({ data }: Props) => {
  return (
    <div className="mt-8">
      <Link href="/" passHref>
        <BsArrowLeftSquareFill className="cursor-pointer text-primary-01 text-[2.3rem] header" />
      </Link>
      <article className="blog my-20">
        <h1 className="my-8 header text-center text-[2.4rem]">
          {RichText.render(data.title)}
        </h1>
        <div className="mb-8 relative w-full h-[40vh]">
          <Image
            alt={RichText.asText(data.title)}
            layout="fill"
            src={data.blog_thumbnail.url || placeholderImage}
          />
        </div>
        <div className="mb-12 mt-6 text-lg">
          <p>{RichText.render(data.writting)}</p>
        </div>
      </article>
    </div>
  );
};

export default ReadingPage;
