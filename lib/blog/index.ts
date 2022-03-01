import { client } from "../../pages/api/apollo-client";
import { Query } from "../../src/types/generated/graphql";
import { BLOGS_QUERY, BLOG_QUERY } from "./queries";

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
