import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

  return (
    <div className="container mx-auto px-2 md:px-8 shadow-lg rounded-md p-2">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
               <li className="font-pacifico italic">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-500" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="font-pacifico italic">
              <NavLink
                to="/needVolunteer"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-500" : ""
                }
              >
                Need Volunteer
              </NavLink>
            </li>
              <li>
                <a className="font-pacifico italic">My Profile</a>
                <ul className="p-2">
                  <li>
                  <li className="font-pacifico italic">
                  <NavLink
                    to="/addVolunteer"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-500" : ""
                    }
                  >
                    Add Volunteer
                  </NavLink>
                </li>
                  </li>
                  <li className="font-pacifico italic">
                  <NavLink
                    to="/manageMyPost"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-500" : ""
                    }
                  >
                    Manage My Post
                  </NavLink>
                </li>
                </ul>
              </li>
              
            </ul>
          </div>
          <a className=" text-4xl font-pacifico italic">Halpes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8">
            <li className="font-pacifico italic">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-500" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="font-pacifico italic">
              <NavLink
                to="/needVolunteer"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-500" : ""
                }
              >
                Need Volunteer
              </NavLink>
            </li>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="">
                  <h1 className="text-nowrap font-pacifico italic ">My Profile</h1>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-pacifico italic">
                  <NavLink
                    to="/addVolunteer"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-500" : ""
                    }
                  >
                    Add Volunteer
                  </NavLink>
                </li>
                <li className="font-pacifico italic">
                  <NavLink
                    to="/manageMyPost"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-500" : ""
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
         {
            user ? (
               <div className="flex items-center md:gap-8 ">
                {/* Profile  */}
                 <div className="ml-3 mr-3 lg:mr-0 pt-3">
                    <div className="dropdown dropdown-end  ">
                      <div className="tooltip " data-tip={user?.displayName}>
                        <img
                          className="w-10 rounded-full"
                          alt="profile"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                <button onClick={logOut}  className="font-pacifico italic text-orange-400">Logout <span>{">"}</span></button>
               </div>
            ): 
            (
                <Link to="/login">
                    <button  className="font-pacifico italic text-orange-400">Login <span>{">"}</span></button>
                </Link>
            )
         }
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
