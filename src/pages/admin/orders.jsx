import { useState,useEffect } from "react";
import { getProductApi } from "../../axios";
import './index.css'
import remove from '../../assests/images/delete-svgrepo-com .svg'
import edit from '../../assests/images/edit.svg'
import view from '../../assests/images/view.svg'
import ViewProductModal from "../../components/modal/viewProductDetails";
import DeleteProductModal from "../../components/modal/deleteProduct";
import UpdateProductModal from "../../components/modal/updateProduct";
import { getProductBySearch } from "../../axios";
import { getOrders } from "../../axios";
import UpdateOrder from "../../components/modal/updateOrder";
const OrdersAdmin = ({search}) =>{
    const [orders, setOrders] = useState([]);
    const [showOrderModal,setShowOrderModal] = useState(false)
    const [orderId,setOrderId] = useState('')
    const [productName,setProductName] = useState('')
    const [loading, setLoadign] = useState(false);
    const[error, setError] = useState('')
    const [showViewProductModal,setShowViewProductModal] = useState(false)
    const [showDeleteProductModal,setShowDeleteProductModal] = useState(false)
    const [showUpdateProductModal,setShowUpdateProductModal] = useState(false)

    const orderStatus = ["Pending",]
    const fetchOrdersApi = async () => {
   
     try {
            setLoadign(true)
            const {data} = await getOrders();
            if (data) {
              setOrders(data)
            }
            else throw Error('there is no data')
        }catch(err){
            setError(err)
        }
        finally{
            setLoadign(false)
        }

}
// const fetchProductsApiBySearch = async (q) => {
//  try {
//         setLoadign(true)
//         const {data} = await getProductBySearch(q);
//         console.log('data',data)
//         if (data) {
//           setProducts(data)
//         }
//         else throw Error('there is no data')
//     }catch(err){
//         setError(err)
//     }
//     finally{
//         setLoadign(false)
//     }

// }
useEffect( ()=>{
    fetchOrdersApi()
    // if (search.length >1 ){
    //   fetchProductsApiBySearch(search)

    // }
},[showOrderModal])



return (
    <>
     <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr className="text-center">
          <th style={{textAlign: "center"}}>Order ID</th>
          <th> Order Date</th>
          <th > Order Details</th>
          <th> Order TotalAmount</th>
          <th> Order Status</th>
          <th>order Paid Amount</th>
           <th>order Is Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
         <tbody>
          {orders.map((order, index) => (
            <tr key={index}>

            <td>{order.order_id}</td>
             <td style={{minWidth:'165px'}}>{order.order_date}</td>
             <td style={{minWidth:'300px'}} >{order.order_details.map(item =>
             <div><p className="mx-0 my-1" style={{fontSize:'16px', background:'#f39fdc',marginBottom:'8px',borderRadius:'12px',lineHeight:"40px",color:'#000',fontFamily:'lato'}}>
              { 'porduct_id :'+item?.rest?.id  +" product_Name :"+    item?.rest?.productName + ' Quantity : '+item?.quantity + ' Total :'+item?.totalAmount}
              </p>
              </div>)}
              </td>
             <td>{order.order_totalAmount}</td>
              <td style={{minWidth:'200px'}}>{order.order_status}</td>
              <td>{order.order_paidAmount}</td>
              <td>{order.order_isCompleted +""}</td>

              <td>
              <button
              className="d-flex justify-content-center align-items-center"
              style={{width:'120px',height:'60px',background:'#3e3e3e',borderRadius:'12px',fontFamily:'lato'}}

              onClick={()=>{
                setShowOrderModal(true)
                 setOrderId(order.order_id)
              }}>{"update Order"}</button>
              
              
              </td>



           
            </tr>
          ))}
        </tbody> 
      </table>
    </div> 

 <UpdateOrder setShowPorductsModal={setShowOrderModal} showProductsModal={showOrderModal} orderId={orderId}/>
    </>
  );
}

export default OrdersAdmin;