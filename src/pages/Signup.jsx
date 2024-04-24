import React,{useState} from "react";
import signuppic from "../photo/signup.jpg";
import "../pagesstyle/Signupstyle.css";
import Login from "./Login";


const Signup = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [cpassword,setCpassword]=useState()
  const [login,setLogin]=useState(false)
  


    const handleClick = () => {
        if(name&&email&&password&&cpassword){
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("cpassword",cpassword)
            localStorage.setItem("signup",email)
            alert("Account is created successfully !!")
            setLogin(true)
        }
    }
  return (
    <>
    {login?<Login />:
      <section className="sign-up">
        <div className="middle">
          <div className="form-heading">
            <h1 className="form-title">Sign Up</h1>
          </div>
          <div className="container">
            <div className="from-group">
              <label> Name : </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Your Good Name"
                onChange={(e)=>{setName(e.target.value)}}
              />
              <br />
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
                name="name"
                autoComplete="off"
                placeholder="password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <br />
              <label> Confirm Password : </label>
              <input
                type="cpassword"
                name="name"
                autoComplete="off"
                placeholder="password"
                onChange={(e)=>{setCpassword(e.target.value)}}
              />
              <br />
              <button onClick={handleClick}>Sign up</button>
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
};

export default Signup;
