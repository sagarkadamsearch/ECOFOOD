import React,{useState,useEffect} from 'react';
import VideoPlayer from './VideoPlayer';
import { styled } from 'styled-components';
import { Diversity2Outlined } from '@mui/icons-material';
import AOS from "aos"
import 'aos/dist/aos.css'

const BenefitsVideo = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
        },[])
    return (
        <DIV className='container d-none d-lg-grid'>   
        <div className="row">
        <div className=' col-md-6 ' data-aos="fade-up">
                <div className='mt-5'>
                   <h1 className='px-5'>Good quality products For Better Living</h1>
                   <p className='px-5'>Get the goodness of your vegetables and fruits with each nutritionally dense serving.</p>
                </div>
            </div>
            <div className='col-md-6'>
            <VideoPlayer/>
            </div>
        </div>
        
        </DIV>
    );
};

export default BenefitsVideo;




const DIV = styled.div`
    

`


