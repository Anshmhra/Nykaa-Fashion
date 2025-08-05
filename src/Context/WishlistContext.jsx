import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishItems, setWishItems] = useState([]);

  function addToWishList(product) {
    const exists = wishItems.some(
      (item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
    );

    if (!exists) {
      setWishItems((prev) => [...prev, product]);
    }
  }

  
  function removeFromWishlist(product) {
    setWishItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedColor
          )
      )
    );
  }

  return (
    <WishlistContext.Provider value={{ wishItems, addToWishList, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
