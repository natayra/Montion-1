import React from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo_white.png";
import check from "../../assets/check.png";
import {
  H1,
  H2,
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
  SignInContainer,
  ButtonsGradient,
  EmailSent,
} from "../../style/login_register";
import { Container } from "../../style/container";

class Register2 extends React.Component {
  handleContinue = (e) => {
    e.preventDefault();
    const action = {
      type: "secondClick",
      email: this.props.email,
    };
    this.props.dispatch(action);
    this.props.history.push("../register3");
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
            <SignInContainer>
              <H1>Congratulations!</H1>
              <img id="check" src={check} width="130px"></img>
              <EmailSent>
                We've sent a confirmation code to your email {this.props.email}
              </EmailSent>
              <ButtonsGradient
                id="continue-button"
                onClick={this.handleContinue}
              >
                CONTINUE
              </ButtonsGradient>
            </SignInContainer>
          </RightContainerLoginRegister>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Register2);

export default ConnectedApp;
