import { useState } from "react";
import StarRating from "./StarRating";
import { shopIconForDark, shopIconForLight } from "../assets/icons";

const PopularProductCard = ({ product, toggleTheme }) => {
  const [rate, setRate] = useState(0);
  return (
    <div
      className="flex flex-col   hover:translate-y-[-0.75rem] hover:bg-gray-200 p-4 pb-6  rounded-3xl  transition-all dark:hover:bg-gray-700 "
      key={product.name}
    >
      <img className="block" src={product.imgURL} alt="shoe product" />
      <div className="mt-8">
        {/* <img src={star} alt="star rating" width={24} height={24} /> */}
        <StarRating
          color={"#FF6452"}
          size={23}
          setMovieRate={setRate}
          maxRating={10}
        />
        <h3 className="font-montserrat leading-normal text-xl mb-2 mt-4 dark:text-white transition-all  duration-700">
          {product.name}
        </h3>
        <div className="grid grid-cols-2  items-center">
          <p className="font-montserrat justify-self-start  text-coral-red text-2xl font-bold">
            {product.price}
          </p>
          <button className=" justify-self-end hover:bg-red-400 w-13 h-13 p-1 rounded-md  transition-all">
            <img
              src={toggleTheme ? shopIconForDark : shopIconForLight}
              className="w-9 h-9 inline"
              alt="shop-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
