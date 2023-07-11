import React from 'react';

const Dashboard = () => {
  return (
    <div className='pt-10 pl-4 mx-auto  md:w-[70vw] overflow-y-auto md:h-[80vh] h-[90vh]'>
      <h1 className='text-[25px] font-[400] text-[#0F2B46]'>Hi Dr. Katja!</h1>
      <p className='text-[20px] font-[400] text-[#5B777A]'>Your data at a glance</p>
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Total patients */}
          <div className='bg-[#D6EDEF] rounded-lg text-center py-10'>
            <h1 className='text-[#003D59] text-[28px] font-[600]'>Total Patients</h1>
            <p className='py-8 text-[#003D59] text-[45px] font-[600]'>259</p>
          </div>
          {/* Patient’s max age */}
          <div className='bg-[#D6EDEF] rounded-lg text-center py-10'>
            <h1 className='text-[#003D59] text-[28px] font-[600]'>Patient’s max age</h1>
            <p className='py-8 text-[#003D59] text-[45px] font-[600]'>70</p>
          </div>
          {/* Patient’s min age */}
          <div className='bg-[#D6EDEF] rounded-lg text-center py-10'>
            <h1 className='text-[#003D59] text-[28px] font-[600]'>Patient’s min age</h1>
            <p className='py-8 text-[#003D59] text-[45px] font-[600]'>25</p>
          </div>
          {/* Diabetes Mellitus */}
          <div className='bg-[#D6EDEF] rounded-lg text-center py-10'>
            <h1 className='text-[#003D59] text-[28px] font-[600]'>Diabetes Mellitus</h1>
            <p className='py-8 text-[#003D59] text-[45px] font-[600]'>108</p>
          </div>
          {/* Apoplex*/}
          <div className='bg-[#D6EDEF] rounded-lg text-center py-10'>
            <h1 className='text-[#003D59] text-[28px] font-[600]'>Apoplex</h1>
            <p className='py-8 text-[#003D59] text-[45px] font-[600]'>70</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

