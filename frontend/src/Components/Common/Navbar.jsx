import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <div className=' w-11/12'>

    <nav className="bg-gray-800 border-gray-600 shadow-lg shadow-gray-700 lg:p-2 p-3 rounded-3xl mt-2 text-white transition-all ease-in-out">
      <div className="container mx-auto flex justify-between items-center">


        <div>
          <NavLink
           className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-gray-400"}
           to={"/"}>  
              <img src="/DEAL-removebg-preview.png" alt="" className=' h-6 lg:h-8' />
           </NavLink>
        </div>
        
      
        <div className=' md:hidden flex relative transition-all ease-in-out delay-200 cursor-pointer' onClick={handleToggle}>
            { (isOpen) ? <FaTimes/> : <FaBars />}
        </div>


        <ul className={`${isOpen ? 'block' : 'hidden'} md:relative absolute p-4 rounded-lg bg-gray-800 top-10 right-10 md:top-0 md:right-0 md:flex md:flex-row flex-col md:gap-x-5  text-white`}>
             <li className='p-2 hover:bg-gray-700'>
                <NavLink 
                className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-gray-400"}
                to={"/service"}> Service</NavLink>
            </li>
            <li className='p-2 hover:bg-gray-700'>
                <NavLink 
                className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-gray-400"}
                to={"/about"}> About</NavLink>
            </li>
            <li className='p-2 hover:bg-gray-700'>  
                <NavLink 
                className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-gray-400"}
                to={"/contact"}> Contact Us</NavLink>
            </li>
        </ul>
        
      </div>
    </nav>
    </div>  
  );
};


export default Navbar;