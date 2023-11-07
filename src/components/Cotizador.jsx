import CotizadorCss from "../styles/Cotizador.module.css"
import { useState, useEffect } from "react";
import Combos from "./Combos";
import useCotizador from "../hooks/useCotizador";
import useCotizaciones from "../hooks/useCotizaciones";
import Swal from "sweetalert2";

const Cotizador = () => {

    const [precio, setPrecio] = useState(0);
    const [datos, setDatos] = useState([]);
    const {elementos, setElementos} = useCotizador();
    const {cotizaciones, setCotizaciones} = useCotizaciones();
    
    const realizarCotizacion = () => {
        const { dias, equipo, seguro }= elementos;
        if(dias < 30 || equipo == 0 || seguro == 0){
            Swal.fire('¡Importante!', "Debes completar los datos", "warning");
        };
    const cuenta = 500 * dias * equipo * seguro;
    setPrecio(cuenta);
    };

    const exito = () => {
        Swal.fire('Éxito', "Cotización realizada con éxito", "success");
    };
    
    const guardar = () => {
        setCotizaciones([...cotizaciones, {
            fecha: new Date().toLocaleDateString("es-AR"),...elementos,
            cuenta: 500 * elementos.dias * elementos.equipo * elementos.seguro },
        ]);
        setPrecio(0);
        exito();
    };

    useEffect(() => {
        const leer = async () => setDatos(await (await fetch("/data.json")).json());
        leer();
    }, []);


    return (
    <>
    
    <section>
        <h1>Completa los datos solicitados</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <Combos 
                datos={datos.filter(({categoria}) => categoria == "equipo")} label={"Equipo a asegurar:"} tipo={"equipo"} />
            <Combos 
                datos={datos.filter(({categoria}) => categoria == "seguro")} label={"Tipo de seguro:"} tipo={"seguro"} />
            
            
            <label htmlFor="dias">Ingresa la cantidad de días</label>
            <input  
                type="number" id="dias" defaultValue={7} min={7} max={360*3} step={7}
                onInput={(e) => setElementos({...elementos, dias: isNaN(parseInt(e.target.value)) ? 7 : parseInt(e.target.value) < 7 ? 7 : parseInt(e.target.value) })}></input>
            <button type="button" onClick={realizarCotizacion}>Cotizar</button>
            
        </form>

        {precio != 0  && (
            <>
                <form id={CotizadorCss.cotizacion} onSubmit={(e) => e.preventDefault()}>
                    <h3>Precio estimado es de <b>${precio.toFixed(2)}</b></h3>
                    <button type="button" onClick={guardar} >Guardar</button>
                </form>
            </>
        )}
    </section>
    </>
    );
};
export default Cotizador;