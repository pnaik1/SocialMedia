import "./explore.css";
import Input from '@mui/material/Input';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InputAdornment from '@mui/material/InputAdornment';
import {Stack,ImageList,ImageListItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import mediaContent from "./exploreData";
import {useContext} from "react";
import {LoginContext} from "../../context/useContext";
function Explore() {
  const {theme}=useContext(LoginContext);
  const navigate=useNavigate();
    return (  
      
        <div className="explore" id={theme}>
            <div className="explore1">
            <h1>Explore</h1>
            <div className="explore2">
            <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
           <FilterAltIcon/>
            </InputAdornment>
          }
        />
            </div>
            </div>
           
            <Stack spacing={3} className="row">
            <ImageList sx={{ width: 600, height: 550 }} cols={3} rowHeight={164} className="spacing">
 {mediaContent.map((prod,index)=>{
  return(
   <ImageListItem className="col" onClick={()=>{ if(index==0)
   
   {navigate("/")}
   else if(index==2)
   {
    navigate("/shopping")
   }
   
   }} >
   <img className="imageIcon"src={prod.img} alt=""/>
   <h4 className="para">{prod.title}</h4>
  </ImageListItem>
  );
 })}
   
    
  
</ImageList>
</Stack>
            </div>
      
    );
}

export default Explore;