import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
    const [toggleNav, setToggleNav] = useState(true);

    const navBarToggler = function () {
        setToggleNav((val) => !val);
    };

    return (
        <header className=" padding-x py-4 fixed top-0 z-10 w-full bg-white ">
            <nav className=" flex justify-between   items-center max-container ">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>

                <ul
                    // "max-lg:hidden flex gap-16 justify-between items-center xl:relative xl:right-44"
                    className={`${
                        toggleNav
                            ? "max-lg:absolute lg:flex gap-5 max-lg:-top-[50rem] max-lg:opacity-0  transition-all duration-700 flex max-lg:gap-16 max-lg:justify-between max-lg:items-center "
                            : "max-lg:normal absolute top-0 left-0 w-full h-[25rem] bg-coral-red gap-5  z-10 flex max-lg:flex-col justify-center items-center transition-all duration-700"
                    } `}
                >
                    {navLinks.map((item) => (
                        <LinkItems key={item.label} item={item} setToggleNav={setToggleNav} />
                    ))}
                </ul>

                <div onClick={navBarToggler} className="block lg:hidden relative z-20">
                    {toggleNav ? (
                        <img src={hamburger} alt="hamburger" width={25} height={25} />
                    ) : (
                        <div className="text-4xl relative bottom-5">&times;</div>
                    )}
                </div>
            </nav>
        </header>
    );
};
const LinkItems = ({ item, setToggleNav }) => {
    return (
        <li>
            <a
                onClick={() => {
                    setToggleNav(true);
                }}
                className=" font-montserrat leading-normal  max-lg:text-3xl text-black"
                href={item.href}
            >
                {item.label}
            </a>
        </li>
    );
};

export default Nav;
