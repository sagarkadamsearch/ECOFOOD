import { DarkMode, GET_ADMIN_PRODUCT, TotalData, getProductFail, getProductRequest, getProductSuccess, getTotalProduct, getTotalProductsFiltered, getUsers } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    darkMode:false,
    length:0,
    Users:[],
    TotalProducts:[],
    TotalFilterProductsLength:0,
    adminProducts:[]
}
export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case getProductRequest:
            return {...state,isLoading:true};
        case getProductSuccess:
            return {...state,isLoading:false,products:payload}
        case getProductFail:
            return {...state,isLoading:false,isError:true}
        case getTotalProductsFiltered : 
           return {...state,TotalFilterProductsLength:payload}    
        case DarkMode:
            return {...state,darkMode:!state.darkMode}
        case TotalData:
            return {...state,length:payload};
        case getUsers:
            return {...state,Users:payload};
        case getTotalProduct:
           return {...state,TotalProducts:payload};
           case GET_ADMIN_PRODUCT:
            return {...state,adminProducts:payload}
        default: return state
    }
}