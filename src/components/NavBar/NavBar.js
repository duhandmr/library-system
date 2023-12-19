import React from "react";
import { Link } from "react-router-dom";
import AddBook from "../books/AddBookModal";
import BasketModal from "../basket/basketModal";

const NavBar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Bookstore
        </Link>
        <ul className="flex items-center space-x-4">
          <li className="text-white">
            <AddBook />
          </li>

          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Favorites
            </Link>
          </li>
          <li className="text-white">
            <BasketModal />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
