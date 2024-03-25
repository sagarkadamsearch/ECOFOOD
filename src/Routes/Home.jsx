import React from 'react'
import Fruits from '../Component/Fruits'
import Dishes from '../Component/Dishes'
import HeroSection from '../Component/HeroSection'
import Services from '../Component/services'
import TestimonalSlider from '../Component/S/Testimonal/TestimonalSlider'

export default function Home() {
  // const data = useSelector(store=>store);
  // console.log(data)
  return (
    <div>
      <HeroSection/>
      <Services/>
      <Fruits/>
      <Dishes/>
      {/* <TestimonalSlider/> */}
      {/* <Testimonial/> */}
    </div>
  )
}
