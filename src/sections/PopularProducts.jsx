import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className=" max-container flex  flex-col">
      <div>
        <div>
          <h2 className="font-palanquin text-4xl mb-10 font-bold">
            <snap className="dark:text-white">Our</snap>{" "}
            <span className="text-coral-red">Popular</span>{" "}
            <snap className="dark:text-white">Products</snap>
          </h2>
          <p className="lg:max-w-lg text-lg font-montserrat  text-slate-gray mb-20 dark:text-white">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-8 w-full">
          {products.map((product) => {
            return <PopularProductCard key={product.name} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
