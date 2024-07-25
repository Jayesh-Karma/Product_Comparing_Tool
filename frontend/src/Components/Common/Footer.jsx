import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
       <footer className="bg-gray-800 py-6 mt-12">
      <div className="container mx-auto text-center text-white">
        <p className="text-lg">&copy; {new Date().getFullYear()} Deal Seeker. All Rights Reserved.</p>
        <p className="text-md mt-2">Created by Jayesh Karma ❤️</p>
        <div className="mt-4 flex flex-row justify-center items-center  ">
          <Link to="https://github.com/Jayesh-Karma?tab=repositories" target='_blank' className="text-gray-400 hover:text-gray-300 mx-2 flex flex-row justify-center items-center gap-2 ">
            GitHub <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/jayesh-karma/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2 flex flex-row justify-center items-center gap-2 ">
             LinkedIn <FaLinkedin />
          </Link>
          <Link to="mailto:jayeshcodes77@gmail.com" className="text-gray-400 hover:text-gray-300 mx-2 flex flex-row justify-center items-center gap-2 ">
             Email <FaMailBulk/>
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
