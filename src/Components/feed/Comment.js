import styles from "./feed.module.css";
function Comment({notif}) {
    return (   <>
        <div className={styles.comment3}>
          <img src={notif.img} className={styles.image2}/>
          <p style={{marginTop:"-15px",paddingLeft:"8px"}}>
      
            {notif.para} <br /> {notif.small}
          </p>
        </div>
        <p style={{marginTop:"-10px",paddingLeft:"2%"}}>{notif.para1}</p>
        <div className={styles.replyLike}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true" ></i>
          <span className={styles.like}>{notif.num}</span>
          <p style={{marginTop:"-2px", paddingLeft:"3%"}}>Reply</p>
        </div>
      </>);
}

export default Comment;