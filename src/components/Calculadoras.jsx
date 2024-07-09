import EfecEmpresarial from "./EfecEmpresarial";
import Efectividad from "./Efectividad";
import Eficiencia from "./Eficiencia";
import Rio from "./Rio";

export default function Calculadoras() {
    return (
        <>
            <div className="mb-10">
                <Efectividad />
            </div>
            <div className="mb-10">
                <Eficiencia />
            </div>
            <div className="mb-10">
                <EfecEmpresarial />
            </div>
            <div>
                <Rio />
            </div>
        </>
    )
}
