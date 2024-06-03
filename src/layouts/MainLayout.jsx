import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (location?.pathname === "/") {
      document.title = `Home`;
    }
    else if (location.pathname === "/needVolunteer") {
      document.title = 'Need - Volunteer';
    }
    else if (location.pathname === "/addVolunteer") {
      document.title = `Add - Volunteer`;
    }
    else if (location.pathname === "/manageMyPosts") {
      document.title = `Manage - My Posts`;
    } 
    else if (location.pathname === "/login") {
      document.title = `Login`;
    } 
    else if (location.pathname === "/register") {
      document.title = `Register`;
    } 
    else {
      document.title = `${location.pathname.replace("/", "")}`;
    }
    if (location.state) {
      document.title = `${location.state}`;
    }
  }, [location?.pathname, location?.state]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? `bg-black text-orange-400` : ""}>
      {/* Dark Mode Toggle for larger screens */}
      <div
        className={`hidden lg:flex cursor-pointer place-items-center absolute top-9 z-50 ${
          darkMode
            ? "left-[100px] md:left-[300px] lg:left-[900px] top-[60px] md:top-9"
            : "left-[100px] md:left-[300px] lg:left-[900px] top-[60px] md:top-9"
        }`}
      >
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 h-[20px] w-[60px] md:h-[20px] md:w-[50px]"
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
    
      <div>
          {/* navbar  */}
      <div className="relative z-10">
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

      </div>
        <div className={darkMode ? "  min-h-screen " : "min-h-screen "}>
          <Outlet darkMode={darkMode} context={{ darkMode }} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
