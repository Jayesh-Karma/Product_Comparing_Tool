import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="lg:py-20 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2  ">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Welcome to DEAL<span className=' text-red-600'>SEEKER!</span> 🔍
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Your one-stop solution to compare product prices across multiple e-commerce platforms. 
              Simply type in the product name, and we'll do the searching for you! Save time and money with our 
              seamless comparison tool.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
            🌐 Compare prices across e-commerce platforms <br />
            📦 Get detailed product information <br />
            🛒 Save time and money with our easy-to-use tool
          </p>
            <Link to={"/service"} className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              Get Started 🚀
            </Link>
          </div>
          <div className="lg:flex hidden lg:w-1/2 mt-10 lg:mt-0">
            <img src="/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-removebg-preview.png" alt="Hero" className="w-full h-1/2 animate-float  "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
