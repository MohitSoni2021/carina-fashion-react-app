import React from 'react'
import { useParams } from 'react-router-dom'

const ProductIdPageLayout = () => {
  
    const {id} = useParams()

    return (
    <div>
        <h1 className='text-4xl'>The ID of the product is :  {id}</h1>
    </div>
  )
}

export default ProductIdPageLayout
