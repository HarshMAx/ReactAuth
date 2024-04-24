import signuppic from "../photo/signup.jpg";
import '../pagesstyle/Loginstyle.css';
import React,{useState} from "react";
import Homee from "./Homee";


const Login = () => {

    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [signin,setSignin]=useState(false)
    

    const handleLogin = ()=>{
        
       let e =  localStorage.getItem("email")
       let p = localStorage.getItem("password")
        if(email===e&&password===p){
        alert("Login successfully !!")
            setSignin(true)
        }else{
          alert("username password incorrect !!")
        }
    }
    
    return(
        <>
        {signin?<Homee/>:
            <section className="login">
                <div className="middle">
                    <div className="form-heading">
                        <h1 className="form-title">Login</h1>
                    </div>
                    <div className="container">
            <div className="from-group">
              <label> E-mail : </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="E-mail"
                onChange={(e)=>{setEmail(e.target.value)}}
                
              />
              <br />
              <label> Password : </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                
              />
              <br />
              <button onClick={handleLogin}>Sign in</button>
            </div><br></br>
            <div className="signup-image">
              <img src={signuppic} />
            </div>
          </div>
                </div>
            </section>
        }
        </>
    );
}


export default Login;