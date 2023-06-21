import React from 'react'
import { BiChair } from 'react-icons/bi'
import { GiOfficeChair } from 'react-icons/gi';

const FilterProduct = ({category, onClick}) => {
  return (
    <div className='' onClick={onClick}>
          <div className="text-3xl p-5 bg-yellow-300 rounded-full  flex flex-wrap justify-center items-center">
              <GiOfficeChair/>
              </div>

              <p className='text-center font-medium my-1 capitalize hover:text-blue-400 duration-300 '>{category}</p>
    </div>
  )
}

export default FilterProduct
