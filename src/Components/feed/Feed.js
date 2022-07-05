import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import styles from "./feed.module.css";
import publish from "../images/publish.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import Feed1 from "./feed.json";
import FeedItem from "./FeedItem";
const array = [
  {
    icon: (props) => <BorderColorOutlinedIcon {...props} />,
    name: "Publish",
  },
  {
    icon: (props) => <CollectionsOutlinedIcon {...props} />,
    name: "Albums",
  },
  {
    icon: (props) => <VideocamOutlinedIcon {...props} />,
    name: "Videos",
  },
];
const Media = [
  {
    icon: (props) => <MovieOutlinedIcon {...props} />,
    name: "Media",
  },
  {
    icon: (props) => <TagFacesIcon {...props} />,
    name: "Activity",
  },
  {
    icon: (props) => <MoreHorizIcon {...props} />,
  },
];
function Feed() {
  return (
   
    <div className={styles.feed }>
      <div className={styles.active}>
        <ul className={styles.unorder}>
          {array.map((arr) => {
            return (
              <li className={styles.list}>
                <arr.icon
                  className={styles.logo}
                  style={{ marginTop: "15px" }}
                />
                <p>{arr.name}</p>
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex" }}>
          <img src={publish} width="24%" alt=""/>
          <span className={styles.text}> Write something about you...</span>
        </div>
        <hr className={styles.horizon} />
        <div className={styles.bottomMain}>
          {Media.map((arr) => {
            return (
              <div className={styles.bottom}>
                <arr.icon
                  className={styles.logo}
                  style={{ marginTop: "5px" }}
                />
                <div className={styles.para}>{arr.name} </div>
              </div>
            );
          })}
        </div>
      </div>

      {Feed1.map((feed,index) => {
        console.log(index);
        return (
          <FeedItem feed={feed} key={index} />
        );
      })}
    </div>
   
  );
}
export default Feed;
