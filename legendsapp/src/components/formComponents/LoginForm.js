import React ,{useState}from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import './Input.css';
const LoginForm = () => {
  //states handlings
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  //state updating
  const handleEmailChange=(e)=>{
  setEmail(e.target.value)
  }
  const handlePasswordChange=(e)=>{
   setPassword(e.target.value)
  }
  // navigating event  updating
  const navigate=useNavigate();
  // handle submission
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://dead-jade-coypu-cape.cyclic.app/Api/admin/login',{
      email,
     password
    }).then(response=>{alert(response.data.message)
      if(response.data.data){
       navigate('/read-blog')
      }else{
        navigate('/')
      }
    }).catch(error=>console.log(error));
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
