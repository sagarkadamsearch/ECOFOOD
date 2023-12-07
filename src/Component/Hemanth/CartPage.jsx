import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { upDateOrder } from "../../Redux/AuthReducer/actionTypes";
import {AiFillDelete, AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import AOS from "aos"
import 'aos/dist/aos.css'

export const CartPage = () => {
  const [cartArr, setCartArr] = useState([]);
  const [totalPrice, setTotal] = useState(0);
  const [orderSt, setOrderSt] = useState([]);
  const [loading,setLoading] = useState(false)
  const dispatch=useDispatch();
  const navigate = useNavigate()
  // const logId = useSelector(store=>store.AuthReducer.loginUser.id);
  const logId = 1;



  //const orderArr = [];
  // const orderLs = localStorage.getItem("cartData");
  // let orderArr=[]
  // if (orderLs == null) {

  //   orderArr = [];

  // } else {
  //   orderArr = JSON.parse(orderLs);
  // }

  //  const orders=useSelector((store)=>{return store.AuthReducer.loginUser.Order})

  //      if(orders){
  //       const arr=orders.map((e,i)=>{e.quantity=1
  //         return e
  //       })
  //       setCartArr(arr)
  //      }

  const handleInc = (id) => {

    //locallychecking and updating
    const arr = cartArr.map((e, i) => {
      if (e.id == id) {
        e.quantity++;
        e.total = e.price * e.quantity;
      }
      return e;
    });
    setCartArr(arr);

    //updating API
   // axios.patch(`https://grocryapi.onrender.com/Users/1`,{
    axios.patch(`https://grocryapi.onrender.com/LoggedIn/${logId}`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})

     //updating Store{AuthReducer.login.Order}
    // dispatch(upDateOrder(arr))
  };

     const handleDec=(id)=>{
      const arr = cartArr.map((e, i) => {
        if (e.id == id) {
          if(e.quantity>1){
            e.quantity--;
            e.total = e.price * e.quantity;
          }
        }
        return e;
      });
      setCartArr(arr);

      // setLoading(true)

      //axios.patch(`https://grocryapi.onrender.com/Users/1`,{
      axios.patch(`https://grocryapi.onrender.com/LoggedIn/${logId}`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})
    //  setLoading(false)
     //dispatch(upDateOrder(arr))
     }



   const handleDelete=(id)=>{
    const arr = cartArr.filter((e, i) => { return e.id!=id
    });

    setCartArr(arr);

    //axios.patch(`https://grocryapi.onrender.com/Users/1`,{
    axios.patch(`https://grocryapi.onrender.com/LoggedIn/${logId}`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})

     //dispatch(upDateOrder(arr))

   }



  useEffect(() => {
    //make id dynamic with params()
  
   // axios.get("https://grocryapi.onrender.com/Users/1").then((res) => {
    setLoading(true)
    axios.get(`https://grocryapi.onrender.com/LoggedIn/${logId}`).then((res) => {
      console.log(res.data.Order, "resOrder cartPage");
      const arr = res.data.Order.map((e, i) => {
        if(e.quantity==undefined){
          e.quantity = 1;
          e.total = e.price;
        }
        return e;
      });

      console.log(arr, "arr");
      setCartArr(arr);
      setLoading(false)
    });
    AOS.init({duration:2000})
  }, []);

  useEffect(() => {
    let sum = 0;
    if (cartArr.length > 0) {
      cartArr.forEach((e) => {
        sum = sum + e.total;
      });
    }
    setTotal(sum);
  });
 
  const handleCheckout = ()=>{
    navigate("/payment")
  }

  if(loading){
    return <Loader/>
  }


  return (

    <DIV className="container">
      <div className="row">
  <div className=" col-md-9 ps-5  py-5 rounded" data-aos="fade-right">
    <span className="d-flex justify-content-between">
<h3>Shopping Cart</h3>
<h6 className="me-5 fs-5 text-danger" >
{cartArr.length} Items  
    </h6>
    </span>
<hr />
    <table className="headerTable">
      <thead>
        <tr className="bg-danger text-white">
          <th>Item</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {cartArr &&
          cartArr.map((e, i) => {
            return (
              <tr className="shadow  " key={i}>
                <td>
                  <img src={e.image} alt="" />
                </td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{Math.floor(e.price)}</td>
                <td className="more_width">
                  <button className="plusMin " onClick={() => { handleDec(e.id); }}>
                    <AiOutlineMinusCircle className="text-danger"/>
                  </button>
              <span className="mx-1 text-danger">

                {e.quantity}
              </span>

                  <button className="plusMin " onClick={() => { handleInc(e.id); }}> <AiOutlinePlusCircle className="text-success" /></button>
               
                </td>
                <td>{Math.floor(e.total)}</td>
                <td>
                  <button className="deleteBtn py-1" onClick={() => { handleDelete(e.id); }}>
                    <AiFillDelete className="fs-4 "/>
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
    <hr className="mt-5"/>
  </div>

  <div className=" col-md-3 border-start " data-aos="fade-left">
    <h3 className="sideHead my-4  ms-3">Order Summary</h3>
    <hr />
    <p className="ms-3 fs-5" >
     Number Of Items : <span className="span1">{cartArr.length}</span>
    </p>
    <p  className="ms-3 fs-5">
      Total Amount: <span className="span2">₹{Math.floor(totalPrice)}</span>
    </p>
    <div className=" ms-3">
   <ButtonComponent onClick={handleCheckout} name="Checkout" />
    </div>
  </div>
      </div>
</DIV>


  );
};
const DIV = styled.div`
  display: flex;
  margin-top: 25px;

  
.outerDiv{
  width: 70%;
}
  img {
    width: 30%;
    margin-left:0% !important; 
  }

  .headerTable {
  width: 90%;
  /* padding-right:10%; */

  /* border-collapse: collapse; */
  /* margin-left: 20px; */
}

tbody tr{
  height: 80px;
/* border: 1px solid gray; */
}

.more_width{
  width: 100px;
}

.headerTable th, .headerTable td {
  text-align: center;
  padding: 10px;
  /* border: none;  */
}

/* .item-image {
  width: 70px;
  border-radius: 10px;
} */

.sideDiv {
  /* width: 30%; */
  border: none;
  /* border-radius: 20px; */
  /* height: 200px; */
  padding: 15px;
 
}

/* .sideDiv p {
  margin-left: 0px;
} */

/* .sideHead {
  text-align: center;
} */


/* .pay {
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
} */
.plusMin{
  border:none;

  /* border-radius: 4px; */
}

.deleteBtn{
  border:1px solid #dc3545;
  background-color:#dc3545;
  color: white;
  margin-right:70px;
  /* border-radius: 4px; */
}

.deleteBtn:hover{
  background-color: white;
  color:#dc3545;
}
`;
