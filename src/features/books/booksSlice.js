import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: JSON.parse(localStorage.getItem("bookList")) || [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    purchaseBook: (state, action) => {
      const bookId = action.payload;
      const book = state.bookList.find((book) => book.id === bookId);

      if (book && book.stock > 0) {
        book.stock--;
      }
      localStorage.setItem("bookList", JSON.stringify(state.bookList));
    },
    addBook: (state, action) => {
      state.bookList.push(action.payload);

      localStorage.setItem("bookList", JSON.stringify(state.bookList));
    },
  },
});

export const { purchaseBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
