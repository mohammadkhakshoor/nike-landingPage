const Subscribe = () => {
    return (
        <section className="max-container">
            <div className="flex flex-col sm:flex-row  gap-10  sm:items-center sm:justify-center flex-wrap">
                <h3 className=" text-4xl font-bold  font-palanquin max-sm:text-[48px] max-sm:leading-[48px] leading-normal">
                    Sign Up for
                    <span className=" text-coral-red  inline-block">Updates </span> & Newsletter
                </h3>
                <form className="flex-1 flex border border-slate-gray px-2 py-2 rounded-full">
                    <input
                        placeholder="subscribe@nike.com"
                        className="input"
                        type="text"
                        name="subscribe"
                        id="subscribe"
                    />
                    <button className="font-montserrat  leading-6 bg-coral-red px-8 py-4 rounded-[999px] flex  justify-center items-center gap-4 text-[18px] text-white">
                        shop now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
