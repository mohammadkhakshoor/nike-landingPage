import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Shoes from "../components/Shoes";
import { useState } from "react";
const Hero = () => {
  const [bigShoeShow, setBigShoeShow] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 transition-all  duration-700 dark:bg-darkback">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
          <span className=" xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10         transition-all  duration-700 xl:dark:bg-darkback dark:text-white">
            The New Arrival
          </span>
          <br /> <span className=" text-coral-red mt-3 inline-block">Nike</span>{" "}
          <snap className="dark:text-white">Shoes</snap>
        </h1>
        <p className="mt-6 mb-14 font-montserrat stroke-slate-gray text-[18px] dark:text-white">
          Discover stylish Nike arrivals, quality
          <br /> comfort, and innovation for your active life.
        </p>
        <button className=" font-montserrat  leading-6 bg-coral-red px-8 py-4 rounded-[999px] flex  justify-center items-center gap-4 text-[18px] text-white">
          <span>shop now</span>
          <span>
            <img
              className="inline  pl-1"
              src={arrowRight}
              alt="right arrow button"
            />
          </span>
        </button>
        <div className="flex gap-16  mt-20 justify-start items-start w-full  flex-wrap ">
          {statistics.map((item, index) => {
            return (
              <div key={index}>
                <p className=" leading-10 mb-2 font-palanquin text-[48px] font-bold dark:text-white ">
                  {item.value}
                </p>
                <p className="text-[16px] text-slate-gray  font-montserrat dark:text-white">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex relative flex-1 items-center justify-center bg-hero xl:min-h-screen max-xl:pb-40 max-xl:py-10 bg-primary bg-cover flex-col ">
        <img src={bigShoeShow} alt="" width={610} height={500} />
        <div className="flex absolute -bottom-[5%] sm:left-[10%] sm:gap-6 gap-4 max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <div className="" key={shoe.thumbnail}>
                <Shoes
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeShow(shoe)}
                  currentBigShow={bigShoeShow}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
