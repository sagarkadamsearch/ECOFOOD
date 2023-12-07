import { Link, NavLink, useNavigate } from "react-router-dom";
import ButtonComponent from "./Button";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { handleDarkMode } from "../Redux/ProductReducer/action";
import { logout } from "../Redux/AuthReducer/action";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillBagDashFill } from "react-icons/bs";

export default function Navbar() {
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  const mode = useSelector((store) => store.ProductsReducer.darkMode);
  const isAuth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });

  const order = useSelector((store) => {
    return store.AuthReducer.loginUser.Order;
  });
  const logEmail = useSelector((store) => {
    return store.AuthReducer.loginUser.email;
  });
  const logId = useSelector((store) => {
    return store.AuthReducer.loginUser.id;
  });

  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(handleDarkMode);
  };

  const handleLogout = () => {
    console.log(order, "nav order");
    console.log(logEmail, "logEmail");

    const userData = users.filter((e, i) => {
      return e.email == logEmail;
    });
    console.log(userData, "userDate");

    //update user api with new order details at the time of user log out
    axios
      .patch(`https://grocryapi.onrender.com/Users/${userData[0].id}`, {
        Order: [...order],
      })
      .then((res) => {
        console.log(res);
      });

    //update loggedIn api with delete action and making it empty
    axios
      .delete(`https://grocryapi.onrender.com/LoggedIn/${logId}`)
      .then((res) => {
        console.log(res);
      });

    dispatch(logout);

    Swal.fire({
      title: "Logout Successful",
      text: "You are Logged out Successfully!",
      icon: "success", // Set the icon to 'success'
      confirmButtonColor: "#DC3545",
    });
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    axios.get("https://grocryapi.onrender.com/Users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, [isAuth]);

  return (
    <>
      <DIV className="navbar navbar-expand-lg sticky-top ">
        <div className="container text-center text-md-start">
          <Link
            onClick={handleTop}
            className="navbar-brand fw-bolder fs-2 themeColor "
            to="/"
          >
            <img src="/img/logo.png" alt="" /> &nbsp; &nbsp;ECOFOOD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-4 ps-lg-0 text-uppercase">
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold "
                  aria-current="page"
                  to="/"
                  style={{ color: mode ? "white" : "black" }}
                >
                  home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold text-black"
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold text-black"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold text-black"
                  to="/order"
                >
                  Orders
                </NavLink>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row">
              {/* <ButtonComponent
                name={mode ? "Light" : "Dark"}
                onClick={handleMode}
              /> */}

              {/* <Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">{isAuth?"UserName":"Register"}</Button> */}
              {/* <NavLink to="/login" >
          {isAuth?<User/>:<Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">Register</Button>}
          </NavLink> */}

              {isAuth ? (
                <ButtonComponent onClick={handleLogout} name={"logout"} />
              ) : (
                <ButtonComponent name="login" onClick={redirectLogin} />
              )}

              {/* <ButtonComponent
                name={<BsFillBagDashFill/>}
                onClick={handleMode}
              /> */}
              <Link to={"/cartPage"} className="bg-none border-0 cart-btn ms-lg-3 text-danger fs-3"><BsFillBagDashFill/></Link>
            </div>
          </div>
        </div>
      </DIV>
    </>
  );
}

const DIV = styled.nav`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  .cart-btn{
    margin-top: -5px;
  }

  
`;
