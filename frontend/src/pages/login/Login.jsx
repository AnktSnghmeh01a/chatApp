import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../signup/SignUp";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form action="">

          {/* username */}
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          {/* password */}
          <div  className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
  
          <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block mb-2'>
 						{"Don't"} have an account? 	Signup			
            </a>
 
          <div>
            <button className="btn btn-primary btn-block w-full max-w-xs">Login</button>
            </div>


        </form>
      </div>
    </div>
  );
};

export default Login;
