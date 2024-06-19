import React from 'react';
import Conceptos from './components/Conceptos';
import StudentSection from './components/SeccionEstudiantes';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app relative">
        <Sidebar />
        <main className="ml-80">
          <Routes>
            {/* Ajusta la ruta base aquí */}
            <Route path="/proyecto/" element={<Navigate replace to="/proyecto/conceptos/administracion" />} />
            <Route path="/proyecto/conceptos/:concept" element={<Conceptos />} />
            <Route path="/proyecto/alumnos" element={<StudentSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
