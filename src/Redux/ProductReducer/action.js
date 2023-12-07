import { DarkMode, GET_ADMIN_PRODUCT, TotalData, getProductFail, getProductRequest, getProductSuccess, getTotalProduct, getUsers } from "./actionTypes"
import axios from "axios"

export const getProducts = (paramsObj,page) => (dispatch)=>{
    dispatch({type:getProductRequest});
    axios.get(`https://grocryapi.onrender.com/products?_page=${page}&_limit=6`,paramsObj).then((res)=>{
        dispatch({type:getProductSuccess,payload:res.data})
    }).catch((err)=>{
        dispatch({type:getProductFail})
    })
}

export const handleDarkMode = (dispatch)=>{
   dispatch({type:DarkMode})
}



 export const getCount = (dispatch)=>{
    axios.get(`https://grocryapi.onrender.com/products`).then((res)=>{
    dispatch({type:TotalData,payload:res.data.length})
    }).catch((err)=>{

    })
  }


  export const getUsersData = (dispatch)=>{
    axios.get(`https://grocryapi.onrender.com/Users`).then((res)=>{
        dispatch({type:getUsers,payload:res.data})
        }).catch((err)=>{
    
        })
  }


  export const getTotalProductFunction = (dispatch)=>{
    axios.get(`https://grocryapi.onrender.com/products`).then((res)=>{
        dispatch({type:getTotalProduct,payload:res.data})
        }).catch((err)=>{
    
        })
  }


//   

  export const getAdminProducts = (paramsObj) => (dispatch) => {
    console.log("step1 admin")
    axios
      .get("https://grocryapi.onrender.com/products", paramsObj)
      .then((res) => {
        console.log(res.data,"getAdminproducts data ")
        dispatch({ type: GET_ADMIN_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        console.log(err,"admin product action.js products")
      });
  };


  export const deleteAdminProducts = (id) => (dispatch) => {
    console.log("step1 admin")
    axios
      .delete(`https://grocryapi.onrender.com/products/${id}`)
      .then((res) => {
        console.log(res.data,"deleteAdminproducts data ")
      })
      .catch((err) => {
        console.log(err,"admin product action.js products")
      });
  };


  export const editAdminProduct = (id,data) => (dispatch) => {
    return  axios
       .patch(`https://grocryapi.onrender.com/products/${id}`, data)
       .then((res) => {
       console.log("succes edit")
       })
       .catch((err) => {
       });
   };



   export const addAdminProduct = (productData) => (dispatch) => {
    return axios
          .post("https://grocryapi.onrender.com/products", productData)
          .then((res) => {
            console.log("successful add product")
          })
          .catch((err) => {
          });
      };