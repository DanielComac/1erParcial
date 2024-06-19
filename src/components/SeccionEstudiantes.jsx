import React from 'react';
import DanielFoto from "../assets/Daniel_Foto.jpg"
import EduardoFoto from "../assets/Eduardo_Foto.jpg"
import JuanFoto from "../assets/JuanP_Foto.jpg";

const StudentSection = () => {
  const students = [
    { name: 'Gerardo Daniel Compean Macias', photoUrl: DanielFoto, curriculumUrl: "https://killertraxer.projectsutd.online/proyecto/Daniel_Curri.pdf" },
    { name: 'Juan Pablo Contreras Vázquez', photoUrl: JuanFoto, curriculumUrl: "https://killertraxer.projectsutd.online/proyecto/JuanP_Curri.pdf" },
    { name: 'Eduardo Garcia Flores', photoUrl: EduardoFoto, curriculumUrl: "https://killertraxer.projectsutd.online/proyecto/Eduardo_Curri.pdf" }
  ];

  return (
    <div className="seccion-estudiantes flex flex-wrap justify-around bg-gray-800">
      {students.map((student, index) => (
        <div key={index} className="card w-1/3 p-4 flex flex-col">
          <img src={student.photoUrl} alt={`${student.name}'s photo`} className="mb-4 w-52 h-60 self-center" />
          <p className="text-center text-[20px] text-white font-bold mt-2">{student.name}</p>
          <a href={student.curriculumUrl} target='_blank' download className="text-blue-500 hover:text-blue-700 mt-5 mb-5">Download Curriculum</a>
        </div>
      ))}
    </div>
  );
};

export default StudentSection;
