import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LibraryHome from "./pages/Dashboard/LibraryHome/LibraryHome";
import Books from "./pages/Dashboard/Books/Books";
import AddBook from "./pages/Dashboard/AddBook/AddBook";
import IssueBook from "./pages/Dashboard/IssueBook/IssueBook";
import { createContext, useState } from "react";
import Librarian from "./pages/Dashboard/Librarian/Librarian";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./pages/Dashboard/BookDetails/BookDetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [issueBooks, setIssueBooks] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          
          
          <Route path="/library" element={<RequireAuth><LibraryHome /></RequireAuth>}></Route>
          <Route path="/issueBook" element={ <RequireAuth>
            <IssueBook issueBooks={issueBooks} setIssueBooks={setIssueBooks} />
            </RequireAuth>}></Route>
          <Route path="/books" element={<RequireAuth><Books /></RequireAuth>}></Route>
          <Route path="/addBooks" element={<AddBook />}></Route>
          <Route path="/addLibrarian" element={<RequireAuth><Librarian /></RequireAuth>}></Route>
          <Route path="/bookId/:bookId" element={<RequireAuth>
            <BookDetails issueBooks={issueBooks} />
          </RequireAuth>}></Route>
          
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          
          
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
        </UserContext.Provider>


  );
}

export default App;
