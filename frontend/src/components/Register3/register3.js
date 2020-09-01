import React from "react";
import { connect } from "react-redux";
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
  ButtonsGradient,
  ValidationInput,
  ValidationContainer,
  ValidationForm,
} from "../../style/login_register";
import { Container } from "../../style/container";

class Register3 extends React.Component {
  handleValidation = async (e) => {
    e.preventDefault();
    const pass = document.getElementById("password").value;
    const passRepeat = document.getElementById("passwordRepeat").value;
    const validationUrl =
      "https://santos.natayra.propulsion-learn.ch/backend/api/auth/registration/validation/";
    const validationConfig = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: this.props.email,
        username: document.getElementById("username").value,
        code: document.getElementById("code").value,
        password: pass,
        password_repeat: passRepeat,
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
      }),
    };
    const response = await fetch(validationUrl, validationConfig);
    console.log("response", response);
    if (!response.ok) {
      const msg = await response.json();
      console.log(msg);
      const action = {
        type: "missingValidation",
        msg: msg,
        email: this.props.email,
      };
      this.props.dispatch(action);
    } else {
      this.props.history.push("./login");
    }
  };

  render() {
    if (this.props.email === undefined) {
      this.props.history.push("./register");
      return null;
    } else {
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
            <ValidationContainer>
              <H1>Verification</H1>
              <ValidationForm>
                <ValidationInput
                  xs={2}
                  id="code"
                  type="text"
                  placeholder="Validation Code"
                  required
                ></ValidationInput>
                <ValidationInput
                  xs={1}
                  id="email"
                  placeholder={this.props.email}
                  readOnly
                ></ValidationInput>
                <ValidationInput
                  xs={2} sm={1}
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                ></ValidationInput>
                <ValidationInput
                  xs={1}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                ></ValidationInput>
                <ValidationInput
                  xs={1}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                ></ValidationInput>
                <ValidationInput
                  xs={1}
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                ></ValidationInput>
                <ValidationInput
                  xs={1}
                  id="passwordRepeat"
                  type="password"
                  placeholder="Password repeat"
                  required
                ></ValidationInput>
                {this.props !== null && this.props.failedValidation ? (
                  <h4>{this.props.failedValidation}</h4>
                ) : null}
              </ValidationForm>
              <ButtonsGradient
                id="continue-button"
                onClick={this.handleValidation}
              >
                COMPLETE
              </ButtonsGradient>
            </ValidationContainer>
          </RightContainerLoginRegister>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    failedValidation: state.failedValidation,
    email: state.email,
    username: state.username,
    code: state.code,
    password: state.password,
    password_repeat: state.password_repeat,
    first_name: state.first_name,
    last_name: state.last_name,
  };
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Register3);

export default ConnectedApp;
