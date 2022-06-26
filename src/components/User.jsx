const User = () => {

    const me = {
        name: "Alex",
        age: 25,
        movie: "Duna",
        music: "Rock",
    }

    const click = () => {
        alert("Sobre Mi")
    }

    return (
        <div className="card" onClick={click}>
            <h3>Sobre Mi</h3>
            <ul>
                <li>{me.name}</li>
                <li>Pelicula Favorita: {me.movie}</li>
                <li>Musica Favorita: {me.music}</li>
            </ul>
        </div>

    )
}

export default User;