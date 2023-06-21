import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../assets/ImagetoBase64";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        "http://localhost:5000/uploadproduct",
        postOptions
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message); // This data is coming from API-endpoint

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }

  
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  return (
    <div className="p-4">
      <form
        action=""
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white rounded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type={"text"}
          value={data.name}
          name="name"
          className="bg-slate-200 border-2 p-2 rounded"
          onChange={handleOnChange}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={data.category}
          id="category"
          className="cursor-pointer m-1 bg-slate-200"
          onChange={handleOnChange}
        >
          <option value="" className="cursor-pointer">
            Select category
          </option>
          <option value="office Tables" className="cursor-pointer">
            Office Tables
          </option>
          <option value="Office Chairs" className="cursor-pointer">
            Office Chairs
          </option>
          <option value="Dinning Tables" className="cursor-pointer">
            Dinning Tables
          </option>
          <option value="Center Tables" className="cursor-pointer">
            Center Tables
          </option>
          <option value="Dinning Chairs" className="cursor-pointer">
            Dinning Chairs
          </option>
          <option value="Library sets" className="cursor-pointer">
            Library sets
          </option>
          <option value="Home sets" className="cursor-pointer">
            Home sets
          </option>
        </select>

        <label htmlFor="image">
          Image
          <div className="w-full bg-slate-300 h-[142px] my-1 rounded flex items-center justify-center">
            {data.image ? (
              <img
                src={data.image}
                alt="images"
                className="h-full"
              />
            ) : (
              <span className="text-5xl cursor-pointer m-auto">
                <BsCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              id="image"
              className="cursor-pointer hidden"
              onChange={uploadImage}
            />
          </div>
        </label>

        <label htmlFor="">price</label>
        <input
          type={"text"}
          value={data.price}
          name="price"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={data.description}
          id="description"
          cols="30"
          rows="3"
          className="p-1 my-1 resize-none bg-slate-200"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-blue-500 text-white rounded">Save</button>
      </form>
    </div>
  );
};

export default Newproduct;
