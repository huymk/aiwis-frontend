"use client";
import React from "react";
import { createContext } from "react";

import { ReactElement } from "react";
import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormLoginContainer,
  FormLoginCenter,
  FormLoginPanel,
  FormLoginMainBox,
  FormLoginBabel,
  EnvelopeIcon,
  FormLoginEmail,
  EyeIcon,
  FormLoginPassword,
  FormLoginForgotLink,
  ButtunLogin,
  LoginSubmit,
  LoginRegisterBox,
  LoginRegisterLabel,
  LoginTextRegister,
  LoginRegister,
  TextError,
  InputWrapper,
  LoginSubmitWrap,
  TextAssign,
  TextWebName,
  FormLoginForgotLinkWrap,
} from "./LoginStyles";
export default function LoginPage() {
  return (
    <div className="bg-[#F2F4EC]">
      <FormLoginContainer>
        <FormLoginCenter>
          <FormLoginPanel>
            <form>
              <FormLoginMainBox>
                <FormLoginBabel>Xin chào</FormLoginBabel>
                <InputWrapper>
                  <EnvelopeIcon>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </EnvelopeIcon>
                  <FormLoginEmail placeholder="Số Điện Thoại" />
                </InputWrapper>
                <TextError></TextError>
                <InputWrapper>
                  <EnvelopeIcon>
                    <FontAwesomeIcon icon={faLock} />
                  </EnvelopeIcon>
                  <EyeIcon>
                    <FontAwesomeIcon icon={faEye} />
                  </EyeIcon>
                  <FormLoginPassword placeholder="Mật khẩu" />
                </InputWrapper>
                <TextError></TextError>
                <LoginSubmit>
                  <LoginSubmitWrap></LoginSubmitWrap>
                  <ButtunLogin>Đăng nhập</ButtunLogin>
                </LoginSubmit>
              </FormLoginMainBox>
            </form>
          </FormLoginPanel>
        </FormLoginCenter>
      </FormLoginContainer>
    </div>
  );
}
