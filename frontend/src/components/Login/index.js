import React from "react";
import logo from "../../assets/logo_white.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  H1,
  H2,
  H3,
  P,
  LeftContainerLoginRegister,
  UpLContainerLoginRegister,
  MotionLogoAndWord,
  ButtonDownloadGoogle,
  ButtonDownloadApple,
  ButtonContainer,
  BtLContainerLoginRegister,
  Rights,
  ButtonTwitter,
  ButtonFacebook,
  ButtonInstagram,
  ButtonSocialContainer,
  RightContainerLoginRegister,
  SignInButtonContainer,
  SignInOutButton,
  SignInContainer,
  SignInForm,
  ButtonsGradient,
  LoginInputUsername,
  LoginInputPass,
  LoginInputContainer,
} from "../../style/login_register";
import { Container } from "../../style/container";

class Login extends React.Component {
  handleLogin = async (e) => {
    e.preventDefault();

    const loginUrl =
      "https://santos.natayra.propulsion-learn.ch/backend/api/auth/token/"

    const loginConfig = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),

      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    };

    const response = await fetch(loginUrl, loginConfig);
    if (!response.ok) {
      const msg = await response.json();
      const action = {
        type: "failedLogin",
        msg: msg,
      };
      console.log("in response", msg);
      this.props.dispatch(action);
    } else {
      const data = await response.json();
      const action = {
        type: "login",
        data: data,
      };
      this.props.dispatch(action);
      this.props.history.push("/feed");
    }
  };

  render() {
    return (
      <Container>
        <LeftContainerLoginRegister>
          <UpLContainerLoginRegister>
            <MotionLogoAndWord>
              <img src={logo} alt="motion-logo" width="80px"></img>
              <H2>Motion</H2>
            </MotionLogoAndWord>
            <P>Connect with friends and the world around you with Motion.</P>
            <ButtonContainer>
              <ButtonDownloadApple />
              <ButtonDownloadGoogle />
            </ButtonContainer>
          </UpLContainerLoginRegister>
          <BtLContainerLoginRegister>
            <ButtonSocialContainer>
              <ButtonTwitter />
              <ButtonFacebook />
              <ButtonInstagram />
            </ButtonSocialContainer>
            <Rights>© Motion 2018. All rights reserved.</Rights>
          </BtLContainerLoginRegister>
        </LeftContainerLoginRegister>
        <RightContainerLoginRegister>
          <SignInButtonContainer>
            <H3>Don't have an account?</H3>
            <Link to="/register">
              <SignInOutButton>SIGN UP</SignInOutButton>
            </Link>
          </SignInButtonContainer>
          <SignInContainer>
            <H1>Sign in</H1>
            <SignInForm>
              <LoginInputContainer>
                <LoginInputUsername
                  id="email"
                  type="email"
                  placeholder="Username"
                ></LoginInputUsername>
                <LoginInputPass
                  id="password"
                  type="password"
                  placeholder="Password"
                ></LoginInputPass>
              </LoginInputContainer>
              <ButtonsGradient onClick={this.handleLogin}>
                SIGN IN
              </ButtonsGradient>
              {this.props !== null && this.props.failedLogin ? (
                <h4>{this.props.failedLogin}</h4>
              ) : null}
            </SignInForm>
          </SignInContainer>
        </RightContainerLoginRegister>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    failedLogin: state.failedLogin,
  };
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Login);

export default ConnectedApp;
