import React, { useEffect } from "react";
import ReviewCard from './ReviewCard';
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Reviews() {
    const reviews = [
        {
          title: "Rajesh Kumar",
          message: "I am very happy with this product. It exceeded my expectations!"
        },
        {
          title: "Sneha Sharma",
          message: "The customer service was excellent. They were very responsive to my inquiries."
        },
        {
          title: "Amit Patel",
          message: "Unfortunately, I was not satisfied with the quality of the product. It had several issues."
        },
        {
          title: "Priya Singh",
          message: "I had an amazing experience using this service. Highly recommended!"
        },
        {
          title: "Neha Mehta",
          message: "The quality of the product is impressive. I'm very pleased with my purchase."
        },
        {
          title: "Vikram Reddy",
          message: "The product was delivered to me faster than I expected. Great job!"
        },
        {
          title: "Sanjay Gupta",
          message: "The support team was excellent in assisting me with my issues. Thank you!"
        },
        {
          title: "Anita Joshi",
          message: "This company provides top-notch service. I'm a satisfied customer."
        },
        {
          title: "Rahul Sharma",
          message: "I would highly recommend this product to anyone looking for quality."
        },
        {
          title: "Meera Iyer",
          message: "The product's performance is outstanding. I'm impressed."
        },
        {
          title: "Kiran Menon",
          message: "The team behind this product is very responsive and attentive."
        },
        {
          title: "Rajiv Khanna",
          message: "I found this product to be a good value for the price."
        },
        {
          title: "Pooja Desai",
          message: "I'm very pleased with my purchase. It's exactly what I needed."
        },
        {
          title: "Deepak Nair",
          message: "This product is easy to use and user-friendly."
        },
        {
          title: "Sarika Verma",
          message: "The quality of this product is excellent. I couldn't be happier."
        },
        {
          title: "Manish Choudhary",
          message: "This product has been a great investment for my business."
        }
        // You can continue adding more reviews with first names and last names as titles
      ];
      
      useEffect(()=>{
        AOS.init({duration:2000})
        },[])
  return (
    <div className='d-flex flex-wrap justify-content-center' data-aos="fade-left">
{reviews.map((e)=>(
    <ReviewCard {...e}/>
))}
    </div>
  )
}
