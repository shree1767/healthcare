import React, { useEffect } from 'react'
import messages from './assets/messages.svg'
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const docData = JSON.parse(localStorage.getItem("docData"));
    if (!docData) {
      navigate("/");
    }
  }, []);
  return (
    <div className='md:block hidden pt-10 px-5 md:h-[80vh] h-[90vh] w-[50vw] mx-auto'>
      <img src={messages} alt='messages'/>
    </div>
  )
}

export default Messages;