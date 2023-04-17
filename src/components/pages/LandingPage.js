import React from 'react'
import '../../App.css'
import { useEffect, useState } from "react";
import Axios from "axios";
import HomePage from './HomePage';
//import BackgroundImage from '../../assets/images/logo.jpg'

export default function LandingPage() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    
    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
          }
        });
    };

    useEffect(() => {
        Axios.post("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                window.location = "/home"
            }
        });
    }, []);

    return (

        <header style={ HeaderStyle }>
            <p className="main-para text-center">Food Machinery</p>
           
            <div className="text-center new-5-auto">
            
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required onChange={(e)=>{
                        setusername(e.target.value);
                    }}/>
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required onChange={(e)=>{
                        setpassword(e.target.value);
                    }}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
            </form>
            </div>
           
        </header>
        
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    //background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}