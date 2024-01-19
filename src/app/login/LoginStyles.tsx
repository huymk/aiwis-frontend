import styled from "styled-components";

export const FormLoginContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-height: unset;
  }
`;
export const FormLoginCenter = styled.div`
  width: 456px;
  margin-top: 66px;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 20px;
  height: max-content;
  @media screen and (max-width: 768px) {
    margin-top: 35px;
    width: auto;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const FormLoginPanel = styled.div``;
export const FormLoginMainBox = styled.div`
  width: 100%;
  padding: 33px 50px 24px 50px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const FormLoginBabel = styled.div`
  width: 100%;
  margin-bottom: 29px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: var(--text-color0);
  text-align: center;
`;
export const FormLoginEmail = styled.input`
  width: 100%;
  height: 42px;
  padding: 11px 20px 11px 52px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: var(--text-color0);

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      font-size: 16px;
    }
  }
`;
export const FormLoginPassword = styled.input`
  width: 100%;
  height: 42px;
  padding: 11px 20px 11px 52px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: var(--text-color0);

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      font-size: 16px;
    }
  }
`;
export const EnvelopeIcon = styled.div`
  position: absolute;
  padding: 12px 20px 12px 20px;
  color: var(--text-color);
`;
export const EyeIcon = styled.div`
  position: absolute;
  padding: 12px 20px 12px 20px;
  color: var(--text-color);
  top: 0;
  right: 0;
  cursor: pointer;
`;
export const FormLoginForgotLinkWrap = styled.div`
  margin-bottom: 22px;
  text-decoration: none;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 600;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  &:hover {
    color: var(--text-color);
  }
`;
export const FormLoginForgotLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 600;
`;
export const ButtunLogin = styled.button<{ disableButton?: boolean }>`
  height: 42px;
  background: #6d8777;
  border-radius: 4px;
  padding: 11px 78px 11px 78px;
  border: none;
  width: 260px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  opacity: ${(props) => (props.disableButton ? 0.4 : 1)};
`;
export const LoginSubmit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-direction: column;
`;
export const LoginSubmitWrap = styled.div`
  width: 100%;
`;
export const LoginRegisterBox = styled.div`
  width: 100%;
  border-top: 4px solid var(--background-color);
  box-sizing: border-box;
  padding: 20px 50px 0px 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const LoginRegisterLabel = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 6px;
  }
`;
export const LoginTextRegister = styled.p`
  padding-left: 14px;
  padding-right: 14px;
  display: inline-block;
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #656565;
`;
export const LoginRegister = styled.span`
  display: inline-block;
  text-decoration: none;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #579d2d;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    color: var(--text-color);
  }
`;
export const TextError = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 25px;
  color: #dc3545;
  margin-bottom: 22px;
  text-align: center;
`;
export const InputWrapper = styled.div`
  position: relative;
`;

// old css
export const BodyBlockLoginInner = styled.div`
  width: 100%;
  background-color: white;
  padding: 33px 50px 35px 50px;
  box-shadow: 0px 0px 3px 0px #bbbbbb;
  -webkit-box-shadow: 0px 0px 3px 0px #bbbbbb;
  -moz-box-shadow: 0px 0px 3px 0px #bbbbbb;
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const Label = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: #bbbbbb;
  width: 100%;
  height: 70px;
  border: none;
  font-size: 24px;
`;

export const Button = styled.button`
  width: 220px;
  height: 70px;
  background: #ff0000;
  border-radius: 35px;
  border: 2px solid #ff0000;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 500;
  color: #ffffff;
`;
export const WapperButton = styled.div`
  margin-top: 80px;
  margin-left: 250px;
`;
export const LoginWithFacebook = styled.a`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const LoginWithGoogle = styled.a`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const LoginWithPhoneNumber = styled.a`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const FormLoginWrap = styled.div<{ closeForm: boolean }>`
  width: 400px;
  height: 200px;
  position: fixed;
  background-color: #bbbbbb;
  top: calc(50% - 25px); // half of width
  left: calc(50% - 450px); // half of height
  display: ${(props) => (props.closeForm ? "none" : "block")};
`;
export const LabelInputPhoneNumber = styled.div``;
export const InputPhoneNumber = styled.input`
  background-color: #fff;
  width: 250px;
  height: 54px;
  border: none;
  font-size: 24px;
  border: 2px solid #bbbbbb;
`;
export const ButtonInputPhoneNumber = styled.button`
  height: 50px;
  min-width: 100px;
  background: #ff0000;
  border: 2px solid #ff0000;
`;
export const ButtonCloseForm = styled.button`
  width: 20px;
  height: 20px;
`;
export const Capcha = styled.div``;
export const TextAssign = styled.div`
  color: var(--text-color);
  text-align: center;
  padding-top: 36px;
  position: relative;
  line-height: 24px;
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
  }
`;
export const TextWebName = styled.a`
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--text-color);
  }
`;

export const LoginSave = styled.label``;
export const LoginSaveWrap = styled.label``;
