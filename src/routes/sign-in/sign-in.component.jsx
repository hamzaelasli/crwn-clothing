import React, { Fragment } from 'react';
import { signInWithGoogle, createUserFromAuth } from '../../utils/firebase/firebase.utils';

function SignIn() {
  const logInWithGooogle = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <>
      <button type="button" onClick={logInWithGooogle}>Google</button>
      <p>this is sign in ssspage</p>
    </>
  );
}

export default SignIn;
