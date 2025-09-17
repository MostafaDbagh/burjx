// navbar.jsx
"use client";
import { Link } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";
import logo from "../assests/images/logojawleh.png";

const Navbar = ({ links, dir = "ltr" }) => {
  const { t } = useI18n("navbar");

  const defaultLinks = [
    { to: "/", label: t("home") },
    { to: "/categories", label: t("categories") },
    { to: "/partners", label: t("partners") },
    { to: "/about", label: t("about") },
  ];

  const navLinks = links || defaultLinks;

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm" style={{ backgroundColor: "#EAECEE" }} dir={dir}>
      <img src={logo} alt="Jowleh Logo" />

      <div className="hidden md:flex justify-center space-x-8 font-medium">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to} className="!text-black hover:!text-[#235A5E] transition-colors font-quicksand !no-underline">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center !space-x-4">
        <button className="px-5 py-2 !rounded-lg text-white font-medium transition bg-[#235A5E]">{t("login")}</button>
        <button className="flex items-center justify-center !rounded-full text-white bg-[#235A5E] w-[45px] h-[45px] text-[20px]">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
