import React, { useState } from 'react'

export default function Eficiencia() {
    const [eficacia, setEficacia] = useState(0);
    const [efectividad, setEfectividad] = useState(0);
    const [eficiencia, setEficiencia] = useState(null);
  
    const calcularEficiencia = (event) => {
      event.preventDefault();
  
      if (eficacia > 100 || efectividad > 100) {
        alert('Los valores de eficacia y eficiencia no pueden ser mayores que 100%.');
        return;
      }
  
      const nuevaEficiencia = (efectividad * 100) / eficacia;
      setEficiencia(nuevaEficiencia);
    };

    return (
        <div class="container">
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Calculadora de Efectividad a partir de Eficacia y Eficiencia</h1>

            <form id="formulario" onSubmit={calcularEficiencia}>
                <label for="eficacia">Eficacia:</label>
                <input
                    type="number"
                    id="eficacia"
                    name="eficacia"
                    value={eficacia} 
                    onChange={(e) => setEficacia(parseFloat(e.target.value))}
                    min="0"
                    max="100"
                    step="0.01"
                    required
                />

                <label for="eficiencia">Eficiencia:</label>
                <input
                    type="number"
                    id="eficiencia"
                    name="eficiencia"
                    value={efectividad} 
                    onChange={(e) => setEfectividad(parseFloat(e.target.value))}
                    min="0"
                    max="100"
                    step="0.01"
                    required
                />

                <button
                    type="submit"
                    className='mb-5 boton'
                >
                    Calcular
                </button>
            </form>

            {eficiencia !== null && (
                <div className="text-center font-bold text-xl text-white">
                    <p>Eficiencia: {eficiencia.toFixed(2)}%</p>
                </div>
            )}
        </div>
    )
}
