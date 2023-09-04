import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpecialOffer = () => {
    return (
        <section className="max-container justify-center flex-col-reverse lg:flex-row flex gap-20  items-center">
            <div className="block">
                <img
                    className="w-full object-contain"
                    src={offer}
                    width={773}
                    height={678}
                    alt="special offer"
                />
            </div>
            <div className="relative xl:w-2/5 flex flex-col   items-start w-full max-xl:px-3 ">
                <h1 className=" text-4xl font-bold font-palanquin max-sm:text-[48px] max-sm:leading-[48px]">
                    <span className=" text-coral-red mt-3 inline-block">Special </span> offer
                </h1>
                <p className="mt-6 mb-4 font-montserrat text-slate-gray text-[18px]">
                    Embark on a shopping journey that redefines your experience with unbeatable deals. From
                    premier selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p className=" mb-10 font-montserrat text-slate-gray text-[18px]">
                    Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
                    loftiest expectations. Your journey with us is nothing short of exceptional.{" "}
                </p>
                <div className="flex flex-col lg:flex-row  gap-3">
                    <button className=" font-montserrat  leading-6 bg-coral-red px-8 py-4 rounded-[999px] flex  justify-center items-center gap-4 text-[18px] text-white">
                        <span>shop now</span>
                        <span>
                            <img className="inline  pl-1" src={arrowRight} alt="right arrow button" />
                        </span>
                    </button>
                    <button className="  font-montserrat border border-black leading-6 px-8 py-4 rounded-[999px]  gap-4 text-[18px] text-black">
                        <span>learn more</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default SpecialOffer;
