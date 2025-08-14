import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductCache } from "../Context/SearchContext";
import HorizonatalCarousel from "./ScrollingHorizontal";

function HomePage() {
  const navigate = useNavigate();
  const { addProductsToCache, setSyrax } = useProductCache();

  const handleImageClick = async (id, urlPath) => {
    try {
      let isBrand = urlPath.includes("brandId");
      let url = isBrand
        ? `https://www.nykaafashion.com/rest/appapi/v2/brands/products?brandId=${id}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`
        : `https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=${id}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`;

      const response = await fetch(url);
      const data = await response.json();
      const products = data.response?.products || data.products || [];
      const seoInfo = data.response?.seo_info || data.seo_info;

      if (!Array.isArray(products)) {
        throw new Error("Products is not an array");
      }

      addProductsToCache(id, products);
      if (seoInfo) setSyrax(seoInfo);
      navigate(urlPath);
    } catch (err) {
      console.error("Error caught in handleImageClick:", err);
    }
  };

  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const interval = setInterval(() => {
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const isEnd = scrollLeft + clientWidth >= scrollWidth;

        container.scrollTo({
          left: isEnd ? 0 : scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div onClick={() => handleImageClick(74296, `/rendring?categoryId=74296`)}>
        <img
          src="https://images-static.nykaa.com/uploads/e8e8c9be-714d-4464-83ca-3c40be53fe41.jpg?tr=w-1200,cm-pad_resize"
          alt="Promotional Banner"
          className="w-full h-auto rounded-2xl mt-4 cursor-pointer transition-transform duration-300 hover:scale-95"
        />
      </div>
      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-500">Our Stores</p>
        <p className="text-xl font-semibold">Find everything for your every need</p>
      </div>

      <HorizonatalCarousel handleImageClick={handleImageClick} />

      <div className="flex overflow-x-auto gap-6 mt-6" ref={containerRef}>
        {/* Add your images here with responsive classes */}
      </div>

      <div className="text-lg mt-5">
        <p className="font-semibold text-gray-500">IN THE SPOTLIGHT</p>
        <p className="text-2xl font-semibold">Hottest brands on offer</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
        {/* Map through your cards here */}
      </div>

      <div>
        <img
          src="https://images-static.nykaa.com/uploads/e1fa220b-4754-494b-92a2-9c91b55cccdb.jpg?tr=w-1200,cm-pad_resize"
          alt="Promotional Image"
          className="w-full mt-10 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default HomePage;
