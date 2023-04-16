import { NoRecipesImage, NoRecipesText } from "./NoRecipeFound.styled";

import smallNoRecipesImage from "../../images/notPage/notPageSmal.png";
import smallNoRecipesImage2x from "../../images/notPage/notPageSmal@2x.png";
import mediumNoRecipesImage from "../../images/notPage/notPageMedium.png";
import mediumNoRecipesImage2x from "../../images/notPage/notPageMedium@2x.png";

export const NoRecipeFound = ({ children }) => {
  const smallImage = {
    src: smallNoRecipesImage,
    srcSet: `${smallNoRecipesImage} 1x, ${smallNoRecipesImage2x} 2x`,
    sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
  };

  const mediumImage = {
    src: mediumNoRecipesImage,
    srcSet: `${mediumNoRecipesImage} 1x, ${mediumNoRecipesImage2x} 2x`,
    sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
  };

  return (
    <>
      <NoRecipesImage
        srcSet={`${smallImage.srcSet}, ${mediumImage.srcSet}`}
        sizes={`${smallImage.sizes}, ${mediumImage.sizes},`}
        {...smallImage}
        {...mediumImage}
        alt="No recipes found"
      />
      <NoRecipesText>{children}</NoRecipesText>
    </>
  );
};
