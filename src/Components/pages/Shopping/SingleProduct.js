import { CartState } from "../../context/Context";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "./shoppingCart.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
const currencies = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];
function SingleProduct({prod}) {
  const [currency, setCurrency]=useState('1');
    const {
        state: { cart },
        dispatch,
      } = CartState();
    return ( 
        <div className="products" >
           <Card>
               <CardContent  style={{borderRadius:"92px"}}>
                 <div className="ProductList" >
                   <img src={prod.img}/>
                   <div className="product1">
                   
                    <p>{prod.title}</p>
                    <div>
                   <span style={{marginRight:"2%"}}>Rs {prod.price}</span>
                 
                 
            <TextField className="text" 
            id="standard-select-currency-native"
            select
            value={currency}
            variant="standard"
            onChange={(e) => {
              setCurrency(e.target.value)
               dispatch({
                 type: "CHANGE_CART_QTY",
                 payload: {
                   id: prod.id,
                   qty: e.target.value,
                 },
               })
               console.log(e.target.value)
              }
             }
            >
              {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
              
           </TextField>
           </div>
               
                   {cart.some((p) => p.id === prod.id) ? (
                 <Button 
              variant="outlined"
           
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button style={{margin:"6%"}}
             variant="contained"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
           
            >
              { "Add to Cart"}
            </Button>
          )}  
         
           
          </div>
          </div>
               </CardContent>
           </Card>

        </div>
     );
}

export default SingleProduct;