import React, {useReducer, useState } from 'react';
import { styled } from 'styled-components';
import ProgressBar from './ProgressBar';
import PaymentButton from './PaymentButton';
import CreditCardForm from './CreditCardForm';
import InternetBankingForm from "./InternetBankingForm";
import UPIForm from './UPIForm';
import { initialState, reducer } from './AdressDataReducer';


const Payment = () => {

    const [page,setPage] = useState(0);
    const [state,dispatch] = useReducer(reducer,initialState);
    const [paymentMode,setPaymentMode] = useState("card");

    const handleNext = ()=>{
        setPage((prev)=>prev+1);
    }

    const handleBack = ()=>{
        setPage((prev)=>prev-1);
    }

    const updateState = (e)=>{
       let {name,value}= e.target; 
        dispatch({type:name,payload:value});
    }
 
    const handlePaymentDiv=(e)=>{   
        const {id} = e.target;
        setPaymentMode(id)
    }
 
   

    return (
    <DIV>
        <ProgressBar page={page}/>
        <div className={page==0?'addressDiv':"blockDiv"}>  
            <div className='two'>
                <div className='inputDiv'>
                   <label className='ms-2 mb-1'>First Name</label>
                   <input type='text' onChange={(e)=>updateState(e)} value={state.name}  name='name'/>
                </div> 
                <div className='inputDiv'>
                   <label className='ms-2 mb-1' htmlFor="my-input">Last Name</label>
                   <input type='text' name='surname'value={state.surname} onChange={updateState} />
                </div>
            </div>

            <div className='two' >
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">E-mail Address</lable>
                   <input type='email' name='email' value={state.email} onChange={updateState}/>
                </div>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Mobile Number</lable>
                   <input type='number' name='mobileNumber' value={state.mobileNumber} onChange={updateState} />
                </div>
            </div> 
  
            <div className='two'> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">City</lable>
                   <input type='text' name='city' value={state.city} onChange={updateState} />
                </div>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">PostCode</lable>
                   <input type='number' name='postcode' value={state.postcode} onChange={updateState}/>
                </div> 
            </div>

            <div className='two'> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Country</lable>
                   <input type='text' name='country' disabled value={"India"}/>
                </div> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">State</lable>
                   <input type='text' name='state' value={state.state} onChange={updateState} />
                </div> 
            </div>

            <div className='one'> 
                <div className='inputDiv'>
                   <label className='ms-2 mb-1' htmlFor="my-input">Adress Line 1</label>
                   <input type='text' name='address1' value={state.address1} onChange={updateState}/>
                </div> 
            </div>

            <div className='one'>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Adress Line 2</lable>
                  <input type='text' name='address2' value={state.address2} onChange={updateState} />
                </div> 
            </div>
        </div>    

        <div className={page==1?'confirmAddressDiv':"blockDiv"}>  
            <div className='two'>
                <div className='inputDiv'>
                   <label className='ms-2 mb-1'>First Name</label>
                   <input type='text' disabled value={state.name}  name='name'/>
                </div> 
                <div className='inputDiv'>
                   <label className='ms-2 mb-1' htmlFor="my-input">Last Name</label>
                   <input type='text' name='surname'value={state.surname} disabled />
                </div>
            </div>

            <div className='two' >
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">E-mail Address</lable>
                   <input type='email' name='email' value={state.email} disabled/>
                </div>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Mobile Number</lable>
                   <input type='number' name='mobileNumber' value={state.mobileNumber} disabled />
                </div>
            </div> 
  
            <div className='two'> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">City</lable>
                   <input type='text' className='form-control' name='city' value={state.city} disabled />
                </div>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">PostCode</lable>
                   <input type='number' className='form-control' name='postcode' value={state.postcode} disabled/>
                </div> 
            </div>

            <div className='two'> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Country</lable>
                   <input type='text' name='country' disabled value={"India"}/>
                </div> 
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">State</lable>
                   <input type='text' name='state' value={state.state} disabled />
                </div> 
            </div>

            <div className='one'> 
                <div className='inputDiv'>
                   <label className='ms-2 mb-1' htmlFor="my-input">Adress Line 1</label>
                   <input type='text' name='address1' value={state.address1} disabled/>
                </div> 
            </div>

            <div className='one'>
                <div className='inputDiv'>
                   <lable className='ms-2 mb-1' htmlFor="my-input">Adress Line 2</lable>
                  <input type='text' name='address2' value={state.address2} disabled />
                </div> 
            </div>
        </div>  

        <PAYDIV className={page==2?'addressDiv':"blockDiv"}>
            <div className='sideDiv'>
                <div style={{paddingLeft:"30px",border:"1px solid rgba(0,0,0,.125)"}} >PAY WITH</div>
                <div className={paymentMode=="card"?'active_pay_SideDiv':""} id="card" onClick={handlePaymentDiv}><img width="30" height="35"   className='payDivIconImg'  src="https://img.icons8.com/fluency/48/card-in-use.png" alt="card-in-use"/>  Card</div>
                <div className={paymentMode=="ib"?'active_pay_SideDiv':""}   id="ib" onClick={handlePaymentDiv} ><img width="30" height="33"    className='payDivIconImg'  src="https://img.icons8.com/external-avoca-kerismaker/64/external-Internet-Banking-finance-avoca-kerismaker.png" alt="img"/>Internet Banking</div>
                <div className={paymentMode=="upi"?'active_pay_SideDiv':""}   id="upi" onClick={handlePaymentDiv} ><img width="40" height="40"  className='payDivIconImg'  src="https://img.icons8.com/ios/50/40C057/bhim-upi.png" alt="bhim-upi"/>UPI</div>
                <div><img width="35" height="35" style={{marginRight:"10px",marginLeft:"10px"}}  src="https://img.icons8.com/external-flat-juicy-fish/60/external-qr-hands-and-gestures-flat-flat-juicy-fish.png" alt="img"/>By Scan QR</div> 
            </div>     
            <CreditCardForm paymentMode={paymentMode}/>
            <UPIForm paymentMode={paymentMode}/> 
            <InternetBankingForm paymentMode={paymentMode}/>  
        </PAYDIV>
           
        <PaymentButton handleBack={handleBack} handleNext={handleNext} page={page}/>
    </DIV>
    );
};
export default Payment;


const DIV = styled.div`

font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
flex-direction: column;
margin: auto;
justify-content: space-between;
align-items: center;
align-content: space-between;
width: fit-content;
padding-left: 40px;
padding-right: 40px;
padding-top: 10px;
margin-top: 20px;
/* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
.two{   
   display: flex;
   gap: 20px;
   margin-top: 15px;
 
}

/* lable{
    margin-left:8px;
    margin-bottom: 5px;
} */
.two input{
   background-color: white;
   width:300px;
   height: 45px;
  border: none;
   font-size: 16px;
   color: darkblue;
   /* border-radius: 10px; */
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.one input{
   background-color: white;
   width:620px;
   height: 45px;
   border:none;
   font-size: 16px;
   /* color: darkblue; */
   /* border-radius: 10px; */
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
 .one input:hover{
    border:1px solid black;
 }
 .two input:hover{
    border:1px solid black;
 }
.inputDiv{
 display:flex;
 flex-direction:column;
}
.blockDiv{
    display: none;
}
.confirmAddressDiv input{
     background-color: lightgray;
     transition: transform 0.5s ease-in;
     transform: rotate(20);
}
`


const PAYDIV= styled.div`
width: 690px;
height: 460px;
/* border: 1px solid red; */
display: flex;
flex-direction: row;
gap: 0px;
background-color: #FBFCFE;
.sideDiv{
 width: fit-content;
 height: 100%;
 background-color: #F8F9FA;
 border:1px solid rgba(0,0,0,.125);
}
.sideDiv div{
    display: flex;
    align-items: center;
    width: 230px;
    height: 15%;
    text-align: left;
    /* border: 1px solid black; */
    background-color: #F8F9FA;
     padding-left: 20px;
     padding-right: 20px;
     border:1px solid rgba(0,0,0,.125);
}
.activePaymentMode{
    display: block;
}
.paymentMode{
    display: none;
}
.sideDiv .active_pay_SideDiv{
    background-color: #dc3545;
    color:white;
    opacity: 10;
}
.payDivIconImg{
    margin-right:10px;
    margin-left:10px;
    pointer-Events: none;
}

`


