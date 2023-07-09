import React from 'react'
import settings from './assets/settings.svg'

const Settings = () => {
  return (
    <div className='md:block hidden pt-10 px-5 w-[50vw] mx-auto'>
      <img src={settings} alt='settings'/>
    </div>
  )
}

export default Settings