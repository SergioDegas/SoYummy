import { Section, Title, Wrap, SideWrap } from "./AddRecipePage.styled";
import Container from "Components/Container/Container.styled";
import { AddRecipeForm } from "../../Components/AddRecipeForm/AddRecipeForm";
import { PopularRecipes } from "../../Components/PopularPreview/PopularPreview";
import { FollowLinks } from "../../Components/FollowLinks/FollowLinks";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

const AddRecipePage = () => {
  return (
    <Container>
      <Section>
        <StyledSquares />
        <Title>Add recipe</Title>
        <Wrap>
          <AddRecipeForm />
          <SideWrap>
            <FollowLinks />
            <PopularRecipes />
          </SideWrap>
        </Wrap>
      </Section>
    </Container>
  );
};

export default AddRecipePage;
