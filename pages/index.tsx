import { ApolloError } from "apollo-client";
import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/pages/home-page";
import { getAbout, getBlogs } from "../lib/blog";
import { About, Blogs } from "../src/types/generated/graphql";

export const getStaticProps = async () => {
  const { data, error } = await getBlogs();
  const { data: about, errors } = await getAbout();
  return {
    props: {
      data: data,
      about: about ? about[0] : about,
      error: error,
    },
  };
};

type Props = {
  data: Blogs[];
  error: ApolloError;
  about: About;
};

const Home: NextPage<Props> = ({ data, error, about }) => {
  return (
    <div>
      <Head>
        <title>Literal Talks</title>
        <meta name="description" content="Book reviews and blog by betsi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-[90%] flex justify-center items-center max-w-[1268px] mx-auto py-8">
        {data && <HomePage about={about} data={data} />}
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
