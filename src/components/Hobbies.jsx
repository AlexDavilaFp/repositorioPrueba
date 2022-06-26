const Hobbies = () => {

    const click = () => {
        alert("Mis Hobbies")
    }

    return (
        <div className="card" style={{background: "lightcoral"}} onClick={click}>
            <h3>Mis Hobbies</h3>
            <ul>
                <li>Musica</li>
                <li>Fultbol</li>
                <li>Leer</li>
            </ul></div>

    )
}

export default Hobbies;