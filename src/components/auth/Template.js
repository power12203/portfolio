import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../common/palette";

const TemplateDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.Gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const FomBoxDiv = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 300px;
  border-radius: 2px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
  position: absolute;
  width: 450px;
  min-height: 480px;
  overflow: hidden;
  .logo {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

const Template = ({ children }) => {
  return (
    <TemplateDiv>
      <FomBoxDiv>
        <div className="logo">
          <Link style={{ textDecoration: "none" }} to="/">
            main
          </Link>
        </div>
        {children}
      </FomBoxDiv>
    </TemplateDiv>
  );
};

export default Template;