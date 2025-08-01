import { useEffect,useMemo } from "react";
import { useSearchParams, Link ,useLocation} from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import useCircles from "../Hooks/UseCircles";
import { useProductCache } from "../Context/SearchContext";

function Circle() {
  const [searchParams] = useSearchParams();
  const brandId = searchParams.get("brandId");
  
const location = useLocation();

  
const filters = useMemo(() => {
    const obj = {};
    for (const [key, value] of searchParams.entries()) {
      if (key.endsWith("_filter")) {
        obj[key] = value;
      }
    }
    return obj;
  }, [searchParams]);

  const [Call, syrax] = useCircles(brandId,filters); 
  const { cachedProducts = [], addProductsToCache } = useProductCache();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    if (Call?.length > 0) {
      addProductsToCache(brandId, Call);
    }
  }, [Call, brandId, addProductsToCache]);

  const isLoading = !Call || Call.length === 0;

if (!brandId || isLoading) {
  return <div className="text-center mt-10 text-lg">Loading brands...</div>;
}


const dataToRender = Call;


  if (!brandId || dataToRender.length === 0) {
    return <div className="text-center mt-10 text-lg">Loading brands...</div>;
  }

  return (
    <div key={location.key || location.search}>
      {syrax?.h1_tag?.length > 0 && (
        <div className="ml-12 mt-4">
          {syrax.h1_tag.map((strong, index) => (
            <p key={index} className="text-[22px] font-bold mt-3 text-gray-900">
              {strong}
            </p>
          ))}
        </div>
      )}

      <div className="ml-12 mr-15 flex flex-wrap mt-20 justify-center gap-7">
        {dataToRender.map((atom, idx) =>
          atom?.imageUrl ? (
            <Link to={"/moreproduct"} key={idx} state={{ itemData: atom }}>
              <div className="w-[230px] rounded-2xl hover:shadow-2xl object-cover overflow-hidden hover:cursor-pointer hover:scale-95 duration-300 relative">
                <img
                  src={atom.imageUrl}
                  alt={idx}
                  className="w-full h-[320px] object-cover rounded"
                />
                {atom.badge_new?.title && (
                  <div className="object-cover bg-black text-white w-auto text-[14px] ml-3 rounded -mt-7 overflow-hidden absolute">
                    <p className="ml-1 mr-1">{atom.badge_new.title}</p>
                  </div>
                )}

                <div className="flex gap-1 text-[13px]">
                  {atom?.tag?.[0]?.title && (
                    <div className="p-2 rounded text-center mt-1 -ml-1 bg-blue-100">
                      <p>{atom.tag[0].title}</p>
                    </div>
                  )}
                  {atom?.tag?.[1]?.title && (
                    <div className="p-1 rounded text-center mt-1 bg-blue-100">
                      <p className="mt-1">{atom.tag[1].title}</p>
                    </div>
                  )}
                </div>

                <p className="text-[15px] ml-2 font-semibold">{atom.title}</p>
                <p className="text-[15px] ml-2 text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis truncate max-w-[220px]">
                  {atom.subTitle}
                </p>

                <div className="flex gap-2 ml-1">
                  <div className="ml-2 mt-1 flex flex-col gap-1">
                    {atom?.sibling_colour_codes?.length > 0 && (
                      <div className="flex gap-1 mt-1 items-center">
                        {atom.sibling_colour_codes
                          .slice(0, 4)
                          .map((color, Id) => (
                            <div
                              key={Id}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        {atom?.sibling_colour_codes?.length > 4 && (
                          <span className="text-xs text-gray-500">
                            +{atom.sibling_colour_codes.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2 ml-1 mt-1 items-center">
                      <MdCurrencyRupee className="-ml-1 text-gray-700" />
                      <p className="-ml-2 text-gray-800">{atom.discountedPrice}</p>
                      <MdCurrencyRupee className="text-[14px] -ml-1 text-gray-500" />
                      <p className="text-gray-500 line-through text-[14px] -ml-1">
                        {atom.price}
                      </p>
                      <p className="text-emerald-600 text-[14px]">{atom.discount}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Circle;
