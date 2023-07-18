import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import bg from "./assets/bg.svg";
import db from "../../utils/db";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [doctorID, setDoctorID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await db.post("/login", {
      doctorID,
      password,
    });
    if (res.data.status === "success") {
      localStorage.setItem("docData", JSON.stringify(res.data.data));
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
    console.log(res);
  };
  return (
    <div className="login-screen h-screen w-full flex md:justify-end px-5 items-center">
      <div className="w-full md:w-1/2 h-[95vh] py-12 px-8 bg-opacity-80 bg-[#006797] text-center rounded-lg">
        <h2 className="text-white text-5xl font-bold my-4">Welcome!</h2>
        <h3 className="text-white text-4xl font-semibold mt-[8vh]">
          Doctor Login
        </h3>
        <form onSubmit={login} className="px-4 md:px-[2vw] mt-[5vh]">
          <div className="mb-8">
            <input
              type="text"
              id="doctorID"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Doctor ID"
              required
              onChange={(e) => setDoctorID(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-white text-lg font-medium">
              Forgot password?
            </a>
            {error ? (
              <p className="text-red-500 text-lg font-medium">{error}</p>
            ) : null}
          </div>

          <div className="text-center mb-10">
            <button
              type="submit"
              className="bg-black text-lg text-white font-semibold px-12 md:px-[7.5vw] py-5 rounded-full shadow"
            >
              Login
            </button>
          </div>
        </form>
        <Link to="/signup">
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
