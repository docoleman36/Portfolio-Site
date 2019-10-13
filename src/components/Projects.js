import React from 'react';

import guidr from '../media/guidr.jpg'

export default function Projects() {
  return (
    <div>
      <div className="project">
        <h1>Guidr</h1>
        <img className="guidr-img" src={guidr} alt="guidr" height="500" />
        <p>Guidr was created during my build week at Lambda School and was amazing</p>
        <p>Tech Stack: HTML, JavaScript, Less</p>
        <button className="view-site">
          <a href="https://jovial-kare-841554.netlify.com/">
            View Site</a>
        </button>
        <button className="view-code">
          <a href="https://github.com/guidr-donald-coleman-benjamin-doyle/Guidr">
            View Code</a>
        </button>
      </div>

      <hr></hr>

      <div className="project">
        <h1>Guidr</h1>
        <img className="guidr-img" src={guidr} alt="guidr" height="500" />
        <p>Guidr was created during my build week at Lambda School and was amazing</p>
        <p>Tech Stack: HTML, JavaScript, Less</p>
        <button className="view-site">
          <a href="https://jovial-kare-841554.netlify.com/">
            View Site</a>
        </button>
        <button className="view-code">
          <a href="https://github.com/guidr-donald-coleman-benjamin-doyle/Guidr">
            View Code</a>
        </button>
      </div>
    </div>
  )
}