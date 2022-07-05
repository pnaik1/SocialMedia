import { createContext, useContext, useReducer } from "react";
import list from "../pages/Shopping/Data";
  
import { CartReducer } from "./Reducer";
const Cart=createContext();
function Context ({ children })  {
     console.log(children);
    const [state, dispatch] = useReducer(CartReducer, {
      products: list,
      cart: [],
    });
    return (
      <Cart.Provider value={{ state, dispatch}}>
        {children}
      </Cart.Provider>
    );
  };
  
  export const CartState = () => {
    return useContext(Cart);
  };
  
  
  export default Context;
  