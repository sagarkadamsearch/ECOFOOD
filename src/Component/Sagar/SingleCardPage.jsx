import Header from "./Header";
import SimilarProduct from "./SimilarProduct";
import OtherProduct from "./OtherProducts";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import BenefitVideo from "./BenefitsVideo";
const SingleCardPage = () => {

    const [data,setData] = useState([]);
    const [category,setCategory] = useState("");
    const {id} =  useParams();

    useEffect(()=>{
        axios.get("https://grocryapi.onrender.com/products")
        .then((res)=>{
            setData(res.data);
        });
 
        axios.get(`https://grocryapi.onrender.com/products/${id}`)
        .then((res)=>{
            let cat = res.data.category;
            setCategory(cat);
        })

     },[]) 


    return (
        <div className="">
            <Header/>
            <BenefitVideo/>
            <SimilarProduct category={category} data={data}/>
            {/* <OtherProduct category={category} data={data}/> */}
        </div>
    );
};

export default SingleCardPage;