
import PropTypes from "prop-types";
import "../Auth/style/AuthForm.css";

const RegisterForm = ({ email, setEmail, password, setPassword, handleRegister }) => {
  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary">Register</button>
    </form>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default RegisterForm;