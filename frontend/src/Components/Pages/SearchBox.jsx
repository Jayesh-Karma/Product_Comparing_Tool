import React, { useState } from 'react'
import "../../App.css"
import HeroSection from '../Common/HeroSection'
import { ScrapedData } from '../../Services/serviceHandler';
import CardRenderer from './CardRenderer';

const SearchBox = () => {

    const [product, setProduct ] = useState("");
    const [loading, setLoading ] = useState(false);
    const [amazon, setAmazon] = useState();
    const [flipkart, setFlipkart] = useState();
    
    const submitHandler = async(e) => {
        e.preventDefault()
        // console.log(product)
        const res = await ScrapedData(product);
        setAmazon(res.amazon);
        setFlipkart(res.flipkart);
        // console.log(res)
    } 

    return (
        <div className='lg:pt-20 py-10  flex justify-center items-center'>
            <div className=' w-11/12'>


                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2  lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Search and Compare Prices Instantly!
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-700 mb-6">
                            🔍 Enter the name of the product you're looking for <br />
                            🌐 We'll search multiple e-commerce platforms for you <br />
                            💰 Find the best deals and save money effortlessly
                        </p>
                        <p className="text-md lg:text-lg text-gray-600 mb-4">
                            Type in the product name below and let us do the hard work. Our service will fetch the latest prices from top online stores like Amazon, Flipkart, and more, ensuring you get the best deal available. Happy shopping! 🛒✨
                        </p>
                    </div>
                    <div className="lg:flex hidden lg:w-1/2 mt-10 lg:mt-0">
                        <img
                            src="The-Ultimate-Guide-to-Ecommerce-Website-Development-in-2023-removebg-preview.png"
                            alt="Online Shopping"
                            className="w-full h-auto animate-float "
                        />
                    </div>
                </div>
                
                <form className=' flex flex-row gap-3 lg:justify-start items-center '>

                    <input
                        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-gray-800 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-3 py-2 shadow-md focus:shadow-lg focus:shadow-gray-800 dark:shadow-md dark:shadow-purple-500 lg:w-[40%] w-[100%]"
                        placeholder="Enter Product.."
                        name="text"
                        type="text"
                        value={product}
                        onChange={(e)=>setProduct(e.target.value)}
                    />

                    <button onClick={submitHandler} className="button bg-gray-800">
                        <span className="span">🔎</span>
                    </button>

                </form>

                <div className='text-gray-400 text-sm flex flex-col justify-center items-start p-3'>
                <span className=''> ⌛It may take 5 to 10 seconds to fetch data from different sites</span>
                <span className=' '> 🔊Enter Product which you want to compare for exact comparison</span>
                </div>


               { product &&  (<div className=' text-black flex flex-col justify-center items-center mt-10'>
                <h1 className='text-2xl w-full bg-gray-700 p-2 rounded-xl text-white font-bold font-sans'>Search Results will Shown below </h1>
                <div className='w-full'>
                    <CardRenderer amazon={amazon} flipkart={flipkart} />
                </div>
                </div>)}
            </div>
        </div>
    )
}

export default SearchBox
