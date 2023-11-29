import React from "react";
import "./navbar.css";
import logo from "../../Assets/mi.logo.png"
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='navigation'>
      <img src={logo} alt="Logo" className="logo" />
        <div className="deskTopMenu">
            <Link className="deskTopMenuListItem">Home</Link>
            <Link className="deskTopMenuListItem">About</Link>
            <Link className="deskTopMenuListItem">Contact</Link>
            <Link className="deskTopMenuListItem">Projects</Link>
        </div>
        <button className="deskTopMenuBtn">Let's Talk</button>

    </div>
  )
}

export default Navbar;
