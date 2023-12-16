// BasketModal.js
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { useSelector } from "react-redux";
import {
  selectCart,
  incrementItemInBasket,
  decrementItemInBasket,
} from "../basket/basketSlice";
import { useDispatch } from "react-redux";

const BasketModal = () => {
  const cart = useSelector(selectCart);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleIncrement = (item) => {
    dispatch(incrementItemInBasket({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementItemInBasket({ id: item.id }));
  };

  useEffect(() => {
    console.log("Cart value:", cart);
  }, [cart]);

  return (
    <div>
      <button
        className="flex flex-row gap-5 justify-center items-center bg-transparent text-black border-black border-b-2 font-bold py-2 px-4 hover:bg-slate-500 hover:rounded-md hover:text-white"
        onClick={openModal}
      >
        Basket <FaBasketShopping />
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <MdCancel className="hover:animate-pulse" />
            </span>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Your Basket</h2>
              <ul className="p-5">
                {cart.map((item) => (
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
                      <IoMdAddCircle
                        onClick={() => handleIncrement(item)}
                        className="text-2xl cursor-pointer"
                      />
                      <span className="border p-1">{item.piece}</span>
                      <GrSubtractCircle
                        onClick={() => handleDecrement(item)}
                        className="text-2xl cursor-pointer"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketModal;
