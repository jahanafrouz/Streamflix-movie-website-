import React from 'react';
import Style from "./style"; 
import backgroundVideo from "../../assets/videos/elvis.mp4"
import elvis from "../../assets/images/elvis.webp"
import play from "../../assets/images/play.svg"
import info from "../../assets/images/info.svg"
import elvis1 from "../../assets/images/elvis.svg"


const HeroSection = () => (<Style>
  <div className="HeroSection">
   <div className='video-container'><video
      className="video"
      autoPlay={true}  loop
      src={backgroundVideo}
    />
    {/* <img className='backgroundImage' src={elvis1}/> */}
      <img className="elvis" src={elvis}/>
   </div> 
   <div>
      <p className='description'>Elvis Presley finds fame and fortune as the King of Rock and Roll while<br/> struggling to escape the control of his controversial manager.</p>
   </div>
      <div className="buttonContainer">
      <button className='play' >
        <img src={play}/>
          Play
        </button>
        <button className='more'>
          <img src={info}/>
          More Info
        </button>
      </div>
     
  </div>
  </Style>
);



export default HeroSection;