import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "./AddBookModal";
import { addItemToBasket } from "../basket/basketSlice";

const Book = ({ book }) => {
  const [basketId, setBasketId] = useState(0);
  const dispatch = useDispatch();

  // const handleCheckStockAndBuy = () => {
  //   if (book.stock > 0) {
  //     const confirmPurchase = window.confirm(
  //       `Do you want to purchase ${book.title}?`
  //     );
  //     if (confirmPurchase) {
  //       dispatch(purchaseBook(book.id, book.stock));
  //     }
  //   }
  // };

  const handleAddToBasket = () => {
    dispatch(
      addItemToBasket({ id: book.id, title: book.title, author: book.author })
    );
  };

  return (
    <div
      key={book.id}
      className="w-full lg:w-full lg:flex lg:flex-col lg:text-center lg:text-white lg:gap-4"
    >
      <img
        src="https://placehold.co/250x250"
        className="lg:w-full lg:h-auto"
        alt={book.title}
      />
      <div className="lg:flex lg:flex-col lg:text-left">
        <h1 className="lg:text-2xl lg:font-bold">{book.title}</h1>
        <p className="lg:text-lg lg:font-semibold">{book.author}</p>
        <span>{book.genre}</span>
        <span>{book.published_year}</span>
      </div>
      <div className="lg:flex lg:justify-between">
        <button
          className={`bg-gray-800 lg:w-2/3 lg:py-3 lg:text-sm ${
            book.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddToBasket}
          disabled={book.stock === 0}
        >
          {book.stock === 0 ? "No Stock" : "Add to Basket"}
        </button>
        <button className="bg-gray-950 lg:w-1/3 lg:py-3 lg:text-sm">
          Reserve
        </button>
      </div>
    </div>
  );
};

const Books = () => {
  const books = useSelector((state) => state.books.bookList);

  return (
    <>
      <AddBook />
      <div className="bg-orange-950 h-full p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
