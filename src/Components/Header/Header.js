import "./Header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
import Profile from "../images/profile.jpg";
import Logo from "../images/Hre.png";
import { useRef } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { AppBar, Toolbar } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Dropdown from "./Dropdown";
import Notification  from "./Notification";
import { ProfileDetails } from "./Dropdown";
import {useContext} from "react";
import {LoginContext} from "../context/useContext";
import {useNavigate} from "react-router-dom";
import { CartState } from "../context/Context";
import CartItem from "./CartItem";
function Header() {
  const {
    state: { cart },
  } = CartState();
  const navigate=useNavigate();
  const {theme}=useContext(LoginContext);
  const ref = useRef();
  const ref1=useRef();
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [profile,useprofile]=useState(false);
  const [cartItem ,setCart]=useState(false); 

 

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ((dropdown && ref.current && !ref.current.contains(e.target))||(dropdown1 && ref1.current && !ref1.current.contains(e.target))) {
        setDropdown(false);
        setDropdown1(false);
        
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdown, dropdown1]);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }} style={{ position: "fixed" }} className={theme}>
        <Toolbar>
          <img src={Logo} alt="" style={{ width: "2%" }} />

          <div className="header_left">
            <div
              className="head-red"
              ref={ref}
              
            >
              <FavoriteBorderIcon fontSize="small" className="logo" onClick={() => {setDropdown(!dropdown)
            
              }} />
              {dropdown && <Dropdown />}
            </div>
            <div className="head">
              <NotificationsNoneIcon
                className="logo"
                ref={ref1}
                onClick={() => {setDropdown1(!dropdown1)
          
                }}
              />
              {dropdown1 && <Notification />}
            </div>

            <div className="head active">
              <MailOutlineIcon className="logo "  />
              <span class="indicator"></span>
            </div>
            <div className="head">
              <ChatBubbleOutlineIcon className="logo" />
            </div>
            <div className="head">
              <AppsIcon className="logo"  onClick={()=>navigate('/explore')}/>
            </div>
          </div>
          <div className="header_right">
            <div className="header_input">
              <SearchIcon />
              <input placeholder="Search" type="text" />
            </div>
            <div>
              <ShoppingCartOutlinedIcon
                className="logo"
                style={{ paddingTop: "10px" }}
                onClick={() => {setCart(!cartItem)
               
                  }}
              />
              <span className="Cart1">{cart.length}</span>
              
             { 
             cartItem && <CartItem/>
              }
              {
                console.log(cartItem)
              }
            </div>
          </div>
          <div>
          <img src={Profile} alt="" className="profile " onClick={()=>{
            useprofile(!profile)
          }} />
          {profile && <ProfileDetails/>}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default Header;
