import React, { useState } from "react";
import notification  from "./Notification.json";
import "./Dropdown.css";
 function Notification() {

    return(
    <>
    <ul
      className="services-submenu"
     
    >
    
            <div className="friendgrp">
              <div className="frnd1">
              <h5>
                Notification 
              </h5>
              <i className="fa fa-bell" style={{marginTop:"20px"}}/>
              </div>
        
          {notification.map((item) => {
        return (
          <div className="friends">
            <div style={{display:"flex"}}>
              <img src={item.img} className="noti1"/>
              <p style={{fontSize:"80%"}}>{item.para} <br/>{item.small}
              </p>
              </div>
              <i className={item.icon1} style={{margin:"22px" }}></i>
              </div>
        )
      })}
             <hr/>
             <div style={{textAlign:"center"}}>
               view all
             </div>
          </div>
      
      
    </ul>
  </>
    )
  
  }
  export default Notification;