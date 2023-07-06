import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'; // Import custom carousel styles
import first from './assets/1.png';
import sec from './assets/2.png';
import heartimg from './assets/heart.png';

const PatientDetails = () => {
  const location = useLocation();
  const patient = location.state;

  return (
    <div className='pt-10 px-5 w-[70vw]'>
      <div className='flex space-x-10'>
        <Link to='/patients' className='bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg'>Patient List</Link>
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
            <img src={heartimg} alt='heartimg' className='w-[3vw] h-[3vw]' />
            <div>
              <p>{patient.heartRate}</p>
              <p className='text-[#008C16]'>{patient.heartCondition}</p>
            </div>
          </div>
          <p>IVOM Therapy:{patient.IVOMTherapy}</p>
        </div>
        {
          <Link to={`/prediction/${patient.id}`} className='bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg'>
            <p>Prediction Model</p>
          </Link>
        }
      </div>
      <div className='carousel-wrapper'>
        <Carousel showArrows={true} className='control-arrow'>
          <div>
            <img src={first} alt='First' className='max-w-[30vw]' />
          </div>
          <div>
            <img src={sec} alt='Second' className='max-w-[30vw]' />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PatientDetails;



