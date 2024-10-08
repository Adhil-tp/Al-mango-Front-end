import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
// import ProductImg from '../assets/images/ProductImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
// import foodProducts from '../data/foodProducts';

const MenuProduct = ({ product }) => {
  const { addTOCart } = useContext(CartContext)
  const [isAdded, setAdded] = useState(false)
  const handleChange = (product) => {
    setAdded(true)
    addTOCart(product)
  }
  const truncatedDescription = (description, maxLength) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description
  }
  const truncatedProductName = (name, maxLength) => {
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name
  }

  return (
    <div className='flex items-center p-3 gap-x-5'>
      <img src={product.image} alt="ProductImg" className='w-20 h-20 six:h-32 six:w-32 object-cover rounded-lg mr-4' />
      <div className='flex flex-col justify-between h-20 six:h-32 w-full'>
        <h4 className='flex text-sm md:text-lg lg:text-2xl font-semibold '>{truncatedProductName(product.name, 16)}</h4>
        <p className='text-gray-600 mb-2 text-xs md:text-sm lg:text-lg'>{truncatedDescription(product.description, 30)}</p>
        <div className='flex'>
          <p className='text-xs md:text-sm lg:text-lg font-bold mb-4 text-orange-500'>${product.price}</p>
        </div>
      </div>
      <button className='bg-orange-500 text-white px-2 py-2 rounded hover:bg-red-600 h-8 flex items-center' onClick={() => handleChange(product)} disabled={isAdded}>
        <FontAwesomeIcon icon={isAdded ? faCheck : faPlus} />
      </button>
    </div>
  )
}

export default MenuProduct
