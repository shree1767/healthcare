import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import bg from './assets/bg.svg';

const Login = () => {
  return (
    <div className="login-screen h-screen w-full flex md:justify-end px-5 items-center">
      <div className="w-full md:w-1/2 h-[95vh] py-12 px-8 bg-opacity-80 bg-[#006797] text-center rounded-lg">
        <h2 className="text-white text-5xl font-bold my-4">Welcome!</h2>
        <h3 className="text-white text-4xl font-semibold mt-[8vh]">Doctor Login</h3>
        <form className="px-4 md:px-[2vw] mt-[5vh]">
          <div className="mb-8">
            <input
              type="text"
              id="doctorID"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Doctor ID"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-end items-center mb-4">
            <a href="#" className="text-white text-lg font-medium">
              Forgot password?
            </a>
          </div>
          <Link to="/dashboard">
            <div className="text-center mb-10">
              <button
                type="submit"
                className="bg-black text-lg text-white font-semibold px-12 md:px-[7.5vw] py-5 rounded-full shadow"
              >
                Login
              </button>
            </div>
          </Link>
        </form>
        <Link to='/signup'>
        <div className="flex justify-center">
          <button className="text-black text-lg bg-white font-medium rounded-full px-10 md:px-[6.5vw] py-5">
            Register
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
