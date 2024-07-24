import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul>
            <li>
                <Link> </Link>
            </li>
        </ul>
        
      </div>
    </nav>
  );
};


export default Navbar;