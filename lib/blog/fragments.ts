import gql from "graphql-tag";

export const BLOG_FIELDS = gql`
  fragment BlogParts on Blog {
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
`;
