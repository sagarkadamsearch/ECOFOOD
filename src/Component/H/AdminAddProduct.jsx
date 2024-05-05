import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addAdminProduct } from "../../Redux/ProductReducer/action";
import AOS from "aos"
import 'aos/dist/aos.css'
import Swal from "sweetalert2";

const inintialState = {
  title: "",
  image: "",
  price: "",
  category: "",
  about: "",
};

export const AdminAddProduct = () => {
  const [data, setData] = useState(inintialState);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addAdminProduct(data)).then((res)=>{
        navigate("/AdminProductList")
    })
    
    setData(inintialState);

    Swal.fire({
      title: 'Product Added Successfully',
      text: 'Your Product is Added Successfully!',
      icon: 'success', // Set the icon to 'success'
      confirmButtonColor: '#DC3545'
    });
    
  };

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <DIV data-aos="fade-right">
      <form onSubmit={handleSubmit}>
        <h1>Add <span className="text-danger">Product</span></h1>
        <input
          type="text"
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
          className="form-control"
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image}
          className="form-control"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={data.price}
          className="form-control"
        />
        
        <select name="category" onChange={handleChange} className="form-control">
          <option value="">Select Brand</option>
          <option value="Fruits">fruits</option>
            <option value="Vegetables">vegitable</option>
            <option value="Chicken">chicken</option>
            <option value="Seafood">seafood</option>
            <option value="Mutton">mutton</option>
        </select>
        <input
          type="text"
          name="about"
          placeholder="about"
          onChange={handleChange}
          value={data.about}
          className="form-control"
        />
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  max-width: 400px;
  margin: auto;
  /* padding: 30px;  */

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input,
  select {
    height: 40px;
    width: 100%;
    font-size: 20px;

  }

  button {
    width: 50%;
    height: 35px;
    border:1px solid #DC3545;
    background-color: #DC3545;
    color: white;
  }
  button:hover {
    background-color:white ;
    color: #DC3545;
  }
`;
