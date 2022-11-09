import React, { useState } from "react";
import "./navbar.scss";
import { FaEmpire } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

function Navbar()
{
    const [name, setName] = useState("");
    const [headingName, setHeadingName] = useState("");
    const [show, setShow] = useState(false);
    const [whatEver, setWhatEver] = useState("-1000");

    const list = headingName.split(" ");
    console.log(list[0]);

    function Display()
    {
        if(headingName.length===0)
        {
            return <div className="sign-btn">
            <button onClick={SignIn}><a href="#">Sign Up <hr className="underline"/></a></button>
            <button onClick={SignIn}><a href="#">Sign In <hr className="underline"/></a></button>
            </div>
        }
        else
             return <p className="name">Hello, {list[0]}!</p>
    }

   function handleChange(event)
   {
      setName(event.target.value);
   }
  
    function SignIn()
    {
        setWhatEver("-28");
    }

    function login(e)
    {
        e.preventDefault();
        setHeadingName(name);
        setShow(!show);
        setWhatEver("-1000")
    }
    
    return (
        <header className="navbar">
            <nav>
                 <div className="logo">
                    <FaEmpire className="logo-icon"/>
                    <h1 className="logo-name">Escapes</h1>
                 </div>

                <div className="nav-items">

                <div className="nav-links">
                    <ul>
                        <li><a href="#">Home <hr className="underline"/></a></li>
                        <li><a href="#">Locations <hr className="underline"/></a></li>
                        <li><a href="#">Blog <hr className="underline"/></a></li>
                        <li><a href="#">Contact <hr className="underline"/></a></li>
                    </ul>

                 </div>
                    <MdOutlineSearch className="search"/>

                <Display />

                <form  style={{transform : `translate(-138px,${whatEver}px)`}}  className="enter-info">
                    <div className="create-section">
                    <h2 className="about">Log-in to Escapes</h2>

                    <div className="create-input">
                       <input onChange={handleChange} placeholder="Enter Username" />
                       <input type="password" placeholder="Enter Password" />
                    </div>

                    <div className="footer">
                        <button className="login-btn" onClick={login}>Log-in</button>
                        <a href="#">Forgotten password? </a>
                         |
                        <a href="#"> Sign-Up to Escapes</a>
                    </div>
                    </div>
                </form>

            </div>

            </nav>
            </header>
        );
}


export default Navbar;