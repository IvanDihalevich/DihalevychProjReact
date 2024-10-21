import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import ToDoPage from '../pages/todo/ToDoPage';
import UsersPage from '../pages/users/UsersPage';
import Leyout from '../components/leyout/Leyout';
import NotFoundPage from '../components/NotFoundPage';

const BasicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<ToDoPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRouter;
