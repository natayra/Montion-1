import styled from "styled-components";
import background_image from "../assets/background_image.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import user from "../assets/user.svg";
import pass from "../assets/password.svg";
import mail from "../assets/mail.png";



export const LeftContainerLoginRegister = styled.div`
  width: 42%;
  background-image: url(${background_image}),
    linear-gradient(124.93deg, #c468ff 3.32%, #6e91f6 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`;

export const RightContainerLoginRegister = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`;

export const UpLContainerLoginRegister = styled.div`
  height: 283px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 237px;
`;

export const BtLContainerLoginRegister = styled.div`
  width: 186px;
  height: 96px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SignInContainer = styled.div`
  height: 414px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 198px;
`;

export const ValidationForm = styled.div`
  height: 284px;
  width: 700px;
  display: grid;
  grid-gap: 40px 40px;
  grid-template-columns: auto auto;
  margin-bottom: 80px;

`;

export const SignInForm = styled.form`
  height: 330px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
`;

export const ValidationContainer = styled.form`
  height: 523px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  margin-top: 90px;
`;

export const MotionLogoAndWord = styled.div`
  height: 130px;
  width: 99px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const H2 = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export const P = styled.p`
  height: 48px;
  width: 274.5px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

export const ButtonDownloadApple = styled.button`
  height: 40px;
  width: 126px;
  mix-blend-mode: normal;
  border: 1px solid lightgray;
  border-radius: 100px;
  background-color: transparent;
  background-image: url(${apple});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

`;
export const ButtonDownloadGoogle = styled.button`
  height: 40px;
  width: 126px;
  mix-blend-mode: normal;
  border: 1px solid lightgray;
  border-radius: 100px;
  background-color: transparent;
  background-image: url(${google});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 268px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonSocialContainer = styled.div`
  width: 152px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Rights = styled.div`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: white;
`;

export const ButtonTwitter = styled.a`
  height: 40px;
  width: 40px;
  background-image: url(${twitter});
  background-size: cover;
  cursor: pointer;

`;

export const ButtonFacebook = styled.a`
  height: 40px;
  width: 40px;
  background-image: url(${facebook});
  background-size: cover;
  cursor: pointer;

`;

export const ButtonInstagram = styled.a`
  height: 40px;
  width: 40px;
  background-image: url(${instagram});
  background-size: cover;
  cursor: pointer;


`;

export const SignInButtonContainer = styled.div`
  height: 40px;
  width: 291px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 40px;
  top: 40px;
`;

export const H3 = styled.h3`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

export const EmailSent = styled.h3`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  width: 391px;
  text-align: center;
`;

export const SignInOutButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.07);
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 1px;
  color: black;
  cursor: pointer;

`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  text-align: center;
`;

export const ButtonsGradient = styled.button`
  height: 60px;
  width: 280px;
  background: linear-gradient(167.04deg, #c468ff 3.32%, #6e91f6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
`;

export const LoginInputContainer = styled.div`
  height: 141px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoginInputUsername = styled.input`
  height: 56px;
  width: 340px;
  border-bottom: 1px solid lightgray;
  padding-left: 43px;
  background-image: url(${user});
  background-repeat: no-repeat;
  background-position-x: start;
  background-position-y: center;
`;

export const LoginInputPass = styled.input`
  height: 56px;
  width: 340px;
  border-bottom: 1px solid lightgray;
  padding-left: 43px;
  background-image: url(${pass});
  background-repeat: no-repeat;
  background-position-x: start;
  background-position-y: center;
`;

export const RegisterInputEmail = styled.input`
  height: 56px;
  width: 340px;
  border-bottom: 1px solid lightgray;
  padding-left: 43px;
  background-size: 20px;
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-position-x: start;
  background-position-y: center;
`;

export const ValidationInput = styled.input`
  height: 56px;
  width: 340px;
  border-bottom: 1px solid lightgray;
  padding-left: 43px;
`;
