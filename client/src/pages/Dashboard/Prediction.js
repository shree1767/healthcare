import React from 'react'
import { Link } from 'react-router-dom'
import back from './assets/back.svg'
import prediction from './assets/prediction.png'

const Prediction = () => {
  return (
    <div className='pt-10 px-5 w-[70vw]'>
        <div className='grid grid-cols-2 space-x-5'>
            <div>
                <div className='flex space-x-3 items-center'>
                    <Link to=''><img src={back} alt='back' className='w-12 h-12'/></Link>
                    <h1 className='text-[28px] font-[600]'>Prediction Model</h1>
                </div>
                <div className='text-[20px] my-4'>
                    <p className='font-[600]'>Visual Acuity</p>
                    <p>(Unit: Decimal)</p>
                </div>
            </div>
            <div className='text-[25px]'>
                <div>
                    <label className='font-semibold'>Choose Date:</label>
                    <input type='date' name='date' className=' p-2 mx-2 mb-3 bg-white border border-[#006797] border-[2px] rounded' placeholder='Date'/>
                </div>
                <div>
                    <label className='font-semibold'>Choose IVOM Medication:</label>
                    <input type='text' name='text' placeholder='Medication' className='w-[10vw] text-[#006797] mx-1 p-2 mb-3 border border-[#006797] border-[2px] rounded'/>    
                </div>
            </div>
        </div>
        <div>
            <img src={prediction}/>
        </div>
    </div>
  )
}

export default Prediction