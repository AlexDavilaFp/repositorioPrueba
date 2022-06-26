import AboutMe from './components/AboutMe';
import { useState } from 'react';
import './App.css'

function App() {

  const [ counter,Setcounter ] = useState(0)
  const incremento = () => {
    Setcounter ( counter+1 )
  }

  return (
    <div className="App">
      < AboutMe Title="Sobre Mi" Item1="Alex" Item2="Pelicula Favorita: Duna" Item3="Musica Favorita: Rock" Color="lightgreen" />
      < AboutMe Title="Mis Hobbies" Item1="Musica" Item2="Fultbol " Item3="Leer" Color="lightcoral" />
      < AboutMe Title="Mis tiempos libres" Item1="Comer" Item2="Salir con amigos" Item3="Jugar videojuegos" Color="lightblue" />
      < AboutMe Title="Mis Comida Favorita" Item1="Pasta" Item2="Lomo saltado" Item3="Hamburguesa" Color="lightsalmon" />
      < AboutMe Title="Mis Stacks" Item1="HTML" Item2="CSS" Item3="React" Color="yellow" />

      <div className='card'>
        <h3>{counter}</h3>
        <button onClick={incremento}>Incrementando</button>
      </div>

    </div>
  )
}

export default App
