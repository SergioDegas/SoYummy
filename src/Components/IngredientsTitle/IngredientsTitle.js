import {
  TitleWrap,
  Title,
  TitleTextWrap,
  TitleText,
} from "./IngredientsTitle.styled";

const IngredientsTitle = ({ title, action }) => {
  return (
    <TitleWrap>
      <Title children={title} />
      <TitleTextWrap>
        <TitleText>Number</TitleText>
        <TitleText children={action} />
      </TitleTextWrap>
    </TitleWrap>
  );
};

export default IngredientsTitle;