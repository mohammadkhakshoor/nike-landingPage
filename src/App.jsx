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
import { useState } from "react";
const App = () => {
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <main>
      <Nav toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      <section className="xl:padding-l wide:padding-r padding-b dark:bg-darkback transition-all  duration-700 ">
        <Hero />
      </section>
      <section className="  dark:bg-darkback transition-all  duration-700  padding">
        <PopularProducts toggleTheme={toggleTheme} />
      </section>
      <section className="  dark:bg-darkback transition-all  duration-700  padding">
        <SuperQuality />
      </section>
      <section className="  dark:bg-darkback transition-all  duration-700  padding ">
        <Services />
      </section>
      <section className="  dark:bg-darkback transition-all  duration-700  padding ">
        <SpecialOffer />
      </section>
      <section className="  dark:bg-darkbacklight transition-all  duration-700 light padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section
        id="subscribe"
        className="  dark:bg-darkback transition-all  duration-700  padding-x sm:py-32 py16 w-full"
      >
        <Subscribe />
      </section>
      <section className="  dark:bg-darkback transition-all  duration-700 bg-black padding-x padding-y pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
