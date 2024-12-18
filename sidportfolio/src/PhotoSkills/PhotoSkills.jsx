import React, { useEffect, useState } from 'react';
import './PhotoSkills.css'; 
const PhotoSkills = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    setShowSkills(true);
  }, []);

  return (
    <div className="photo-skills-container">
      <div className={`skills-box ${showSkills ? 'slide-in-left' : ''}`}>
        <h2 className='skills-heading'>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">REST APIs</div>
          <div className="skill-item">Responsive Design</div>
        </div>
      </div>
      <div className={`image-container ${showSkills ? 'slide-in-right' : ''}`}>
        <img src="myface.jpg" alt="Your Face" className="skill-image" />
      </div>
    </div>
  );
};

export default PhotoSkills;