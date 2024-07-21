import React from "react"
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_me.png"
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className="rohith-img" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am experienced frontend developer Facilitating seamless
              collaboration among industries, students and institutions•
            </p>
            <p>
              Completed a comprehensive full-stack project acquiring proﬁciency
              across a diverse spectrum of technologies which include java,
              React and SQL
            </p>
            <p>
              Leveraged MongoDB and MySQL for data management and maintenance,
              optimizing performance and scalability of the platform
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievements">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievements">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievements">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About
