import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import db from "../../utils/db";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [doctorID, setDoctorID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [reEnterPassword, setReEnterPassword] = React.useState("");
  const [error, setError] = React.useState("");
  let navigate = useNavigate();

  // TODO: Implement register functionality using axios

  const register = async (e) => {
    e.preventDefault();
    if (password !== reEnterPassword) {
      return setError("Passwords do not match");
    }
    try {
      const res = await db.post("/register", {
        doctorID,
        password,
        name,
      });

      if (res.data.status === "success") {
        localStorage.setItem("docData", JSON.stringify(res.data.data));
        navigate("/dashboard");
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-screen h-screen w-full flex justify-start px-5 items-center">
      <div className="w-full md:w-1/2 h-[95vh] py-12 px-8 bg-opacity-80 bg-[#006797] text-center rounded-lg">
        <h3 className="text-white text-4xl font-semibold ">Doctor Register</h3>
        <form onSubmit={register} className="px-4 md:px-[2vw] mt-[5vh]">
          <div className="mb-8">
            <input
              type="text"
              id="name"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="mb-8">
            <input
              type="password"
              id="re-enter-password"
              className="border text-xl border-gray-300 px-4 py-4 md:py-5 rounded-lg w-full"
              placeholder="Re-enter Password"
              required
              onChange={(e) => setReEnterPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-start">
            {error && (
              <span className="text-red-500 text-lg font-semibold">
                {error}
              </span>
            )}
          </div>

          <div className="text-center md:mb-10 mb-5">
            <button
              type="submit"
              className="bg-black text-lg text-white font-semibold px-12 md:px-[7.5vw] py-5 rounded-full shadow"
            >
              Register
            </button>
          </div>
        </form>
        <Link to="/">
          <div className="flex justify-center">
            <button className="text-black text-lg bg-white font-medium rounded-full px-10 md:px-[6.5vw] py-5">
              Login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
