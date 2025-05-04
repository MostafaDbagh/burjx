import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import CartModal from "../modal/pickedProducts";
import { Search } from "../search";
import { ToastContainer } from "react-bootstrap";
import AuthModal from "../modal/auth";
const Layout = ({ children, activeModal, setActiveModal }) => {
  return (
    <>
      <Header setActiveModal={setActiveModal} />
      {activeModal === "auth" && (
        <AuthModal  setActiveModal={setActiveModal} />
      )}
      {activeModal === "cart" && (
        <CartModal
        setActiveModal={setActiveModal}
        />
      )}

{activeModal === "wishlist" && (
        <CartModal
        setActiveModal={setActiveModal}
        />
      )}

      {children}
      <Footer />
    </>
  );
};

export default Layout;
