import CommentIcon from "@material-ui/icons/Comment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import comment from "./comment.json";
import styles from "./feed.module.css";
import { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import Comment from "./Comment";
function FeedItem({feed ,index}) {
  const [open, setOpen] = useState("false");
    return (
      <div className={styles.active} >
      <div className={styles.head}>
        <div style={{ display: "flex" }}>
          <img src={feed.img} className={styles.image1} />
          <h5 style={{ marginTop: "7%" }}>
            {feed.small} <br /> {feed.big}
          </h5>
        </div>
        <SearchIcon style={{ margin: "5%" }} />
      </div>
      <p style={{ padding: "0 6%", marginTop: "-1px" }}>{feed.para}</p>
   
      <img  src={feed.img1}
        width="90%"
        style={{ margin: "0 5%", borderRadius: "15px" }}
      />
      <div className={styles.comment1}>
        <span className={styles.comment2}>
          <CommentIcon
            fontSize="small"
            style={{ color: "white" }}
            onClick={() => {
              setOpen("true");
            }}
          />
        </span>
        <span className={styles.comment2}>
          <FavoriteBorderIcon
            fontSize="small"
            style={{ color: "white" }}
          />
        </span>
        <span className={styles.comment2}>
          <ShareIcon
            fontSize="small"
            style={{ color: "white" }}
          />
        </span>
      </div>
      {   open=="true" ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2%",
            }}
          >
            <h5>Comment(8)</h5>
            <i class="fa fa-times" aria-hidden="true" style={{}} onClick={()=>{setOpen("false")
          
          console.log(open[index])
          }}></i>
          </div>
          {comment.map((notif) => {
            return (
             <Comment notif={notif} />
            );
          })}
        </div>
      ):""}

      <div className={styles.bottom4}>
        <div style={{ display: "flex" }}>
          <img src={feed.img2} className={styles.image2} />
          <img src={feed.img3} className={styles.image2} />

          <div style={{ marginTop: "-10px", fontSize: "12px" }}>
            {" "}
            {feed.para1} <br /> {feed.para2}
          </div>
        </div>

        <span
          style={{ display: "flex", margin: "2%", marginTop: "-2px" }}
        >
          <CommentIcon />
          <span>{feed.num1}</span>
          <FavoriteBorderIcon />
          {feed.num2}
          <span>{feed.num2}</span>
        </span>
      </div>
    </div>
    )
}

export default FeedItem;