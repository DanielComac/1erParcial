import React, { useState } from 'react';

export default function EfecEmpresarial() {
    const [unidadesProducidas, setUnidadesProducidas] = useState(0);
    const [tiempoPlaneado, setTiempoPlaneado] = useState(0);
    const [tiempoReal, setTiempoReal] = useState(0);
    const [eficiencia, setEficiencia] = useState(null);
    const [efectividad, setEfectividad] = useState(null);

    const calcularEfectividad = (event) => {
        event.preventDefault();

        if (tiempoReal <= 0) {
            alert('El tiempo real no puede ser menor o igual a cero.');
            return;
        }

        const nuevaEficiencia = (tiempoPlaneado / tiempoReal) * 100;
        const nuevaEfectividad = (unidadesProducidas / tiempoPlaneado) * 100;

        setEficiencia(nuevaEficiencia);
        setEfectividad(nuevaEfectividad);
    };

    return (
        <div class="container">
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Calculadora de Efectividad en la Producción</h1>

            <form id="formulario" onSubmit={calcularEfectividad}>
                <label for="unidades_producidas">Unidades producidas:</label>
                <input
                    type="number"
                    id="unidades_producidas"
                    value={unidadesProducidas}
                    onChange={(e) => setUnidadesProducidas(parseFloat(e.target.value))}
                    min="0"
                    required
                />

                <label for="tiempo_planeado">Tiempo planeado:</label>
                <input
                    type="number"
                    id="tiempo_planeado"
                    value={tiempoPlaneado}
                    onChange={(e) => setTiempoPlaneado(parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    required
                />

                <label for="tiempo_real">Tiempo real:</label>
                <input
                    type="number"
                    id="tiempo_real"
                    value={tiempoReal}
                    onChange={(e) => setTiempoReal(parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    required
                />

                <button type="submit" className='mb-5 boton'>Calcular</button>
            </form>

            {(eficiencia !== null && efectividad !== null) && (
                <div className="text-center font-bold text-xl text-white">
                    <p>Eficiencia: {eficiencia.toFixed(2)}%</p>
                    <p>Efectividad: {efectividad.toFixed(2)}%</p>
                </div>
            )}
        </div>
    )
}
