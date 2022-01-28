import { gql } from '@apollo/client';

export const GET_USER = gql`
    query {
        getSingleUser {
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`