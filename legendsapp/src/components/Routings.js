import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

const Routings = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<SignupPage />} />
          </Routes>
      </BrowserRouter>
  );
};

export default Routings;
