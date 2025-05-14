import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Delete from "../../assests/images/delete.png";
import { reduceProduct } from "../../redux/reducer/productReducer";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { removeFromWishlist } from "../../redux/reducer/wishListReducer";
const WishlistModal = ({ setActiveModal }) => {
  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const wishlistNumber = wishList.length;

  const reduceProductNumber = (product) => {
    dispatch(reduceProduct(product));
    toast.error("🦄 Removed from cart!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  return (
    <>
      <ToastContainer />
      <Modal show onHide={() => setActiveModal(null)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "lufga-regular" }}>
            Liked Products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {wishlistNumber > 0 ? (
              wishList.map((product) => (
                <div key={product.productId} className="liked-card">
                  <div className="liked-image">
                    <img
                      src={`http://baby-bucket-product.s3.amazonaws.com/${product.productImage}`}
                      alt="product"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="liked-details">
                    <p className="product-name">{product.productName}</p>
                    <p className="product-price">{product.productPrice} AED</p>
                  </div>
                  <div
                    className="liked-action"
                    onClick={()=>dispatch(removeFromWishlist({productId:product.productId}))}
                  >
                    <img src={Delete} alt="delete" width={24} height={24} />
                  </div>
                </div>
              ))
            ) : (
              <p
                className="text-center"
                style={{ fontFamily: "lufga-light", fontSize: "22px" }}
              >
                No item to show
              </p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ fontFamily: "lufga-regular" }}>
          <Button variant="secondary" onClick={() => setActiveModal(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WishlistModal;
