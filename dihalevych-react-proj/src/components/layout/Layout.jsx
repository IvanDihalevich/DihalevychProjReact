import { Link, Outlet } from "react-router-dom";
import '../../components/layout/style/Leyout.css'
import LogoutButton from '../../context/LogoutButton';

const Leyout = () => {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">ToDo</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <LogoutButton />
      </div>
      <div className="content">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Leyout;
