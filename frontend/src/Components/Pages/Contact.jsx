import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className=" text-black text-2xl font-semibold mb-4 text-center">Contact Us</h1>
          <form className="">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray  -600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
