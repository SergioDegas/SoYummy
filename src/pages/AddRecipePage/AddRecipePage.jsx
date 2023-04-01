import { Container, Title, Wrap, SideWrap } from "./AddRecipePage.styled";
import { AddRecipeForm } from "../../Components/AddRecipeForm/AddRecipeForm";
import { Popular } from "../../Components/PopularPreview/PopularPreview";
import { FollowLinks } from "../../Components/FollowLinks/FollowLinks";

const AddRecipePage = () => {
  return (
    <Container>
      <Title>Add recipe</Title>
      <Wrap>
        <AddRecipeForm />
        <SideWrap>
          <FollowLinks />
          <Popular />
        </SideWrap>
      </Wrap>
    </Container>
  );
};

export default AddRecipePage;
