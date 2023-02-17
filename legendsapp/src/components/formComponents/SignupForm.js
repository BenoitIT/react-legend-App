import React,{useState} from 'react';
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import './Input.css';
const SignupForm = () => {
  //states handlings
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[userName,setUsername]=useState('');
  const[confirmPassword,setConfirmed]=useState('');
  const [submit,setSubmit]=useState(null)
  //state updating
  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
     setPassword(e.target.value)
    }
    const handleUsernameChange=(e)=>{
      setUsername(e.target.value)
      }
      const handleconfirmPswdChange=(e)=>{
       setConfirmed(e.target.value)
      }
    //event handling
    const handleSubmit=(e)=>{
      e.preventDefault();
      setSubmit(true)
      if(password!==confirmPassword){
      alert('your password is not confirmed');
     }else{
      axios.post('https://dead-jade-coypu-cape.cyclic.app/Api/admin/register',{
        userName,
        email,
       password
      }).then(response=>{
        setSubmit(false)
        alert(response.data.message)}).catch(error=>{
          setSubmit(false)
          alert(error.message)});
     }
    }
    return (
    <div className="form-container">
      <div className="form-Heading">
      <div class={submit?"loading":"loader"}>Loading...</div>
        <h4>fill the form to your account</h4>
      </div>
      <div className="formBody">
        <Input type="text" placeholder="enter your name" label="Username" handleInput={handleUsernameChange}/>
        <Input type="text" placeholder="enter your email"  label="Email" handleInput={handleEmailChange}/>
        <Input type="password" placeholder="enter your password" label="Password" handleInput={handlePasswordChange}/>
        <Input type="password" placeholder="enter your confirm password" label="Confirm Password" handleInput={handleconfirmPswdChange}/>
        <SubmitButton value="sign up" handleSubmit={handleSubmit}/>
      </div>
    </div>
    );
};

export default SignupForm;