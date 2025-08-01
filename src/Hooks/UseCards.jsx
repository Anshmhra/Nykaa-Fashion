import { useState, useEffect } from "react";
import { useProductCache } from "../Context/SearchContext";

function UseCards(categoryID) {
  const [Detail, setDetail] = useState([]);
  const [header, setHeader] = useState([]);

  const {
    addProductsToCache,
    setCategoryHeader,
    cachedBrands,
  } = useProductCache();

  useEffect(() => {
    if (!categoryID) {
      console.warn("No categoryID passed to UseCards");
      return;
    }

    if (
      cachedBrands[categoryID] &&
      Array.isArray(cachedBrands[categoryID])
    ) {
   
      setDetail(cachedBrands[categoryID]);
      return;
    }

    const URL = `https://www.nykaafashion.com/rest/appapi/V2/categories/products?PageSize=36&filter_format=v2&apiVersion=5&currency=INR&country_code=IN&deviceType=WEBSITE&sort=popularity&device_os=desktop&categoryId=${categoryID}&currentPage=1&sort_algo=default`;

   

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const products = data?.response?.products || [];
        const meta = data?.response?.meta_data || {};

        setDetail(products);
        addProductsToCache(categoryID, products);

        if (meta?.h1_tag && !Array.isArray(meta.h1_tag)) {
          meta.h1_tag = [meta.h1_tag];
        }

        setHeader(meta);
        setCategoryHeader(meta);
      })
      .catch((error) =>
        console.error("Failed to fetch category products:", error)
      );
  }, [categoryID]);

  return [Detail, header];
}

export default UseCards;
