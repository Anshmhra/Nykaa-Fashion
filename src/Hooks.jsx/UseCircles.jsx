import { useState,useEffect,useRef } from "react"

function useCircles(brandId,filters = {}){

    const [Call,setCall]=useState(null);
     const [syrax,setsyrax]=useState([]);

       
        const previousFilters = useRef();

    useEffect(()=>{


        const currentFiltersStr = JSON.stringify(filters);
    const prevFiltersStr = JSON.stringify(previousFilters.current);

    if (brandId && currentFiltersStr === prevFiltersStr) {
      return; 
    }

    previousFilters.current = filters;

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

             const longclaw=opcode.response?.products || [];

             setCall(longclaw);

             const vermithor=opcode.response?.meta_data || [];

             if (vermithor?.h1_tag && !Array.isArray(vermithor.h1_tag)) {
            vermithor.h1_tag = [vermithor.h1_tag];
      }

             setsyrax(vermithor);
           
     
        }
    )
    .catch((error)=>console.log(error));
    },[brandId,JSON.stringify(filters)]);


    return [Call,syrax];
}
export default useCircles;
