import { ApolloError } from "apollo-client";
import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/pages/home-page";
import { getBlogs } from "../lib/blog";
import { Blogs } from "../src/types/generated/graphql";

export const getStaticProps = async () => {
  const { data, error } = await getBlogs();
  return {
    props: {
      data: data,
      error: error,
    },
  };
};

type Props = {
  data: Blogs[];
  error: ApolloError;
};

const Home: NextPage<Props> = ({ data, error }) => {
  return (
    <div>
      <Head>
        <title>Literal Talks</title>
        <meta name="description" content="Book reviews and blog by betsi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-[90%] max-w-[768px] mx-auto py-8">
        {data && <HomePage data={data} />}
        {error && (
          <div className="m-auto">
            <h1> Something went wrong, Please refresh the page</h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
