import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
query {
    categories {
        name
    }
}
`