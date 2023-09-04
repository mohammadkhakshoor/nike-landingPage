// import React from "react";
import {
    Hero,
    Footer,
    CustomerReviews,
    PopularProducts,
    Services,
    SuperQuality,
    SpecialOffer,
    Subscribe,
} from "./sections";
import Nav from "./components/Nav";
const App = () => {
    return (
        <main>
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding ">
                <Services />
            </section>
            <section className="padding ">
                <SpecialOffer />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black padding-x padding-y pb-8">
                <Footer />
            </section>
        </main>
    );
};

export default App;
