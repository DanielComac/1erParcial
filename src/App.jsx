import React from 'react';
import Conceptos from './components/Conceptos';
import StudentSection from './components/SeccionEstudiantes';
import './App.css';

const concepts = [
  {
    title: 'Administración',
    definitions: [
      'Definición 1 de administración...',
      'Definición 2 de administración...',
      'Definición 3 de administración...',
    ],
  },
  {
    title: 'Administración de Proyectos',
    definitions: [
      'Definición 1 de administración de proyectos...',
      'Definición 2 de administración de proyectos...',
    ],
  },
  {
    title: 'Negociación',
    definitions: [
      'Concepto 1 de negociación...',
      'Concepto 2 de negociación...',
    ],
  },
  {
    title: 'Proceso Administrativo',
    definitions: [
      'Descripción del proceso administrativo...',
    ],
  },
  {
    title: 'Manipulación',
    definitions: [
      'Concepto 1 de manipulación...',
      'Concepto 2 de manipulación...',
    ],
  },
  {
    title: 'Eficacia',
    definitions: [
      'Definición de eficacia...',
    ],
  },
  {
    title: 'Eficiencia',
    definitions: [
      'Definición de eficiencia...',
    ],
  },
  {
    title: 'Riesgos en Proyectos',
    definitions: [
      'Definición 1 de riesgos...',
      'Definición 2 de riesgos...',
      'Definición 3 de riesgos...',
      'Definición 1 de riesgos en proyectos...',
      'Definición 2 de riesgos en proyectos...',
      'Modelo de creación propia...',
    ],
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>Conceptos de Administración y Proyectos</h1>
      <div className="concepts-container">
        {concepts.map((concept, index) => (
          <Conceptos
            key={index}
            title={concept.title}
            definitions={concept.definitions}
          />
        ))}
      </div>
      <StudentSection
        name="Nombre del Alumno"
        photoUrl="/path/to/photo.jpg"
        resumeUrl="/path/to/resume.pdf"
      />
    </div>
  );
};

export default App;
