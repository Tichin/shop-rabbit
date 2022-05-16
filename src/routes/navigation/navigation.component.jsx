import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <div>
      <nav className='nav-container'>
        <Link to='/'>Home</Link>
        <div className='auth-container'>
          {currentUser ? (
            <button onClick={signOutHandler}>sign out</button>
          ) : (
            <Fragment>
              <Link to='/sign-in' id='sign-in-button'>
                Sign In
              </Link>
              <Fragment>/</Fragment>
              <Link to='/sign-up' id='sign-up-button'>
                Sign Up
              </Link>
            </Fragment>
          )}
        </div>
      </nav>
      <br />
      <Outlet />
    </div>
  );
}
