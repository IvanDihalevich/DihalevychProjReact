import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authUtils";
import RegisterForm from "./RegisterForm";
import ErrorMessage from "../Auth/ErorrMassage";
import '../Auth/style/Login.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(email, password);
      navigate("/login");
    } catch (error) {
      setError("Registration failed: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Register</h1>
        <ErrorMessage error={error} />
        <RegisterForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleRegister={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
