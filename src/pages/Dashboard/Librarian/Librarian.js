import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Librarian.module.css";

const Librarian = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    const url = `http://localhost:5000/addLibrarian`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(e),
    })
      .then((response) =>response.json())
      .then((success) => {
        console.log("Successfully", success);
        if (success) {
          alert("Librarian add successfully!!");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 text-center">
          <h1 className="text-dark text-center m-5 ">Add Librarian</h1>
          <div className=" p-5">
            <form
              className={`${classes.addAdmin} text-center`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  type="text"
                  {...register("name", { required: true })}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="text"
                  {...register("email", { required: true })}
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Librarian;
