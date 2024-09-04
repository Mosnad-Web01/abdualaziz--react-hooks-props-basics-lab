import React from "react";
import user from "../data/user";

function Links(props) {
  return (
    <div>
      <a href={user.links.github}>Github</a>
      <a href={user.links.linkedin}>LinkedIn</a>
    </div>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2 style={{ color: props.color }}>About Me</h2>
      <p>{props.bio}</p>
      <Links />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
