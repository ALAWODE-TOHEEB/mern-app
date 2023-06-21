import React from 'react';
import {BiMinus} from "react-icons/bi";
import {BsPlusLg} from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteCartItem, increaseQty, decreaseQty } from '../redux/productSlice';

const CartProduct = ({id, name, image, category, qty, total, price}) => {
    const dispatch = useDispatch();
  return (
    <div className='bg-slate-200 md:w-2/3 rounded my-4 p-2 flex flex-col justify-center items-center md:flex-row gap-4'>
      <div className='bg-white p-3 rounded overflow-hidden'>
        <img src={image} alt="" className='h-28 w-40 object-cover ' />
      </div>

      <div className="flex flex-col justify-center gap-2 items-center">
        <div className='flex flex-col justify-center items-center'>
        <h3 className="w-64 truncate font-semibold text-center capitalize text-lg md:text-xl m-auto">
            {name}
          </h3>

          <div className='cursor-pointer text-slate-700 hover:text-red-600 text-2xl' onClick={() =>dispatch(deleteCartItem(id))}>
            <AiFillDelete/>
          </div>

          <p className="text-center text-slate-400 font-medium">{category}</p>
          <p className="text-center font-bold text-base">
            <span className="text-red-500">$</span>
            <span>{price}</span>
          </p>
          </div>

          <div className='flex justify-between gap-4'>

          <div className="flex gap-2 items-center">
          <button onClick={() =>dispatch(increaseQty(id))} className="bg-slate-400 hover:bg-yellow-600 p-2 transition-all rounded text-center"><BsPlusLg/></button>
          <p>{qty}</p>
          <button onClick={() =>dispatch(decreaseQty(id))} className="bg-slate-400 hover:bg-yellow-600 p-2 transition-all rounded text-center"><BiMinus/></button>
          </div>

          <div className='flex gap-2 items-center font-bold text-slate-700'>
            <p>Total :</p>

            <p className="text-center font-bold text-base">
            <span className="text-red-500">$</span>
            <span>{total}</span>
          </p>
          </div>

          </div>

         

        </div>
    </div>
  )
}

export default CartProduct
