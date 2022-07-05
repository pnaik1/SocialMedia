import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Record from "./friend.json";
import "./Dropdown.css";
import {useContext} from "react";
import {LoginContext} from "../context/useContext";
import ReactSwitch from "react-switch";

function Dropdown() {
   
  return (
    <>
      <ul
        className="services-submenu"
      >
      
              <div className="friendgrp">
                <div className="frnd1">
                <h5>
                  friend group
                </h5>
                <SearchIcon style={{marginTop:"20px"}}/>
                </div>
          
            {Record.map((item) => {
          return (
            <div className="friends">
              <div style={{display:"flex"}}>
                <img src={item.img} className="dropdown-image" alt=""/>
                <h5>{item.small} 
                </h5>
                </div>
                <div>
                <i className={item.icon1} style={{margin:"22px"      }}></i>
                <i className={item.icon2} style={{marginTop:"22px"}}></i>
                </div>
                </div>
          )
        })}
               <hr/>
               <div style={{textAlign:"center"}}>
                 view all </div>
            </div>
        
        
      </ul>
    </>
  );
}

export default Dropdown;


export function ProfileDetails() {
  const { theme,setTheme}=useContext(LoginContext);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return(
  <>
  <ul
    className= "services-submenu"
    
  >
  
          <div className="friendgrp1 ">
            <div className="frnd1">
            <p style={{color:"grey"}}>
              My Profile
            </p>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}  />
            </div>
      
      
        </div>
    
    
  </ul>
</>
  )

}