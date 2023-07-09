import React from 'react'
import messages from './assets/messages.svg'

const Messages = () => {
  return (
    <div className='md:block hidden pt-10 px-5 w-[50vw] mx-auto'>
      <img src={messages} alt='messages'/>
    </div>
  )
}

export default Messages;