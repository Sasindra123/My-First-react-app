import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container1">
      <label>About Our Services</label>
      <br />
      <select>
        <option>Select Our Service</option>
        <option>Emergency room services.</option>
        <option>Short-term hospitalization.</option>
        <option>X-ray/radiology services.</option>
        <option>General and specialty surgical services.</option>
        <option>Blood services.</option>
        <option>Laboratory services.</option>
        <option>Pharmacy</option>
      </select>
    </div>
  );
};

export default About;
