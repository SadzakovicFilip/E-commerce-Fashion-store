import { categories } from "./data";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.js";
import React from "react";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category, key) => (
        <DirectoryItem key={key} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
