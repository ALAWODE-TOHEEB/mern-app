import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
// import logo from "../assets/login.png";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/counter/userSlice";

const Header = ({ isLoggedIn }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();

  const handleMenu = () => {
    setIsShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast("Logout successfully");
  };

  // console.log(process.env.REACT_APP_ADMIN_EMAIL);

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-[#003F62]">
      {/* desktop */}

      <div className="">
        <div className="h-12 flex justify-between items-center">
          <div className="pt-4">
            <Link to={``}>
              <h1 className="h-full flex items-center">
                {" "}
                <img src={viteLogo} alt="" />{" "}
                <span className="rounded-full bg-slate-300 p-2">FURNICOM</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
              <Link
                className="hover:text-green-400 transition-all ease-in-out duration-300"
                to={``}
              >
                Home
              </Link>
              <Link
                className="hover:text-green-400 transition-all ease-in-out duration-300"
                to={"menu/645a1d4b16aad619fe031bfd"}
              >
                Menu
              </Link>
              <Link
                className="hover:text-green-400 transition-all ease-in-out duration-300"
                to={`about`}
              >
                About
              </Link>
              <Link
                className="hover:text-green-400 transition-all ease-in-out duration-300"
                to={`contact`}
              >
                Contact
              </Link>
            </nav>
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="text-2xl text-slate-500 relative cursor-pointer">
               <Link to={"cart"}>
               <BsFillCartFill className="" />
                <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 text-sm text-center rounded-full w-4 p-0 m-0">
                  {cartItemNumber.length}
                </div>
                </Link> 
              </div>
              <div className="text-2xl text-slate-500">
                <div
                  onClick={handleMenu}
                  className="border-2 border-solid border-slate-600 rounded-full p-1.5 cursor-pointer"
                >
                  <FaUserAlt />
                </div>
                {isShowMenu && (
                  <div className="flex flex-col items-center gap-2 justify-evenly absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md border-2 rounded-2xl">
                    <Link
                      to={`newproduct`}
                      className="whitespace-nowrap cursor-pointer hover:text-green-400 transition-all"
                    >
                      New product
                    </Link>

                    <Link
                      to={`login`}
                      className="whitespace-nowrap cursor-pointer hover:text-green-400 transition-all"
                    >
                      Login
                    </Link>
                    <Link
                      to={`signup`}
                      className="whitespace-nowrap cursor-pointer hover:text-green-400 transition-all"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>

                    <nav className=" flex flex-col items-center gap-2 md:hidden">
                      <Link to={``}>Home</Link>
                      <Link to={"menu/645a1d4b16aad619fe031bfd"}>Menu</Link>
                      <Link to={`about`}>About</Link>
                      <Link to={`contact`}>Contact</Link>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
