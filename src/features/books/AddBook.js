import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addBook } from "./booksSlice";

const AddBook = () => {
  const books = useSelector((state) => state.books.bookList);
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    id: books.length + 1,
    title: "",
    author: "",
    genre: "",
    published_year: "",
    stock: 0,
    ISBN: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));
    setNewBook({
      id: books.length + 1,
      title: "",
      author: "",
      genre: "",
      published_year: "",
      stock: 0,
      ISBN: "",
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Book</h2>
      <form className="flex flex-row space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newBook.genre}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="published_year"
          placeholder="Published Year"
          value={newBook.published_year}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newBook.stock}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="ISBN"
          placeholder="ISBN"
          value={newBook.ISBN}
          onChange={handleInputChange}
          className="border rounded-md p-2"
          maxLength={13}
        />
        <button
          type="button"
          onClick={handleAddBook}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
