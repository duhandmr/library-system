import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice";
import basketReducer from "./../features/basket/basketSlice";
import favoritesReducer from "./../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice,
    basket: basketReducer,
    favorites: favoritesReducer,
  },
});
