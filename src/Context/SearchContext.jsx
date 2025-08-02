import { createContext, useContext, useState } from "react";

const ProductCacheContext = createContext();

export const ProductCacheProvider = ({ children }) => {
  const [categoryHeader, setCategoryHeader] = useState(null);
  const [cachedBrands, setCachedBrands] = useState({});
  const [syrax, setSyrax] = useState(null);

  const addProductsToCache = (brandId, newProducts = []) => {
    if (!Array.isArray(newProducts)) {
      console.warn("⚠️ newProducts is not an array:", newProducts);
      return;
    }

    setCachedBrands((prev) => {
      const existing = prev[brandId];
      if (JSON.stringify(existing) === JSON.stringify(newProducts)) {
        return prev;
      }

      return {
        ...prev,
        [brandId]: newProducts,
      };
    });
  };

  const addBrandsToCache = (brandId, brandData = []) => {
    if (!Array.isArray(brandData)) {
      console.warn("brandData must be an array:", brandData);
      return;
    }

    setCachedBrands((prev) => {
      const existing = prev[brandId];
      if (JSON.stringify(existing) === JSON.stringify(brandData)) {
        return prev;
      }

      return {
        ...prev,
        [brandId]: brandData,
      };
    });
  };


  const searchProductsGlobally = (query) => {
    const allProducts = Object.values(cachedBrands).flat();

    if (!query || query.trim() === "") return [];

    const lowerQuery = query.toLowerCase();

    return allProducts.filter((product) => {
      return (
        product?.title?.toLowerCase().includes(lowerQuery) ||
        product?.name?.toLowerCase().includes(lowerQuery)
      );
    });
  };

  return (
    <ProductCacheContext.Provider
      value={{
        addProductsToCache,
        addBrandsToCache,
        categoryHeader,
        setCategoryHeader,
        cachedBrands,
        syrax,
        setSyrax,
        searchProductsGlobally, 
      }}
    >
      {children}
    </ProductCacheContext.Provider>
  );
};

export const useProductCache = () => useContext(ProductCacheContext);
