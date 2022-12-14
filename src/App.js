import React from "react";
import BookDetails from "./components/BookDetails";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
