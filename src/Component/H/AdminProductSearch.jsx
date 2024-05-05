import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css'

export const AdminProductSearch = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [order, setOrder] = useState(searchParams.get("order") || []);

  const [category, setCate] = useState(searchParams.getAll("category") || []);
 
  


  const handleCategory = (e) => {
    const { value } = e.target;
    let newCate = [...category];
    if (newCate.includes(value)) {
      newCate = newCate.filter((el) => el !== value);
    } else {
      newCate.push(value);
    }
    setCate(newCate);
  };
  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect
  (() => {
    let params = {
      category
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [ order,category]);

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])

  return (
    <div  data-aos="fade-right">
    

      <h3 className="my-4">Filter</h3>
      <div>
        <input
          type="checkbox"
          value={"Fruits"}
          onChange={handleCategory}
          checked={category.includes("Fruits")}
          className ="form-check-input bg me-2"
        />
        <label>Fruits</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Vegetables"}
          onChange={handleCategory}
          checked={category.includes("Vegetables")}
          className ="form-check-input bg me-2"
        />
        <label>Vegetables</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Chicken"}
          onChange={handleCategory}
          checked={category.includes("Chicken")}
          className ="form-check-input bg me-2"
        />
        <label>Chicken</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Seafood"}
          onChange={handleCategory}
          checked={category.includes("Seafood")}
          className ="form-check-input bg me-2"
        />
        <label>Seafood</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Mutton"}
          onChange={handleCategory}
          checked={category.includes("Mutton")}
          className ="form-check-input bg me-2"
        />
        <label>Mutton</label>
      </div>

      

      <h3 className="my-4">Sort</h3>
      <div onChange={handleOrder}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
          className ="form-check-input bg me-2"
        />
        <label>Low to High</label>
        <br />
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
          className ="form-check-input bg me-2"
        />
        <label>High to Low</label>
        <br />
        <input
          type="radio"
          name="order"
          value={""}
          defaultChecked={order === ""}
          className ="form-check-input bg me-2"
        />
        <label>Reset</label>
      </div>
    </div>
  );
};
