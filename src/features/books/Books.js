import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchaseBook } from "./booksSlice";

const Books = () => {
  const books = useSelector((state) => state.books.bookList);
  const dispatch = useDispatch();

  const handleCheckStockAndBuy = (bookId, stock) => {
    dispatch(purchaseBook(bookId, stock));
  };

  return (
    <div className="bg-orange-950 h-full p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((b) => (
        <div
          key={b.id}
          className="w-full lg:w-full lg:flex lg:flex-col lg:text-center lg:text-white lg:gap-4"
        >
          <img
            src="https://placehold.co/250x250"
            className="lg:w-full lg:h-auto"
            alt={b.title}
          />
          <div className="lg:flex lg:flex-col lg:text-left">
            <h1 className="lg:text-2xl lg:font-bold">{b.title}</h1>
            <p className="lg:text-lg lg:font-semibold">{b.author}</p>
            <span>{b.genre}</span>
            <span>{b.published_year}</span>
          </div>
          <div className="lg:flex lg:justify-between">
            {b.stock === 0 ? (
              <button
                disabled
                className="bg-zinc-900 lg:w-2/3 lg:py-3 lg:text-sm"
                onClick={() => handleCheckStockAndBuy(b.id, b.stock)}
              >
                No Stock
              </button>
            ) : (
              <button
                className="bg-gray-800 lg:w-2/3 lg:py-3 lg:text-sm"
                onClick={() => handleCheckStockAndBuy(b.id, b.stock)}
              >
                Buy
              </button>
            )}

            <button className="bg-gray-950 lg:w-1/3 lg:py-3 lg:text-sm">
              Reserve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
