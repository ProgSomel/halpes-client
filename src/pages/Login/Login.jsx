import { useContext, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/login.json";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useOutletContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //! sign in
    try {
      const result = await signIn(email, password);
      await axios.post(
        "https://halpes-server.vercel.app/jwt",
        { email: result?.user?.email },
        { withCredentials: true }
      );

      toast.success("Successfully logged in");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      await axios.post(
        "https://halpes-server.vercel.app/jwt",
        { email: result?.user?.email },
        { withCredentials: true }
      );

      toast.success("Successfully logged in");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`mt-12 container mx-auto ${darkMode ? "text-black" : ""}`}>
      <h1 className="text-center text-orange-500 italic text-5xl font-bold">
        Welcome Back
      </h1>
      <div className="px-2 md:px-4 lg:px-8 md:mb-12 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="   ">
          <Lottie
            className="md:h-[500px] w-full"
            animationData={loginLottie}
          ></Lottie>
        </div>
        <div>
          <div className=" border-2 border-orange-200  p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md ">
            <h2 className="text-3xl font-semibold text-white mb-4 ">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "type" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
                  placeholder="Password"
                />
                <span
                  className="absolute top-4 right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="cursor-pointer"></FaEye>
                  ) : (
                    <FaEyeSlash className="cursor-pointer"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg hover:bg-opacity-75 transition duration-300 mb-4"
                >
                  Login
                </button>
              </div>
              <div className="">
                <h1 className=" text-white">
                  <span className="block font-pacifico">Or</span>
                  <span className="font-poetsen">login with</span>
                </h1>

                <div className="mt-3">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-red-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 mr-2"
                  >
                    Google
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center text-white mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-yellow-300">
                Register Here
              </Link>
            </p>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
