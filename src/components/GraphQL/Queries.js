import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
query {
    category {
        products {
            name
        }
    }
}
`