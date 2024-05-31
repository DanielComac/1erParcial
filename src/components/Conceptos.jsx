import React from 'react';

const Conceptos = ({ title, definitions }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul>
        {definitions.map((def, index) => (
          <li key={index}>{def}</li>
        ))}
      </ul>
    </div>
  );
};

export default Conceptos;
