const Food = () => {

    const click = () => {
        alert("Mis Comida Favorita")
    }

    return (
        <div className='card' style={{ background: "lightsalmon" }} onClick={click}>
            <h3>Mi Comida Favorita</h3>
            <ul>
                <li>Pasta</li>
                <li>Lomo saltado</li>
                <li>Hamburguesa</li>
            </ul>
        </div>
    );
};

export default Food;