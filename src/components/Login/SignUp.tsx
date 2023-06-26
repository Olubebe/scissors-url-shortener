import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { UserAuth } from "../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../Footer/Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const { createUser } = UserAuth()!;
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/free-demo");
    } catch (error: any) {
      setError(error.message);
      console.log("Error signing up:", error);
    }
  };

  

  return (
    <div>
    <div className="flex items-center bg-slate-50 justify-center h-screen">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2>Sign Up With</h2>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">Google</button>
          <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">Apple</button>
        </div>
        <div className="flex items-center w-full">
          <hr className="border-gray-300 h-0.5 w-full" />
          <p className="mx-4">Or</p>
          <hr className="border-gray-300 h-0.5 w-full" />
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
          <input
            className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
          <div className="space-y-3">
            <p className="text-end text-sm">Forgot your Password?</p>
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-3 w-full rounded-2xl font-medium shadow-md hover:scale-105 transition ease-in-out cursor-pointer"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-700 cursor-pointer">Log In</Link>
            </p>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-500 max-w-md">
            By signing up, you agree to Scissor's{" "}
            <span className="text-gray-800">Terms and Service</span>,{" "}
            <span className="text-gray-800">Privacy Policies</span>, and{" "}
            <span className="text-gray-800">Acceptable Use Policy</span>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SignUp;
