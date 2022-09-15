import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Books.module.css";
const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch(`http://localhost:5000/getBooks`)
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  return (
    <div className={`container-fluid ${classes.books}`}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1 className="d-flex justify-content-center m-4">Total Book List</h1>
          <div className={`${classes.table} table `}>
            <table className="table table-striped">
              <thead className={`${classes.tableHead}`}>
                <tr>
                  <th className="" scope="col">
                    Sr No
                  </th>
                  <th className="" scope="">
                    Name
                  </th>
                  <th className="" scope="">
                    Author
                  </th>
                  <th className="" scope="col">
                    Price
                  </th>
                  <th className="" scope="col">
                    Quantity
                  </th>
                  <th className="" scope="col">
                    Dep.
                  </th>
                </tr>
              </thead>
              <tbody className={`${classes.tableBody}`}>
                {books.map((book, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{book.bookName} </td>
                    <td>{book.authorName}</td>
                    <td> {book.price}</td>
                    <td>{book.quantity}</td>
                    <td>{book.department}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
