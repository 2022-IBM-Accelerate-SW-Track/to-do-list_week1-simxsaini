import React, { Component } from 'react';
import "./About.css";
import me from "../assets/me.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {me}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Simran Kaur</div>
        <div className="brief_description">
          <p> My name is Simran Kaur. </p>
          <p> I am a rising junior attending NJIT. </p>
          <p> I love to cook, workout, and travel. </p>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}