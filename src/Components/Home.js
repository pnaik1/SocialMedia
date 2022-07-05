import SideBar from "./SideBar/SideBar";
import Feed from ".//feed/Feed";
import Widgets from "./Widgets/Widgets";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useContext} from "react";
import {LoginContext} from "./context/useContext";
import "./Home.css";
function Home() {

  const {theme}=useContext(LoginContext);
    return ( 
      <div id={theme} >
        <Box sx={{flexGrow:1}} className="ref" style={{marginTop:"86px"}}>
        <Grid container spacing={3}>
          <Grid item xs={0} md={3} lg={3} 
          display={{ xs: "none",md:"block", lg: "block" }}>
         
        <SideBar/>
    
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Feed/>
        </Grid>
        <Grid item xs={0} md={3} lg={3}
         display={{ xs: "none",md:"block", lg: "block" }}>
        
        <Widgets/>
        </Grid>
        </Grid>
        </Box>
        </div>
     );
}

export default Home;