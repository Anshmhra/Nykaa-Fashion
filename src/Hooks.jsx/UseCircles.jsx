import { useState,useEffect } from "react"

function useCircles(brandId,filters = {}){

    const [Call,setCall]=useState(null);

    useEffect(()=>{

        if(!brandId) {
             console.log("⚠️ No brandId passed to useCircles");
              return;

        }
        

          let Url=`https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=${brandId}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`
           for (const key in filters) {
      Url += `&${key}=${filters[key]}`;
    }

        fetch(Url)
        .then((Response)=>Response.json())
        .then((opcode)=>{
            
             console.log(opcode);

             const longclaw=opcode.response.products || [];

             setCall(longclaw);
           
     
        }
    )
    .catch((error)=>console.log(error));
    },[brandId,JSON.stringify(filters)]);


    return Call;
}
export default useCircles;
