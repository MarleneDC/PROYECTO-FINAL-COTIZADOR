import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cotizador from './components/Cotizador';
import Cotizaciones from "./components/Cotizaciones";
import ContizacionesContex from "./context/CotizacionesContext";
import ContizadorContex from "./context/CotizadorContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";


const App = () => {

    const [elementos, setElementos] = useState({dias:30, equipo:0, seguro:0});
    const [cotizaciones, setCotizaciones] = useLocalStorage("cotizaciones", []); 

    return (
        <>
        <ContizacionesContex.Provider value={{ cotizaciones, setCotizaciones }} >
            <ContizadorContex.Provider value={{elementos, setElementos}} >
                
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" index element={<Cotizador />}></Route>
                        <Route path="/cotizaciones" element={<Cotizaciones />}></Route>
                    </Routes>
                </BrowserRouter>

            </ContizadorContex.Provider>
        </ContizacionesContex.Provider>

        </>
    )
};
export default App;