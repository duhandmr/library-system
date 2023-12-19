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
      } else {
        const existingItem = state.cart.find((item) => item.id === id);

        if (existingItem) {
          existingItem.piece += 1;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementItemInBasket: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, piece: item.piece + 1 } : item
      );

      state.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    decrementItemInBasket: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, piece: Math.max(item.piece - 1, 0) } : item
      );

      state.cart = updatedCart.filter((item) => item.piece > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
  },
});

export const { addItemToBasket, incrementItemInBasket, decrementItemInBasket } =
  basketSlice.actions;
export const selectCart = (state) => state.basket.cart;
export default basketSlice.reducer;
