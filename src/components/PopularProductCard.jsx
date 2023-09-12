import { useState } from "react";
import StarRating from "./StarRating";

const PopularProductCard = ({ product }) => {
  const [rate, setRate] = useState(0);
  return (
    <div className="flex  flex-col" key={product.name}>
      <img className="block" src={product.imgURL} alt="shoe product" />
      <div className="mt-8">
        {/* <img src={star} alt="star rating" width={24} height={24} /> */}
        <StarRating
          color={"#FF6452"}
          size={23}
          setMovieRate={setRate}
          maxRating={10}
        />
        <h3 className="font-montserrat leading-normal text-xl mb-2 mt-4 dark:text-white">
          {product.name}
        </h3>
        <p className="font-montserrat text-coral-red text-2xl font-bold">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
