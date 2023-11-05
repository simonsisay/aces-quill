import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { Blogs } from "../../src/types/generated/graphql";

type Props = {
  blog: Blogs;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog._meta.uid}`} passHref>
      <div className="flex items-center mb-8  cursor-pointer w-full py-8 px-6 drop-shadow-md bg-[#fff] rounded-md border-primary-01 border-[1px]">
        <div className="relative md:w-[140px] h-[100%] max-h-[120px] md:mr-6">
          <Image
            layout={"responsive"}
            width={"100%"}
            height={"100%"}
            src={blog.blog_thumbnail.url}
          />
        </div>
        <div className="group flex flex-col flex-1">
          <h1 className="group-hover:underline text-primary-01 header text-2xl">
            {RichText.render(blog.title)}
          </h1>
          <article className="text-[14px] mt-4 md:max-w-[80%]">
            {RichText.render(blog.excerpt)}
          </article>
          <p className="mt-3 italic">
            {blog?._meta.firstPublicationDate
              ? new Date(blog?._meta.firstPublicationDate)
                  .toISOString()
                  .split("T")[0]
              : null}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
