import { Section, Title, Wrap, SideWrap } from "./AddRecipePage.styled";
import Container from "Components/Container/Container.styled";
import { AddRecipeForm } from "../../Components/AddRecipeForm/AddRecipeForm";
import { PopularRecipes } from "../../Components/PopularPreview/PopularPreview";
import { FollowLinks } from "../../Components/FollowLinks/FollowLinks";

const AddRecipePage = () => {
  return (
    <Container>
      <Section>
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
