import styled from "@emotion/styled";
import axios from "axios"
import { useEffect, useState } from "react"
import { getUsers, signUp } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../Button";
import Swal from "sweetalert2";
import AOS from "aos"
import 'aos/dist/aos.css'
import { isValidEmail } from "../../Functions/isValidEmail";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import VisibilityIcon from '@mui/icons-material/Visibility';

export const SignUp=()=>{
    const[email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName] = useState("")
    const[password,setPassword]=useState("");
    const [isEyeOpen,setIsEyeOpen] = useState(false);
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const Users = useSelector((store) => {
        return store.AuthReducer.Users;
      });
   
    const handleSubmit= async()=>{

      if(!email || !password || !firstName || !lastName){
        alert("Please fill all fields!");
     }

     if(!isValidEmail(email)){
        alert("Please enter a valid email address!");
     }

        const userData={
            name:firstName,
            surname:lastName,
            email:email,
            password:password,
         }
           try {
            const Data = await axios.post(process.env.REACT_APP_API_backendUrl+"users/create",userData);
             
            if(Data?.data.Msg.includes('successfully')){
              Swal.fire({
                title: 'SignUp Successfully',
                text: 'You are Logged in Successfully!',
                icon: 'success', // Set the icon to 'success'
                confirmButtonColor: '#DC3545'
              });
 
               setEmail('');
               setFirstName('');
               setLastName('');
               setPassword('');
             }
             else{
              Swal.fire({
                title: 'Email Already Registered',
                text: 'Enter DIfferent Email',
                icon: 'error',
                confirmButtonColor: '#DC3545'
              })
             }

           } catch (error) {
             console.log({"Error":error});
           } 
            
      
   
          
          }
    
    
    useEffect(()=>{
    
      AOS.init({duration:2000})
    },[]);

    return(
        <DIV>
          <div className="container" >
            <div className="row">
              <div className="col-md-7 d-none d-lg-flex">
              <img className="w-100" src="https://img.freepik.com/premium-vector/set-fastfood-items-vector-illustration_920128-50.jpg?w=2000" alt="" />
              </div>
              <div className="col-md-5" data-aos="fade-left">
            <h1>Signup</h1>

            <label  htmlFor="">Name</label>
            <span className="d-flex" >
            <input  type="text" value={firstName} className="px-2 fs-5 name" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />
            <input type="text" value={lastName} className="px-2 fs-5  name" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} />

            </span>


            <label htmlFor="">Email</label>
            <input type="text" value={email} className="px-2 fs-5" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <div style={{position:"relative",display:"flex",alignItems:'center'}}>
              <input 
               type={isEyeOpen?"text":"password"}
               value={password}
               className="px-2 fs-5"
               placeholder="Password"
               onChange={(e)=>{setPassword(e.target.value)}}
               />
              <span style={{position:"absolute",right:"60px",cursor:"pointer"}}>
              {isEyeOpen ?
               <VisibilityIcon onClick={()=>setIsEyeOpen(!isEyeOpen)}/> :
               <VisibilityOffIcon onClick={()=>setIsEyeOpen(!isEyeOpen)} />
              }
            </span>
            </div>  
            <span className="d-flex justify-content-between mt-2">

            <ButtonComponent onClick={handleSubmit} name={"submit"} />
            <Link className="me-5 text-danger text-decoration-none"  to="/login">Already SignedUp? Login</Link>
            </span>
              </div>
            </div>
          </div>
        </DIV>
    )
}
const DIV=styled.div`


    display: flex;
    flex-direction: column;
  

  button {
    margin-top: 10px;
    border: none;
  }
  h1 {
    color: #dc3545;
  }

  input{
   width: 90%;
    height: 42px;
    margin-left: 5px;
  }

  label{
    margin: 5px;

  }

  img{
    height: 500px;
    mix-blend-mode: multiply;
  }

  .col-md-5{
    height: 400px;
    margin-top: 50px;
  }
   
  .name{
    width: 44%;
  }

`