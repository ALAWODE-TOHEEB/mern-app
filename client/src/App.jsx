// import { useState } from "react";
// import ProductPage from "./components/ProductPage";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
 
  
  const pull =  async() => {
      const res = await fetch("http://localhost:5000/product");
      const resData = await res.json();
      console.log(resData);
      dispatch(setDataProduct(resData));
    }

  useEffect(() => {
      pull();
  }, []);

  console.log(productData)

  return (
    <>
       <Toaster />
    <div className="">
        <Header/>
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet/>
        </main>
        
        
    </div>
       </>
  );
}

export default App;
