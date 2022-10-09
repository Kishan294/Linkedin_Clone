import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInApi } from "../actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin onClick={() => props.signIn()}>Sign in</Signin>
        </div>
      </Nav>
      <Section>
        <Card>
          <Wrapper>
            <h2>Sign in</h2>
            <p>Stay updated on your professional world</p>
            <input type="email" id="email" placeholder="Email or Phone" />
            <input type="password" id="password" placeholder="Password" />
            <Forgotten>Forgot password?</Forgotten>
            <button>Sign in</button>
            <Separator>
              <span>or</span>
            </Separator>
            <Form>
              <Google onClick={() => props.signIn()}>
                <img src="/images/google.svg" alt="" />
                Sign in with google
              </Google>
            </Form>
          </Wrapper>
        </Card>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
      width: 110px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding: 7px;
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 250ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
  }
`;

const Card = styled.div`
  width: 352px;
  height: 458px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  box-sizing: border-box;
`;

const Separator = styled.div`
  position: relative;
  text-align: center;
  margin: 15px 0;

  span::before,
  span::after {
    content: "";
    width: 45%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 10px;
    left: 0;
    bottom: 0;
  }

  span::after {
    right: 0;
    left: unset;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  h2 {
    font-size: 32px;
  }

  p {
    font-size: 14px;
    font-weight: 200;
    margin: 10px 0;
    color: rgba(0, 0, 0, 0.9);
  }

  input {
    box-sizing: border-box;
    width: 304px;
    padding: 12px 6px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.9);
    outline: none;
    font-size: 18px;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    margin-top: 20px;

    &::placeholder {
      margin-left: 10px;
    }
  }

  button {
    width: 304px;
    padding: 0 24px;
    background: #0a66c2;
    border-radius: 28px;
    color: #fff;
    height: 52px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
      inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    text-align: center;

    &:hover {
      &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
      }
    }
  }
`;

const Forgotten = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  outline-width: 2px;
  padding: 0 8px;
  text-align: center;
  text-decoration: none;
  color: #0a66c2;
  margin: 8px 0;
`;

const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  justify-content: center;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Form = styled.div`
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  outline: none;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  img {
    margin-right: 4px;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
