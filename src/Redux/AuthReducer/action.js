import axios from "axios";
import { GetUsersData, LoginFail, LoginRequest, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess, adminLogin } from "./actionTypes";
import { getProductRequest } from "../ProductReducer/actionTypes";


export const signUp = (userData) => (dispatch) => {
    dispatch({ type:SignUpRequest  });
    return axios
      .post("https://grocryapi.onrender.com/Users", userData)
      .then((res) => {
        dispatch({ type:SignUpSuccess , payload: res.data});
      })
      .catch((err) => {
        dispatch({ type:SignUpFail , payload: err.message });
      });
  };
  

  export const getUsers=(dispatch) => {
    return axios
      .get("https://grocryapi.onrender.com/Users")
      .then((res) => {
        dispatch({ type:GetUsersData , payload: res.data});
      })
      .catch((err) => {
        console.log(err)
      });
  };



  export const login=()=>{
        return { type:LoginUpdate};
  };


  export const loginOnload=(id)=>(dispatch)=>{
    axios
    .get(`https://grocryapi.onrender.com/LoggedIn/${id}`)
    .then((res) => {
      dispatch({ type:LoginUpdate , payload: res.data});
    })
    .catch((err) => {
      dispatch({ type:SignUpFail , payload: err.message });
    });
  }

  export const productOnload=(dispatch)=>{
    axios
    .get("https://grocryapi.onrender.com/Products")
    .then((res) => {
      dispatch({ type:getProductRequest , payload: res.data});
    })
    .catch((err) => {
      dispatch({ type:SignUpFail , payload: err.message });
    });
  }


  
  
  export const logout=(dispatch)=>{
    dispatch({type:LogoutUpdate});
    sessionStorage.removeItem('token');
  }

  export const upDateOrder=(data)=>(dispatch)=>{
    dispatch({type:upDateOrder,payload:data})
  }


  export const AdminLoginFunction = (dispatch) =>{
    dispatch({type:adminLogin})
  }