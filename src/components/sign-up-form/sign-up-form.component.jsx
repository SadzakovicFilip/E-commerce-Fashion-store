import React from "react";

import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          value={displayName}
          onChange={handleChange}
          name="displayName"
          type="text"
          required
        />
        <label>Email</label>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          required
        />
        <label>Password</label>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          required
        />
        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
