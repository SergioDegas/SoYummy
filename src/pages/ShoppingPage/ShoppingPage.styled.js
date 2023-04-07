import styled from "styled-components";
import { GrFormClose } from 'react-icons/gr';

export const SectionShoppingList = styled.section`
  padding-top: 114px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    
  }
`;

export const CloseIcon = styled(GrFormClose)`
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;