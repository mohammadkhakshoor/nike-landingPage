import { services } from "../constants";
const Services = () => {
    return (
        <section className="max-container flex flex-1  justify-center flex-wrap gap-9 ">
            {services.map((service) => {
                return (
                    <div
                        key={service.imgURL}
                        className=" shadow-3xl py-12 px-10 flex-1 sm:w-[350px] sm:min-w-[350px]"
                    >
                        <img
                            className="block bg-coral-red p-3  rounded-full mb-5"
                            width={50}
                            height={50}
                            src={service.imgURL}
                            alt="service image"
                        />
                        <h2 className="text-3xl  font-montserrat font-bold mb-2">{service.label}</h2>
                        <p className="font-montserrat text-lg text-slate-500 break-words">
                            {service.subtext}
                        </p>
                    </div>
                );
            })}
        </section>
    );
};

export default Services;
