
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classes from "./widgets.module.css";
import avatar1 from "../images/avatar1.png";
function Widgets() {
    return (
    <div className="stories">
      <div className={classes.active}>
    <div className={classes.heading}>
      <p className={classes.story}> Stories</p>
      <MoreVertIcon  style={{margin:"6%"}}/>  
    </div>
    <hr/>
    <div className={classes.heading}>
     <AddCircleOutlineIcon fontSize='large'style={{marginLeft:"8%",marginRight:"8%"}}/>
     <div className={classes.content}>
   <h5>
     Add a new Story
   </h5>
   <p>
     Share an image , a video or some text
   </p>
     </div>  
    </div>
   <hr/>
   <div className={classes.heading}>
    <img src={avatar1} width="25%" height="25%" className={classes.img11} alt=""/>
     <div className={classes.content}>
   <h5>
     Profile
   </h5>
   <p>
     Share an image , a video or some text
   </p>
     </div>  
    </div>
      </div>
      </div>
    );
    
    }
    
    export default Widgets;