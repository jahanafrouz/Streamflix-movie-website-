// import { Fragment } from "react";
// import Style from "./style";

// const menuItems = [
//     {
//         title:"FAQ",
//         link:"#"
//     },
//     {
//         title:"Help Center",
//         link:"#"
//     },
//     {
//         title:"Contact Us",
//         link:"#"
//     },
//     {
//         title:"Terms of Use",
//         link:"#"
//     },
//     {
//         title:"FAQ",
//         link:"#"
//     },
//     {
//         title:"Help Center",
//         link:"#"
//     },
//     {
//         title:"Contact Us",
//         link:"#"
//     },
//     {
//         title:"Terms of Use",
//         link:"#"
//     },
//     {
//         title:"FAQ",
//         link:"#"
//     },
//     {
//         title:"Help Center",
//         link:"#"
//     },
//     {
//         title:"Contact Us",
//         link:"#"
//     },
//     {
//         title:"Terms of Use",
//         link:"#"
//     },
//     {
//         title:"FAQ",
//         link:"#"
//     },
//     {
//         title:"Help Center",
//         link:"#"
//     },
//     {
//         title:"Contact Us",
//         link:"#"
//     },
//     {
//         title:"Terms of Use",
//         link:"#"
//     },
    
// ]
// function renderFarm(){
//     return menuItems.map(function(item,index){
//         return(
//             <li key={item.title}>
//               <a href={item.link}>{item.title}</a>  
//             </li>
//         );
//     });
// }
// export default function Footer(){
//     return(
//         <Style>
//             <div className="wrapper">
//                 <ul>
//                     {renderFarm()}
//                 </ul>
//              </div>    
//         </Style>
//     )
// }
import React from 'react';
import Style from "./style"; 
import facebook from "../../../assets/images/Facebook.svg"
import twitter from "../../../assets/images/Twitter.svg"
import instagram from "../../../assets/images/Instagram.svg" 
import youtube  from "../../../assets/images/YouTube.svg"

function Footer() {
  return (
    <Style>
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
              <ul>
                <li><a href="#"><img className='icon-size' src={facebook}/></a></li>
                <li><a href="#"><img className='icon-size' src={instagram}/></a></li>
                <li><a href="#"><img className='icon-size' src={twitter}/></a></li>
                <li><a href="#"><img className='icon-size' src={youtube}/></a></li>
              </ul>
        </div>
        <div className="sections"> 
          <div className="footer-section">
                <h3>Media Center</h3>
                <ul>
                  <li><a href="#">Media Library</a></li>
                  <li><a href="#">Ad Choices</a></li>
                  <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>
          <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
          </div>
          <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Help</a></li>
              </ul>
          </div>
          <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
          </div>
        </div> 
        <div className='footer-copyright'>
          <span>© 2020-2024 , Inc.</span>
        </div>
      </div>
    </footer>
    </Style>
  );
}

export default Footer;
