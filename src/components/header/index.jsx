import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { mainNavLinks, NavIcons } from "../constant";
import burger from "../../assests/images/burger.svg";
import "./index.css";
import useIsMobile from "../../hooks/useWindowSize";

const NewHeader = ({ setActiveModal }) => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const product = useSelector((state) => state.product);
  const wishlist = useSelector((state) => state.wishList);
  const totalQuantity = product.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalLikes = wishlist.length;

  useEffect(() => {
    // Reset menu when screen size changes
    setMenuOpen(!isMobile);
  }, [isMobile]);

  const renderBadge = (alt) => {
    if (alt === "basket" && totalQuantity > 0) {
      return <span className="nav-badge" style={{ top: "-10px", right: "-10px" }}>{totalQuantity}</span>;
    }
    if (alt === "wishlist" && totalLikes > 0) {
      return <span className="nav-badge" style={{ top: "-10px", right: "-5px" }}>{totalLikes}</span>;
    }
    return null;
  };

  return (
    <div className="header-container">
      <div className="top-header">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="m-0 p-0" style={{ fontSize: "24px", fontFamily: "lufga-bold" }}>
              TOMA-BOUTIQUE.
            </p>
            <p className="m-0" style={{ fontFamily: "lufga-light" }}>
              online store
            </p>
          </div>
          {isMobile && (
            <button
              className="burger-toggle m-0"
              onClick={() => setMenuOpen(prev => !prev)}
              style={{ background: "none", border: "none" }}
            >
              <img src={burger} alt="burger" width={32} height={32} />
            </button>
          )}
        </div>

        <div className={`menu-section ${menuOpen ? "show" : "hide"} my-auto`}>
          <ul className="main-links d-flex gap-4 p-0 m-0 flex-wrap ">
            {mainNavLinks.map(({ label, path }, idx) => (
              <li key={idx} className="m-0 px-lg-3">
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`navicons mt-3 ${menuOpen ? "show" : "hide"}`}>
          <ul className="p-0 d-flex gap-3 m-0 justify-content-center">
            {NavIcons.map(({ src, alt, modalType, showBadge }, idx) => (
              <li key={idx} onClick={() => setActiveModal(modalType)} style={{ position: "relative" }}>
                <img src={src} alt={alt} width={30} height={30} />
                {showBadge && renderBadge(alt)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
