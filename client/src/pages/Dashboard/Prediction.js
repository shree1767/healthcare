import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import back from './assets/back.svg';
import prediction from './assets/prediction.png';

const Prediction = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const patientId = pathname.split('/').pop();

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/patients/`);
  };

  return (
    <div className='md:pt-10 pt-20 px-5 h-screen overflow-y-auto'>
      <div className='md:grid md:grid-cols-2 md:gap-5'>
        <div>
          <div className='flex space-x-3 items-center mb-4'>
            <button onClick={navigateTo}>
              <img src={back} alt='back' className='w-6 h-6' />
            </button>
            <h1 className='text-xl font-semibold'>Prediction Model</h1>
          </div>
          <div className='text-base'>
            <p className='font-semibold'>Visual Acuity</p>
            <p className='text-sm'>(Unit: Decimal)</p>
          </div>
        </div>
        <div className='text-base'>
          <div className='mb-4'>
            <label className='font-semibold'>Choose Date:</label>
            <input
              type='date'
              name='date'
              className='p-2 mx-2 mb-1 bg-white border border-[#006797] rounded'
              placeholder='Date'
            />
          </div>
          <div>
            <label className='font-semibold'>Choose IVOM Medication:</label>
            <input
              type='text'
              name='text'
              placeholder='Medication'
              className='w-full text-[#006797] p-2 mb-1 border border-[#006797] rounded'
            />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <img src={prediction} alt='prediction' className='w-full md:w-[55vw] mx-auto' />
      </div>
    </div>
  );
};

export default Prediction;



