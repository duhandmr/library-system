import { configureStore } from "@reduxjs/toolkit";
import booksSlice, { booksReducer } from "../features/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});
