import React from "react";

const HomeCard = ({ name, image, category, price, loading }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded-2xl min-w-[150px]">
      {name ? (
        <>
          <div className="w-[255px] m-auto h-[150px] cursor-pointer">
            <img src={image} alt="" className="w-full h-full" />
          </div>
          <h3 className="w-64 truncate text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-400 font-medium">{category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">$</span>
            <span>{price}</span>
          </p>
        </>
      ) 
    :
    <><p>loading</p></>
    }
    </div>
  );
};

export default HomeCard;
