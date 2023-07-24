import { Link } from "react-router-dom";
import Container from "../components/Container";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Colleges</Link>
      </li>
      <li>
        <Link to="/Classes">Admission</Link>
      </li>
      <li>
        <Link to="/Classes">My College</Link>
      </li>
      <li>
        {" "}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </li>

      <li>
        <Link to='/login' className=" bg-green-950 text-white hover:bg-red-500">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#02050F]">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 z-10 bg-opacity-30 shadow rounded-box w-52 lg:navbar-end"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="2xl">
              <span className="text-4xl font-bold ">Addmisson Care</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex lg:navbar-end  ">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
        <hr className="mt-4 bg-slate-950" />
      </Container>
    </div>
  );
};

export default Navbar;
