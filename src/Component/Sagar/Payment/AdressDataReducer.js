export const initialState= {
    name:"",
    surname:"",
    email:"",
    mobileNumber:"",
    address1:"",
    address2:"",
    city:"",
    postcode:"",
    country:"India",
    state:"",
}


export const reducer = (state,{type,payload})=>{
    switch(type){
        case "name": 
            return {...state,name:payload}; 
        case "surname":
            return {...state,surname:payload};
        case "email":
            return {...state,email:payload}; 
        case "mobileNumber":
            return {...state,mobileNumber:payload};
        case "address1":
            return {...state,address1:payload};
        case "address2":
            return {...state,address2:payload};  
        case "city":
            return {...state,city:payload};  
        case "postcode":
            return {...state,postcode:payload};  
        case "country":
            return {...state,country:payload};
        case "state":
            return {...state,state:payload};
        default:
            return state;                                      
    }
}