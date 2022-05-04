import React from 'react';
import { signIn, createUserAuthDoc } from '../../utils/firebase/firebase.utils';

export default function SignIn() {
  const signInWithGoogle = async () => {
    const { user } = await signIn();
    await createUserAuthDoc(user);
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sing In</button>{' '}
    </div>
  );
}
