import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../../utils/db";

const Patients = () => {
  let navigate = useNavigate();
  const [patientData, setpatientData] = useState([]);

  useEffect(() => {
    const docData = JSON.parse(localStorage.getItem("docData"));
    if (!docData) {
      return navigate("/");
    }
    const res = db.get("/getObservations");
    res.then((res) => {
      setpatientData(res.data.data);
    });
  }, []);
  const data = [
    {
      id: "1001234",
      researchId: "123456",
      lastVisit: "10-Feb-2023",
      firstOccurrence: "06-Jun-2008",
      birthDate: "13/03/1976",
      Eye: "Left",
      Apoplex: "No",
      ArterielleHypertonie: "No",
      BloodThinner: "No",
      DiabetesMellitus: "No",
      IVOMTherapy: "Eylea",
      heartRate: "82",
      heartCondition: "Normal",
    },
    {
      id: "1001235",
      researchId: "147896",
      lastVisit: "19-Jan-2023",
      firstOccurrence: "07-Jul-2021",
      birthDate: "15/07/1986",
    },
    {
      id: "1001236",
      researchId: "180056",
      lastVisit: "21-Apr-2023",
      firstOccurrence: "02-Feb-2011",
      birthDate: "07/12/2003",
    },
  ];

  return (
    <div className="pt-20 mx-5 w-[99vw] md:w-[70vw] md:h-[80vh] h-[90vh] overflow-y-auto">
      <div className="overflow-x-auto">
        <table className="md:w-full w-[50vw]">
          <thead>
            <tr className="bg-[#D6EDEF] text-[#0F2B46] md:text-[20px]">
              <th className="py-4 px-4">ID</th>
              <th className="py-4 px-4">Research ID</th>
              <th className="py-4 px-4">Last Visit</th>
              <th className="py-4 px-4">First Occurrence</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((row) => (
              <tr
                key={row.id}
                className="bg-[#FEFEFE] md:text-[20px] text-center border border-[1px]"
              >
                <td className="py-5 px-4">
                  <Link to={`/patients/${row.id}`} state={row}>
                    {row.id}
                  </Link>
                </td>
                <td className="py-5 px-4">
                  <Link to={`/patients/${row.id}`} state={row}>
                    {row.researchId}
                  </Link>
                </td>
                <td className="py-5 px-4">
                  <Link to={`/patients/${row.id}`} state={row}>
                    {row.lastVisit}
                  </Link>
                </td>
                <td className="py-5 px-4">
                  <Link to={`/patients/${row.id}`} state={row}>
                    {row.firstOccurrence}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-[10vh] text-center">
        <Link to="/addpatients">
          <button className="md:py-3 md:px-10 py-2 px-8 bg-[#455B5D] text-white md:text-[25px] text-[15px] rounded-[6px] shadow">
            Add Patients
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Patients;
