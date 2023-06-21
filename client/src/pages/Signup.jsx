import React, { useState } from "react";
import signup from "../assets/login.png";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // console.log(process.env.REACT_APP_SERVER_DOMAIN)

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          "http://localhost:5000/signup",
          requestOptions
        );
        const dataResonse = await fetchData.json();
        console.log(dataResonse);
        toast(dataResonse.message); // dataResonse was assigned a coming from backend;
        setData((preve) => {
          return {
            ...preve,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          };
        });
        if (dataResonse.alert) {   // dataRes was assigned a value coming from backend;
          setTimeout(() => {
            navigate("/login");
          }, 500);
        }
      } else {
        alert("password and confirmPassword are not the same");
      }
    } else {
      alert("please enter all fields");
    }
    
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm m-auto bg-white flex items-center justify-center flex-col p-4 rounded-2xl">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={signup} alt="" className="w-full" />
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full py-3 flex flex-col"
        >
          <label htmlFor="firstname">First Name</label>
          <input
            type={"text"}
            value={data.firstName}
            onChange={handleOnChange}
            id="firstname"
            name="firstName"
            className="w-full mt-1 bg-slate-200 rounded focus-within:outline-blue-300 p-2"
            required
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type={"text"}
            value={data.lastName}
            onChange={handleOnChange}
            id="lastname"
            name="lastName"
            className="w-full mt-1 bg-slate-200 rounded focus-within:outline-blue-300 p-2"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            value={data.email}
            onChange={handleOnChange}
            id="email"
            name="email"
            className="w-full mt-1 mb-2 bg-slate-200 rounded focus-within:outline-blue-300 p-2"
            required
          />
          <label htmlFor="password">Password</label>
          <div className="flex bg-slate-200 rounded px-2 py-1">
            <input
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={handleOnChange}
              id="password"
              name="password"
              className="w-full mt-1 mb-2 bg-slate-200 border-none outline-none"
              required
            />
            <span
              onClick={handleShowPassword}
              className="flex text-xl items-center cursor-pointer"
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <label htmlFor="confirmpassword">confirmPassword</label>
          <div className="flex bg-slate-200 rounded px-2 py-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={data.confirmPassword}
              onChange={handleOnChange}
              id="confirmpassword"
              name="confirmPassword"
              className="w-full mt-1 mb-2 bg-slate-200 border-none outline-none"
              required
            />
            <span
              onClick={handleShowConfirmPassword}
              className="flex text-xl items-center cursor-pointer"
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full max-w-[120px] bg-red-500 cursor-pointer m-auto mt-2 pb-1 rounded-full text-center text-white"
          >
            sign up
          </button>
          <p className="m-auto">
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
