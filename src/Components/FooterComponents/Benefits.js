import { BenefitsList,BenefitText, BenefitsItem, Dot } from "Layout/Footer/Footer.Styled";

export const Benefits = () => {
  return (
    <>
    <BenefitsList>
      <BenefitsItem>
        <Dot>&#8226;</Dot>Database of recipes that can be replenished{" "}
      </BenefitsItem>
      <BenefitsItem>
        <Dot>&#8226;</Dot>Flexible search for desired and unwanted
        <BenefitText> ingredients</BenefitText>
      </BenefitsItem>
      <BenefitsItem>
        <Dot>&#8226;</Dot>Ability to add your own recipes with photos
      </BenefitsItem>
      <BenefitsItem>
        <Dot>&#8226;</Dot>Convenient and easy to use
      </BenefitsItem>
    </BenefitsList>
    </>
  );
};


