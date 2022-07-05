import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect ,useState} from 'react';
import { CartState } from "../context/Context";
import Button from '@mui/material/Button';
import "./Dropdown.css";
function CartItem() {
    const {
        state: { cart },
        dispatch
        
      } = CartState();
    const [total,setTotal]=useState();
  
    useEffect(()=>{
      setTotal(
          cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)
          
      );
    },[cart])
    console.log(total);
    return (  
        <>
        <ul
          className= "services-submenu " style={{marginLeft:"-400px"}}
        >
        
                <div className="friendgrp frnds" >
                  <div className="frnd2">
                  <h5>
                    Cart
                  </h5>
                 {
                  cart.length > 0 ? (

               <div className='frnd3'>
               {
                   cart.map((prod)=>{
                     return(
                        <div className="cartItem" key={prod.id} style={{margin:"2%"}}>
                       <img src={prod.img} width="15%"/>
                       <span className="cartItemDetail">
                       <span style={{margin:"2%"}}>{prod.title}</span>
                       <span style={{margin:"3%"}} >Rs {prod.price}</span>
                       <span onClick={()=>{
                        console.log("hello")
                       dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod
                       })

                     }}>
                     <DeleteIcon className='deleteIcon' 

                       />            
         </span>
                       </span>

                        </div>

                     )
                       
                   })
               }

               <div>
            
                <div>
               <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        </div>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>

               </div>
               </div>


                  ):(

                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )
                 }
                  </div>
                
              </div>   
        </ul>
      </>
    );
}

export default CartItem;