import styled from "styled-components";
export const LogOutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 215px;

  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 50px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogOutText = styled.p`
  width: 288px;
  height: 24px;
  left: 106px;
  top: 50px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;
`;
export const LogOutButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 39px;
  gap: 8px;

  background: #8baa36;
  border-radius: 6px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;
