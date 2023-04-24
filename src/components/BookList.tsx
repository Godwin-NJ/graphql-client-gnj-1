import { useQuery, gql } from "@apollo/client";
import { GET_BOOKS } from "@queries/queries";
// const GET_BOOKS = gql`
//   {
//     books {
//       id
//       name
//       genre
//     }
//   }
// `;

const BookList = () => {
  const { data, loading } = useQuery(GET_BOOKS);

  if (loading) {
    return <div>data loading</div>;
  }
  return (
    <>
      {data.books.map((book: any) => {
        return (
          <ul key={book.id} className="list-disc justify-center">
            <li>
              {book.name} <br />({book.genre})
            </li>
            {/* <li>{book.genre}</li> */}
          </ul>
        );
      })}
    </>
  );
};

export default BookList;
