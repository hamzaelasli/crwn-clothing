/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import Button from '../button/button.component';

const defualtFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defualtFormFields);
  console.log(formFields);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;
  const resetFormField = () => {
    setFormFields(defualtFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('error');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user.uid);
      const userDoc = await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
      console.log(userDoc);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('faild');
      } else {
        console.error('error creating user', error.message);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="DisplayName" type="text" required={true} name="displayName" onChange={handleChange} value={displayName} />
        <FormInput label="Email" type="email" required={true} name="email" onChange={handleChange} value={email} />
        <FormInput label="Password" type="text" required={true} name="password" onChange={handleChange} value={password} />
        <FormInput label="Confirm Password" type="text" required={true} name="confirmPassword" onChange={handleChange} value={confirmPassword} />
        <Button buttonType="inverted" type="submit">Sign in</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
