import React, { useEffect } from 'react'
import settings from './assets/settings.svg'
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const docData = JSON.parse(localStorage.getItem("docData"));
    if (!docData) {
      navigate("/");
    }
  }, []);
  return (
    <div className='md:block hidden pt-10 px-5 w-[50vw] mx-auto'>
      <img src={settings} alt='settings'/>
    </div>
  )
}

export default Settings