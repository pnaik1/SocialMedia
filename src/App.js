
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import {Routes,Route} from "react-router-dom";
import {LoginContext} from "./Components/context/useContext";
import {useEffect, useState} from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Explore from "./Components/pages/Explore/Explore";

import ShoppingCart from './Components/pages/Shopping/ShoppingCart';
function App() {
 
  const [loading,setLoading]=useState(false);
  const [theme,setTheme]=useState("light");
  useEffect(()=>{
    setLoading(true);
  setTimeout(()=>{
  setLoading(false);
  },4000)


  },[])
  return (
    <>
    {
      loading ? <div className='loading'><BounceLoader color={"#4A90E2"} loading={loading}  size={70} /> </div>:
     <>
      <LoginContext.Provider value={{theme,setTheme}}>
      <Header/>
      <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/shopping"  element={<ShoppingCart/>}/>
     <Route path="/explore" element={<Explore/>}/>
     
     </Routes>
        </LoginContext.Provider>   
       </>
    }
    </>
  );
}

export default App;
