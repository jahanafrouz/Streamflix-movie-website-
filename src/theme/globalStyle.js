import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 


body{
    margin: 0;
    direction: ltr;
    background: #141414;
}
ul , ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
}
* , *after ,*before {
    box-sizing: border-box;
   
}
.wrapper {
    width: 1000px;
    margin:0 auto;
}


`