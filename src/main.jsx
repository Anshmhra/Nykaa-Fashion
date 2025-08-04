
import { createRoot } from 'react-dom/client'
import { lazy, StrictMode, Suspense } from 'react'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { CartProvider } from './Context/CartContext.jsx';
import { ProductCacheProvider } from './Context/SearchContext.jsx';
import { WishlistProvider } from './Context/WishlistContext.jsx'; 












function Main(){
    const Navbar=lazy(()=>import("./components/NavBar.jsx"));
     const HomePage=lazy(()=>import("./components/Homepage.jsx"));
      const Footer=lazy(()=>import("./components/Footer.jsx"));
      const Account=lazy(()=>import("./components/Account.jsx"));
      const Wishlist=lazy(()=>import("./components/Wishlist.jsx"));
      const Cart=lazy(()=>import("./components/Cart.jsx"));
      const Render=lazy(()=>import("./components/Rendring.jsx"));
      const Circle=lazy(()=>import("./components/Circle.jsx"));
      const Product=lazy(()=>import("./components/product.jsx"));
      const MoreProduct=lazy(()=>import("./components/MoreProduct.jsx"));
      const SearchProduct=lazy(()=>import("./components/SearchProduct.jsx"));
      


       const router=createBrowserRouter([
        {
            path:"/",
                element: <Suspense fallback={<div>Loading Home...</div>}><App/></Suspense>,
                children:[
                    {
                       path:"/",
                       element:<Suspense fallback={<div>Loading Home...</div>}><HomePage/></Suspense>
                    },
                    {
                        path:"account",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Account/>
                         </Suspense>

                    },
                     {
                        path:"wishlist",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Wishlist/>
                         </Suspense>

                    },
                    {
                        path:"cart",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Cart/>
                         </Suspense>

                    },
                      {
                        path:"rendring",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Render/>
                         </Suspense>

                    },
                    {
                        path:"circle",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Circle/>
                         </Suspense>

                    },
                     {
                        path:"product",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <Product/>
                         </Suspense>

                    },
                     {
                        path:"moreproduct",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <MoreProduct/>
                         </Suspense>

                    },
                     {
                        path:"searchProduct",
                        element:<Suspense fallback={<div>Loading Home...</div>}>
                        <SearchProduct/>
                         </Suspense>

                    }
                ]

       }])

    return(
        <>
        <ProductCacheProvider>
            <CartProvider>
                  <WishlistProvider>
             <RouterProvider router={router} />
                  </WishlistProvider>
            </CartProvider>
        </ProductCacheProvider>
       
           
        </>
    )
}
createRoot(document.getElementById('root')).render(

    <Main />
    
 
)
