import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <button onClick={toggleMenu} className="py-2 px-4 rounded hover:bg-gray-700 text-white font-bold flex items-center justify-between w-full">
                            Conceptos
                            <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-8`}></i>
                        </button>
                        {isOpen && (
                            <ul className="space-y-2 ml-4 mt-3">
                                <li><Link to="/proyecto/conceptos/administracion" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/administracion') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Administración</Link></li>
                                <li><Link to="/proyecto/conceptos/administracionproyectos" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/administracionproyectos') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Administración de Proyectos</Link></li>
                                <li><Link to="/proyecto/conceptos/negociacion" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/negociacion') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Negociación</Link></li>
                                <li><Link to="/proyecto/conceptos/procesoadministrativo" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/procesoadministrativo') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Proceso Administrativo</Link></li>
                                <li><Link to="/proyecto/conceptos/manipulacion" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/manipulacion') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Manipulación</Link></li>
                                <li><Link to="/proyecto/conceptos/eficacia" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/eficacia') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Eficacia</Link></li>
                                <li><Link to="/proyecto/conceptos/eficiencia" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/eficiencia') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Eficiencia</Link></li>
                                <li><Link to="/proyecto/conceptos/riesgosenproyectos" className={`block py-2 px-4 rounded ${isActiveLink('/proyecto/conceptos/riesgosenproyectos') ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white opacity-50'}`}>Riesgos en Proyectos</Link></li>
                                <li><button className='mt-3 bg-[#007BFF] rounded-lg p-1' onClick={() => window.open('https://app.asana.com/0/1207451385495385/1207451388792627', '_blank')}>Administrador de proyectos</button></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/proyecto/alumnos" className="block py-2 px-4 rounded hover:bg-gray-700 text-white font-bold">Alumnos</Link></li>
                    <li><Link to="/proyecto/calculadoras" className="block py-2 px-4 rounded hover:bg-gray-700 text-white font-bold bg-[#007BFF]">CALCULADORAS</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;