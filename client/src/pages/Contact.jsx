import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="p-10 bg-slate-900 rounded">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 md:justify-between">
        <div className="md:w-1/3">
          <div>
            <a href="/" className="text-white font-bold text-xl">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                alt=""
                className="w-32 text-white rounded"
              />
            </a>
          </div>

          <p className="text-white text-left break-words my-3 md:hidden">
            We are a dynamic and innovative company that is dedicated to
            delivering cutting-edge solutions to our clients.
            <p>Kindly reach out to us via any of the social links below.</p>
          </p>

          <p className="hidden text-white my-3 lg:block text-left">
            <p>We are a dynamic and innovative</p>
            <p>company that is dedicated to</p>
            <p>delivering cutting-edge solutions to our clients.</p>
            <p>Kindly reach out to us via any of the social links below.</p>
          </p>

          <div className="flex gap-2 cursor-pointer">
            <Link to={"https://wa.link/rztdmy"}><BsWhatsapp className="text-blue-900 hover:text-green-300 hover:transition-all text-2xl" /></Link>
            <Link to={"https://twitter.com/Alawode2Toheeb"}><FaTwitterSquare className="text-blue-900  hover:text-green-300 hover:transition-all text-2xl" /></Link>
            <Link to={"https://www.linkedin.com/in/alawode-toheeb-038b15247/"}><BsLinkedin className="text-blue-900  hover:text-green-300 hover:transition-all text-2xl" /></Link>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col text-white gap-4 text-left">
          <h2 className="border-l-4 border-blue-600">IT Services</h2>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Furniture Services
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Delivery Security
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Soft Furnitures
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Managed IT
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            IT Support
          </a>
        </div>

        <div className=" md:w-1/3 flex flex-col text-white gap-4 text-left my-5 md:my-0">
          <h2 className="border-l-4 border-blue-600">Quick Links</h2>
          <Link
            to={"/about"}
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            About Us
          </Link>
          <Link
            to={"/menu/:filterBy"}
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Menu
          </Link>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Contact Us
          </a>
          <Link
            to={"/"}
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Home
          </Link>
        </div>
      </div>

      <div>
        <hr className="w-full py-3" />
        <p className="text-white flex sm:flex-col md:flex-row items-center justify-center m-auto text-center ">
          <AiOutlineCopyrightCircle />
          2023
          <span>
            <a href="" className="hover:text-slate-400">
              FURNICOM
            </a>
          </span>
          . All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
