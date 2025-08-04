import { createContext ,useContext,useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishItems, setWishItems] = useState([]);

  function addToWishList(product) {
    const exists = wishItems.some((item) => item.id === product.id);
    if (!exists) {
      setWishItems((prev) => [...prev, product]);
    }
  }

  function removeFromWishlist(id) {
    setWishItems((prev) => prev.filter((item) => item.id !== id));
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
