import styled from "styled-components";

export const Style = styled.div`
.footer{
    background: #141414;
    color: gray;
    padding: 20px
}
.footer-container{
  width: 1000px;
}
.social-media ul {
margin-bottom:-50px;
margin-left:90px;
margin-top: 60px;
}
.social-media ul li {
  display: inline-block;
  margin: 0 8px;
  width: auto;
  height: auto;
  align-items: baseline;
}
.icon-size{
  width: 24px;
  height:auto;
}
.sections{
    display:flex;
    gap:40px;
    flex-direction:row;
    align-items:baseline;
    justify-content:space-around;
    padding: 10px 25px;
    margin: 40px 0 60px 0;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 80px;
}
.sections ul {
  display:flex;
  flex-direction:column;
}
li a {
  color: gray;
  transition: all .3s ease-in-out;
}
h3:hover , a:hover, a:focus {
  text-decoration: underline;
  cursor: pointer;
}
.footer-copyright {
  font-size: 11px;
  margin-left: 90px;
  letter-spacing: 0;
}


@media (max-width: 1000px){
  .footer-container {
      width: 100%;
}}
@media (max-width: 620px) {

.social-media ul {
margin-left:20px;
}
.footer-section h3{
 font-size: 16px;
}
 .social-media img {
    width: 20px;
    height: 20px;
  }
  .footer-copyright {
  margin-left: 20px;
}
.sections{
    display:flex;
    gap:20px;
    flex-direction:row;
    align-items:baseline;
    justify-content:space-around;
    padding: 10px 25px;
    margin: 40px 0 80px 0;
    font-size: 13px;
    line-height: 26px;
  
}
}

`
export default Style;

