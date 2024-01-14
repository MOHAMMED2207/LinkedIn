import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SingOutAPI } from "../Redux/Reducer";
import { useDispatch } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  return (
    <Container>
      <Logo>
        <Link href="/home">
          <img src="/images/home-logo.svg" alt="" />
        </Link>
      </Logo>
      <Search>
        <div>
          <input type="text" placeholder="Search" />
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </div>
      </Search>
      <Nav>
        <NavListWrap>
          <NavList className="active">
            <Link>
              <img src="/images/nav-home.svg" alt="" />
              <span>Home</span>
            </Link>
          </NavList>
          <NavList>
            <Link>
              <img src="/images/nav-network.svg" alt="" />

              <span>My Network</span>
            </Link>
          </NavList>
          <NavList>
            <Link>
              <img src="/images/nav-jobs.svg" alt="" />

              <span>Jobs</span>
            </Link>
          </NavList>
          <NavList>
            <Link>
              <img src="/images/nav-messaging.svg" alt="" />

              <span>Messaging</span>
            </Link>
          </NavList>
          <NavList>
            <Link>
              <img src="/images/nav-notifications.svg" alt="" />
              <span>Notifications</span>
            </Link>
          </NavList>
          <User>
            <Link>
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}

              <span>
                Me
                <img src="/images/down-icon.svg" alt="" />
              </span>
            </Link>
            <SignOut onClick={() => dispatch(SingOutAPI())}>
              <Link style={{color:"white"}}>Sign Out</Link>
            </SignOut>
          </User>
          <Work>
            <Link>
              <img src="/images/nav-work.svg" alt="" />
              <span>
                Work
                <img src="/images/down-icon.svg" alt="" />
              </span>
            </Link>
          </Work>
        </NavListWrap>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 11px 24px 4px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      border-bottom: 1px solid #b7babd;
      font-size: 14px;
      height: 34px;
      outline: none;
      vertical-align: text-top;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
 
      display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    justify-content: center;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 80px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled(NavList)`
  position: absolute;
  top: 45px;
  border-radius: 0 0 5px 5px;
  width: 100px;
  right: -12px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  background: #575b5f;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    right: -12px;
    margin: auto;
    background: #575b5f;
    color: white;
  }&:hover{
    background: red;

  }
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 575px) {
    display: none;
  }
`;

export default Header;
