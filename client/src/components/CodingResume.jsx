import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import myPDF from '../Assets/Peter.Disney.Resume.October.2022.pdf';


function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>John Doe</h1>
      <p>Email: john.doe@email.com</p>
      <p>Phone: 555-555-5555</p>
      <hr />
      <h2>Summary</h2>
      <p>A highly motivated and detail-oriented web developer with 5+ years of experience creating and maintaining web applications. Skilled in JavaScript, React, HTML/CSS, and server-side technologies. Excited to leverage my skills and experience to create high-quality web applications that meet client needs.</p>
      <hr />
      <h2>Experience</h2>
      <h3>Web Developer, XYZ Company (2018-Present)</h3>
      <p>Responsibilities:</p>
      <ul>
        <li>Develop and maintain web applications using React and Node.js</li>
        <li>Create responsive and mobile-friendly designs using HTML/CSS and Bootstrap</li>
        <li>Collaborate with cross-functional teams to implement new features and fix bugs</li>
      </ul>
      <h3>Web Developer, ABC Company (2016-2018)</h3>
      <p>Responsibilities:</p>
      <ul>
        <li>Developed and maintained WordPress websites for clients</li>
        <li>Managed and maintained client relationships</li>
        <li>Designed and implemented custom themes and plugins</li>
      </ul>
      <hr />
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>WordPress</li>
      </ul>
      <hr />
      <div>
        <h2>Resume Preview</h2>
        <Document file={myPDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>Previous Page</button>
        <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
      </div>
      <hr />
      <a href={myPDF} download>Download my Resume (PDF)</a>
    </div>
  );
}

export default Resume;