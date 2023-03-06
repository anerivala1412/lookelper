
import React, {useState} from "react";
import { Page } from "../enum";

const LogIn = (props:any) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    console.log({email,password});
  }
  return (
    <div className="auth-form-container">

      <form className='login-form' onSubmit={handleSubmit}>
      <label htmlFor="Email">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='input__class' placeholder='Add email'/>
        <label htmlFor="password">Password</label>
        <input type="pasword"  value={password} onChange={(e)=>setPassword(e.target.value)} className='input__class' placeholder='******'/>
      </form>
      <button onClick={()=>props.onFormSwitch(Page.SignUp)}>Let's style..</button>
    </div>
     
  )
}

export default LogIn