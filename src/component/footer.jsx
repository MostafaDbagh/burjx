// components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assests/images/logojawleh.png";
import { useI18n } from "../hooks/useI18n";

export default function Footer() {
  const { t, isRTL } = useI18n("footer");

  return (
    <footer
      className={`bg-gradient-to-r from-[#235A5E] to-[#49BCC4] text-white px-8 py-10 ${
        isRTL ? "text-right" : "text-left "
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="Jowlat Logo" className="w-15 h-15" />
          <p className="text-sm leading-6 opacity-90">{t("description")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mx-4 font-semibold mb-4 text-lg">{t("quickLinks.title")}</h3>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/about" className="!no-underline text-white">
                {t("quickLinks.about")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/company" className="!no-underline text-white">
                {t("quickLinks.company")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/terms" className="!no-underline text-white">
                {t("quickLinks.terms")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/privacy" className="!no-underline text-white">
                {t("quickLinks.privacy")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mx-4 font-semibold mb-4 text-lg">{t("support.title")}</h3>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/help" className="!no-underline text-white">
                {t("support.help")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/track" className="!no-underline text-white">
                {t("support.track")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/careers" className="!no-underline text-white">
                {t("support.careers")}
              </Link>
            </li>
            <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <Link to="/contact" className="!no-underline text-white">
                {t("support.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mx-4 font-semibold mb-4 text-lg">{t("followUs.title")}</h3>
          <ul className=" space-y-3 text-sm list-none pl-0">
            <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <FaFacebookF />
              <Link to="/facebook" className="!no-underline text-white">
                {t("followUs.facebook")}
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <FaInstagram />
              <Link to="/instagram" className="!no-underline text-white">
                {t("followUs.instagram")}
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <FaTiktok />
              <Link to="/tiktok" className="!no-underline text-white">
                {t("followUs.tiktok")}
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              <FaYoutube />
              <Link to="/youtube" className="!no-underline text-white">
                {t("followUs.youtube")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm opacity-80">
        © 2025 Jowlat. {t("rights")}
      </div>
    </footer>
  );
}
