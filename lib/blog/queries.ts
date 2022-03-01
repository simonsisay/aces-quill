import gql from "graphql-tag";

export const BLOGS_QUERY = gql`
  query allBlogs {
    allBlogss {
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          title
          excerpt
          blog_thumbnail
          writting
          category
          rating
        }
      }
    }
  }
`;

export const BLOG_QUERY = gql`
  query allBlogs($uid: String!) {
    allBlogss(uid: $uid) {
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          title
          excerpt
          blog_thumbnail
          writting
          category
          rating
        }
      }
    }
  }
`;
