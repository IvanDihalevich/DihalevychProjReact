import { Link, Outlet } from "react-router-dom";

const Leyout = () => {
  return (
    <>
      <header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Leyout;
