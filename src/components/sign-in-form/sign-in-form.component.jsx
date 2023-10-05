import React, { useState, useEffect } from "react";
// import { useContext } from "react";

import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ButtonsContainer,
  ErrorMessage,
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
      let err = error.code.slice(5, error.code.length);
      let newError = "";
      for (let i = 0; i < err.length; i++) {
        if (i === 0) {
          newError += err[i].toUpperCase();
        } else if (err[i] === "-") {
          newError += " ";
        } else {
          newError += err[i];
        }
      }
      setError(newError);
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
      {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </Button> */}
    </SignInContainer>
  );
};

export default SignInForm;
