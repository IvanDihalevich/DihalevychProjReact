import PropTypes from "prop-types";
import "../Auth/style/ErrorMessage.css";


const ErrorMessage = ({ error }) => {
  return error ? <p className="error-message">{error}</p> : null;
};
ErrorMessage.propTypes={
  error: PropTypes.string
}
export default ErrorMessage;