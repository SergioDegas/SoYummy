import { useState } from "react";
import cookingTime from "../../AddRecipeForm/cookingTime.json";
import imageS from "../../../images/file-input-mob.png";
import imageL from "../../../images/file-input-desk.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  DescrWrap,
  FileInputWrap,
  FileInput,
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

export const RecipeDescrFields = () => {
  const [time, setTime] = useState("30 min");
  const [timeIsActive, setTimeIsActive] = useState(false);
  const [category, setCategory] = useState("breakfast");
  const [categoryIsActive, setCategoryIsActive] = useState(false);

  const toggleTimeList = () => {
    setTimeIsActive(!timeIsActive);
  };

  const toggleCategory = () => {
    setCategoryIsActive(!categoryIsActive);
  };

  const onTimeSet = (value) => {
    setTime(value);
    setTimeIsActive(false);
  };

  const onCategorySet = (value) => {
    setCategory(value);
    setCategoryIsActive(false);
  };

  const categoryList = [
    "breakfast",
    "lunch",
    "dinner",
    "breakfast",
    "lunch",
    "dinner",
    "breakfast",
    "lunch",
    "dinner",
    "breakfast",
    "lunch",
    "dinner",
  ];

  return (
    <DescrWrap>
      <FileInputWrap>
        <label htmlFor="photo">
          <Image>
            <source srcSet={imageS} media="(max-width: 1439px)" />
            <source srcSet={imageL} media="(min-width: 1440px)" />
            <img src={imageS} alt="addphoto" />
          </Image>
        </label>
        <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
      </FileInputWrap>
      <InputWrap>
        <DescrInput
          type="text"
          id="title"
          name="title"
          placeholder="Enter item title"
        />
        <DescrInput
          type="text"
          id="about"
          name="about"
          placeholder="Enter about recipe"
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
                <CategoryItem key={item} onClick={() => onCategorySet(item)}>
                  {item}
                </CategoryItem>
              ))}
            </CategoryList>
          )}

          {/* <DescrSelect name="category" id="category">
            <DescrOption value="breakfast">breakfast</DescrOption>
            <DescrOption value="lunch">lunch</DescrOption>
            <DescrOption value="dinner">dinner</DescrOption>
          </DescrSelect> */}
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
                <TimeItem onClick={() => onTimeSet(item)}>{item}</TimeItem>
              ))}
            </TimeList>
          )}

          {/* <DescrSelect name="time" id="time">
            {cookingTime.map((time) => {
              return (
                <DescrOption value={time} key={time}>
                  {time}
                </DescrOption>
              );
            })}
          </DescrSelect> */}
        </SelectWrap>
      </InputWrap>
    </DescrWrap>
  );
};
