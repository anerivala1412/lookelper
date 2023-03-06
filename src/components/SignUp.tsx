
import React, {useState} from "react";
import { Page } from "../enum";

const SignUp = (props:any) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    console.log({email,password});
  }
  return (
    <div className="auth-form-container">
      <form className='register-form' onSubmit={handleSubmit} >
        <label htmlFor="Name">Name</label>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}  className='input__class' placeholder='Add name'/>
      <label htmlFor="Email">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='input__class' placeholder='Add email'/>
        <label htmlFor="password">Password</label>
        <input type="pasword"  value={password} onChange={(e)=>setPassword(e.target.value)} className='input__class' placeholder='******'/>
      </form>
      <button onClick={()=>props.onFormSwitch(Page.LogIn)}>Set your style With us!</button>
    </div>
     
  )
}

export default SignUp