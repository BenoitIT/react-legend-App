import React from 'react';
import './authForms.css';
import LoginForm from './formComponents/LoginForm';
//import SignupForm from './formComponents/SignupForm';
const LoginPage = () => {
    return (
        <div className='page-loyout'>
          {/* {<SignupForm/>  } */}
          <LoginForm/>
        </div>
    );
};

export default LoginPage;