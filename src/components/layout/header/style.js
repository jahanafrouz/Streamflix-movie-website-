import styled from "styled-components";

export const Style = styled.div`
.wrapper {
    width: 100%;
}
.header.Nav.bar{
    position:fixed;
    top: 0;
    left: 0;
    background-color: #141414;
    z-index: 999;
}

.header-wrapper{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    position: sticky;
    top: 0;
    height: 68px;
    min-height: 70px;
    z-index: 1;
    margin-left:24px;
}
    .logo{
    padding: 8px;
    margin: 0;
        img{
            width: 180px;
            height: auto;
        
        }
}
.menue{
    margin-top: 0;
    width: calc(100% - 240px);

    ul{
        display: flex;
        gap:20px;
        li{
            a{
            color: #e5e5e5;
            align-self: start;  
            &:hover {color:gray;}
             }
            }
        }
    }
   a.browse{
    display: none;
   
   }
  a.active{
    color: #004fd7;
    cursor: default;
    font-weight: bold;
       }   

.secondary-navigation{
    ul{
        display: flex;
        margin-right:48px;
        cursor: pointer;
        li.search-box ,li.notification{
            margin:10px 16px 0 0 ;
        }
        li.profile{
            margin-top:6px;
        }
        li.arrow{
            margin:16px 0 0 6px ;
        }
    }

}
@media(max-width:900px ){
  .menue ul {
    display:flex;
    gap:16px;
    font-size: small;
  }
    .secondary-navigation{
       margin-left: 40px;
    }
}
@media (max-width: 880px){
    .menue{
    display:flex;
    gap:16px;
    font-size: small;
    }
    .secondary-navigation{
       margin-left: 40px;
    }
    .logo img{
      width: 160px;
      height: auto;
    }
}
@media (max-width: 860px) {
 .menue {
   display:flex;
   gap:16px;
    font-size: small;
  }
 .secondary-navigation {
    margin-left:40px;
   
  }
  .logo img{
   width: 160px;
   height: auto;
  }
}
@media( max-width:840px ){
   .menue{
      display:flex;
   gap:16px;
    font-size: smaller;
    }
    .secondary-navigation{
       margin-left: 40px;
    }
}
@media( max-width:820px ){
   .menue{
      display:none;
    }
   a.browse{
      display:block;  
   }
    .secondary-navigation{
       margin-left:400px ;
    }
}
@media( max-width:800px ){
   .menue{
      display:none;

    }
    .secondary-navigation{
       margin-left:400px ;
    }
}
@media( max-width:780px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:380px ;
    }
}
@media( max-width:760px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:360px ;
    }
}
@media( max-width:740px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:340px ;
    }
}
@media( max-width:720px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:300px ;
    }
}
@media( max-width:700px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:280px ;
    }
}
@media( max-width:680px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:280px ;
    }
}
@media( max-width:640px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:260px ;
    }
}
@media( max-width:620px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:240px ;
    }
}
@media( max-width:600px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:200px ;
    }
}
@media( max-width:580px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:180px ;
    }
}
@media( max-width:560px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:160px ;
    }
     .search-box img{
        width: 20px;
        height: auto;
       }
     .notification img{
        width: 20px;
        height: auto;
       }
     .profile img{
        width: 28px;
        height: auto;
    }
    li.arrow img{
        width: 12px;
        height: auto;
       }
       .logo img{
        width: 160px;
        height: auto;
       }
    }

@media( max-width:540px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:160px ;
    }
}
@media( max-width:520px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:160px ;
    }
}
@media( max-width:500px ){
   .menue{
       display: none;
    }
    .secondary-navigation{
       margin-left:140px ;
    }
    .logo img{
        width: 140px;
        height: auto;
    }
}
`;
export default Style;