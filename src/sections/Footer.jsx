import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <section id="contact-us" className="  font-montserrat ">
      <div className="max-container p-8 text-white">
        <div className="mb-10 flex max-lg:flex-col max-lg:gap-10 lg:gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <img src={footerLogo} width={180} alt="logo" />
            </div>
            <p className="sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-3">
              {socialMedia.map((icon) => {
                return (
                  <div
                    key={icon.alt}
                    className="bg-white h-12 w-12 flex rounded-full justify-center items-center"
                  >
                    <img
                      className="block leading-normal"
                      src={icon.src}
                      alt={icon.alt}
                      width={25}
                      height={25}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-1 justify-between max-lg:justify-start max-lg:gap-20 max-sm:flex-col flex-wrap gap-3">
            {/* <div className="flex flex-col gap-4">
                            <p className="text-2xl font-bold tracking-wider">products</p>
                            <div className="flex flex-col gap-2">
                                <a href="#">Air Force 1</a>
                                <a href="#">Air Force 2</a>
                                <a href="#">Air Force 3</a>
                                <a href="#">Air bag</a>
                                <a href="#">Air shoes</a>
                                <a href="#">Nike Waffle Racer</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-bold tracking-wider">help</p>
                            <div className="flex flex-col gap-2">
                                <a href="#">About us</a>
                                <a href="#">FAQs</a>
                                <a href="#">How it works</a>
                                <a href="#">Privacy policy</a>
                                <a href="#">Payment policy</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-bold tracking-wider">get in touch</p>
                            <div className="flex flex-col gap-2">
                                <a href="#">contact us</a>
                                <a href="#">x@gmail.com</a>
                            </div>
                        </div> */}

            {footerLinks.map((item) => {
              return (
                <div className="flex flex-col gap-3" key={item.title}>
                  <h4 className="text-2xl mb-3 font-bold tracking-wider">
                    {item.title}
                  </h4>
                  {item.links.map((link) => {
                    return (
                      <div key={link.name} className="flex flex-col gap-4">
                        <a href="#">{link.name}</a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <a href="#">&#169;Copyright. All rights reserved.</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
