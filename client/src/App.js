import "./App.css";
// import LoginPage from './components/Login/login';
import Navbar from "./Components/Navbar/Navbar";
import SideDash from "./Components/SideDash/SideDash";
import Dashboard from "./pages/Dashboard/Dashboard";
import Patients from "./pages/Dashboard/Patients";
import PatientDetails from "./pages/Dashboard/PatientDetails";
import Messages from "./pages/Dashboard/Messages";
import Settings from "./pages/Dashboard/Settings";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Prediction from "./pages/Dashboard/Prediction";
import AddPatients from "./pages/Dashboard/AddPatients";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/signup" && (<Navbar />)}

      <div className="flex">
        {location.pathname !== "/" && location.pathname !== "/signup" && (<SideDash />)}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/prediction/:id" element={<Prediction />} />
          <Route path="/addpatients" element={<AddPatients />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
