import "./Resume.css";

import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
// import { pdfjs } from 'react-pdf';

export default MyResume;
function MyResume() {

  return (
    <div className ="resumeccc">
      <h1>My Resume</h1>
      <p>Click the link below to view/download my resume:</p>
      <a href="/Resume1.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <br/>
      <h1>My Curriculum Vitae</h1>
      <p>Click the link below to view/download my CV:</p>
      <a href="/Cv.pdf" target="_blank" rel="noopener noreferrer">
        Download Curriculum Vitae
      </a>
    </div>
  );
}

