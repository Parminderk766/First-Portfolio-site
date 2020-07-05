import React from 'react';

const AboutMe = (props) => {

    return(
        <div id = "head">
          <div class= "heading">
            <div>{props.name}</div>
            <div id = "picture"></div>
            <div>Web Developer</div>
          </div>
          <div>
            <hr/>
            <h1>Experience:</h1>
            <ul>
              <li>Built Simple webpages using HTML, CSS, and Javasript.</li>
              <li>I Created this Page using React framework.</li>
            </ul>
            <h1>Education</h1>
            <ul>
              <li><strong>CUNY Queensborough Community College</strong>
                <ul>
                  <li>Graduation: June 26th, 2020</li>
                  <li>Computer Engineering Technology</li>
                </ul>
              </li>
              <li><strong>CUNY TechWorks Software Developement Program</strong>
                <ul>
                  <li>Graduation: Currently Attending</li>
                  <li>Fullstack Software developement</li>
                </ul>
              </li>
              <li><strong>CUNY Queens College</strong>
                <ul>
                  <li>Graduation: Currently Enrolled</li>
                  <li>BS Computer Science</li>
                </ul>
              </li>
            </ul>
            <h1>Skills</h1>
            <ul>
              <li>HTML, CSS, and Javascript.</li>
              <li>Fullstack Software developement.</li>
              <li>Use Reack framework</li>
              <li>Basic understanding Of Ruby programming language.</li>
              <li>Basic understanding Of C++ programming language.</li>
              <li>Able to work with teams.</li>
            </ul>
          </div>
        </div>
    )
}

export default AboutMe;