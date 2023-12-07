import React,{useState,useEffect} from 'react';
import YouTube,{iframe} from "react-youtube"
import AOS from "aos"
import 'aos/dist/aos.css'

const VideoPlayer = () => {
  
 
  const [width,setWidth] = useState(window.outerWidth);
  
  useEffect(()=>{


   window.addEventListener("resize",()=>{
    
       setWidth(window.outerWidth);
   })
   

  },[])



  const videoId = 'nsBdBkyLW_8'; // Replace with your YouTube video ID

  // Options for the YouTube player (you can customize these)
  const opts = {
    // height: '390',
    // width: '640',
    // height: name1=='TAB'?'220':'390',
    // width: name1=='TAB'?'220':'640',
     height: (width>=350 && width<=450)?150:(width>=451 && width<=550)?180:(width>=551 && width<=850)?260:(width>=851 && width<=1050)?300:(width>=1051 && width<=1300)?350:(width>=1301 && width<=1600)?400:450,
     width:  (width>=350 && width<=450)?150:(width>=451 && width<=550)?180:(width>=551 && width<=850)?260:(width>=851 && width<=1050)?370:(width>=1051 && width<=1300)?500:(width>=1301 && width<=1600)?600:650,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Auto-play the video
      fs:0,
      iv_load_policy:3,
      rel:0,
      showinfo: 1,
      controls: 0,
    },
  };

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])

  return (
    <div id="youtube-player" className="youtube-embed" data-aos="fade-up">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
