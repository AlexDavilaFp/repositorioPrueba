const Timefree = () => {
    
    const click = () => {
        alert("Mis tiempos libres")
    }

    return (
        <div className='card' style={{ background: "lightblue" }} onClick={click}>
            <h3>En mi tiempo libre me gusta</h3>
            <ul>
                <li>Comer</li>
                <li>Salir con amigos</li>
                <li>Jugar videojuegos</li>
            </ul>
        </div>
    );
};

export default Timefree;