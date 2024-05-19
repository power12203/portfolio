import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";
import palette from "./palette";
import { logout } from "../modules/user";
import { connect } from "react-redux";
import { reset_posts } from "../modules/postList";

const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  background-image: url('/public/imga/fff.gif');
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08); 
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
  }
  .right {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;
const SpaceDiv = styled.div`
  height: 4rem;
`;
const MenuUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  list-style: none;
`;

const MenuULLiLink = styled(Link)`
  font-style: 40px;
  color: black;
  &:hover {
    color: red;
  }
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  font-size: 30px;
`;
const Header = (props) => {
  const { user, logout, reset_posts } = props;
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    logout();
    reset_posts();
    navigate("/");
  }, [logout, reset_posts, navigate]);
  return (
    <>
      <HeaderDiv>
        <Wrapper>
          <Link to="/" className="logo">
          Jeong Gil
          </Link>
          <div className="meun">
          <MenuUL>
            <li>
              <MenuULLiLink>추천장소</MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>먹거리소개</MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/tnrth"
                >
                  숙소
                </Link>
              </MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>
              <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/post"
                >
                  후기 게시판
                </Link>
                </MenuULLiLink>
            </li>
          </MenuUL>
        </div>
          {user ? (
            <div className="right">
              <div style={{ marginRight: "5px" }}>{user.username}</div>
              <Button onClick={onClick}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Link to="/login" style={{ marginRight: "10px" }}>
                로그인
              </Link>
              <Link to="/register" style={{ marginRight: "5px" }}>회원 가입</Link>
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
