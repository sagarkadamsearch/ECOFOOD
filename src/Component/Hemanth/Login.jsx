import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdminLoginFunction, getUsers, login, logout } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginSuccess } from "../../Redux/AuthReducer/actionTypes";
// import { Alert } from "@mui/material";
import ButtonComponent from "../Button";
import Swal from 'sweetalert2';
import AOS from "aos"
import 'aos/dist/aos.css'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const Users = useSelector((store) => {
    console.log("store", store.AuthReducer);
    return store.AuthReducer.Users;
  });
  const isAuth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });

  // const getData=()=>{
  //     console.log("step1")
  //   axios.get("https://grocryapi.onrender.com/Users")
  //   .then((res)=>{console.log(res.data)})
  // }
  //  axios.post("https://grocryapi.onrender.com/Users",userData)
  //  .then((res)=>{console.log(res,"1")})
  //  .catch((err)=>{console.log(err,"2")})

  const handleSubmit = () => {
    const Data = {
      email: email,
      password: password,
    };
    console.log(Data, "Data");

    if(email == "admin@gmail.com"){
      Swal.fire({
        title: 'Login Successful',
        text: 'You are Logged in Successfully!',
        icon: 'success', // Set the icon to 'success'
        confirmButtonColor: '#DC3545'
      });
      dispatch(AdminLoginFunction)
    }else{
    const emData = Users.filter((e, i) => {
      return e.email == Data.email;
    });

    // console.log(emData, "emData");
    if (emData.length != 0) {
      if (emData[0].password === Data.password) {
        console.log("successful login ");
        
        Swal.fire({
          title: 'Login Successful',
          text: 'You are Logged in Successfully!',
          icon: 'success', // Set the icon to 'success'
          confirmButtonColor: '#DC3545'
        });
        // alert("login Success");
        dispatch(login(emData[0]));
        navigate(-1)
      } else {
        console.log("wrond password");
        Swal.fire({
          title: 'Wrong Password',
          text: 'Enter Correct Credential',
          icon: 'error',
          confirmButtonColor: '#DC3545'
        })
      }
    } else {
      console.log("email not found");
      Swal.fire({
        title: 'Email not Found',
        text: 'Enter Correct Credential',
        icon: 'error',
        confirmButtonColor: '#DC3545'
      })
    }
  };
}
  // const handleLogout = () => {
  //   dispatch(logout);
  // };

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <>
      <DIV className="my-5" >
        {/* <div className="logout">
          <h1>logout</h1>
          <ButtonComponent onClick={handleLogout} name={"logout"} />
        </div> */}


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
          <input
          className="px-2 fs-5"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(+e.target.value);
            }}
          />
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
          {/* <h1>Login</h1> */}

          {/* {isAuth ? (
            <Alert severity="success">login successful</Alert>
          ) : (
            <Alert severity="info">login for better experince</Alert>
          )} */}



 
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
