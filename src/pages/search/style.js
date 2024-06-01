import styled from "styled-components"

export const Style = styled.div`
.wrapper{
    margin-left: 48px;
    margin-top:2rem;
  
}
h1{
    color: #e5e5e5;
    font-size: xx-large;
    margin-bottom: 1rem;
}
h5{
    color: #e5e5e5;
}
input{
    color: #e5e5e5;
}
.ant-input-affix-wrapper {
    background-color:#000;
    padding: 8px;
    color: #fff;
    width:60%;
}
ul.results{
    display: flex;
    gap: 8px;
    align-items: center;
    list-style: none;
    margin-left: 48px;
    padding: 0;
    overflow-x: hidden;
    margin-top: 4rem;
}
li.results{
      padding: 1rem;
      background-color: #000;
      border-radius: 2px;

      a {
        color: #e5e5e5;
        transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
      }
}
img.results {
    width: 200px;
    height: auto;
    border-radius: 4px;
    margin-bottom: 0.5rem;
        }

 h3.results {
    height: 50px;
     width: 100%;
     margin: 0;
     font-size: 16px;
 }
 h5.undefined{
    margin-left: 48px;
    color: #e5e5e5;
 }
 ol.undefined {
    list-style-type: disc;
    margin-left: 88px;
    margin-top: -24px;
    color: #e5e5e5;
    display:inline-block;
    line-height: 2px;
 }
 .explain{
    margin-bottom:300px;
 }
 @media ( max-width:680px){
    .wrapper{
        width: 140%;
    }
 }
`
export default Style;