import CotizacionesCss from "../styles/Cotizaciones.module.css"
import useCotizaciones from "../hooks/useCotizaciones";
import Cotizacion from "./Cotizacion";


const Cotizaciones = () => {

    const { cotizaciones } = useCotizaciones();

    return (
    <>
    <section className={CotizacionesCss.section} >
        <ul>{cotizaciones.map((elemento, indice) => (
        <Cotizacion key={indice} {...elemento} />
        ))}</ul>
    </section>
    </>
    );
};
export default Cotizaciones;