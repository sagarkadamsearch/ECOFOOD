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

export const SignUp=()=>{
    const[email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName] = useState("")
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const Users = useSelector((store) => {
        console.log("store sig", store.AuthReducer);
        return store.AuthReducer.Users;
      });
    // const getData=()=>{
    //     console.log("step1")
    //   axios.get("https://grocryapi.onrender.com/Users")
    //   .then((res)=>{console.log(res.data)})
    // }
    const handleSubmit=()=>{
        const userData={
            name:firstName+" "+lastName,
            email:email,
            password:password,
            Order:[]
         }

         const checkEm = Users.filter((e, i) => {
            return e.email === userData.email;
          });

          if (checkEm.length == 0) {
            // alert("signin success")

            Swal.fire({
              title: 'SignUp Successfully',
              text: 'You are Logged in Successfully!',
              icon: 'success', // Set the icon to 'success'
              confirmButtonColor: '#DC3545'
            });
              dispatch(signUp(userData))
              navigate("/login")
          }
          else{
          //  alert("email already present")
          Swal.fire({
            title: 'Email Already Registered',
            text: 'Enter DIfferent Email',
            icon: 'error',
            confirmButtonColor: '#DC3545'
          })
          }
    }
    
    useEffect(()=>{
      dispatch(getUsers);
      AOS.init({duration:2000})
    },[])
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
            <input type="text" value={password} className="px-2 fs-5" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
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