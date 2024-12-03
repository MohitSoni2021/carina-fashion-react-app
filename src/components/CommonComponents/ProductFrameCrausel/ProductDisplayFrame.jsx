import React from 'react'
import './ProductDisplayFrame.css'
import { IoMdArrowDropright } from "react-icons/io";
import ProductDetailCardPotraitSmall from './ProductDetailCardPotraitSmall';

const ProductDisplayFrame = () => {
  return (
    <div>
        <h1 className='text-center text-3xl'>See The Latest</h1>
        <div className='flex Product-Display-Frame-Outer-Container gap-3'>
            <h2 className='text-xl flex gap-1 items-center justify-center font-bold'>SHOP NOW <IoMdArrowDropright className='rotate-90' /></h2>
            <div className="flex gap-3">
                <ProductDetailCardPotraitSmall />
            </div>
        </div>
    </div>
  )
}

export default ProductDisplayFrame
