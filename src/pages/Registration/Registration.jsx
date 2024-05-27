import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
    const {createUser, updatingProfile, logOut} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate(); 


    const handleRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoURL');

        if(!/[A-Z]/.test(password)) {
            toast.error("Password Must have at least one Uppercase letter");
            return;
        }
        else if(!/[a-z]/.test(password)) {
            toast.error("Password Must have at least one lowercase letter");
            return;
        }
        else if(password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        //! User creation 
        createUser(email, password)
        .then(()=> {
          updatingProfile(name, photoURL)
          .then(()=> {
            logOut()
          })
          .catch((err) => {
            swal({
              title: "Error!",
              text: `${err.message}`,
              icon: "error",
              button: "Okay!",
            });
          })
            swal({
                title: "Good job!",
                text: "You are successfully Registered!",
                icon: "success",
                button: "Okay!",
              });
              navigate('/login')
              
        })
        .catch((err)=> {
          swal({
            title: "Error!",
            text: `${err.message}`,
            icon: "error",
            button: "Okay!",
          });
        })
    }

   

  return (
    <div className="px-2 md:px-4 lg:px-8 my-12"> 
        <h1 className="text-center text-orange-500 italic text-5xl font-bold">Welcome</h1>
      <div className="max-w-md mx-auto mt-4 border-2 border-orange-200 p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white mb-4">Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <input
              type="text" name="name"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email" name="email"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text" name="photoURL"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Photo URL"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text": "password"} name="password"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Password"
            />
            <span className="absolute top-4 right-4" onClick={()=>setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEye className="cursor-pointer"></FaEye>:<FaEyeSlash className="cursor-pointer"></FaEyeSlash>
              }
            </span>
          </div>
          <button className="w-full bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg hover:bg-opacity-75 transition duration-300">
            Register
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300">
            Login here
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

Registration.propTypes = {};

export default Registration;
