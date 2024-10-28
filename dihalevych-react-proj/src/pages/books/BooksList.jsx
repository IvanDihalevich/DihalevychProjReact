import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.key} book={book} />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      cover_i: PropTypes.string,
      title: PropTypes.string.isRequired,
      author_name: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default BooksList;
