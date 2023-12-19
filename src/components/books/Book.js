import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../features/basket/basketSlice";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  selectFavorites,
  toggleFavorite,
} from "../../features/favorites/favoritesSlice";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(
    (favoriteBook) => favoriteBook.id === book.id
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(book.id));
  };

  const handleAddToBasket = () => {
    dispatch(
      addItemToBasket({ id: book.id, title: book.title, author: book.author })
    );
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        src="https://placehold.co/250x250"
        alt={book.title}
        className="w-full h-auto"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-xl mb-2">{book.author}</p>
        <span className="text-gray-500">{book.genre}</span>
      </div>

      <div className="px-6 py-4 flex justify-between">
        <button
          className={`bg-gray-800 w-2/3 py-3 text-sm text-white ${
            book.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddToBasket}
          disabled={book.stock === 0}
        >
          {book.stock === 0 ? "No Stock" : "Add to Basket"}
        </button>
        <button className="bg-gray-950 w-1/3 py-3 text-xs text-white">
          Reserve
        </button>
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div onClick={handleToggleFavorite} className="cursor-pointer">
          {isFavorite ? (
            <MdFavorite className="text-xl text-red-500" />
          ) : (
            <MdFavoriteBorder className="text-xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
