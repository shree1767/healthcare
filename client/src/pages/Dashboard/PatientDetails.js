import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import "./carousel.css";
import first from "./assets/1.png";
import sec from "./assets/2.png";
import {Line} from 'react-chartjs-2';

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import healthData from "../../data/healthData.json";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Visual Acuity',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: healthData.map((item) => ({
                x: item["Index"],
                y: item["Previous Visus"],
            })),
        },
    ]
};

const PatientDetails = () => {
    let navigate = useNavigate();

    useEffect(() => {
        const docData = JSON.parse(localStorage.getItem("docData"));
        if (!docData) {
            navigate("/");
        }
    }, []);
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
        <div className="pt-5 px-5 h-screen overflow-y-auto">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10">
                <h1 className="md:text-[20px] text-[18px] text-[#194774] font-[700] py-[1vh]">
                    Patient Progression Visualisation and Modelling Dashboard
                </h1>
            </div>
            <div className="rounded-lg bg-[#D6EDEF] py-8 md:px-8 px-2 my-2 grid md:grid-cols-4 gap-2 md:text-[20px]">
                <div className="">
                    <p className="font-[700]">ID: {patient.id}</p>
                    <p>ResearchID: {patient.researchId}</p>
                    <p>Birth-Date: {healthData[0].Date}</p>
                    <p>Eye: {healthData[0]["Side"]}</p>
                </div>
                <div className="">
                    <p>Apoplex: {healthData[0].Apoplex === "false" ? "No" : "Yes"}</p>
                    <p>Arterielle Hypertonie: {healthData[0]["arterielle Hypertonie"] === -1 ? "No" : "Yes"}</p>
                    <p>Blood Thinner:{healthData[0]["Blood Thinner"] === "-1" ? "No" : "Yes"}</p>
                    <p>Diabetes Mellitus:{healthData[0]["Diabetes mellitus"] === -1 ? "No" : "Yes"}</p>
                </div>
                <div className="">
                    <img className={"w-32"}
                         src="https://cdn.pixabay.com/animation/2023/06/26/14/52/14-52-08-199_512.gif" alt="/"/>
                </div>
                {
                    <Link
                        to={`/prediction/${patient.id}`}
                        className="bg-[#455B5D] w-1/2 md:w-[15vw] h-[6vh] py-[1.5vh] text-white md:text-[20px] text-[15px] md:font-[700] font-[500] mx-auto text-center rounded-lg"
                    >
                        <button>Prediction Model</button>
                    </Link>
                }
            </div>
            <div className="px-5">
                {/*<div className="">*/}
                {/*    <Carousel showArrows={true} className="custom-carousel">*/}
                {/*        <button onClick={() => openModal('first')}>*/}
                {/*            <img src={first} alt="first" className="max-w-[60vw] md:max-w-[25vw] cursor-pointer"/>*/}
                {/*        </button>*/}
                {/*        <button onClick={() => openModal('second')}>*/}
                {/*            <img src={sec} alt="second" className="max-w-[60vw] md:max-w-[25vw] cursor-pointer"/>*/}
                {/*        </button>*/}
                {/*    </Carousel>*/}
                {/*</div>*/}
                <div className={"w-full lg:w-1/2"}>
                    <Line options={options} data={data}/>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Image Modal"
                >
                    <button onClick={closeModal} className="">X</button>
                    {isModalOpen === 'first' ? (
                        <img src={first} alt="Enlarged" className="max-w-full justify-center mx-auto"/>
                    ) : (
                        <img src={sec} alt="Enlarged" className="max-w-full justify-center mx-auto"/>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default PatientDetails;

