import React from 'react';
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'; 
import bell from './assets/bell.svg'
import userico from './assets/userico.svg'
import logo from './assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-[#006797] text-white">
      <div className="flex items-center">
        <div className="flex items-center logo mr-4 space-x-2">
          {/* Insert your logo here */}
          <img src={logo} alt="Logo" className="h-1/2 w-1/2" />
          <span className='text-[45px] font-[700]'>DocView</span>
        </div>
       
      </div> 
      <div className="searchbar flex items-center bg-[#F4F4F4] rounded-[25px] w-[50vw] h-[7vh]">
            {/* Insert the search icon */}
            <FaSearch className="ml-3 text-[#DBDBDB]"/>
            {/* Insert your search bar component here */}
            <input type="text" placeholder="Search" className='py-2 pl-2 pr-4 bg-[#F4F4F4] rounded-[25px] text-[#858585] focus:outline-none'/>
        </div>
      <div className="flex space-x-5 items-center">
        <div className="notification-icon mx-4">
          {/* Insert your notification icon component here */}
          <img src={bell} alt="Notification" className="" />
        </div>
        <div className="user-dropdown relative">
          {/* Insert your user dropdown component here */}
          <button className="flex space-x-5 items-center focus:outline-none">
            <img src={userico} alt="User" className="mr-2" />
            <span className="text-[25px] font-[700]">Dr.Katja</span>
          </button>
          <div className="user-dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">Dashboard</li>
              <li className="px-4 py-2 hover:bg-gray-200">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-200">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
