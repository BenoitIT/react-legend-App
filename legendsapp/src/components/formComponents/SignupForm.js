import React from 'react';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import './Input.css';
const SignupForm = () => {
    return (
    <div className="form-container">
      <div className="form-Heading">
        <h4>fill the form to your account</h4>
      </div>
      <div className="formBody">
        <Input type="text" placeholder="enter your name" label="Username"/>
        <Input type="text" placeholder="enter your email"  label="Email"/>
        <Input type="password" placeholder="enter your password" label="Password"/>
        <Input type="password" placeholder="enter your confirm password" label="Confirm Password"/>
        <SubmitButton value="sign up"/>
      </div>
    </div>
    );
};

export default SignupForm;