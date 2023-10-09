import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Firebase/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.use);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div>
      <div className="navbar bg-orange-400 text-white shadow-lg bg-base-100 ">
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
              className="menu menu-sm bg-orange-400 text-white shadow-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-white"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="#services"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-white"
                      : ""
                  }
                >
                  Services
                </a>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-white"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src="https://i.ibb.co/ynfRKdd/mh-event.png" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className=" menu-horizontal gap-4 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-white"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-white"
                    : ""
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-white"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="lg:flex lg:justify-center lg:items-center flex-row  ">
            {user?.displayName}

            {user ? (
              <button onClick={handleLogOut} className="btn ml-4">
                Log Out
              </button>
            ) : (
              <div>
                <Link className="mr-5" to="/login">
                  Log in
                </Link>{" "}
                |
                <Link className="ml-5" to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>
          {user && (
            <img
              className="w-10 h-10 rounded-full mr-4 ml-4"
              src={user?.photoURL}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
