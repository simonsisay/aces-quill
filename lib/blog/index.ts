import { client } from "../../pages/api/apollo-client";
import { Query } from "../../src/types/generated/graphql";
import { ABOUT_QUERY, BLOGS_QUERY, BLOG_QUERY } from "./queries";

export const getBlogs = async () => {
  const { data, errors = null } = await client.query<{
    allBlogss: Query["allBlogss"];
  }>({
    query: BLOGS_QUERY,
  });
  if (data) {
    const blogs = data.allBlogss.edges?.map((item) => item?.node);
    return { data: blogs, error: null };
  } else {
    return { data: null, error: errors };
  }
};

export const getBlogById = async (uid: string) => {
  const { data, errors = null } = await client.query<{
    allBlogss: Query["allBlogss"];
  }>({
    query: BLOG_QUERY,
    variables: { uid },
  });
  if (data) {
    const blogs = data.allBlogss.edges?.map((item) => item?.node);
    return { data: blogs, error: null };
  } else {
    return { data: null, errors };
  }
};

export const getAbout = async () => {
  const { data, errors = null } = await client.query<{
    allAbouts: Query["allAbouts"];
  }>({
    query: ABOUT_QUERY,
  });
  if (data) {
    const about = data.allAbouts.edges?.map((item) => item?.node);
    return { data: about, error: null };
  } else {
    return { data: null, errors };
  }
};
