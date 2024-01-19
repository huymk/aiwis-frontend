"use client";
import React, { useState } from "react";
import { EyeIcon, InputWrapper, TextError } from "../login/LoginStyles";
import {
  RegisterFormButton,
  RegisterFormButtonWrap,
  RegisterFormCheckBox,
  RegisterFormCheckBoxWrap,
  RegisterFormInputName,
  RegisterFormInputNameWrap,
  RegisterFormInputWrap,
  RegisterFormLabel,
  RegisterFormPolicy,
  RegisterTextLink,
  RegisterWrapper,
  RegisterWrapperCenter,
  TextErrorAccept,
  UserIcon,
} from "./RegisterStyles";
import {
  faEnvelope,
  faEye,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegisterPage() {
  return (
    <div className="bg-[#F2F4EC]">
      <RegisterWrapper>
        <form>
          <RegisterWrapperCenter>
            <RegisterFormLabel>Đăng ký tài khoản miễn phí</RegisterFormLabel>
            <RegisterFormInputNameWrap>
              <RegisterFormInputWrap>
                <UserIcon>
                  <FontAwesomeIcon icon={faUser} />
                </UserIcon>
                <RegisterFormInputName placeholder="Họ" />
              </RegisterFormInputWrap>
              <RegisterFormInputWrap>
                <UserIcon>
                  <FontAwesomeIcon icon={faUser} />
                </UserIcon>
                <RegisterFormInputName placeholder="Tên" />
              </RegisterFormInputWrap>
            </RegisterFormInputNameWrap>
            <UserIcon>
              <FontAwesomeIcon icon={faPhone} />
            </UserIcon>
            <RegisterFormInputName placeholder="Số Điện Thoại" />
            <InputWrapper>
              <UserIcon>
                <FontAwesomeIcon icon={faLock} />
              </UserIcon>
              <EyeIcon>
                <FontAwesomeIcon icon={faEye} />
              </EyeIcon>
              <RegisterFormInputName
                type={"password"}
                placeholder="Mật khẩu (tối thiểu 8 ký tự)"
              />
            </InputWrapper>
            <InputWrapper>
              <UserIcon>
                <FontAwesomeIcon icon={faLock} />
              </UserIcon>
              <EyeIcon>
                <FontAwesomeIcon icon={faEye} />
              </EyeIcon>
              <RegisterFormInputName
                type={"password"}
                placeholder="Nhập lại mật khẩu"
              />
            </InputWrapper>
            <RegisterFormCheckBoxWrap>
              <RegisterFormCheckBox type="checkbox" />
              <RegisterFormPolicy>
                Tôi hiểu và đồng ý với Điều khoản dịch vụ của Aiwis
              </RegisterFormPolicy>
            </RegisterFormCheckBoxWrap>
            <RegisterFormButtonWrap>
              <RegisterFormButton>Tạo tài khoản của tôi</RegisterFormButton>
            </RegisterFormButtonWrap>
          </RegisterWrapperCenter>
        </form>
      </RegisterWrapper>
    </div>
  );
}
