import styled from "styled-components";
import arror from "../../../images/chevron-down.png";

export const DescrWrap = styled.div`
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const FileInputWrap = styled.div`
  position: relative;
  width: 279px;
  margin: 0 auto 32px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 357px;
    margin-right: 50px;
  }
`;

export const FileInput = styled.input`
  width: 279px;
  height: 268px;
  opacity: 0;

  /* z-index: -1;
  overflow: hidden; */
  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const Image = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
`;

export const InputWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 393px;
  }
`;

export const DescrInput = styled.input`
  width: 343px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
  padding-bottom: 18px;
  outline: none;

  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainDark};
  opacity: 0.5;

  ::placeholder {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    line-height: ${(p) => p.theme.lineHeights.large};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mainDark};
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: ${(p) => p.theme.fontSizes.m}px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const SelectWrap = styled.div`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
  }
`;

export const DescrLabel = styled.label`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainDark};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const DescrSelect = styled.select`
  width: 85px;

  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.single};
  color: ${(p) => p.theme.colors.mainDark};
  background-color: transparent;
  border: none;

  appearance: none;
  overflow: hidden;
  background-image: url(${arror});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 16px;

  @media screen and (min-width: 768px) {
    width: 94px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;

export const DescrOption = styled.option`
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.large};
  letter-spacing: -0.02em;

  color: ${(p) => p.theme.colors.mainDark};
  opacity: 0.5;

  width: 123px;
  height: 144px;
  background: ${(p) => p.theme.colors.mainLight};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: ${(p) => p.theme.radius.small};

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;
