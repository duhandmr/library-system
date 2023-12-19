import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const Books = () => {
  const books = useSelector((state) => state.books.bookList);

  return (
    <div className="container mx-auto p-5 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
