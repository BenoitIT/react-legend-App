import React from "react";
import Input from "./formComponents/Input";
const LoginForm = () => {
  return (
    <React.Fragment>
      <div className="tableHeading">
        <h4>sign to your account</h4>
      </div>
      <div className="formBody">
        <Input type="text" placeholder="enter your name" label="Username"/>
        <Input type="text" placeholder="enter your email"  label="Email"/>
        <Input type="password" placeholder="enter your password" label="Password"/>
        <Input type="password" placeholder="enter your confirm password" label="Confirm Password"/>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
