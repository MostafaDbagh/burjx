import React from "react";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { mainNavLinks, extraNavLinks, NavIcons } from "../constant";
import Logo from "../../assests/images/logo.png";
import "./index.css";
import { ChangeLanguage } from "../ui/languageDropdown";

const Header = ({ setShowPorductsModal,showModalProduct,authModal,setAuthModal,setActiveModal }) => {
  const product = useSelector((state) => state.product);
  const wishlist = useSelector((state) =>state.wishList)
  const totalQuantity = product.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalLikes = wishlist.length;
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="toma-boutique" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-center align-items-cetner">
 <div className="d-flex justify-content-center align-items-center">

          <Nav className="me-auto nav-links">
            {mainNavLinks.map(({ label, path }, index) => (
              <Nav.Link key={`main-${index}`} href={path} className="px-3">
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <Nav className="inline-box px-lg-3 my-md-3">
            {extraNavLinks.map(({ label, path }, index) => (
              <Nav.Link key={`extra-${index}`} href={path || "#"} className="px-2">
                {label}
              </Nav.Link>
            ))}
          </Nav>
          </div>

          <Nav className="align-items-center inline-box  ">
            {NavIcons.map(({  src, alt, onClick, showBadge,modalType }, index) => (
              <Nav.Link
                key={`icon-${index}`}
                onClick={() =>setActiveModal(modalType) }
                className="px-2 position-relative"
              >
            
                <img src={src} alt={alt} width={30} height={30} />

                {alt == 'basket' && showBadge && totalQuantity > 0 && (
                  <span className="nav-badge">{totalQuantity}</span>
                )}
                     {alt == 'wishlist' && showBadge && totalQuantity > 0 && (
                  <span className="nav-badge" style={{left:'28px',top:'-2px'}}>{totalLikes}</span>
                )}
              </Nav.Link>
            ))}
          </Nav>
          <ChangeLanguage/>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
