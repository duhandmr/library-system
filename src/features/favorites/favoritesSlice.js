import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const bookIndex = state.favorites.findIndex((book) => book.id === id);

      if (bookIndex !== -1) {
        state.favorites.splice(bookIndex, 1);
      } else {
        state.favorites.push({ id: id });
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export const selectFavorites = (state) => state.favorites.favorites;
export default favoriteSlice.reducer;
