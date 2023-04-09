import Container from "Components/Container/Container.styled";
import { Box, SectionHero } from "./HeroStyled";


export const Hero = () => {
    return (
        <SectionHero>
          <Container>
            <h1>SoYummy</h1>
            <p>
              "What to cook?" is not only a recipe<br />
              app, it is, in fact, your cookbook. You<br />
              can add your own recipes to save<br />
              them for the future.
            </p>
          </Container>
        </SectionHero>
      );
    }
export default Hero;