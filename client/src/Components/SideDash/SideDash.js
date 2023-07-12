import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";

import "./SideDash.css";
import logout from "./logout.svg";
import patients from "./patients.svg";
import messages from "./messages.svg";
import settings from "./settings.svg";
import overview from "./overview.svg";

const SideDash = () => {
  const links = [
    { id: 1, title: "Overview", image: overview, path: "/dashboard" },
    { id: 2, title: "Patients", image: patients, path: "/patients" },
    { id: 3, title: "Messages", image: messages, path: "/messages" },
    { id: 4, title: "Settings", image: settings, path: "/settings" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* mobile nav */}
      <div className="md:hidden fixed inset-x-30 inset-y-25 z-50">
        {/* Mobile nav */}
        <nav className="py-4 text-white  px-2">
          <div className="-mr-2 pb-5 flex md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 text-white shadow rounded-full bg-[#006797] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* Mobile menu */}
          <Transition
            show={isMobileMenuOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                className={`h-screen bg-[#006797]  text-white overflow-y-auto ${
                  isMobileMenuOpen ? " block" : " hidden"
                }`}
                id="mobile-menu"
                ref={ref}
              >
                <div className="p-4">
                  {links.map((link) => (
                    <NavLink
                      to={link.path}
                      key={link.id}
                      className="px-4 flex space-x-10 items-center py-2 rounded-[20px] hover:bg-white hover:text-[#006797] transition-colors cursor-pointer"
                      activeClassName="active"
                    >
                      <img
                        src={link.image}
                        alt={link.title}
                        className="w-5 h-5 mr-2"
                      />
                      {link.title}
                    </NavLink>
                  ))}
                  <Link
                    to="/"
                    className="p-4 pt-[50vh] flex space-x-3 rounded-lg font-light cursor-pointer"
                  >
                    <img
                      src={logout}
                      alt="logout"
                      className="logout-icon w-5 h-5"
                    />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
        </div>

      {/* Other components taking up 1/2 screen width */}
      {/* ... */}

      {/* Desktop nav */}
      <nav className="flex sticky md:block hidden flex-col m-5 text-[30px] rounded-lg justify-between bg-[#006797] text-white h-[75vh] w-[20vw] pl-4 py-4">
        <div className="md:block hidden">
          {links.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className="px-4 flex space-x-10 items-center py-2 rounded-[20px] hover:bg-white hover:text-[#006797] transition-colors cursor-pointer"
              activeClassName="active"
            >
              <img
                src={link.image}
                alt={link.title}
                className="w-6 h-6 mr-2 "
              />
              {link.title}
            </NavLink>
          ))}
        </div>
        <Link
          to="/"
          className="p-4 mt-[30vh] flex space-x-3 rounded-lg font-light cursor-pointer"
        >
          <img src={logout} alt="logout" className="logout-icon" />
          <span>Logout</span>
        </Link>
      </nav>
    </>
  );
};

export default SideDash;
