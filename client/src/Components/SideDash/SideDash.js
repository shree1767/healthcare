import React from 'react';
import './SideDash.css'
import logout from './logout.svg'
import patients from './patients.svg'
import messages from './messages.svg'
import settings from './settings.svg'
import overview from './overview.svg'
import { NavLink } from 'react-router-dom';

const SideDash = () => {
  const links = [
    { id: 1, title: 'Overview',image:overview, path:"/"},
    { id: 2, title: 'Patients', image:patients, path:"/patients"},
    { id: 3, title: 'Messages',image:messages, path:"/messages" },
    { id: 4, title: 'Settings',image:settings, path:"/settings"},
  ];

  return (
    <nav className="flex sticky flex-col m-10 text-[30px] rounded-lg justify-between bg-[#006797] text-white h-[75vh] w-[20vw] pl-4 py-4">
      <div>
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className="px-4 flex space-x-10 items-center py-2 rounded-[20px] hover:bg-white hover:text-[#006797] transition-colors cursor-pointer"
            activeclassName="active"
          >
            <img src={link.image} alt={link.title} className="w-6 h-6 mr-2" />
            {link.title}
          </NavLink>
        ))}
    </div>
      <div className="p-4 mb-10 flex space-x-3 rounded-lg font-light  transition-colors cursor-pointer">
        <img src={logout} alt='logout'/>
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default SideDash;

