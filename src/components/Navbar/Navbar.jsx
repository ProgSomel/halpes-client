import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import hearIcon from "../../assets/Icon/heart.png";
import PropTypes from "prop-types";
import 'animate.css';

const Navbar = ({ toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = <>
    <li className="font-pacifico italic">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse " : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-pacifico italic">
              <NavLink
                to="/needVolunteer"
                className={({ isActive, isPending }) =>
                  isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse" : "text-white"
                }
              >
                Need Volunteer
              </NavLink>
            </li>
  </>

  const navliksDrop = <>
     <li className="font-pacifico italic">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="font-pacifico italic">
                <NavLink
                  to="/needVolunteer"
                  className={({ isActive, isPending }) =>
                    isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse" : "text-black"
                  }
                >
                  Need Volunteer
                </NavLink>
              </li>

              <li className="text-black">
                <a className="font-pacifico italic">My Profile</a>
                <ul className="p-2">
                  <li className="font-pacifico italic">
                    <NavLink
                      to="/addVolunteer"
                      className={({ isActive, isPending }) =>
                        isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse" : "text-black"
                      }
                    >
                      Add Volunteer Post
                    </NavLink>
                  </li>
                  <li className="font-pacifico italic">
                    <NavLink
                      to="/manageMyPost"
                      className={({ isActive, isPending }) =>
                        isPending ? " text-orange-400 animate__animated animate__pulse" : isActive ? " text-orange-400 animate__animated animate__pulse" : "text-black"
                      }
                    >
                      Manage My Post
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Dark Mode Toggle for Mobile */}
              <li>
                <div className="flex justify-center">
                  <label className="cursor-pointer grid place-items-center">
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                      onChange={toggleTheme}
                    />
                    <svg
                      className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                      className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                </div>
              </li>
  </>

  return (
    <div className="container mx-auto px-2 md:px-8 shadow-lg p-2 bg-[#3D3C42] text-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             
            
             {navliksDrop}
              
            </ul>
          </div>
          <Link
            to="/"
            className="text-4xl font-pacifico italic flex text-green-700"
          >
            Halpes{" "}
            <sup>
              <img className="w-[50px]" src={hearIcon} alt="Heart Icon" />
            </sup>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8">
            {navLinks}
            <div className="dropdown dropdown-end z-10">
              <div tabIndex={0} role="button">
                <h1 className="font-pacifico italic">My Profile</h1>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-pacifico italic">
                  <NavLink
                    to="/addVolunteer"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-black"
                    }
                  >
                    Add Volunteer
                  </NavLink>
                </li>
                <li className="font-pacifico italic">
                  <NavLink
                    to="/manageMyPosts"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-black"
                    }
                  >
                    Manage My Post
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center md:gap-8">
              {/* Profile */}
              <div className="ml-3 mr-3 lg:mr-0 pt-3">
                <div className="dropdown dropdown-end">
                  <div className="tooltip" data-tip={user?.displayName}>
                    <img
                      className="w-10 rounded-full"
                      alt="profile"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={logOut}
                className="font-pacifico italic text-orange-400"
              >
                Logout <span>{">"}</span>
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="font-pacifico italic text-orange-400">
                Login <span>{">"}</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
