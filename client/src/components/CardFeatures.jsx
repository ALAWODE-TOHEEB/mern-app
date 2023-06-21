import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, } from "../redux/productSlice";

const CardFeatures = ({ image, name, price, category, id }) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  }

  return (
    <div className="w-[255px] min-w-[280px] max-w-[200px] flex flex-col justify-center items-center rounded-2xl bg-white drop-shadow-lg py-5 px-2">
      <Link to={`menu/${id}`}>
      <div className="h-[150px] w-[255px]  cursor-pointer">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <h3 className="font-semibold  capitalize text-lg text-center">{name}</h3>
      <p className="text-slate-500 font-medium text-center">{category}</p>
      <p className="text-center font-bold">
        <span className="text-red-500">$</span>
        <span>{price}</span>
      </p>
      </Link>
      <button onClick={(e) => handleAddCartProduct(e)} className="bg-yellow-500 hover:bg-yellow-600 p-2 transition-all rounded text-center w-full">Add To Cart</button>
    </div>
  );
};

export default CardFeatures;
