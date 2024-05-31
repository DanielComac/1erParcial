import React from 'react';

const StudentSection = ({ name, photoUrl, resumeUrl }) => {
  return (
    <div className="seccion-estudiantes">
      <img src={photoUrl} alt={`${name}'s photo`} className="foto-estudiante" />
      <a  download>Download Curriculum</a>
    </div>
  );
};

export default StudentSection;
