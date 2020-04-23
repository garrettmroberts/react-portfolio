import React from "react";
import "./style.css";

function AboutCard() {
  return(
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">About Me</h1>
        <img id="profile-img" height="250px" src="/assets/images/profile.jpg" alt="profile"></img>
        <p className="card-text">Full-stack web developer making a switch from ministry to computer science.  Recently earned a certification in Full Stack Web Development from Vanderbilt University, where I gained competence in Javascript, CSS3, React.js, MySQL, MongoDB, node.js, and express servers.  I’ve actively used these skills to design and create full-scale web apps in coordination with remote teams using agile development methods.  In a recent project with two teammates, we designed and deployed a node app that alerts users when they have potentially crossed paths with someone else who has tested positive for Covid-19.   Equipped to work collaboratively either on-site or remotely in a team setting to ensure optimal results for user-centered and technology-centered designs.</p>
      </div>
    </div>
  )
};

export default AboutCard;