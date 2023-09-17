import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="max-container flex flex-col md:flex-row-reverse justify-around gap-12 sm:gap-0">
      <div className="relative xl:w-2/5 flex flex-col   items-start w-full max-xl:px-3 ">
        <h1 className=" text-4xl font-bold font-palanquin max-sm:text-[48px] max-sm:leading-[48px]">
          <span className="dark:text-white">We Provide You</span>{" "}
          <span className=" text-coral-red mt-3 inline-block">Super </span>
          <br className="none" />
          <span className=" text-coral-red mt-3 inline-block">
            {" "}
            Quality
          </span>{" "}
          <span className="dark:text-white">Shoes</span>
        </h1>
        <p className="mt-6 mb-4 font-montserrat stroke-slate-gray text-[18px] dark:text-white">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className=" mb-10 font-montserrat stroke-slate-gray text-[18px] dark:text-white">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="btns-hover font-montserrat  leading-6 bg-coral-red px-8 py-4 rounded-[999px] flex  justify-center items-center gap-4 text-[18px] text-white">
          <span>shop now</span>
          <span>
            <img
              className="inline  pl-1"
              src={arrowRight}
              alt="right arrow button"
            />
          </span>
        </button>
      </div>
      <div>
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
