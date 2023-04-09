import Container from "Components/Container/Container.styled";
import { 
  SectionHero,
  HeroText,
  HeroTitle,
  HeroSpan,
  HeroInput,
  HeroForm,
  HeroBtn,
  HeroRecipe,
  RecipeText,
  RecipeSpan,
  RecipeIcon,
  RecipeSecondaryText,
  RecipeSecondarySpan,
 } from "./HeroStyled";


export const Hero = () => {
    return (
        <SectionHero>
          <Container>
            <HeroTitle><HeroSpan>So</HeroSpan>Yummy</HeroTitle>
            <HeroText>
              "What to cook?" is not only a recipe<br />
              app, it is, in fact, your cookbook. You<br />
              can add your own recipes to save<br />
              them for the future.
            </HeroText>
            <HeroForm>
              <HeroInput 
              type="search" 
              placeholder="Search recipe..."
              />
              <HeroBtn type="submit">Search</HeroBtn>
            </HeroForm>
            <HeroRecipe>
              <RecipeText><RecipeSpan>Delicious and healthy</RecipeSpan>way to enjoy<br/> 
              a variety of fresh ingredients in one<br/> 
              satisfying meal</RecipeText>
              <RecipeSecondaryText>See recipes <RecipeSecondarySpan><RecipeIcon/></RecipeSecondarySpan></RecipeSecondaryText>
            </HeroRecipe>
          </Container>
        </SectionHero>
      );
    }
export default Hero;