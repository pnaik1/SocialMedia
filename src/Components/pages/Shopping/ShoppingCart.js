import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import ImageList from '@mui/material/ImageList';
import "./shoppingCart.css";
import {useContext} from "react";
import {LoginContext} from "../../context/useContext";
const  ShoppingCart=()=> {
  const {theme}=useContext(LoginContext)
    const {
        state: { products },
      } = CartState();
      console.log(products)
    return ( 
        <div className="shopping" id={theme}>
           <div className="ShoppingHeader">
            <div className="ShoppingContent">
            <img src="https://friendkit.cssninja.io/assets/img/icons/logos/store.svg" className="icon-image" alt=""/>
           <span style={{marginTop:"130px"}}>Iconic <br/>Quick fashion for everyone</span>
           </div>
           <div className="shoppingRight" >
            <h4  className=""><b>Overview</b></h4>
            <div style={{display:"flex",marginTop:"5%"}}>
            <span className="ShoppingMiddle">252 <br/>Products</span>
            <span className="ShoppingMiddle">4.7K <br/>Products</span>
            <span className="ShoppingMiddle">2.1K <br/>Follower</span>
            </div>
           </div>
           <p style={{marginTop:"95px"}}><b>About Us</b>< br/>
We are an independent fashion store and we sale finely designed <br/>and handcrafted outfits for the best price.<br/> Browse our collection and discover our products.</p>
           </div>
           
            
        <div className="productContainer">
        <ImageList cols={4} sx={{width:1500}}>
        {products.map((prod) =>{
           
            return (  


        

                <div className="productCont">
          <SingleProduct prod={prod} key={prod.id} />
           </div>
        

            )
            })}
             </ImageList>
      </div>
      
     
    </div> 
    )}
export default ShoppingCart;