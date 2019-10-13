import React from 'react';

import Img from '../media/Img.png';

export default function About() {
  return (
    <div className="about-me">
      <img src={Img} alt="Donald Coleman" />
      <div className="about-content">
        <h1>Hi, I'm Donald.</h1>
        <p>I'm a software developer with a love for coffee, pleasent user experience, and interntionality. Take a look at my projects, and writing.</p>
      </div>
    </div>
  )
}