import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import "./carousel.css";
import first from "./assets/1.png";
import sec from "./assets/2.png";
import {Line, Scatter} from 'react-chartjs-2';

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
const labels = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const labels2 = ['RPED', 'RPE', 'Subretinal Fluid', 'Interaretinal Fluid', 'Scars', 'Foveal Depression', 'Ellipsiod', 'ELM'];
const labels3 = ['SMD', 'Cataract', 'Pseudophakia', 'RVO', 'Scars', 'DME', 'Diabetic Rethinopathy', 'Epiretinal membrane', 'Previous Therapy'];

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
export const options2 = {
    indexAxis: 'y',
    scales: {
        x: {
            type: 'category', // This specifies that the X axis is a category axis with custom labels
            labels: labels,
        },
        y: {
            ticks: {
                callback: function (value, index, values) {
                    return labels2[index]; // Use custom labels for Y axis
                },
            },
        },
    },
};
export const options3 = {
    indexAxis: 'y',
    scales: {
        x: {
            type: 'category', // This specifies that the X axis is a category axis with custom labels
            labels: labels,
        },
        y: {
            ticks: {
                callback: function (value, index, values) {
                    return labels3[index]; // Use custom labels for Y axis
                },
            },
        },
    },
};

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
        {
            label: 'Central Retinal Thickness',
            borderColor: 'rgb(26,42,213)',
            backgroundColor: 'rgba(99,112,255,0.5)',
            data: healthData.map((item) => ({
                y: item["Index"],
                x: item["Previous Visus"],
            })),
        },
    ]
};

function extractMonthFromDate(dateString) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;

    // Return the month name
    return monthNames[monthIndex];
}

const dataArr = [];
const setDataArr = () => {
    console.log(healthData);
    labels.map((item) => {
        healthData.map((items, index) => {
            const month = extractMonthFromDate(items["Date"]);
            if (month === item) {
                // Once the data is uniform and fixed replace the index value in healthData from healthData[0] to healthData[index] everywhere
                if (healthData[0]["O RPE Detechment"] === "true") {
                    dataArr.push({
                        x: index + 1,
                        y: 1
                    });
                }
                if (healthData[0]["O RPE"] === "true") {
                    dataArr.push({
                        x: index + 1,
                        y: 2
                    });
                }
                if (healthData[0]["O Subretinal Fluid"] === "true") {
                    dataArr.push({
                        x: index + 1,
                        y: 3
                    });
                }
                if (healthData[0]["O Interaretinal Fluid"] === "true") {
                    dataArr.push({
                        x: index + 1,
                        y: 4
                    });
                }
                if (healthData[0]["O Scars"] !== -1) {
                    dataArr.push({
                        x: index + 1,
                        y: 5
                    });
                }
                if (healthData[0]["O Foveal Depression"] === "true") {
                    dataArr.push({
                        x: index + 1,
                        y: 6
                    });
                }
                if (healthData[0]["O Ellipsiod"] !== -1) {
                    dataArr.push({
                        x: index + 1,
                        y: 7
                    });
                }
                if (healthData[0]["O ELM"] !== -1) {
                    dataArr.push({
                        x: index + 1,
                        y: 8
                    });
                }

            }
        });

    });
    return dataArr;
}

const dataArr2 = [];
const setDataArr2 = () => {
    console.log(healthData);
    labels.map((item) => {
        healthData.map((items, index) => {
            const month = extractMonthFromDate(items["Date"]);
            if (month === item) {
                // Once the data is uniform and fixed replace the index value in healthData from healthData[0] to healthData[index] everywhere
                if (healthData[0]["Previous therapy"] === "true") {
                    dataArr2.push({
                        x: index + 1,
                        y: 1
                    });
                }
                // For Epiretinal membrane
                dataArr2.push({
                    x: index + 1,
                    y: 2
                });

                if (healthData[0]["D Diabetic retinopathy"] === "true") {
                    dataArr2.push({
                        x: index + 1,
                        y: 3
                    });
                }
                if (healthData[0]["D DME"] === "true") {
                    dataArr2.push({
                        x: index + 1,
                        y: 4
                    });
                }
                dataArr2.push({
                    x: index + 1,
                    y: 5
                });

                if (healthData[0]["D Pseudophakie"] === "true") {
                    dataArr2.push({
                        x: index + 1,
                        y: 6
                    });
                }
                dataArr2.push({
                    x: index + 1,
                    y: 7
                });

                dataArr2.push({
                    x: index + 1,
                    y: 8
                });


            }
        });

    });
    return dataArr2;
}


export const data2 = {
    labels: labels2,
    datasets: [
        {
            label: 'OCT Biomarkers',
            data: setDataArr(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]
};

export const data3 = {
    labels: labels2,
    datasets: [
        {
            label: 'Diagnoses',
            data: setDataArr2(),
            borderColor: 'rgb(20,88,166)',
            backgroundColor: 'rgba(24,87,225,0.5)',
        }
    ]
};

const PatientDetails = () => {
    let navigate = useNavigate();
    const [page, setPage] = useState(1);

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
            <div className={"w-full flex gap-5"}>

                <div className={"cursor-pointer bg-blue-500 px-4 py-2 rounded-lg w-fit text-white"} onClick={
                    () => {
                        if (page !== 1) {
                            setPage(page - 1);
                        }
                    }
                }>
                    <h1>Previous Page</h1>
                </div>
                <div className={"cursor-pointer bg-blue-500 px-4 py-2 rounded-lg w-fit text-white"} onClick={
                    () => {
                        if (page !== 3) {
                            setPage(page + 1);
                        }
                    }
                }>
                    <h1>Next Page</h1>
                </div>
            </div>
            <div className="px-5 w-full">
                <div className={"w-full lg:w-1/2 flex gap-5 flex-wrap"}>
                    {page === 1 ?
                        <Line options={options} data={data}/>
                        :
                        page === 2 ?
                            <Scatter options={options2} data={data2}/> :
                            <Scatter options={options3} data={data3}/>
                    }
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

