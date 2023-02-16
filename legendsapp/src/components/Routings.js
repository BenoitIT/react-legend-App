import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReadBlogPage from './ReadBlogPage';

const Routings = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/read-blog" element={<ReadBlogPage />} />
          </Routes>
      </BrowserRouter>
  );
};

export default Routings;
