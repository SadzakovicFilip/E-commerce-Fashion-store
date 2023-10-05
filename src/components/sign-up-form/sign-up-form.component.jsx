import React from "react";

import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const user = await createAuthUserWithEmailAndPassword(email, password);
        createUserDocumentFromAuth(user, displayName);
        resetFormFields();
      } catch (error) {
        if (error.code === `auth/email-already-in-use`) {
          alert(`Cannot create user, email already in use `);
        } else {
          alert(`Password do not match`);
        }
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't Have an account ?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={`Display Name`}
          value={displayName}
          onChange={handleChange}
          name="displayName"
          type="text"
          required
        />
        <FormInput
          label={`Email`}
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          required
        />
        <FormInput
          label={`Password`}
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          required
        />
        <FormInput
          label={`Confirm Password`}
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
