// basketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      const { id } = action.payload;

      if (!state.cart.some((item) => item.id === id)) {
        const newItem = {
          ...action.payload,
          piece: 1,
        };

        state.cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const existingItem = state.cart.find((item) => item.id === id);

        if (existingItem) {
          existingItem.piece += 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    incrementItemInBasket: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.piece += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrementItemInBasket: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item && item.piece > 0) {
        item.piece -= 1;

        if (item.piece === 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }

        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const { addItemToBasket, incrementItemInBasket, decrementItemInBasket } =
  basketSlice.actions;
export const selectCart = (state) => state.basket.cart;
export default basketSlice.reducer;
