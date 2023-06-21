import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../components/HomeCard";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "../redux/productSlice";
import CardFeatures from "../components/CardFeatures";
import {GrPrevious, GrNext} from "react-icons/gr";
import {BiChair} from "react-icons/bi";
import {CiForkAndKnife} from "react-icons/ci";
import FilterProduct from "../components/FilterProduct";
const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const products = productData.slice(1, 5);
  const productCard = productData.slice(6, 21);
  console.log(productCard);

  const slideProductRef = useRef()
  const nextProduct = () => {
      slideProductRef.current.scrollLeft  += 200
  };
  const previousProduct = () => {
      slideProductRef.current.scrollLeft  -= 200
  };

  // console.log(productData)
  const loadingArray = new Array(4).fill(null);

  const categoryList = [...new Set(productData.map(list => list.category))];
  console.log(categoryList);

  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(productData)
  }, [productData])

  const handleFilterProduct = (category) => {
    const filter = productData.filter(list => list.category.toLowerCase() === category.toLowerCase());

    setFilterData(() => {
      return [
        ...filter
      ]
    })
  }
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 font-bold bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Van Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2769/2769339.png"
              alt=""
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Delivery In
            <span className="text-blue-900"> Your Location</span>
          </h2>
          <p className="p-3 text-base bg-orange-400 rounded-lg my-3 md:my-0">
            Welcome to our furniture ordering app! We offer a wide selection of
            high-quality and stylish furniture pieces to enhance the comfort and
            aesthetic appeal of your home. Our collection features everything
            from cozy sofas and lounge chairs to sturdy dining tables and
            elegant bedroom sets. Each piece is crafted from premium materials
            and designed with your needs in mind, ensuring durability,
            functionality, and style.
          </p>
          <button className="font-bold bg-green-400 text-slate-600 p-2 rounded-md m-auto md:my-2">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 justify-center my-2 p-4">
          {loadingArray
            ? products.map((list) => {
                return (
                  <HomeCard
                    key={list._id}
                    image={list.image}
                    name={list.name}
                    price={list.price}
                    category={list.category}
                  />
                );
              })
            : loadingArray.map((empty) => {
                return <HomeCard loading={loadingArray} />
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center justify-between py-5">
        <h2 className="font-bold text-2xl text-slate-800 ">
          Executive Settings
        </h2>

        <div className="ml-auto flex gap-4">
          <button onClick={previousProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious/></button>
          <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext/></button>
        </div>
        </div>
        <div className="flex overflow-scroll scrollbar-none scroll-smooth transition-all gap-5 justify-center" ref={slideProductRef}>
          {productCard.map((count) => {
            return (
              <CardFeatures
                key={count._id}
                id={count._id}
                image={count.image}
                name={count.name}
                price={count.price}
                category={count.category}
              />
            );
          })}
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Filter Out Your Desired Product Below</h2>

          <div className="flex gap-4 justify-center overflow-scroll scrollbar-none cursor-pointer">
            {
              categoryList[0] && categoryList.map(set => {
                return(
                  <FilterProduct category={set} onClick={() => handleFilterProduct(set)}/>
                )
              })
            }
          </div>

          <div className=" flex flex-wrap gap-5 justify-center my-4">
            {
              filterData.map(list => {
                return(
                  <CardFeatures
                  key={list._id}
                  id={list._id}
                  image={list.image}
                  name={list.name}
                  category={list.category}
                  price={list.price}/>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
