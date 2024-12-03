import React from 'react'
import { IoMdHeart } from "react-icons/io";
import { RiShoppingCart2Fill } from "react-icons/ri";

const ProductDetailCardPotraitSmall = () => {
  return (
    <div className='w-56 h-96 cursor-pointer '>
      <div className="relative rounded-md overflow-hidden">
        <img src="https://img.freepik.com/premium-photo/stylish-indian-man-looking-camera-keeping-arms-crossed-against-brown-background_425904-48751.jpg?w=360" alt="" className='hover:scale-110 transition-all duration-150'/>
        <p className='vertical-text absolute top-0 left-1 py-1 bg-yellow-400'>LATEST</p>
        <span className="p-1 rounded-sm bg-white absolute top-8 right-1"><IoMdHeart className=''/></span>
        <span className="p-1 rounded-sm bg-white absolute top-1 right-1"><RiShoppingCart2Fill className=''/></span>
      </div>
      <div className="">
        <h2 className='text-lg font-bold'>Sweater</h2>
        <p className='text-gray-700 font-light'>Men's Feshion</p>
        <div className='flex gap-2 text-sm'><p className='text-gray-500'>₹1500</p> <p>₹1000</p> <p className=' text-red-500'>(₹500 OFF)</p></div>
      </div>
    </div>
  )
}

export default ProductDetailCardPotraitSmall
