import { createContext ,useContext,useState} from "react";

const CartContext=createContext();


export function CartProvider({children}){

    const [CartProduct,setCartProduct]=useState([]);
 


   function addToCart(product) {
  const uniqueId = `${product.id}-${product.selectedSize || "NA"}-${product.selectedColor || "NA"}`;

  setCartProduct((prev) => {
    
    const exists = prev.find((item) => item.id === uniqueId);
    if (exists) {
      return prev.map((item) =>
        item.id === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    const updatedProduct = {
      ...product,
      id: uniqueId,
      quantity: 1, 
    };

    return [...prev, updatedProduct];
  });
 

  
}

   
function removeFromCart(productId) {
     if (CartProduct.length <= 0) {
    alert("At least one item must remain in cart");
    return;
  }
   const updatedCart = CartProduct.filter(
    (item) => String(item.id) !== String(productId)
  );
setCartProduct(updatedCart);
}



function additionInProduct(productId){
  const exist=CartProduct.find(mole=>mole.id===productId)
  if(exist){
     setCartProduct((prevItems)=>
      prevItems.map((obj)=>obj.id===productId
    ?{...obj,quantity:obj.quantity+1}:obj
  ));
  }
 
}

function decreasInProduct(productId) {
  setCartProduct((prevItems) =>
    prevItems
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}


    return(
        <CartContext.Provider value={{addToCart,CartProduct,removeFromCart,additionInProduct,decreasInProduct}}>
            {children}
            </CartContext.Provider>
    )
}
export function useCart(){
   return useContext(CartContext);
}