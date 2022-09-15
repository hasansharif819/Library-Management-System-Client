import React from "react";
import classes from "./DepartmentBookList.module.css";

const DepartmentBookList = ({books}) => {
  // console.log(books);
  return (
    <div>
      <div className={`${classes.table} table `}>
        <table className="table table-striped">
          <thead className={`${classes.tableHead}`}>
            <tr>
              <th className="" scope="">
                Name
              </th>
              <th className="" scope="">
                Author
              </th>
              <th className="" scope="col">
                Dep.
              </th>
            </tr>
          </thead>
          <tbody className={`${classes.tableBody}`}>
            {books.map((book) => (
                  <tr>
                    <td>{book.bookName} </td>
                    <td>{book.authorName}</td>
                    <td>{book.department}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentBookList;
