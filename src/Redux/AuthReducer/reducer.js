import { GetUsersData, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess, adminLogin, upDateOrder } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    Users:[],
    loginUser:{},
    adminAuth:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SignUpRequest:{
            return{
                ...state,isLoading:true
            }
        }
        case SignUpSuccess:{
            return{
                ...state,isLoading:false,Users:[...state.Users,payload]
            }
        }
        case SignUpFail:{
            return{
                ...state,isLoading:false,isError:true
            }
        }
        case GetUsersData:{
            return{
                ...state,Users:payload
            }
        }
       case LoginUpdate:{
        return{
            ...state,isAuth:true
        }
       }
       case LogoutUpdate:{
        return{
            ...state,isAuth:false,
        }
       }
       case upDateOrder:{
        return{
            ...state,isAuth:false,[state.loginUser.Order]:payload
        }
       }
       case adminLogin:
        return {...state,adminAuth:true}


        default: return state
    }
}