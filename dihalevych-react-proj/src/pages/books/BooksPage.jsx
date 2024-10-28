import { useEffect, useState } from "react";
import "./BooksPage.css";
import BooksList from "./BooksList";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=shopping")
      .then((response) => response.json())
      .then((data) => setBooks(data.docs || []))
      .catch((error) =>
        console.error("Помилка під час завантаження книг:", error)
      );
  }, []);

  return (
    <div className="books-page">
      <h1>Список книг для покупки</h1>
      <BooksList books={books} />
    </div>
  );
};

export default BooksPage;
