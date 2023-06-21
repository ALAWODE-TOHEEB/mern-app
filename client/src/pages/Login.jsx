import React, { useState } from 'react';
import signup from "../assets/login.png";
import { BiHide, BiShow } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/counter/userSlice';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const [data, setData] = useState({
      email: "",
      password: "",
    });
      
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const handleShowPassword = () => {
      setShowPassword((preve) => !preve);
    };
  
    
  
    const handleOnChange = (e) => {
      const {name, value} = e.target;
      setData((preve) => {
          return {
              ...preve,
              [name] : value,
          }
      })
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    
  
    const handleSubmit = async (e) => {
          e.preventDefault();
          const {email, password} = data;
          if ( email && password ) {
            const fetchData = await fetch(
              "http://localhost:5000/login",
              requestOptions
            );
            const dataResponse = await fetchData.json();
            console.log(dataResponse);
            console.log(userData);
            toast(dataResponse.message); // dataResponse was assigned a value coming from backend;
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
            if (dataResponse.alert) {   // dataRes was assigned a value coming from backend;
                  // dispatch(loginUser(dataResponse));
              setTimeout(() => {
                  navigate("/");
                }, 200);
            }
          }
          else {
              alert("please enter all fields")
          }
  
    }

  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-sm m-auto bg-white flex items-center justify-center flex-col p-4 rounded-2xl">
      <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
        <img src={signup} alt="" className="w-full" />
      </div>

      <form action="" onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          value={data.email}
          onChange={handleOnChange}
          id="email"
          name="email"
          className="w-full mt-1 mb-2 bg-slate-200 rounded focus-within:outline-blue-300 py-2"
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
    
        <button type="submit" className="w-full max-w-[120px] bg-green-500 cursor-pointer m-auto mt-2 pb-1 rounded-full text-center text-white">
          Log in
        </button>
        <p className="m-auto">
          don't have an account?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Login;
