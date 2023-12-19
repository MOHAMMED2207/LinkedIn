import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SingInAPI } from "../Redux/Reducer";
import "../Style/Login.css";
const Login = () => {
  const NavigateLink = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  return (
    <Container>
      {user && NavigateLink("/Home")}
      <div className="Nav">
        <Link href="/index.html">
          <img src="/images/login-logo.svg" alt="" />
        </Link>
        <div className="leftNav">
          <h1>Join now</h1>
          <h2>Sign in</h2>
        </div>
      </div>
      <div className="hederNav">
        <div className="leftsaid">
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </div>
        <div className="rightsaid">
          <div className="googel" onClick={() => dispatch(SingInAPI())}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
