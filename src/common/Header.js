import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";
import palette from "./palette";
import { logout } from "../modules/user";
import { connect } from "react-redux";
import { reset_posts } from "../modules/postList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
  @media only screen and (max-width: 600px) {
    height: 60px;
  }
`;

const Wrapper = styled(Responsive)`
  width: 85%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;
  }
  .right {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 3rem;
    .logo {
      font-size: 0.875rem;
      margin: auto;
    }
  }
`;

const SpaceDiv = styled.div`
  height: 4rem;
  @media only screen and (max-width: 600px) {
    height: 3rem;
  }
`;

const MenuUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  list-style: none;
  @media only screen and (max-width: 600px) {
    display: ${({ isToggled }) => (isToggled ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
  }
`;

const MenuULLiLink = styled(Link)`
  font-style: 40px;
  color: white;
  &:hover {
    color: red;
  }
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  font-size: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const ToggleButton = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
const UserMenuUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin-top: 10px;
  list-style: none;
  @media only screen and (max-width: 600px) {
    display: ${({ userToggled }) => (userToggled ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
}
`;

const Header = (props) => {
  const { user, logout, reset_posts } = props;
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const onClick = useCallback(() => {
    logout();
    reset_posts();
    navigate("/");
  }, [logout, reset_posts, navigate]);

  return (
    <>
      <HeaderDiv>
        <Wrapper>  
        <ToggleButton onClick={() => setIsToggled(!isToggled)}>
            <FontAwesomeIcon icon={isToggled ? faTimes : faBars} />
          </ToggleButton>
          <Link to="/" className="logo" style={{ color: "white" }}>
            Jeong Gil
          </Link>

          <div className="menu">
            <MenuUL isToggled={isToggled}>
              <li>
                <MenuULLiLink to="/">추천장소</MenuULLiLink>
              </li>
              <li>
                <MenuULLiLink to="/">먹거리소개</MenuULLiLink>
              </li>
              <li>
                <MenuULLiLink to="/tnrth">숙소</MenuULLiLink>
              </li>
              <li>
                <MenuULLiLink to="/post">후기 게시판</MenuULLiLink>
              </li>
            </MenuUL>
          </div>
          {user ? (
            <div className="right">
              <div style={{ marginRight: "5px", color: "white" }}>
                {user.username}
              </div>
              <Button onClick={onClick}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
          <ToggleButton onClick={() => setUserToggled(!userToggled)}>
            <FontAwesomeIcon icon={isToggled ? faTimes : faUser} />
          </ToggleButton>
            <UserMenuUL userToggled={userToggled}>
              <Link
                to="/login"
                style={{
                  marginRight: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                로그인
              </Link>
              <Link
                to="/register"
                style={{
                  marginRight: "5px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                회원 가입
              </Link>
              </UserMenuUL>
            </div>
          )}
        </Wrapper>
      </HeaderDiv>
      <SpaceDiv />
    </>
  );
};

export default connect(
  (state) => ({
    user: state.user.user,
  }),
  {
    logout,
    reset_posts,
  }
)(Header);
