import PropTypes from "prop-types";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/HomePage';
import ToDoPage from '../pages/todo/ToDoPage';
import UserPage from '../pages/users/UsersPage';
import BooksPage from '../pages/books/BooksPage';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../components/layout/NotFoundPage';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { useAuth } from '../context/authUtils';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
   children: PropTypes.node.isRequired
};
const BasicRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }>
        <Route index element={<Home />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="/books" element={<BooksPage/>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default BasicRouter;