import { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    getBooks()
  }, []);
const showBooks = () => {
  if (Books.length === 0)
    return <p>No Books Available</p>
  else
    return Books.map ((book) => {
      return(
      <div>
        <h2>{book.title} by {book.author}</h2>
        <h3>ISBN: {book.isbn}</h3>
        <h3>Genre: {book.genre}</h3>
        <p>{book.description}</p>
      </div>
      )
    })
  };
const getBooks = async () => {
  let data = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
  console.log(data.data.data)
  setBooks(data.data.data);
}
  return (
    <div>
      <h1>Books:</h1>
      <div>{showBooks()}</div>
    </div>
  );
};

export default BookList;