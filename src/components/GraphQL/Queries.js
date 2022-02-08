import { gql } from "@apollo/client";

export const PROD_QUERY = gql`
query {
    category {
        products {
            id
            name
            gallery
            prices {
                amount
            }
        }
    }
}
`

export const ITEM_QUERY = gql`
query {
  product(id:"huarache-x-stussy-le"){
    name
    brand
    attributes {
        name
    }
    description
    gallery
  }
}
`