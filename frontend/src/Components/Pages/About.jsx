import React from 'react'

const About = () => {
  return (
    <div className=' flex justify-center items-center'>
      <section className="w-11/12 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Our Service
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              Welcome to <span className="text-yellow-500">Deal Seeker</span>, your go-to platform for finding the best deals on products from top e-commerce sites.
            </p>
            <p className="text-md lg:text-lg text-gray-600 mb-4">
              At Deal Seeker, we understand the hassle of comparing prices across multiple websites. That's why we've built a service that does the hard work for you. Simply enter the product name, and we'll fetch the latest prices from popular online stores like Amazon, Flipkart, and more.
            </p>
            <p className="text-md lg:text-lg text-gray-600 mb-4">
              Our mission is to save you time and money, making your online shopping experience more efficient and enjoyable. With our user-friendly interface and accurate price comparisons, you'll never miss out on the best deals again.
            </p>
            <p className="text-md lg:text-lg text-gray-600">
              Join thousands of satisfied users who trust Deal Seeker to help them make smarter shopping decisions. Happy shopping! 🛍️✨
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
