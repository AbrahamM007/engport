import React from 'react';
import Artifacts from './Artifacts';
import SeniorProject from './SeniorProject';
import './Work.css';

const Work = () => {
  return (
    <div className="work-page">
      <div className="work-header">
        <div className="container">
          <div className="header-content">
            <div className="section-marker"></div>
            <h1>Work</h1>
            <p>A curated selection of projects and achievements</p>
          </div>
        </div>
      </div>
      
      <Artifacts />
      <SeniorProject />
    </div>
  );
};

export default Work;