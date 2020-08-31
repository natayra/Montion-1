import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_white.png";
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
  RegisterInputEmail,
} from "../../style/login_register";
import { Container } from "../../style/container";

class Register1 extends React.Component {
  handleRegister = async (e) => {
    e.preventDefault();
    const emailVar = document.getElementById("emailFirstTime").value;
    const registerUrl =
      "https://santos.natayra.propulsion-learn.ch/backend/api/auth/registration/";
    const registerConfig = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: emailVar,
      }),
    };

    const response = await fetch(registerUrl, registerConfig);
    if (!response.ok) {
      const msg = await response.json();
      const action = {
        type: "failedEmail",
        msg: msg,
      };
      this.props.dispatch(action);
    } else {
      const action = {
        type: "firstClick",
        email: emailVar,
      };
      this.props.dispatch(action);
      this.props.history.push("../register2");
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
            <H3>Already have an account?</H3>
            <Link to="/login">
              <SignInOutButton>SIGN IN</SignInOutButton>
            </Link>
          </SignInButtonContainer>
          <SignInContainer>
            <H1>Sign up</H1>
            <SignInForm>
              <RegisterInputEmail
                id="emailFirstTime"
                type="email"
                placeholder="Email"
              ></RegisterInputEmail>
              {this.props !== null && this.props.failedEmail ? (
                <h4>{this.props.failedEmail}</h4>
              ) : null}
              <ButtonsGradient
                id="continue-button"
                onClick={this.handleRegister}
              >
                CONTINUE
              </ButtonsGradient>
            </SignInForm>
          </SignInContainer>
        </RightContainerLoginRegister>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    failedEmail: state.failedEmail,
  };
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Register1);

export default ConnectedApp;
