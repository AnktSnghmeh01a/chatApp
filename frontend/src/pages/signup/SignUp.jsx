import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
 
  const[inputs,setInput]= useState({
       fullName:"",
       userName:"",
       password:"",    
       confirmPassword:"",
       gender:"",    
  })

  const {signUp} = useSignup(); 

  const handleCheckboxChange = (gender) => {
  
     setInput({...inputs,gender})

  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
     console.log(inputs);
    await signUp(inputs);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl text-center font-semibold text-gray-300 mb-1">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* fullName */}
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>

            <input
              type="text"
              placeholder="Enter fullname"
              value={inputs.fullName}
              onChange={(e)=>setInput({...inputs,fullName:e.target.value})}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          {/* username */}
          <div className="mb-1">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.userName}
              onChange={(e)=>setInput({...inputs,userName:e.target.value})}
            />
          </div>

          {/* password */}
          <div className="mb-1">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.password}
              onChange={(e)=>setInput({...inputs,password:e.target.value})}
            />
          </div>

          {/* confirm password */}

          <div className="mb-1">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e)=>setInput({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          {/* Gender checkbox */}
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link
            to={"/login"}
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? login
          </Link>

          <div>
            <button className="btn  btn-primary btn-block w-full max-w-xs mt-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
