import React, { useState } from 'react';
import './App.css';
import FooterPage from './components/Footer';
import HeaderPage from "./components/Header"
import HomePage from './components/Home';
import LogIn from './components/Login';
import SignUp from './components/SignUp';
import { Page } from './enum';
const  App:React.FC = () =>  {
  const [currentPage, setcurrentPage] = useState(Page.Home);
  console.log({currentPage})
  const toggelForm = (formName:any)=>{
    setcurrentPage(formName);
  }
  return (
    <div className="App">
      {/* <HeaderPage />
      <div className='main'>
        <HomePage/>
      </div>
      <FooterPage/> */}
 
       {
          currentPage === Page.LogIn || Page.SignUp? <></> : <HeaderPage />
        }
      <div className={ currentPage === Page.LogIn || Page.SignUp? "" :"main"}>
        {
          currentPage ===Page.LogIn? <LogIn onFormSwitch={toggelForm} /> : <SignUp onFormSwitch={toggelForm}/>
        }
      </div> 
      {
          currentPage === Page.LogIn || Page.SignUp? <></> :    <FooterPage/>
        }
    </div>
  );
}

export default App;
