import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./AddBook.module.css";

const AddBook = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (e) => {
    const booksData = {
      bookName: e.book_name,
      authorName: e.author_name,
      price: e.price,
      quantity: e.quantity,
      department: e.department_name
    };
    console.log(booksData);
    const url = `http://localhost:5000/addBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booksData),
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          toast("Successfully added new book!!");
          reset();
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className={`container-fluid ${classes.addBook}`}>
      <div className="row patients">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1 className="text-white text-center m-3 ">Add Book</h1>
          <div className={`p-5 ${classes.bookForm}`}>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                placeholder="Book Name"
                name="name"
                type="text"
                
                {...register("book_name", { required: true })}
              />
              <br />
              <input
                className="form-control"
                placeholder="Author Name"
                name="name"
                type="text"
                {...register("author_name", { required: true })}
              />
              <br />
              <input
                className="form-control"
                placeholder="Department Name"
                name="name"
                type="text"
                {...register("department_name", { required: true })}
              />
              <br />
              <input
                className="form-control"
                placeholder="Price"
                name="price"
                type="number"
                {...register("price", { required: true })}
              />
              <br />
              <input
                className="form-control"
                placeholder="Quantity"
                name="quantity"
                type="number"
                {...register("quantity", { required: true })}
              />
              <br />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              {/* <Button style={{background:"red #323965"}} type="submit" class="btn btn-primary">
              Submit
            </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
