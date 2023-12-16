import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MdCancel } from "react-icons/md";

import { addBook } from "./booksSlice";
import BasketModal from "../basket/basketModal";

const AddBook = () => {
  const books = useSelector((state) => state.books.bookList);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    title: "",
    author: "",
    genre: "",
    published_year: "",
    stock: 0,
    ISBN: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    genre: Yup.string().required("Genre is required"),
    published_year: Yup.string().required("Published Year is required"),
    stock: Yup.number()
      .required("Stock is required")
      .positive("Stock must be at least 1"),
    ISBN: Yup.string()
      .required("ISBN is required")
      .length(13, "ISBN must be 13 characters"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newBook = { ...values, id: books.length + 1 };
    dispatch(addBook(newBook));
    resetForm();
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-transparent text-black border-black border-b-2 font-bold py-2 px-4 hover:bg-slate-500 hover:rounded-md hover:text-white"
          onClick={openModal}
        >
          Add Book
        </button>
        <BasketModal />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <MdCancel />
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col gap-2">
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="text"
                  name="genre"
                  placeholder="Genre"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="genre"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="text"
                  name="published_year"
                  placeholder="Published Year"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="published_year"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="stock"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="text"
                  name="ISBN"
                  placeholder="ISBN"
                  className="border-black border-b p-2 focus:outline-none focus:border-green-600"
                />
                <ErrorMessage
                  name="ISBN"
                  component="div"
                  className="text-red-500"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4"
                >
                  Add Book
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
