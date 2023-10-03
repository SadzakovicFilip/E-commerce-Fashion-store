import { categories } from "./data";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

import React from "react";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category, key) => (
        <DirectoryItem key={key} category={category} />
      ))}
    </div>
  );
};

export default Directory;
