import { star } from "../assets/icons";
import { reviews } from "../constants";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className=" flex flex-col items-center mb-20">
        <h3 className=" text-4xl font-bold font-palanquin max-sm:text-[48px] max-sm:leading-[48px]">
          <span className="dark:text-white">What Our</span>{" "}
          <span className=" text-coral-red mt-3 inline-block"> Customers </span>{" "}
          <span className="dark:text-white">Say?</span>
        </h3>
        <p className="mt-6 mb-4 font-montserrat text-slate-gray text-[18px] dark:text-white">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className=" flex gap-30 flex-col gap sm:flex-row sm:justify-evenly   ">
        {reviews.map((rew) => {
          return (
            <div
              key={rew.customerName}
              className="w-full sm:w-[350px] flex flex-col items-center mb-10"
            >
              <img
                className=" rounded-full"
                width={140}
                height={140}
                src={rew.imgURL}
                alt={rew.customerName}
              />
              <p className="mt-6 mb-4 font-montserrat text-slate-gray text-[18px] text-center dark:text-white">
                {rew.feedback}
              </p>
              <div className="flex gap-2 mb-3">
                <img src={star} alt="" />
                <span className="text-xl">(4.5)</span>
              </div>
              <p className="text-3xl  font-montserrat font-bold mb-2">
                {rew.customerName}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
