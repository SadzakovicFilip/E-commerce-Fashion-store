import React, { useState, useEffect } from "react";
// import { useContext } from "react";

import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ButtonsContainer,
  ErrorMessage,
  GooglePopUp,
  GoogleRedirect,
  SignInButton,
  SignInContainer,
} from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");

  useEffect(() => {
    const setUserDocumentFromAuth = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    setUserDocumentFromAuth();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      setError(error.code.slice(5, error.code.length));
      resetFormFields();
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          requierd="true"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          requierd="true"
          onChange={handleChange}
        />
        {error && <ErrorMessage>- {error} -</ErrorMessage>}
        <ButtonsContainer>
          <SignInButton>
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
              Sign In
            </Button>
          </SignInButton>
          <GooglePopUp>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </GooglePopUp>
          <GoogleRedirect>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={signInWithGoogleRedirect}
            >
              Google Sign In
            </Button>
          </GoogleRedirect>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
