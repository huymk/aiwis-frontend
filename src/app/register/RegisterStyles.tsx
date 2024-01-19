import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 800px;

  @media screen and (max-width: 768px) {
    min-height: unset;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  padding: 12px 20px 12px 20px;
  color: var(--text-color);
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const RegisterWrapperCenter = styled.div`
  width: 550px;
  padding: 48px 41px 40px 41px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 20px;
  margin-top: 41px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-top: 35px;
    width: auto;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const RegisterFormLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: var(--text-color0);
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`;
export const RegisterFormInputNameWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0px;
  }
`;
export const RegisterFormInputName = styled.input`
  width: 100%;
  height: 42px;
  padding: 10px;
  padding-left: 45px;
  border: 1px solid #dedede;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 20px;
  color: var(--text-color0);
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0px;
    width: 100%;
  }
`;
export const RegisterFormButton = styled.button<{ disableButton?: boolean }>`
  width: 232px;
  height: 42px;
  background: #6d8777;
  border-radius: 4px;
  padding: 11px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  opacity: ${(props) => (props.disableButton ? 0.4 : 1)};
`;
export const RegisterFormInputWrap = styled.div`
  width: 100%;
`;
export const RegisterFormCheckBox = styled.input`
  accent-color: #579d2d;
  position: absolute;
  top: 6px;
  left: 0px;
`;

export const UserIcon = styled.div`
  position: absolute;
  padding: 12px 20px 12px 20px;
  color: var(--text-color);
`;
export const RegisterFormPolicy = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: var(--text-color);
  padding-left: 24px;
`;

export const RegisterFormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
export const RegisterFormCheckBoxWrap = styled.div`
  display: block;
  position: relative;
`;
export const TextErrorAccept = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 25px;
  color: #dc3545;
`;

// Register Success

export const FinalFormWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 81px 10px 20px 10px;
  min-height: 800px;

  @media screen and (max-width: 768px) {
    min-height: unset;
  }
`;

export const FinalFormImgWrap = styled.div`
  width: 100%;
  text-align: center;
`;
export const FinalFormImg = styled.img`
  width: 231px;
  height: 231px;
  border-radius: 200px;
`;

export const FinalFormLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: var(--text-color0);
`;
export const FinalFormText = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: var(--text-color);
`;
export const TextAccountSuccess = styled.span`
  color: var(--primary-color);
`;
