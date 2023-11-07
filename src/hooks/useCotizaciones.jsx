import { useContext } from "react";
import CotizacionesContext from "../context/CotizacionesContext";

const useCotizaciones = () => useContext(CotizacionesContext);
export default useCotizaciones;