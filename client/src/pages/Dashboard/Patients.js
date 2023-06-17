import React from 'react';
import { Link } from 'react-router-dom';

const Patients = () => {
  const data = [
    { id: '1001234', researchId: '123456', lastVisit: '10-Feb-2023', firstOccurrence: '06-Jun-2008',birthDate:'13/03/1976',Eye: 'Left',Apoplex: 'No',ArterielleHypertonie: 'No',BloodThinner: 'No',DiabetesMellitus: 'No',IVOMTherapy: 'Eylea',heartRate:'82',heartCondition:'Normal'},
    { id: '1001235', researchId: '147896', lastVisit: '19-Jan-2023', firstOccurrence: '07-Jul-2021',birthDate:'15/07/1986'},
    { id: '1001236', researchId: '180056', lastVisit: '21-Apr-2023', firstOccurrence: '02-Feb-2011',birthDate:'07/12/2003'},
  ];

  return (
    
    <div className='pt-10 px-5 w-[70vw]'>
      <table className="w-full">
      
        <thead>
          <tr className="bg-[#D6EDEF] text-[#0F2B46] text-[20px]">
            <th className="py-4 px-4">ID</th>
            <th className="py-4 px-4">Research ID</th>
            <th className="py-4 px-4">Last Visit</th>
            <th className="py-4 px-4">First Occurrence</th>
          </tr>
        </thead>
      
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className='bg-[#FEFEFE] text-[20px] text-center border border-[1px]'>
              <td className="py-5 px-4">
                <Link to={`/patients/${row.id}`} state={row}>{row.id}</Link>
              </td>
              <td className="py-5 px-4">
                <Link to={`/patients/${row.id}`} state={row}>{row.researchId}</Link>
              </td>
              <td className="py-5 px-4">
                <Link to={`/patients/${row.id}`} state={row}>{row.lastVisit}</Link>
              </td>
              <td className="py-5 px-4">
                <Link to={`/patients/${row.id}`} state={row}>{row.firstOccurrence}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div> 
    
  );
};

export default Patients;
