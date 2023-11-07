const Cotizacion = (props) => {
    return (
    <>
    <li> {Object.keys(props).map((prop, indice) => (
    <p key={indice}> {prop}:{props[prop]} </p> 
    ))}</li>
    </>
    );
};
export default Cotizacion;