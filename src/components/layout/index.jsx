import React, { useState } from "react";
import NewHeader from "../header";
import Footer from "../footer";
import CartModal from "../modal/pickedProducts";
import WishlistModal from "../modal/wishlistProduct";
import { Search } from "../search";
import { ToastContainer } from "react-bootstrap";
import AuthModal from "../modal/auth";
const Layout = ({ children, activeModal, setActiveModal }) => {
  return (
    <div style={{zIndex:999}}>
      <NewHeader setActiveModal={setActiveModal} />
      {activeModal === "auth" && (
        <AuthModal  setActiveModal={setActiveModal} />
      )}
      {activeModal === "cart" && (
        <CartModal
        setActiveModal={setActiveModal}
        />
      )}

{activeModal === "wishlist" && (
        <WishlistModal
        setActiveModal={setActiveModal}
        />
      )}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
