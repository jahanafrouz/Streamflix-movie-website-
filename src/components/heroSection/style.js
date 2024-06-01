
import styled from "styled-components";
 

export const Style = styled.div`
.HeroSection {
  position: relative;
  height:100vh;
  color: #fff;
  margin-bottom:-80px;
}

.video{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.7;
    }
    
  .elvis {
    width: 300px;
    height: auto;
    margin-top: 108px;
    margin-left:48px;
    
  }
  p.description{
    font-size:16px;
    font-weight:400;
    line-height:normal;
    margin-left:48px;
    margin-top:60px;
    padding:10px 10px 10px 0;
  }
  .buttonContainer{
    display: flex;
    gap: 14px;
    margin-left:48px;
  }
  button.play{
    display: flex;
    width: 120px;
    height: 40px;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    font-size:18px;
    font-weight:bold;
    background:#fff;
    border:black;
    color: #000;
    cursor:pointer;
    box-shadow: none;
    border-radius:4px;
    letter-spacing: 0.5px;
        transition: background-color 0.2s ease-in-out;
    &:hover{
      background:#efefef;
    }
  }
  button.more{
    display: flex;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    width:160px;
    height: 40px;
    font-size:18px;
    font-weight:bold;
    background: rgba(83, 83, 83, 0.60);
    color: white;
    text-align: center;
    padding: 10px;
    box-shadow: none;
    border:black;
    cursor: pointer;
    border-radius:4px;
    transition: background-color 0.2s ease-in-out;

    &:hover { 
        background-color: rgba(104, 104, 105, 0.5);
    }
  
  }
  @media  (max-width:1250px){
  img.elvis{
    width: 280px;
    height: auto;
  }
 p.description{
  font-size: 14px;
  position: absolute;
  top: 160px;
  
 }
 button.play {
    width: 100px;
    height: 38px;
    font-size: 16px;
    position: absolute;
    top: 300px;
 }
 button.more {
     width:140px;
    height: 38px;
    font-size: 16px;
    position: absolute;
    top: 300px;
    left: 160px;
 }
 .video-container{
     width: 100%;
     height: 100%;
  .video{
    width: 100%;
    height: 80%;
  }
  }
}

@media  (max-width:860px){
  img.elvis{
    width: 280px;
    height: auto;
  }
 p.description{
  font-size: 14px;
 }
 button.play {
    width: 100px;
    height: 38px;
    font-size: 16px;
 }
 button.more {
     width:140px;
    height: 38px;
    font-size: 16px;
 }
}
 @media (max-width:700px){
  img.elvis{
    width: 240px;
    height: auto;
    margin-top: 200px;
  }
  button.play {
    width: 80px;
    height: 38px;
    font-size: 14px;
    margin-top:32px;
    position:absolute;
    top:280px;
 }
 button.more {
     width:120px;
    height: 38px;
    font-size: 14px;
    margin-top:32px;
    position:absolute;
    top: 280px;
    left: 140px;
 }
 p.description{
  display:none;
 }
 .video-container{
     width: 100%;
     height: 100%;
  .video{
    width: 100%;
    height: 80%;
  }
  }
 }
 @media (max-width:600px){
  img.elvis{
    width: 200px;
    height: auto;
    position:absolute;
    top:1%;
  }
  button.play {
    width: 75px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    top: 280px;
 }
 button.more {
     width:110px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    top: 280px;
    left: 140px;
  
 }
 .video-container{
     width: 100%;
     height: 100%;
  .video{
    width: 100%;
    height: 80%;
  }
  }
}
 @media (max-width:500px){
  img.elvis{
    width: 200px;
    height: auto;
    position:absolute;
    top: 0;
   
  }
  button.play {
    width: 75px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    top:280px;
 }
 button.more {
    width:110px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    top:280px;
    left: 140px;
 }
 
  .video-container{
     width: 100%;
     height: 100%;
  .video{
    width: 100%;
    height: 80%;
  }
  }
}

`
export default Style;
