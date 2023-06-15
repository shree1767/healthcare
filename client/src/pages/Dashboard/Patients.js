import React from 'react'

const Patients = () => {
  const data = [
    { id: '1001234', researchId: '123456', lastVisit: '10-Feb-2023', firstOccurrence: '06-Jun-2008' },
    { id: '1001235', researchId: '147896', lastVisit: '19-Jan-2023', firstOccurrence: '07-Jul-2021' },
    { id: '1001236', researchId: '180056', lastVisit: '21-Apr-2023', firstOccurrence: '02-Feb-2011' },
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
          <tr key={row.id} className='bg-[#FEFEFE] text-[20px] text-center'>
            <td className="py-5 px-4">{row.id}</td>
            <td className="py-5 px-4">{row.researchId}</td>
            <td className="py-5 px-4">{row.lastVisit}</td>
            <td className="py-5 px-4">{row.firstOccurrence}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Patients