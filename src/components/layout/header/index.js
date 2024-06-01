import React, { Fragment, useEffect, useState} from "react";
import Style from "./style";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/images/Search.svg";
import profile from "../../../assets/images/profile.svg";
import arrowDropDown from "../../../assets/images/arrow-drop-down.svg";
import notification from "../../../assets/images/notifications.svg"
import { NavLink } from "react-router-dom"

export default function Header(){ 
    return(
        <Style  className= "header Nav bar">
            <div className="wrapper">
                <div className="header-wrapper">
                    <div className="logo">
                      <Link to="/"> 
                        <img src={logo}/>
                    </Link>  
                    </div>
                    <div className="menue">
                        <ul>
                            <li><a className="browse" href="#">Browse</a></li>
                            <li> <NavLink activeClassName="active" to="/"><a href="#">Home</a></NavLink></li>
                            <li> <NavLink activeClassName="active" to="/movies"><a href="#">Movie</a></NavLink></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">New & Popular</a></li>
                            <li><a href="#">My List</a></li>
                            <li><a href="#">Kids</a></li>
                        </ul>
                   </div> 
                   <div className="secondary-navigation"> 
                   <ul>
                    <li className="search-box" >
                     <Link to='/search'>  <img src={searchIcon}/></Link> 
                    </li>
                    <li className="notification">
                        <img src={notification}/>
                    </li>
                    <li className="profile"><img src={profile}/></li>
                    <li className="arrow"><img src={arrowDropDown}/></li>
                   </ul>
                   </div> 
                 </div>
            </div>
        </Style>
    )
    }