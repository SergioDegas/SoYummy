import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 61px;
  height: 27px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efefef;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    transition: 0.4s;
    border-radius: 20px;
    ::before {
      position: absolute;
      content: "";
      height: 21px;
      width: 21px;
      left: 3px;
      bottom: 3px;
      background: linear-gradient(180deg, #ffffff 0%, #8baa36 100%);
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: #8baa36;
  }
  input:focus + span {
    box-shadow: 0 0 1px #8baa36;
  }
  input:checked + span:before {
    transform: translateX(34px);
  }
`;
export const ContainerFor = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1240px) {
    padding: 0 100px;
  }

  @media (max-width: 992px) {
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
    max-width: 375px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: 18px;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
`;

export const LogOutText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
  transform: skewX(-10deg);
  padding: 12px 20px;
`;

export const EditText = styled.p`
  margin-right: 53px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;

export const EditContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
