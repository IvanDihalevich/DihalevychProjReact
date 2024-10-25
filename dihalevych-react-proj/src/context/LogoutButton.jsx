// src/components/Auth/LogoutButton.jsx
import { useAuth } from '../context/authUtils';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout} className="btn-primary">
      Logout
    </button>
  );
};

export default LogoutButton;
