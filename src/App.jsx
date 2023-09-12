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
      <section className="xl:padding-l wide:padding-r padding-b dark:bg-darkback">
        <Hero />
      </section>
      <section className="  dark:bg-darkback padding">
        <PopularProducts />
      </section>
      <section className="  dark:bg-darkback padding">
        <SuperQuality />
      </section>
      <section className="  dark:bg-darkback padding ">
        <Services />
      </section>
      <section className="  dark:bg-darkback padding ">
        <SpecialOffer />
      </section>
      <section className="  dark:bg-darkbacklight padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section
        id="subscribe"
        className="  dark:bg-darkback padding-x sm:py-32 py16 w-full"
      >
        <Subscribe />
      </section>
      <section className="  dark:bg-darkback bg-black padding-x padding-y pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
