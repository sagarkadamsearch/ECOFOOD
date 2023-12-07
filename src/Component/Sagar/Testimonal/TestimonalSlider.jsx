import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import { styled } from "styled-components";
import TestimonalCard from "./TestimonalCard";

export default function TestimonalSlider() {  
 

  let arr2 = [
    {name:"Jhon sein Raju",
     image:"https://www.djokicpartners.rs/wp-content/uploads/2023/05/matej.jpg",
     feedback:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
     rating:4,
  },
  {name:"Jhon sein Raju",
  image:"https://www.djokicpartners.rs/wp-content/uploads/2023/05/matej.jpg",
  feedback:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  rating:4,
  },
  {name:"Jhon sein Raju",
  image:"https://www.djokicpartners.rs/wp-content/uploads/2023/05/matej.jpg",
  feedback:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  rating:4,
  },
  {name:"Jhon sein Raju",
  image:"https://www.djokicpartners.rs/wp-content/uploads/2023/05/matej.jpg",
  feedback:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  rating:4,
  },
  {name:"Jhon sein Raju",
  image:"https://www.djokicpartners.rs/wp-content/uploads/2023/05/matej.jpg",
  feedback:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  rating:4,
  },
  ]


 

  return (
    <DIV className="main testi">
        <div className="headingDiv">
             {/* <p>Similar Category Prodcuts</p> */}
        </div>
      <Carousel
        showArrows={true}   
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true} // Display three images at a time
        centerSlidePercentage={100/3} // Set the percentage based on the number of images you want to display
        emulateTouch={true} // Enable touch emulation for desktop
        swipeable={true}
        infiniteLoop={true}
        interval={1700}
        preventMovementUntilSwipeScrollTolerance={true}
        transitionTime={200}
        useKeyboardArrows={true}
        swipeScrollTolerance={0}
      >
     {arr2.map((card,index)=><TestimonalCard {...card} key={index}/>)}
      </Carousel>
    </DIV>
  );
}


const DIV = styled.div`
 width:100%;
 padding-bottom: 60px;
 padding-top: 60px;
 cursor:pointer;

 /* .headingDiv{
    text-align:left;
    margin-left:10px;
    color: black;
    font-size: 30px;
    font-weight: 500;
 } */
`