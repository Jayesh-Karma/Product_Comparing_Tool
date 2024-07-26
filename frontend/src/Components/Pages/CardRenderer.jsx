import React from 'react'
import Card from '../Common/Card'
import "../../index.css"

const CardRenderer = ({ amazon, flipkart }) => {
    

    return (
        <div>
            {
                amazon && flipkart && flipkart.length > 0 && amazon.length > 0 && (
                   <div className=' flex flex-col'>
                   <h1 className=' font-semibold text-xl mt-5'>On Amazon ➡️</h1>
                   <div className='flex flex-row overflow-auto overflow-y-hidden'>
                       {
                            amazon.map((item, idx) => (
                                <div key={idx} className='m-4'>
                                    <Card item={item} source={"Amazon"} />
                                </div>
                            ))
                       }
                    </div>
                   <h1 className=' font-semibold text-xl mt-5'>On Flipkart ➡️</h1>
                    <div className='flex flex-row overflow-auto'>
                        {
                            flipkart.map((item, idx) => (
                                <div key={idx} className='m-4'>
                                    <Card item={item} source={"Flipkart"} />
                                </div>
                            ))
                        }
                    </div>
                   </div>
                )
            }
        </div>
    )
}

export default CardRenderer
