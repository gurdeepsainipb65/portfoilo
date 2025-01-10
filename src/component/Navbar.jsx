import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Navbar() {
  const [menuopen, setmenu] = useState(false);
  function toggleMenu() {
    setmenu(!menuopen);
  }

  return (
    <div className=" bg-blue-100 px-10">
      <nav
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        className="max-w-full p-2 bg-blue-100 text-blue-950 h-20 flex items-center justify-between"
      >
        <Link>
          <img className="w-48 h-6" src="\IMAG\logo.png" alt="gurdeep singh" />
        </Link>
        <ul className=" hidden lg:flex justify-between items-center gap-10">
          <li className="hover:font-extrabold">
            <Link to="/">HOME</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/skills">SKILLS</Link>
          </li>
        </ul>
        <Link onClick={toggleMenu} className="w-6 lg:hidden">
          <button>
            <img src="IMAG\right-align-text-option-svgrepo-com.svg" alt="" />
          </button>
        </Link>
      </nav>
      {/* phone menu bar */}
      <div
        className={` w-full mt-14 ${
          menuopen ? "translate-x-0 h-full" : "-translate-x-[250%] h-[0vh]"
        } transform transition-all `}
      >
        <ul className="flex flex-col justify-center items-center space-y-4 border-4 p-8 bg-blue-200 rounded-lg divide-y-2 gap-2 border-blue-800">
          <li className=" hover:font-extrabold">
            <Link to="/">HOME</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/resume">RESUME</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className=" hover:font-extrabold">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
