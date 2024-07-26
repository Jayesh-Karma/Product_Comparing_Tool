import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

const Card = ({item , source}) => {
  return (
    <div>
       <div className="card  flex flex-col justify-between w-64 h-[550px]   bg-gray-700">
                            <div className=" object-center">
                                <img src={item.image} className='image_container h-[300px]'  alt="Image not found" />
                            </div>
                            
                                <span className="title">{item.title.substring(0,50)}</span>
                            
                            <span className=' text-white'>{source}</span>
                            <div className="action flex lg:flex-row flex-col">
                                <div className="price">
                                    <span>{(source === "Amazon" ? ("₹"+item.price):(item.price))}</span>
                                </div>
                                <button className="cart-button bg-yellow-700">
                                    <Link to={item.link} target='_blank' className='text-white font-bold'>Buy Now</Link>
                                </button>
                            </div>
                        </div>
    </div>
  )
}

export default Card
