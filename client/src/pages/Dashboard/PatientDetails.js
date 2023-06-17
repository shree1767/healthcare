import React from 'react';
import { useLocation } from 'react-router-dom';
import sampleData from './assets/patientDetailsample.svg'
import heartimg from './assets/heart.png'
const PatientDetails = () => {
  const location = useLocation();
  const patient = location.state;

  return (
    <div className='pt-10 px-5 w-[70vw]'>
      <div className='flex space-x-10'>
        <h1 className='bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg'>Patient List</h1>
        <h1 className='text-[20px] text-[#194774] font-[700] py-[1vh]'>Patient Progression Visualisation and Modelling Dashboard</h1>
      </div>
      <div className='rounded-lg bg-[#D6EDEF] py-8 px-8 my-2 grid grid-cols-4 items-center space-x-2 text-[20px]'>
        <div className=''>
            <p className='font-[700]'>ID: {patient.id}</p>
            <p>ResearchID: {patient.researchId}</p>
            <p>Birth-Date: {patient.birthDate}</p>
            <p>Eye: {patient.Eye}</p>
        </div>
        <div className=''>
            <p>Apoplex: {patient.Apoplex}</p>
            <p>Arterielle Hypertonie: {patient.ArterielleHypertonie}</p>
            <p>Blood Thinner:{patient.BloodThinner}</p>
            <p>Diabetes Mellitus:{patient.DiabetesMellitus}</p>
        </div>
        <div className=''>
           <div className='flex space-x-5 bg-white rounded-lg items-center text-center w-[13vw] px-5 py-3 mb-2'>
                <img src={heartimg} alt='heartimg' className='w-[3vw] h-[3vw]'/>
                <div>
                    <p>{patient.heartRate}</p>
                    <p className='text-[#008C16]'>{patient.heartCondition}</p>
                </div>
           </div>
           <p>IVOM Therapy:{patient.IVOMTherapy}</p>
        </div>
        <div className='bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg'>
            <p>Prediction Model</p>
        </div>
      </div>
      <div className=''>
        <img src={sampleData} alt='sampleData'/>
      </div>
    </div>
  );
};

export default PatientDetails;

