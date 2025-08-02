import { useState, useEffect, useRef } from "react";
import { useProductCache } from "../Context/SearchContext";

function useCircles(brandId, filters = {}) {
  const [Call, setCall] = useState(null);
  const [syrax, setsyrax] = useState([]);

  const { addProductsToCache, cachedBrands } = useProductCache();
  const previousFilters = useRef();

  useEffect(() => {
    const currentFiltersStr = JSON.stringify(filters);
    const prevFiltersStr = JSON.stringify(previousFilters.current);

    if (!brandId) {
      console.log("⚠ No brandId passed to useCircles");
      return;
    }


    if (
      cachedBrands[brandId] &&
      currentFiltersStr === prevFiltersStr &&
      Array.isArray(cachedBrands[brandId])
    ) {
     
      setCall(cachedBrands[brandId]);
      return;
    }

  
    previousFilters.current = filters;

    let Url = `https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=${brandId}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`;

    for (const key in filters) {
      if (filters[key]) {
        Url += `&${key}=${filters[key]}`;
      }
    }

    

    fetch(Url)
      .then(async (response) => {
        const contentType = response.headers.get("content-type");

        if (!response.ok || !contentType?.includes("application/json")) {
          const text = await response.text();
          throw new Error(`API Error: ${text}`);
        }

        return response.json();
      })
      .then((opcode) => {
        console.log(opcode);

        const longclaw = opcode.response?.products || [];
        setCall(longclaw);

        addProductsToCache(brandId, longclaw);

        const vermithor =
          opcode.response?.meta_data || opcode.response?.seo_info || {};

        if (vermithor?.h1_tag && !Array.isArray(vermithor.h1_tag)) {
          vermithor.h1_tag = [vermithor.h1_tag];
        }

        setsyrax(vermithor);
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setCall([]);
      });
  }, [brandId, JSON.stringify(filters)]);

  return [Call, syrax];
}

export default useCircles;
