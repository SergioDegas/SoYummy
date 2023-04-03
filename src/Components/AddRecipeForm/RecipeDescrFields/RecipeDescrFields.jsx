import { useState } from "react";
import cookingTime from "../../AddRecipeForm/cookingTime.json";
import imageS from "../../../images/file-input-mob.png";
import imageL from "../../../images/file-input-desk.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  DescrWrap,
  FileInputWrap,
  FileInput,
  RecipeImage,
  Image,
  InputWrap,
  DescrInput,
  SelectWrap,
  DescrLabel,
  DescrSelect,
  SelectText,
  CategoryList,
  CategoryItem,
  TimeList,
  TimeItem,
} from "./RecipeDescrFields.styled";

export const RecipeDescrFields = ({
  image,
  time,
  category,
  onFileInputChange,
  onTitleChange,
  onDescriptionChange,
  onTimeSet,
  onCategorySet,
}) => {
  const categoryList = [
    "Beef",
    "Breakfast",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Vegan",
    "Chicken",
    "Pasta",
    "Pork",
    "SeaFood",
    "Side",
  ];

  const [timeIsActive, setTimeIsActive] = useState(false);
  const [categoryIsActive, setCategoryIsActive] = useState(false);

  const toggleTimeList = () => {
    setTimeIsActive(!timeIsActive);
  };

  const toggleCategory = () => {
    setCategoryIsActive(!categoryIsActive);
  };

  const setTime = (value) => {
    onTimeSet(value);
    setTimeIsActive(false);
  };

  const setCategory = (value) => {
    onCategorySet(value);
    setCategoryIsActive(false);
  };

  return (
    <DescrWrap>
      <FileInputWrap onChange={onFileInputChange}>
        <label htmlFor="photo">
          <Image>
            <source srcSet={imageS} media="(max-width: 1439px)" />
            <source srcSet={imageL} media="(min-width: 1440px)" />
            <img src={imageS} alt="addphoto" />
          </Image>
        </label>
        <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
        {image && <RecipeImage src={image} alt="recipeImage"></RecipeImage>}
      </FileInputWrap>
      <InputWrap>
        <DescrInput
          type="text"
          id="title"
          name="title"
          placeholder="Enter item title"
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <DescrInput
          type="text"
          id="about"
          name="about"
          placeholder="Enter about recipe"
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
        <SelectWrap onClick={toggleCategory}>
          <DescrLabel>Category</DescrLabel>
          <DescrSelect>
            <SelectText>{category}</SelectText>
            <IoIosArrowDown size="18" />
          </DescrSelect>
          {categoryIsActive && (
            <CategoryList>
              {categoryList.map((item) => (
                <CategoryItem key={item} onClick={() => setCategory(item)}>
                  {item}
                </CategoryItem>
              ))}
            </CategoryList>
          )}
        </SelectWrap>
        <SelectWrap onClick={toggleTimeList}>
          <DescrLabel>Cooking time</DescrLabel>
          <DescrSelect>
            <SelectText>{time}</SelectText>
            <IoIosArrowDown size="18" />
          </DescrSelect>
          {timeIsActive && (
            <TimeList>
              {cookingTime.map((item) => (
                <TimeItem key={item} onClick={() => setTime(item)}>
                  {item}
                </TimeItem>
              ))}
            </TimeList>
          )}
        </SelectWrap>
      </InputWrap>
    </DescrWrap>
  );
};
