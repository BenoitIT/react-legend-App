import React ,{useState}from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import './Input.css';
const LoginForm = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const handleEmailChange=(e)=>{
  setEmail(e.target.value)
  }
  const handlePasswordChange=(e)=>{
   setPassword(e.target.value)
  }
  const handleSubmit=(e)=>{

    alert('entered email is'+' '+email+'  '+'entered password is'+' '+password);
  }
  return (
    <div className="form-container">
      <div className="form-Heading">
        <h4>sign up to your account</h4>
      </div>
      <div className="formBody">
        <Input type="text" placeholder="enter your email"  label="Email" handleInput={handleEmailChange}/>
        <Input type="password" placeholder="enter your password" label="Password" handleInput={handlePasswordChange}/>
        <SubmitButton value="sign in" handleSubmit={handleSubmit}/>
        <h5>have no account! <a>sign up</a></h5>
      </div>
    </div>
  );
};
export default LoginForm;
