import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  align-content: center;
  align-items: center;
`;

export const ProfileDetailsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    /* background-color: gray; */

    border-radius: 50%;
  }
`;

export const ProfileName = styled.div`
  font-weight: bold;
  padding: 12px 0;

  &::before {
    content: "";
    color: gray;
  }
`;
