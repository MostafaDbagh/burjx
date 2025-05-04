import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Delete from '../../assests/images/delete.png'
import {reduceProduct} from '../../redux/reducer/productReducer'
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CartModal = ({ setActiveModal }) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productNumber = () => product.reduce((acc, curr) => acc + curr.quantity, 0);

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
          <Modal.Title style={{ fontFamily: "oswald" }}>Picked Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productNumber() > 0 ? (
            product.map((product) =>
              product.quantity > 0 ? (
                <div
                  key={product.productImage}
                  className="d-flex align-items-center justify-content-around"
                  style={{ maxHeight: "100px" }}
                >
                  <div style={{ background: "#f6f6f6", position: "relative", margin: "16px 0" }}>
                    <img
                      src={`http://baby-bucket-product.s3.amazonaws.com/${product["rest"].productImage}`}
                      alt="productImage"
                      width={60}
                      height={60}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <p className="my-0 mx-3">{product["rest"].productName}</p>
                  <p className="my-0 mx-3">{product["rest"].productPrice}</p>
                  <p className="my-0 mx-3">{product.quantity}</p>
                  <p className="m-0" onClick={() => reduceProductNumber(product)}>
                    <img src={Delete} alt="delete" width={40} height={40} />
                  </p>
                </div>
              ) : null
            )
          ) : (
            <p className="text-center" style={{ fontFamily: "lato", fontSize: "22px" }}>
              No item to show
            </p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ fontFamily: "lato" }}>
          <Button variant="secondary" onClick={() => setActiveModal(null)}>
            Close
          </Button>
          <Button
            disabled={productNumber() === 0}
            variant="primary bgPink border-0"
            onClick={() => {
              navigate("/cart");
              setActiveModal(null);
            }}
          >
            Go To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;

