import React from "react";
import {
  SectionPreparationDesc,
  Count,
  Text,
  TextCount,
} from "./RecipePreparationList.styled";

const RecipePreparationList = ({ description }) => {
  if (!description) {
    return
  }
  return (
          <SectionPreparationDesc>
            {description &&
              description.split("\r\n").filter((el) => el.trim() !== "").map((el, i) => {
                return (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start" }}>
                    <div>
                      <Count>
                        <TextCount>{i + 1}</TextCount>
                      </Count>
                    </div>
                    <Text>{el}</Text>
                  </li>
                );
              })}
          </SectionPreparationDesc>

  );
};

export default RecipePreparationList;