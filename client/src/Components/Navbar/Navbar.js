import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import bell from './assets/bell.svg';
import userico from './assets/userico.svg';
import logo from './assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex sm:flex-row items-center justify-between md:py-0 py-5 px-8 bg-[#006797] text-white">
      <div className="flex items-center space-x-5">
        {/* Insert your logo here */}
        <img src={logo} alt="Logo" className="md:w-[8vw] w-[10vw] h-[10vw]" />
        <span className="md:text-[45px] text-[25px] font-[700]">DocView</span>
      </div>
      <div className="searchbar md:flex items-center md:bg-[#F4F4F4] rounded-[25px]  md:w-[39vw] md:h-[8vh] md:mt-4 sm:mt-0">
        {/* Insert the search icon */}
        <FaSearch className="mx-5 md:text-[#DBDBDB] text-white" />
        {/* Insert your search bar component here */}
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-2 pr-4 bg-[#F4F4F4] md:block hidden rounded-[25px] text-[#858585] focus:outline-none w-full"
        />
      </div>
      <div className="flex space-x-5 items-center md:mt-4 sm:mt-0">
        <div className="notification-icon">
          {/* Insert your notification icon component here */}
          <img src={bell} alt="Notification" className="md:w-full w-5" />
        </div>
        <div className="user-dropdown relative">
          <Link to='/dashboard' className="flex space-x-2 items-center focus:outline-none">
            <img src={userico} alt="User" className="md:w-1/2 w-10" />
            <span className="text-[25px] md:block hidden font-[700]">Dr.Katja</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

