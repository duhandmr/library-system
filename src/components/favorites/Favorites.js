import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../features/favorites/favoritesSlice";
import Book from "../books/Book";

const Favorites = () => {
  const books = useSelector((state) => state.books.bookList);
  const favorites = useSelector(selectFavorites);

  const favoriteBooks = books.filter((book) =>
    favorites.some((favorite) => favorite.id === book.id)
  );

  return (
    <main className="container mx-auto p-5">
      <div>
        {favoriteBooks.length === 0 ? (
          <p className="flex justify-center items-center text-xl font-bold">
            No favorite book yet!
          </p>
        ) : (
          <ul>
            <h2 className="flex justify-center items-center text-xl font-bold mb-5">
              Your Favorite books
            </h2>
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {favoriteBooks.map((book) => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </main>
  );
};

export default Favorites;
