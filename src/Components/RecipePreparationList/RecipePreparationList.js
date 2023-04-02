import React from "react";
import {
  SectionPreparationDesc,
  Count,
  Text,
  TextCount,
} from "./RecipePreparationList.styled";

const RecipePreparationList = ({ description }) => {
  return (
          <SectionPreparationDesc>
            {description &&
              description.split(". ").map((el, i) => {
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