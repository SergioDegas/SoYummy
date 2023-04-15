import React from "react";
import Select from "react-select";
import { Wrapper, Label } from "./SearchTypeSelector.styled";
import { IoIosArrowDown } from "react-icons/io";
import { useMedia } from "hooks";


const options = [
  { value: "name", label: "Title" },
  { value: "ingredient", label: "Ingredient" },
  { value: "family", label: "Family" }
];




const SearchTypeSelector = ({ onSearchByChange, searchBy }) => {
  const media = useMedia();


  const getCustomStyles = (media) => {
    if (media.isMobileScreen) {
         return {
          control: (provided, state) => ({
            ...provided,
            backgroundColor: "#D9D9D9",
            height: "34px",
            width: "146px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "none",
            "&:hover": {
              border: state.isFocused ? "#008000" : "#00FF00",
            },
          }),
          option: (provided, state) => ({
            ...provided,
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "-0.02em",
        
            color: "#000000",
        
            opacity: "0.5",
          }),
          menu: (provided) => ({
            ...provided,
            color: "#000000",
            padding: "0",
            margin: "0",
            backgroundColor: "#FAFAFA",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: "#8BAA36",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
         }
    }
    if (media.isTabletScreen) {
      return {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "#D9D9D9",
          height: "41px",
          width: "175px",
          border: "none",
          borderRadius: "5px",
          boxShadow: "none",
          "&:hover": {
            border: state.isFocused ? "#008000" : "#00FF00",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "21px",
      
          letterSpacing: "-0.02em",
      
          color: "#000000",
      
          opacity: "0.5",
        }),
        menu: (provided) => ({
          ...provided,
          color: "#000000",
          padding: "0",
          margin: "0",
          backgroundColor: "#FAFAFA",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#8BAA36",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
      }
    }
    if (media.isDesktopScreen) {
      return {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "#D9D9D9",
          // height: "49px",
          width: "198px",
          padding: "14px",
          border: "none",
          borderRadius: "5px",
          boxShadow: "none",
          "&:hover": {
            border: state.isFocused ? "#008000" : "#00FF00",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "21px",
      
          letterSpacing: "-0.02em",
      
          color: "#000000",
      
          opacity: "0.5",
        }),
        menu: (provided) => ({
          ...provided,
          color: "#000000",
          padding: "0",
          margin: "0",
          backgroundColor: "#FAFAFA",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#8BAA36",
          
          
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
      }
    }
  };

  const handleSelectChange = (selectedOption) => {
    onSearchByChange(selectedOption.value);
  };
  
  return (
    <Wrapper>
      <Label htmlFor="searchBy">Search by:</Label>
      <Select
        id="searchBy"
        name="searchBy"
        value={options.find((option) => option.value === searchBy)}
        onChange={handleSelectChange}
        options={options}
        styles={getCustomStyles(media)}
        components={{ dropdownIndicator: () => <IoIosArrowDown /> }}
      />
    </Wrapper>
  );
};

export default SearchTypeSelector;