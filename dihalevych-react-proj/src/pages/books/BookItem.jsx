import PropTypes from "prop-types";
import "../books/BooksPage.css";

const BookItem = ({ book }) => {
  const getRandomPrice = () => {
    return (Math.random() * (30 - 10) + 10).toFixed(2);
  };

  return (
    <li key={book.key} className="book-item">
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={`Обкладинка книги ${book.title}`}
          className="book-cover"
        />
      )}
      <div className="book-details">
        <strong>{book.title}</strong> -{" "}
        {book.author_name ? book.author_name.join(", ") : "Автор невідомий"}
        <p className="book-price">${getRandomPrice()}</p>
        <button className="buy-button">Купити</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    key: PropTypes.string.isRequired,
    cover_i: PropTypes.string,
    title: PropTypes.string.isRequired,
    author_name: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default BookItem;
