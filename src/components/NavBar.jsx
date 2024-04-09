import React from 'react'
import "./style-component.css"
import { FaAlgolia } from "react-icons/fa6";

function NavBar() {
  return (
    <nav className='navbar'>
        <h1><a href="#"><FaAlgolia /> Logo</a></h1>
        <ul className='nav-links'>
            <li><a href={"#home"}>Home</a></li>
            <li><a href={"#page"}>Page</a></li>
            <li><a href={"#features"}>Features</a></li>
            <li><a href={"#screenshot"}>Screenshot</a></li>
            <li><a href={"#priceing"}>Priceing</a></li>
            <li><a href="#">Download</a></li>
        </ul>
    </nav>
  )
}

export default NavBar