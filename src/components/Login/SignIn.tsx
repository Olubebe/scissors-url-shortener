import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth()!;
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
     try {
      await signIn(email, password);
      navigate("/free-demo");
    } catch (error: any) {
      setError(error.message);
      console.log("Error signing up:", error);
    }
  };
 
  
  return (
    <div className="flex items-center bg-slate-50 justify-center h-screen">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2>Log In With</h2>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">Google</button>
          <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">Apple</button>
        </div>
        <div className="flex items-center w-full">
          <hr className="border-gray-300 h-0.5 w-full" />
          <p className="mx-4">Or</p>
          <hr className="border-gray-300 h-0.5 w-full" />
        </div>
        <form  className="flex flex-col space-y-4" onSubmit={handleSignIn}>
          <input
            className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
            type="email"
            placeholder="Email address or username"
            value={email}
            onChange={(e)=> setEmail(e.target.value) }
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="ring-2 ring-blue-700 border outline-none rounded-xl px-4 py-3 cursor-pointer"
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash className="text-blue-700" /> : <FaEye className="text-blue-700" />}
            </button>
          </div>
          <div className="space-y-3">
            <p className="text-end text-sm">Forget your Password?</p>
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-3 w-full rounded-2xl font-medium shadow-md hover:scale-105 transition ease-in-out cursor-pointer"
            
            >
              Log In
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 cursor-pointer">Sign Up</Link>
            </p>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-500 max-w-md">
            By signing in to the account, you agree to Scissor's{" "}
            <span className="text-gray-800">Terms and Service</span>,{" "}
            <span className="text-gray-800">Privacy Policies</span>, and{" "}
            <span className="text-gray-800">Acceptable Use Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
