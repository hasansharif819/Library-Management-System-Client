import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../../../components/UI/Button/Button";
import classes from "./UpdateIssueBook.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const UpdateIssueBook = ({ modalIsOpen, closeModal, findBook }) => {
  const [updateData, setUpdateData] = useState({
    studentName: findBook.studentName,
    bookName:findBook.bookName,
    semester: findBook.semester,
    department:findBook.department,
    roll: findBook.roll,
    issueDate: findBook.issueDate,
    returnDate: findBook.returnDate,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateData);
    fetch(`http://localhost:5000/update/${findBook._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((success) => {
        console.log("Success", success);
        if(success){
          alert("Update successful")
          closeModal();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      setUpdateData("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.target.name === "studentName" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        studentName: e.target.value,
      }));
    e.target.name === "bookName" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        bookName: e.target.value,
      }));
    e.target.name === "semester" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        semester: e.target.value,
      }));
    e.target.name === "department" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        department: e.target.value,
      }));
    e.target.name === "roll" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        roll: e.target.value,
      }));
    e.target.name === "issueDate" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        issueDate: e.target.value,
      }));
    e.target.name === "returnDate" &&
      setUpdateData((previousValue) => ({
        ...previousValue,
        returnDate: e.target.value,
      }));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={`text-center ${classes.title}`}>
          <h2>
            <span>Book</span> Information
          </h2>
        </div>
        {/* update form */}
        <form onSubmit={handleSubmit} className={`${classes.form}`}>
          <input
            name="studentName"
            placeholder="Student Name"
            className="form-control"
            onChange={handleChange}
            type="text"
            defaultValue={findBook.studentName}
          />
          <br />
          <input
            name="bookName"
            placeholder="Book Name"
            className="form-control"
            onChange={handleChange}
            type="text"
            defaultValue={findBook.bookName}
          />{" "}
          <br />
          <input
            name="semester"
            placeholder="Semester"
            className="form-control"
            onChange={handleChange}
            type="text"
            defaultValue={findBook.semester}
          />{" "}
          <br />
          <input
            name="department"
            placeholder="Department"
            className="form-control"
            onChange={handleChange}
            type="text"
            defaultValue={findBook.department}
          />{" "}
          <br />
          <input
            name="roll"
            placeholder="Roll"
            className="form-control"
            onChange={handleChange}
            type="number"
            defaultValue={findBook.roll}
          />{" "}
          <br />
          <input
            name="issueDate"
            placeholder="Issue Date"
            className="form-control"
            onChange={handleChange}
            type="date"
            defaultValue={findBook.issueDate}
          />{" "}
          <br />
          <input
            name="returnDate"
            placeholder="Return Date"
            className="form-control"
            onChange={handleChange}
            type="date"
            defaultValue={findBook.returnDate}
          />{" "}
          <br />
          <Button type="submit"> Submit</Button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateIssueBook;
