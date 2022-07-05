import "./sideBar.css"
import weather from "../images/weather4.jpeg";
export default function SideBar() {
    return (
<>
<div className="sidebar">
    <div className="sidebarWrapper">
        <div className="weather">
            <img src={weather} className="img-1" alt=""/>
        </div>
    </div>
</div>
</>
    );
}