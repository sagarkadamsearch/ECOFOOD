import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdminLoginFunction, getUsers, login, logout } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginSuccess } from "../../Redux/AuthReducer/actionTypes";
import ButtonComponent from "../Button";
import Swal from 'sweetalert2';
import AOS from "aos"
import 'aos/dist/aos.css'
import { isValidEmail } from "../../Functions/isValidEmail";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEyeOpen,setIsEyeOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const Users = useSelector((store) => {
    return store.AuthReducer.Users;
  });

  const isAuth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });


  const handleSubmit = async() => {
    const Data = {
      email: email,
      password: password,
    };

     if(!email || !password){
        alert("Please fill all fields!");
     }

     if(!isValidEmail(email)){
        alert("Please enter a valid email address!");
     }

    if(email == "admin@gmail.com"){
      Swal.fire({
        title: 'Login Successful',
        text: 'You are Logged in Successfully!',
        icon: 'success', // Set the icon to 'success'
        confirmButtonColor: '#DC3545'
      });
      dispatch(AdminLoginFunction)
    }

    const userVerified = await axios.post(process.env.REACT_APP_API_backendUrl+'users/login',Data)
     
     if(userVerified?.data.token){
        Swal.fire({
          title: 'Login Successful',
          text: 'You are Logged in Successfully!',
          icon: 'success', // Set the icon to 'success'
          confirmButtonColor: '#DC3545'
        });
        
        sessionStorage.setItem('token',userVerified.data.token);
        dispatch(login());
        navigate('/')

     }
     else{
        Swal.fire({
          title: 'Wrong Credential!',
          text: 'Enter Correct Credential',
          icon: 'error',
          confirmButtonColor: '#DC3545'
        })
      
     }
  };

 

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <>
      <DIV className="my-5" >
        <div className="login container">
          <div className="row">
            <div className="col-md-7 d-none d-lg-grid">
              <img className="w-100" src="https://img.freepik.com/premium-vector/set-fastfood-items-vector-illustration_920128-50.jpg?w=2000" alt="" />
            </div>

            <div className="col-md-5" data-aos="fade-right">

              <div className="">

             
            <label className="fs-4" htmlFor="">Email</label>
            <br />
          <input
          className="px-2 fs-5"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

            <br />

          <label className="fs-4" htmlFor="">Password</label>
          <br />
          <div style={{position:"relative",display:"flex",alignItems:'center'}}>
          <input
          className="px-2 fs-5"
            type={isEyeOpen?"text":"password"}
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span style={{position:"absolute",right:"60px",cursor:"pointer"}}>
            {isEyeOpen ?
             <VisibilityIcon onClick={()=>setIsEyeOpen(!isEyeOpen)}/> :
             <VisibilityOffIcon onClick={()=>setIsEyeOpen(!isEyeOpen)} />
            }
            </span>
          
          </div>
          <br />
          {/* <button onClick={handleSubmit}>submit</button> */}

          <span className="d-flex justify-content-between mt-2">
          <ButtonComponent  onClick={handleSubmit} name={"submit"} />

          <Link className="me-5 text-danger text-decoration-none" to="/signup">
           New User? signUp
          </Link>
          </span>

          </div>
            </div>
          </div>
  
        </div>
      </DIV>
    </>
  );
};
const DIV = styled.div`

  .login {
    display: flex;
    flex-direction: column;
  }

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
    /* margin:10px; */
    /* display: block; */
  }

  label{
    margin: 5px;

  }

  img{
    height: 400px;
    mix-blend-mode: multiply;
  }

  .col-md-5{
    height: 400px;
    margin-top: 70px;
  }
`;
