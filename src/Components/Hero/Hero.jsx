import React from "react"
import "./Hero.css"
import profile from "../../assets/profile.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Rohith Kavuri,</span> frontend developer
      </h1>
      <p>
        Highly skilled Full Stack Developer with over two years of experience in
        developing and managing comprehensive full-stack projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  )
}

export default Hero
