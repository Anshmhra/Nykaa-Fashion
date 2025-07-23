
import { createRoot } from 'react-dom/client'
import { lazy, StrictMode, Suspense } from 'react'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";








function Main(){
    const Navbar=lazy(()=>import("./components/NavBar.jsx"));
     const HomePage=lazy(()=>import("./components/Homepage.jsx"));
      const Footer=lazy(()=>import("./components/Footer.jsx"));
      const Account=lazy(()=>import("./components/Account.jsx"));
      const Wishlist=lazy(()=>import("./components/Wishlist.jsx"));
      const Cart=lazy(()=>import("./components/Cart.jsx"));
      const Render=lazy(()=>import("./components/Rendring.jsx"));


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

                    }
                ]

       }])

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}
createRoot(document.getElementById('root')).render(

    <Main />
    
 
)
