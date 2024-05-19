import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../common/palette";
import Button from "../../common/Button";

const FormDiv = styled.div`
  background: #ebecf0;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    color: ${palette.Gray[8]};
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`;
const Forms =styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InputStyle = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Gray[5]};
  padding-bottom: 0%.5rem;
  outline: none;
  width: 100%;
  background: #eee;
  padding: 16px;
  margin: 8px 0;
  width: 85%;
  border: 0;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  &:focus {
    color: ${palette.Teal[7]};
    border-bottom: 1px solid ${palette.Gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonStyle = styled.button`
  width: 200px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  margin: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
  box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
`;

const FootDiv = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.Gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.Gray[9]};
    }
  }
`;
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
const textType = {
  login: "로그인",
  register: "회원 가입",
};
const Form = (props) => {
  const { mode, form, onChange, onSubmit, error } = props;
  const text = textType[mode];
  console.log(form);
  return (
    <FormDiv>
      <h3>{text}</h3>
      <Forms onSubmit={onSubmit}>
        <InputStyle
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <InputStyle
          autoComplete="password"
          name="password"
          placeholder="비밀 번호"
          onChange={onChange}
          value={form.password}
          type="password"
        />
        {mode === "register" && (
          <InputStyle
            autoComplete="passwordConfirm"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
            type="password"
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonStyle Cyan>{text}</ButtonStyle>
      </Forms>
      <FootDiv>
        {mode === "login" ? (
          <Link to="/register">회원 가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </FootDiv>
    </FormDiv>
  );
};

export default Form;
