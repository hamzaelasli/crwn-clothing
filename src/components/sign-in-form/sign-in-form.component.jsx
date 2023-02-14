import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};
function SignInForm() {
  const [fromFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGooogle = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };
  const { email, password } = fromFields;
  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={signInWithEmail}>
        <FormInput label="email" type="email" required name="email" onChange={changeHandle} value={email} />
        <FormInput label="password" type="password" required name="password" onChange={changeHandle} value={password} />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGooogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
