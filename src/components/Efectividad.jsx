import React, { useState } from 'react'

export default function Efectividad() {
    const [realizados, setRealizados] = useState(0);
    const [total, setTotal] = useState(1);
    const [efectividad, setEfectividad] = useState(null);

    const calcularEfectividad = (event) => {
        event.preventDefault();

        if (realizados > total) {
            alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
            return;
        }

        const nuevaEfectividad = (realizados / total) * 100;
        setEfectividad(nuevaEfectividad);
    };

    return (
        <>
            <div
                className='container'
            >
                <h1 style={{textAlign: "center", marginBottom: "20px", color: "white"}}>Calculadora de Efectividad</h1>

                <form id="formulario" onSubmit={calcularEfectividad}>
                    <label for="realizados">Logros alcanzados:</label>
                    <input 
                        type="number" 
                        id="realizados" 
                        name="realizados" 
                        min="0" 
                        required 
                        value={realizados} 
                        onChange={e => setRealizados(parseFloat(e.target.value))} 
                    />

                    <label for="total">Total de objetivos:</label>
                    <input 
                        type="number" 
                        id="total" 
                        name="total" min="1" 
                        required 
                        value={total} 
                        onChange={e => setTotal(parseFloat(e.target.value))} 
                    />

                    <button 
                        type="submit"
                        className='mb-5 boton'
                    >
                        Calcular
                    </button>
                </form>

                {efectividad !== null && (
                    <div className="text-center font-bold text-xl text-white">
                        <p>Efectividad: {efectividad.toFixed(2)}%</p>
                    </div>
                )}
            </div>
        </>
    )
}
