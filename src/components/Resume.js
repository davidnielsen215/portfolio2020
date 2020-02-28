import React from "react";
import reactLogo from '../images/react_logo.png'
import mongoLogo from '../images/mongo.png'
import expressLogo from '../images/express.png'
import nodeLogo from '../images/node.png'
import reduxLogo from '../images/redux.png'
import drupalLogo from '../images/drupal.png'
import wordLogo from '../images/wordpress.png'
import hubLogo from '../images/hubspot.png'
import jwtLogo from '../images/jwt.png'
import sendgridLogo from '../images/sendgrid.png'

function Resume(props) {
  const {year, position, graduation, university, company, details, tech, project} = props.resumeData;
  
  if (year === 'react') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={reactLogo} style={{width: '50px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'mongo') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={mongoLogo} style={{width: '50px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'express') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={expressLogo} style={{width: '50px', height: 'auto', borderRadius: '20px'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'node') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={nodeLogo} style={{width: '45px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'redux') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={reduxLogo} style={{width: '50px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'drupal') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={drupalLogo} style={{width: '50px', height: 'auto'}}/><img src={wordLogo} style={{width: '47px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'hubspot') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={hubLogo} style={{width: '50px', height: 'auto'}}/><img src={sendgridLogo} style={{width: '40px', height: 'auto'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  if (year === 'secure') {
    return (
      <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year"> <img src={jwtLogo} style={{width: '50px', height: 'auto', borderRadius: '50px'}}/></h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
    )
  } 
  
  else return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year }</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || tech}</h5>
        <h6 className="mi-resume-company">{company || university || project}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Resume;
