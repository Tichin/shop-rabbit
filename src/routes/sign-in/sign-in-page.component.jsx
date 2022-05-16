import React from 'react';
import { Link } from 'react-router-dom';
import './sign-in-page.styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

export default function SignInPage() {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className='sign-in-container'>
      <SignInForm />
      <div className='sign-in-with-google' onClick={signInWithGoogle}>
        Sign in with google
      </div>
      <Link to='/sign-up' className='link-to'>
        Sign Up
      </Link>
    </div>
  );
}
