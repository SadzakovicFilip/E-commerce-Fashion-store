import React from "react";

import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length > 0 ? true : false}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
