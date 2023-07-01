import React from 'react'

const Dashboard = () => {
  return (
    <div className='pt-10 px-5 w-[70vw]'>
      <h1 className='text-[25px] font-[400] text-[#0F2B46]'>Hi Dr. Katja!</h1>
      <p className='text-[20px] font-[400] text-[#5B777A]'>Your data a glance</p>
      <div className='grid grid-cols-3'>
      {/* Total patients */}
      <div className='bg-[#D6EDEF] rounded-lg text-center w-[280px] h-[300px] py-10 my-3'>
        <h1 className='text-[#003D59] text-[28px] font-[600] mx-auto'>Total Patients</h1>
        <p className='py-8 text-[#003D59] text-[45px] font-[600] mx-auto'>259</p>
      </div>  
      {/* Patient’s max age */}
      <div className='bg-[#D6EDEF] rounded-lg text-center w-[280px] h-[300px] py-10 my-3'>
        <h1 className='text-[#003D59] text-[28px] font-[600] mx-auto'>Patient’s max age</h1>
        <p className='py-8 text-[#003D59] text-[45px] font-[600] mx-auto'>70</p>
      </div> 
      {/* Patient’s min age */}
      <div className='bg-[#D6EDEF] rounded-lg text-center w-[280px] h-[300px] py-10 my-3'>
        <h1 className='text-[#003D59] text-[28px] font-[600] mx-auto'>Patient’s min age</h1>
        <p className='py-8 text-[#003D59] text-[45px] font-[600] mx-auto'>25</p>
      </div> 
      {/* Diabetes Mellitus */}
      <div className='bg-[#D6EDEF] rounded-lg text-center w-[280px] h-[300px] py-10 my-3'>
        <h1 className='text-[#003D59] text-[28px] font-[600] mx-auto'>Diabetes Mellitus</h1>
        <p className='py-8 text-[#003D59] text-[45px] font-[600] mx-auto'>108</p>
      </div> 
      {/* Apoplex*/}
      <div className='bg-[#D6EDEF] rounded-lg text-center w-[280px] h-[300px] py-10 my-3'>
        <h1 className='text-[#003D59] text-[28px] font-[600] mx-auto'>Apoplex</h1>
        <p className='py-8 text-[#003D59] text-[45px] font-[600] mx-auto'>70</p>
      </div> 
       
      </div>
      
    </div>
  )
}

export default Dashboard