import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import back from './assets/back.svg';

import {Scatter} from 'react-chartjs-2';
import healthData from "../../data/healthData.json";

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ['IVOM 1', 'IVOM 2', 'No Therapy 1', 'No Therapy 2', 'PPV1', 'PPV2', 'Laser Therapy 1', 'Laser Therapy 2'];
export const options = {
    scales: {
        x: {
            type: 'category', // This specifies that the X axis is a category axis with custom labels
            labels: labels,
        },
        y: {
            beginAtZero: true,

        },
    },
};


export const data = {
    datasets: [
        {
            label: 'IVOM 1',
            data: [{
                x: 'IVOM 1',
                y: healthData[4]["IVOM therapy Prediction Model 1"]
            }],
            backgroundColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'IVOM 2',
            data: [{
                x: 'IVOM 2',
                y: healthData[4]["IVOM therapy Prediction Model 2"]
            }],
            backgroundColor: 'rgb(99,120,255)'
        },
        {
            label: 'No Therapy 1',
            data: [{
                x: 'No Therapy 1',
                y: healthData[4]["No therapy Prediction Model 1"]
            }],
            backgroundColor: 'rgb(156,255,99)'
        },
        {
            label: 'No Therapy 2',
            data: [{
                x: 'No Therapy 2',
                y: healthData[4]["No therapy Prediction Model 2"]
            }],
            backgroundColor: 'rgb(255,206,99)'
        },
        {
            label: 'PPV1',
            data: [{
                x: 'PPV1',
                y: healthData[4]["Pars-plana-Vitrektomie Prediction Model 1"]
            }],
            backgroundColor: 'rgb(99,255,237)'
        },
        {
            label: 'PPV2',
            data: [{
                x: 'PPV2',
                y: healthData[4]["Pars-plana-Vitrektomie Prediction Model 2"]
            }],
            backgroundColor: 'rgb(226,99,255)'
        },
        {
            label: 'Laser Therapy 1',
            data: [{
                x: 'Laser Therapy 1',
                y: healthData[4]["Laser therapy Predicition Model 1"]
            }],
            backgroundColor: 'rgb(226,99,255)'
        },
        {
            label: 'Laser Therapy 2',
            data: [{
                x: 'Laser Therapy 2',
                y: healthData[4]["Laser therapy Predicition Model 2"]
            }],
            backgroundColor: 'rgb(133,18,239)'
        },
    ],
};

const Prediction = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const patientId = pathname.split('/').pop();
    const [showGraph, setShowGraph] = React.useState(false);
    const [showGraph2, setShowGrap2] = React.useState(false);

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
                            <img src={back} alt='back' className='w-6 h-6'/>
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
                            onChange={() => {
                                setShowGrap2(true);
                            }}
                        />
                    </div>
                    <div>
                        <label className='font-semibold'>Choose IVOM Medication:</label>
                        <select onChange={() => {
                            setShowGraph(true);
                        }} className="w-full px-4 py-2 rounded-lg border-2 border-black">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 2</option>
                            <option value="Option 1">Option 3</option>
                            <option value="Option 1">Option 4</option>
                        </select>
                    </div>
                </div>
            </div>
            {showGraph && showGraph2 ?
                <div className='mt-8'>
                    <Scatter options={options} data={data}/>
                </div>
                :
                null}
        </div>
    );
};

export default Prediction;



