import { GET_SINGLE_BOOK } from "@queries/queries";
import { useQuery } from "@apollo/client";

const BookDetails = () => {
  const { data, loading } = useQuery(GET_SINGLE_BOOK);
  return <div>BookDetails</div>;
};

export default BookDetails;
