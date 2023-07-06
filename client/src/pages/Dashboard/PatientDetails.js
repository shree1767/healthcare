import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal"; // Import react-modal
import "./carousel.css";
import first from "./assets/1.png";
import sec from "./assets/2.png";
import heartimg from "./assets/heart.png";

const PatientDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setIsModalOpen(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  const patient = location.state;

  return (
    <div className="pt-5 px-5 w-[70vw]">
      <div className="flex space-x-10">
        <Link
          to="/patients"
          className="bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg"
        >
          Patient List
        </Link>
        <h1 className="text-[20px] text-[#194774] font-[700] py-[1vh]">
          Patient Progression Visualisation and Modelling Dashboard
        </h1>
      </div>
      <div className="rounded-lg bg-[#D6EDEF] py-8 px-8 my-2 grid grid-cols-4 items-center space-x-2 text-[20px]">
        <div className="">
          <p className="font-[700]">ID: {patient.id}</p>
          <p>ResearchID: {patient.researchId}</p>
          <p>Birth-Date: {patient.birthDate}</p>
          <p>Eye: {patient.Eye}</p>
        </div>
        <div className="">
          <p>Apoplex: {patient.Apoplex}</p>
          <p>Arterielle Hypertonie: {patient.ArterielleHypertonie}</p>
          <p>Blood Thinner:{patient.BloodThinner}</p>
          <p>Diabetes Mellitus:{patient.DiabetesMellitus}</p>
        </div>
        <div className="">
          <div className="flex space-x-5 bg-white rounded-lg items-center text-center w-[13vw] px-5 py-3 mb-2">
            <img src={heartimg} alt="heartimg" className="w-[3vw] h-[3vw]" />
            <div>
              <p>{patient.heartRate}</p>
              <p className="text-[#008C16]">{patient.heartCondition}</p>
            </div>
          </div>
          <p>IVOM Therapy:{patient.IVOMTherapy}</p>
        </div>
        {
          <Link
            to={`/prediction/${patient.id}`}
            className="bg-[#455B5D] w-[15vw] h-[6vh] py-[1vh] text-white text-[20px] font-[700] text-center rounded-lg"
          >
            <p>Prediction Model</p>
          </Link>
        }
      </div>
      <div className="px-5 w-[68vw]">
        
        <div className="">
        <Carousel showArrows={true} className="custom-carousel">
          <button onClick={() => openModal('first')}>
            <img src={first} alt="first" className="max-w-[23vw] cursor-pointer" />
          </button>
          <button onClick={() => openModal('second')}>
            <img src={sec} alt="second" className="max-w-[23vw] cursor-pointer" />
          </button>
        </Carousel>

        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel='Image Modal'
        >
          <button onClick={closeModal} className="">X</button>
          {isModalOpen === 'first' ? (
            <img src={first} alt="Enlarged" className="max-w-full justify-center mx-auto" />
          ) : (
            <img src={sec} alt="Enlarged" className="max-w-full justify-center mx-auto" />
          )}
        </Modal>
        

      </div>
    </div>
  );
};

export default PatientDetails;
