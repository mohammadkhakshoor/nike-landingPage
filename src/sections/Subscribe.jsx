const Subscribe = () => {
  return (
    <section className="max-container max-sm:pb-20">
      <div className="flex flex-col sm:flex-row  gap-10  sm:items-center sm:justify-center flex-wrap">
        <h3 className=" text-4xl font-bold max-sm:text-center  font-palanquin max-sm:text-[48px] max-sm:leading-[48px]  leading-normal">
          <span className="dark:text-white">Sign Up for</span>{" "}
          <span className=" text-coral-red  inline-block">Updates </span>
          <span className="dark:text-white"> & Newsletter</span>
        </h3>
        <form className="flex-1 flex-col max-sm:gap-5 sm:flex-row flex sm:border-2 sm:border-slate-gray px-2 py-2 sm:rounded-full">
          <input
            placeholder="subscribe@nike.com"
            className="input"
            type="text"
            name="subscribe"
            id="subscribe"
          />
          <button className="font-montserrat max-sm:w-full  leading-6 bg-coral-red px-8 py-4 rounded-[999px] flex  justify-center items-center gap-4 text-[18px] text-white">
            sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
