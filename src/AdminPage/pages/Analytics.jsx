import React, { useEffect, useState } from "react";
import BarChart from "../Chart/BarChart";
import { useSelector } from "react-redux";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";
import RadarChart from "../Chart/RadarChart";
import DashCard from "../DashCard";
import StockCard from "../StockCard";
import {AiOutlineEye} from "react-icons/ai"
import {GiAnglerFish, GiChickenOven, GiFruitBowl, GiMeatCleaver} from "react-icons/gi"
import {PiPlantBold} from "react-icons/pi";
import AOS from "aos"
import 'aos/dist/aos.css'



const Analytics = () => {
  const main = useSelector((store) => store.ProductsReducer.Users);

  var c = main.map((e) => e.name);
  let d = main.map((e) => e.Order.length);


  const category = useSelector((store) => store.ProductsReducer.TotalProducts);
  const Fruits = category.filter((e)=> e.category==="Fruits");
  const Vegetables = category.filter((e)=> e.category==="Vegetables");
  const Chicken = category.filter((e)=> e.category==="Chicken");
  const Seafood = category.filter((e)=> e.category==="Seafood");
  const Mutton = category.filter((e)=> e.category==="Mutton");

  console.log(Vegetables)

  // ["Fruits","Vegetables","Chicken","Seafood","Mutton"];
  // [100,150,160,120,300];

  const name = ["Fruits","Vegetables","Chicken","Seafood","Mutton"];
  const Length = [Fruits.length,Vegetables.length,Chicken.length,Seafood.length,Mutton.length];
  const colors = ["#FC6183", "green", "#FBCA57", "#369BE0","#0996a0"];
  const logo = [<GiFruitBowl className='fs-2 text-white'/>,<PiPlantBold className='fs-2 text-white'/>,<GiChickenOven className='fs-2 text-white'/>,<GiAnglerFish className='fs-2 text-white'/>,<GiMeatCleaver className='fs-2 text-white'/>]


  const [userData, setUserData] = useState({
    labels: name,
    datasets: [
      {
        label: "Category",
        data: Length,
        backgroundColor: colors,
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])

  return (
    <div>
      <div className="my-4 mt-4 d-flex gap-5 ms-3 justify-content-center" data-aos="fade-left">
        {name.map((e,index)=>  <StockCard text={name[index]} data={Length[index]} bg={colors[index]} comp={logo[index]} />)}
     
      </div>

      <div className="d-block m-auto ms-3" >
        <span className="d-flex gap-4 mt-5" >
          <div className="shadow p-4" style={{ width: "60%" }} data-aos="fade-right">
        <BarChart chatData={userData} />
          </div>
          <div className="shadow p-4" style={{ width: "33%" }} data-aos="fade-left">
        <PieChart chatData={userData} />
          </div>
        </span>
        {/* <RadarChart chatData={userData} /> */}
      </div>
    </div>
  );
};

export default Analytics;
