// import Image from "next/image";
// import { Inter } from "next/font/google";
import AddBook from "@component/AddBook";
import BookList from "@component/BookList";

// const inter = Inter({ subsets: ["latin"] });
BookList;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   p-24">
      <BookList />
      <br />
      <AddBook />
    </main>
  );
}
