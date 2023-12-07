import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchparams]=useSearchParams();
  const [category,setCategory]=useState(searchParams.getAll("category") ||[]);
  const [order,setOrder]=useState(searchParams.get("order")||"");


  const handleOrder= (e)=>{
    const {value}=e.target;
    setOrder(value)
  }

  const handleCategory = (e)=>{
    const {value}=e.target;
    let newCategory = [...category];

    if(newCategory.includes(value)){
      newCategory = newCategory.filter((el)=>el!==value)
    }else{
      newCategory.push(value)
    }
    setCategory(newCategory)

  }

  useEffect(()=>{
    let params={
      category,
    }
    order && (params.order=order);
    setSearchparams(params)
  },[category,order])


  return (
<div>
<div className="d-flex justify-content-center gap-3 d-lg-none">
      <select onChange={handleCategory}
            className="px-2  option"
            style={{ height: "40px", background: "transparent" }}
          >
            <option value="">Category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Seafood">Seafood</option>
            <option value="Chicken">Chicken</option>
            <option value="Mutton">Mutton</option>
          </select>
      <select onChange={handleOrder}
            className="px-2 text-center option"
            style={{ height: "40px", background: "transparent" }}
          >
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
      </div>
<DIV className="mainSidebarProduct ">


<div className="d-none d-lg-grid">
<h4 className="mt-lg-5 mb-3">Category</h4>
      <div>
        <input className ="form-check-input bg me-2" data-testid="novel-filter" type="checkbox" value={"Fruits"} checked={category.includes("Fruits")} onChange={handleCategory} />
        <label>Fruits</label>
        <br />
        <input className ="form-check-input bg me-2"
          type="checkbox"
          value={"Vegetables"}
          checked={category.includes("Vegetables")}
          onChange={handleCategory}
        />
        <label>Vegetables</label>
        <br />
        <input className ="form-check-input bg me-2"
          type="checkbox"
          value={"Seafood"}
          checked={category.includes("Seafood")}
          onChange={handleCategory}
        />
        <label>Seafood</label>
        <br />
        <input className ="form-check-input bg me-2"
          type="checkbox"
          value={"Chicken"}
          checked={category.includes("Chicken")}
          onChange={handleCategory}
        />
        <label>Chicken</label>
        <br />
        <input className ="form-check-input bg me-2"
          type="checkbox"
          value={"Mutton"}
          checked={category.includes("Mutton")}
          onChange={handleCategory}
        />
        <label>Mutton</label>
        <br />
        <input className ="form-check-input bg me-2"
          type="checkbox"
          value={"Fish"}
          checked={category.includes("Fish")}
          onChange={handleCategory}
        />
        <label>Fish</label>
        <br />
      </div>
      <br />
      <br />
      <h5 className="mb-3">Sort</h5>
      <div onChange={handleOrder}>
        <input className ="form-check-input bg me-2" data-testid="sort-asc" type="radio" name="sort" value={"asc"} defaultChecked={order==="asc"} />
        <label>Ascending</label>
        <br />
        <input className ="form-check-input bg me-2"
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order==="desc"}
        />
        <label>Descending</label>
      </div>
</div>
     
    </DIV>
</div>


  );
};

const DIV = styled.div`
  /* width: 15%; */
  /* border-right: 1px solid gray; */

  /* .bg{
    background-color:Black;
    color: red;
  } */

  .form-check-input:checked.bg {
    background-color: black;
  }
`;
