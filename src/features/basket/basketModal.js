// BasketModal.js
import React, { useEffect, useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  selectCart,
  incrementItemInBasket,
  decrementItemInBasket,
} from "../basket/basketSlice";
import { useDispatch } from "react-redux";
import { updateBookList } from "../books/booksSlice";

const BasketModal = () => {
  const basket = useSelector((state) => state.basket.cart);
  const books = useSelector((state) => state.books.bookList);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const checkAndUpdateStock = (id, piece, currentStock) => {
    const updatedStock = currentStock - piece;
    const bookInfo = books.find((bookItem) => bookItem.id === id);

    if (updatedStock >= 0) {
      dispatch(updateBookList({ id, stock: updatedStock }));
    } else {
      alert(
        `We only have ${currentStock} of ${bookInfo.title}'s book in stock.`
      );
    }
  };

  const handleIncrement = (item) => {
    dispatch(incrementItemInBasket({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementItemInBasket({ id: item.id }));
  };

  const handleBuy = () => {
    let success = true;
    basket.forEach((cartItem) => {
      const { id, piece } = cartItem;
      const bookInfo = books.find((bookItem) => bookItem.id === id);

      if (bookInfo) {
        if (bookInfo.stock !== 0) {
          checkAndUpdateStock(id, piece, bookInfo.stock);
        } else {
          alert(`${bookInfo.title}'s stock is zero`);
          success = false;
        }
      }
    });
    if (success === true) {
      alert("Successfull!");
      setIsOpen(false);
    } else {
      alert("something wrong");
    }
  };

  useEffect(() => {
    console.log("Basket value:", basket);
  }, [basket]);

  return (
    <div>
      <button
        className="flex flex-row gap-5 justify-center items-center bg-transparent text-black border-black border-b-2 font-bold py-2 px-4 hover:bg-slate-500 hover:rounded-md hover:text-white"
        onClick={openModal}
      >
        Basket <FaBasketShopping />
      </button>
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <MdCancel className="hover:animate-pulse" />
            </span>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Your Basket</h2>
              <ul className="p-5">
                {basket.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row gap-5 items-center justify-between border-b-2"
                  >
                    <div className="flex flex-row gap-2">
                      <p>{item.title}</p>
                      <span>by</span>
                      <p>{item.author}</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                      <IoMdRemoveCircle
                        onClick={() => handleDecrement(item)}
                        className="text-2xl cursor-pointer"
                      />

                      <span className="border p-1">{item.piece}</span>

                      <IoMdAddCircle
                        onClick={() => handleIncrement(item)}
                        className="text-2xl cursor-pointer"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end p-5">
                <button
                  onClick={handleBuy}
                  className="flex items-center bg-transparent text-black border-black border-b-2 font-bold py-2 px-4"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketModal;
