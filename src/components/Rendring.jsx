import { useSearchParams } from "react-router-dom";
import { useProductCache } from "../Context/SearchContext";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import UseCards from "../Hooks/UseCards";

function Rendring() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const [Call] = UseCards(categoryId);
  const { categorySyrax } = useProductCache();

  if (!categoryId || Call.length === 0) {
    return <div className="text-center mt-10 text-gray-500 text-lg">Loading category...</div>;
  }

  return (
    <div>
     
      {categorySyrax?.h1_tag?.length > 0 && (
        <div className="ml-12 mt-4">
          {categorySyrax.h1_tag.map((title, index) => (
            <p key={index} className="text-[22px] font-bold mt-3 text-gray-900">
              {title}
            </p>
          ))}
        </div>
      )}

  
      <div className="ml-12 mr-15 flex flex-wrap mt-20 justify-center gap-7">
        {Call.map((item, id) =>
          item?.imageUrl ? (
            <Link to="/product" key={id} state={{ itemData: item }}>
              <div className="w-[230px] rounded-2xl hover:shadow-2xl overflow-hidden hover:cursor-pointer hover:scale-95 duration-300 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[320px] object-cover rounded"
                />

            
                {item.badge_new?.title && (
                  <div className="absolute bg-black text-white text-xs px-2 py-1  -mt-8 ml-2 rounded">
                    {item.badge_new.title}
                  </div>
                )}

            
                <div className="flex gap-1 text-[13px] mt-2">
                  {item?.tag?.slice(0, 2).map((tagObj, i) => (
                    <div key={i} className="p-1 rounded bg-blue-100 text-center">
                      <p>{tagObj.title}</p>
                    </div>
                  ))}
                </div>

             
                <p className="text-[15px] font-semibold mt-2">{item.title}</p>
                <p className="text-[14px] text-gray-500 truncate max-w-[220px]">{item.subTitle}</p>

              
                {item?.sibling_colour_codes?.length > 0 && (
                  <div className="flex gap-1 mt-2 items-center">
                    {item.sibling_colour_codes.slice(0, 4).map((color, colorIdx) => (
                      <div
                        key={colorIdx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                    {item.sibling_colour_codes.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{item.sibling_colour_codes.length - 4} more
                      </span>
                    )}
                  </div>
                )}

              
                <div className="flex gap-2 mt-2 items-center">
                  <MdCurrencyRupee className="text-gray-700" />
                  <p className="-ml-2 text-gray-800">{item.discountedPrice}</p>
                  <MdCurrencyRupee className="text-[14px] text-gray-500" />
                  <p className="text-gray-500 line-through text-[14px] -ml-1">{item.price}</p>
                  <p className="text-emerald-600 text-[14px]">{item.discount}%</p>
                </div>

             
                {item.dynamic_text?.title && (
                  <p className="text-[14px] text-emerald-600 ">
                    {item.dynamic_text.title}
                  </p>
                )}
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Rendring;
