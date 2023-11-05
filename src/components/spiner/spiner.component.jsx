import { SpinnerContainer, SpinnerOverlay } from "./spiner.style";

import React from "react";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
