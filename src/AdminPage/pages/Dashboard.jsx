import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts, getTotalProductFunction, getUsersData } from "../../Redux/ProductReducer/action";
import LineChart from "../Chart/LineChart";
import DashCard from "../DashCard";
import PolarChart from "../Chart/PolarChart";
import {AiOutlineEye} from "react-icons/ai"
import {BsCartCheckFill, BsCashCoin} from "react-icons/bs"
import {GoCodeReview} from "react-icons/go"
import {FcSalesPerformance} from "react-icons/fc"
import { AdminLoginFunction } from "../../Redux/AuthReducer/action";
import AOS from "aos"
import 'aos/dist/aos.css'

const Dashboard = () => {

    const data = [
          { month: "Jan", sales: 1000 },
          { month: "Feb", sales: 1200 },
          { month: "Mar", sales: 900 },
          { month: "Apr", sales: 1500 },
          { month: "May", sales: 800 },
          { month: "Jun", sales: 1100 },
          { month: "Jul", sales: 1300 },
          { month: "Aug", sales: 950 },
          { month: "Sept", sales: 1400 }
        ] 

    const polar = [
          { month: "Jan", sales: 1000 },
          { month: "Feb", sales: 1200 },
          { month: "Mar", sales: 900 },
          { month: "Apr", sales: 1500 },
        
        ] 

        const colors = ["#FFCE54", "#FC6183", "teal", "blue"]
    
        const [userData, setUserData] = useState({
            labels: data.map((e)=>e.month),
            datasets: [
              {
                label: "Sales",
                data: data.map((e)=>e.sales),
                backgroundColor: ["red", "green", "teal", "salmon"],
                borderColor: "#6FCCCC",
                borderWidth: 2,
              },
            ],
          });
    
        const [PolarData, setPolarData] = useState({
            labels: polar.map((e)=>e.month),
            datasets: [
              {
                label: "Price",
                data: polar.map((e)=>e.sales),
                backgroundColor: colors,
                // borderColor: "#DC3545",
                // borderWidth: 2,
              },
            ],
          });
      


    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(AdminLoginFunction)
      dispatch(getUsersData);
      dispatch(getTotalProductFunction);
      dispatch(getAdminProducts({}))
      AOS.init({duration:2000})
        },[]);


      


  return (
    <div>
      <div className="mt-4 d-flex gap-5 ms-3 justify-content-center" data-aos="fade-left">
            <DashCard text={"Daily Views"} data={"0038"} bg={colors[0]} comp={ <AiOutlineEye className='fs-2 text-white'/>}/>
            <DashCard text={"Total Sales"} data={"380"} bg={colors[1]} comp={   <BsCartCheckFill className='fs-2 text-white'/>}/>
            <DashCard text={"Review"} data={"654"} bg={colors[2]} comp={<GoCodeReview className='fs-2 text-white' />}/>
            <DashCard text={"Total Sales"} data={"26380"} bg={colors[3]} comp={<BsCashCoin className='fs-2 text-white' />}/>
      </div  >
      <div className="d-flex mt-4 justify-content-center">
        <div className="shadow bg-white rounded  m-3 p-4" style={{width:"30%"}} data-aos="fade-right">
        <PolarChart chatData={PolarData} />
        </div>
      <div className="shadow bg-white rounded m-3 p-4" style={{width:"60%"}} data-aos="fade-left">
      <LineChart chatData={userData} />
      </div >

      </div>
      {/* <h3 className="text-center fs-3">Sales Per Month</h3> */}
    </div>
  );
};

export default Dashboard;
