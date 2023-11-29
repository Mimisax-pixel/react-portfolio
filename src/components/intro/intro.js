import React from "react";
import "./intro.css";
import bg from "../../Assets/gee.png"
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id= "intro">
      <div className="introContent">
      <span className="hello">Nice to meet you! </span>
      <span className="introText">I'm <span className="introName">Miracle,</span><br />A Web Developer</span>
      <p className="introParagraph">Currently based in Nigeria. I'm a self motivated Web Developer <br />with experience in building user friendly,
      accessible and functional<br /> web applications. 
      </p>
      <Link><button className="btn"></button></Link>
      </div>
      <img src={bg} alt="background image" className="bg" />

    </section>
  )
}

export default Intro;

