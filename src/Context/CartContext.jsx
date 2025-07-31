import { createContext ,useContext,useState} from "react";

const CartContext=createContext();

export function CartProvider({children}){

    const [CartProduct,setCartProduct]=useState([]);


    function addToCart(product){
        setCartProduct([...CartProduct, product])
       
    }
    return(
        <CartContext.Provider value={{addToCart,CartProduct}}>
            {children}
            </CartContext.Provider>
    )
}
export function useCart(){
   return useContext(CartContext);
}