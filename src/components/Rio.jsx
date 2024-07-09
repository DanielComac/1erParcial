import React, { useState } from 'react';

export default function Rio() {
    const [inversion, setInversion] = useState(0);
    const [beneficio, setBeneficio] = useState(0);
    const [roi, setRoi] = useState(null);

    const calcularROI = (event) => {
        event.preventDefault();
        const nuevaInversion = parseFloat(inversion);
        const nuevoBeneficio = parseFloat(beneficio);

        if (isNaN(nuevaInversion) || isNaN(nuevoBeneficio)) {
            setRoi("Error: Ingrese valores numéricos válidos.");
            return;
        }

        const nuevoRoi = (nuevoBeneficio - nuevaInversion) / nuevaInversion * 100;
        setRoi(nuevoRoi);
    };

    return (
        <div class="container">
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Calculadora de Retorno de Inversión</h1>

            <form id="formulario" onSubmit={calcularROI}>
                <label for="inversion">Inversión:</label>
                <input
                    type="number"
                    id="inversion"
                    value={inversion}
                    onChange={(e) => setInversion(e.target.value)}
                    min="0"
                    required
                />

                <label for="beneficio">Beneficio:</label>
                <input
                    type="number"
                    id="beneficio"
                    value={beneficio}
                    onChange={(e) => setBeneficio(e.target.value)}
                    min="0"
                    required
                />

                <button type="submit" className='mb-5 boton'>Calcular ROI</button>
            </form>

            {roi !== null && (
                <div className="text-center font-bold text-xl text-white">
                    {roi >= 0 ?
                        `ROI: ${roi.toFixed(2)}%` :
                        `ROI: -${(-roi).toFixed(2)}% (Pérdida)`
                    }
                </div>
            )}
        </div>
    )
}
