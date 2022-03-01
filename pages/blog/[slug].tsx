import { GraphQLErrors } from "@apollo/client/errors";
import { Params } from "next/dist/server/router";
import Head from "next/head";
import ReadingPage from "../../components/pages/reading-page";
import { getBlogById, getBlogs } from "../../lib/blog";
import { Blogs } from "../../src/types/generated/graphql";

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { data, errors = null } = await getBlogById(params.slug);
  let blog = null;
  if (data) {
    blog = data?.map((item) => item)[0];
  }
  return {
    props: {
      data: blog,
      errors,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await getBlogs();
  const paths = data?.map((blog) => ({
    params: { slug: blog?._meta.uid },
  }));
  return {
    paths,
    fallback: true,
  };
};

type Props = {
  data: Blogs | null;
  errors: GraphQLErrors;
};

const Blog = ({ data, errors }: Props) => {
  if (data) {
    return (
      <>
        <Head>
          <title>Blog | {data?.title}</title>
          <meta name="description" content={data?.excerpt}></meta>
        </Head>
        <main className="w-[90%] max-w-[768px] mx-auto py-8">
          <ReadingPage data={data} />)
        </main>
      </>
    );
  } else {
    return (
      <main className="w-[90%] max-w-[768px] mx-auto py-8">
        <p className="mx-auto my-8">
          Something went wrong please refresh the page
        </p>
      </main>
    );
  }
};

export default Blog;
