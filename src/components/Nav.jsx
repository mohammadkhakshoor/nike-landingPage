import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
    return (
        <header className=" padding-x py-8 absolute z-10 w-full">
            <nav className=" flex justify-between   items-center max-container ">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className=" max-lg:hidden flex gap-16 justify-between items-center xl:relative xl:right-44">
                    {navLinks.map((item) => (
                        <LinkItems key={item.label} item={item} />
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    );
};
const LinkItems = ({ item }) => {
    return (
        <li>
            <a className=" font-montserrat  leading-normal text-lg text-slate-gray" href={item.href}>
                {item.label}
            </a>
        </li>
    );
};

export default Nav;
