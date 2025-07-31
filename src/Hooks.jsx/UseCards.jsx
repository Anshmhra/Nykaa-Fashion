import { concat } from "lodash";
import { useState,useEffect } from "react"
function useCards(categoryID){

    const [Detail,setDetail]=useState([]);
    const [header,setHeader]=useState([]);
   



    useEffect(()=>{

        if(!categoryID) {
             console.log("⚠️ No categoryID passed to useCards");
              return;
        }

           
        fetch(`https://www.nykaafashion.com/rest/appapi/V2/categories/products?PageSize=36&filter_format=v2&apiVersion=5&currency=INR&country_code=IN&deviceType=WEBSITE&sort=popularity&device_os=desktop&categoryId=${categoryID}&currentPage=1&sort_algo=default`)
        .then((Response)=>Response.json())
        .then((data)=>{

            const teho=(data?.response?.products || []);

           setDetail(teho);
          const head=(data?.response?.meta_data || []);
          if (head?.h1_tag && !Array.isArray(head.h1_tag)) {
        head.h1_tag = [head.h1_tag];
      }
          setHeader(head);
           console.log(data);

        })
        .catch((error)=>console.log(error));
        

    },[categoryID]);



    return [Detail,header];
}
export  default useCards;

























































// import { useState,useEffect } from "react"

// function UseMiddleBody(){
//     const [fashionCards,setFashionCards]=useState([]);

//     const [handle,setHandle]=useState([]);
//     const [Banner,setBanner]=useState([]);
//     const [gif,setGif]=useState([]);
//     const [shades,setShades]=useState([]);

//     const [option,setOption]=useState([]);

   


//     useEffect(()=>{
//         fetch(` https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=62b001100d661ff7d9465910,652d30cb5c2dd626992db5e1,66e15920cb9bf4aa0ec3aed2,6583f0741b3075b6f8cfce6e,64244fda04c85e6aa7eda84a,67dfd54d7c6bda1a83fbcef6,67dfd50c0860b96a18731f8c,64359781f5694831274cded3,643597bc92cc0c733f2b407c,62c7be78e3894a7578cf5ff0`)

//         .then((Response)=>Response.json())
//         .then((data)=>{
//               const allChildren = data.result.inventory_data[1]?.widget_data?.children || [];
//             setHandle(data?.result?.inventory_data);
//             const banners=data.result.inventory_data[2]?.widget_data?.children || [];
//             setBanner(banners);
//             setFashionCards(allChildren);
//             const greyman=data?.result.inventory_data[6]?.widget_data?.children || [];
//             setGif(greyman);
//             console.log(data);

//             const lines=data?.result.inventory_data[8]?.widget_data?.children || [];
//             setShades(lines);
//              const lone=data?.result.inventory_data[9]?.widget_data?.children || [];
           
//                setOption(lone);
//         })
//         .catch((error )=>console.log(error))
//     },[]);
//     return [fashionCards,handle,Banner,gif,shades,option];
// }
// export default UseMiddleBody;