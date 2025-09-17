"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";
import logo from "../assests/images/logojawleh.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ links, dir = "ltr" }) => {
  const { t } = useI18n("navbar");
  const [isOpen, setIsOpen] = useState(false);

  const defaultLinks = [
    { to: "/", label: t("home") },
    { to: "/categories", label: t("categories") },
    { to: "/partners", label: t("partners") },
    { to: "/about", label: t("about") },
  ];

  const navLinks = links || defaultLinks;

  return (
    <nav className="bg-[#EAECEE] shadow-sm px-4 md:px-8 py-4 flex items-center justify-between relative" dir={dir}>
        <img src={logo} alt="Jowleh Logo" className="h-100 " />

      <div className="hidden md:flex justify-center space-x-8 font-medium">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="!text-black hover:!text-[#235A5E] transition-colors font-quicksand !no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="px-6"></div>

     <div className="flex items-center space-x-4 relative">
        <Link to="/login">
          <button className="px-4 md:px-5 py-2 rounded-lg text-white font-medium transition bg-[#235A5E] hover:bg-[#1b474a]">
            {t("login")}
          </button>
        </Link>

        <Link
          to="/cart"
          className="flex items-center justify-center rounded-full text-white bg-[#235A5E] w-[45px] h-[45px] text-[20px] hover:bg-[#1b474a] transition-colors"
        >
          <FaShoppingCart />
        </Link>

        <div className="md:hidden relative">
          <button
            className="text-2xl text-[#235A5E]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#EAECEE] shadow-md flex flex-col items-start py-2 space-y-2 rounded-md z-50">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="w-full px-4 py-2 text-black hover:text-[#235A5E] transition-colors font-quicksand"
                  onClick={() => setIsOpen(false)} // يغلق القائمة عند اختيار رابط
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
