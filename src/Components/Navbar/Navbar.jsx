import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user, signOutUser);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  const navlinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Login", path: "/login" },
    { id: 3, name: "Register", path: "/register" },
  ];

  const links = navlinks.map(({ name, path, id }) => (
    <li key={id}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  ));

  return (
    <div className="w-4/5 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="mr-4">{user.email}</span>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
