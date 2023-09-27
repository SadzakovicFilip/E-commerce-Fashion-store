import React, { useState, useEffect, useContext } from "react";

import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");

  const { setCurrentUser } = useContext(UserContext);

  console.log(formFields);

  useEffect(() => {
    const setUserDocumentFromAuth = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    setUserDocumentFromAuth();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    setCurrentUser(user);
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
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
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
    <div className="sign-in-container">
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
        {error && <h2 className="error-message">{error}</h2>}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
      {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </Button> */}
    </div>
  );
};

export default SignInForm;
