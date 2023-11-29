import React from "react"
import "./skills.css"

const Skills = () => {
  return (
    <section id="skills">
        <h1 className="heading">Skills <span className="And">and</span> <span className="exp">Experience</span></h1>
        <div className="wrapper">
            <div className="content-text">
                <h2>HTML</h2>
                <p className="text-content"> Experienced</p>
            </div>
            <div className="content-text">
                <h2>CSS</h2>
                <p className="text-content">I have 1 year Experience</p>
            </div>
            <div className="content-text">
                <h2>JavaScript</h2>
                <p className="text-content">I have 3 months Experience</p>
            </div>
        </div>
        <div className="middle-content">
            <div className="content-text">
                <h2>React js</h2>
                <p className="text-content">I have 1 month Experience</p>
            </div>
            <div className="content-text">
                <h2>Node js</h2>
                <p className="text-content">I have 1 month Experience</p>
            </div>
            <div className="content-text">
                <h2>Bootstrap</h2>
                <p className="text-content">I have 1 year Experience</p>
            </div>
            </div>
            <div className="content-text">
                <h2>JQuerry</h2>
                <p className="text-content">I have 1 month Experience</p>
            </div>
    
    </section>
  )
}

export default Skills;
