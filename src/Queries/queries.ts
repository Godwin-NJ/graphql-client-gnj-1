import { useQuery, gql } from "@apollo/client";
export const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
      book {
        name
        genre
      }
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

export const GET_SINGLE_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
