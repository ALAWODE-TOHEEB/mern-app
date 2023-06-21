import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ImOffice } from "react-icons/im";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiOnlyoffice } from "react-icons/si";
import { addCartItem } from "../redux/productSlice";

const Menu = ({ image, name, price, category, id }) => {
  const {filterBy} = useParams();
  const productData = useSelector((state) => state.product.productList);
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
 
  const productDisplay = productData.filter((list) => list._id === filterBy)[0];


  

  return (
    <div>
      <div className="w-full max-w-4xl bg-slate-300 m-auto p-2 md:p-4 sm:flex">

        <div className="w-1/2 shadow overflow-hidden m-auto">
          <img src={productDisplay.image} alt="" className="hover:scale-105 transition-all rounded-lg max-h-72"/>
        </div>

        <div className="">
        <h3 className="w-64 truncate font-semibold text-center capitalize text-lg m-auto">
            {productDisplay.name}
          </h3>
          <p className="text-center text-slate-400 font-medium">{productDisplay.category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">$</span>
            <span>{productDisplay.price}</span>
          </p>


          <div className="flex gap-2">
          <button className="bg-yellow-500 hover:bg-yellow-600 p-2 transition-all rounded text-center w-full">Purchase Now</button>
          <button onClick={(e) => handleAddCartProduct(e)} className="bg-yellow-500 hover:bg-yellow-600 p-2 transition-all rounded text-center w-full">Add To Cart</button>
          </div>

          <div>
            <p className="text-slate-400 font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Menu;
