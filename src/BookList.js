import { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    getBooks()
  }, []);
  
  const addBook = async (x) => {
    x.preventDefault();
    const newBook = {title, author}
    console.log(newBook)
  }
    
  const BookForm = () => {
    return (
    <div>
    <h1>New Book</h1>
      <form onSubmit={addBook}>
        <h3>Title</h3>
          <input
            value={title}
            onChange={(x) => { setTitle(x.target.value)}} />
        <h3>Author</h3>
          <input
            value={author}
            onChange={(x) => { setAuthor(x.target.value)}} />
        <button>Submit</button>
      </form>
    </div>
    )
  }
  const showBooks = () => {
    if (books.length === 0)
      return <p>No Books Available</p>
    else
      return books.map((book) => {
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
        <div>{BookForm()}</div>
        <div>{showBooks()}</div>
      </div>
    );
};

export default BookList;