import './App.css'
import { HeroCard } from './Components/HeroCard'
import { Navbar } from './Components/Navbar'



function App() {

  let superHeroes = [
    {
      id: 1,
      nombre: "Superman",
      imagen: "https://w7.pngwing.com/pngs/885/843/png-transparent-superman-clark-kent-iron-man-superhero-silhouette-superman-comics-heroes-superhero.png",
      editorial: "DC"
    },
    {
      id: 2,
      nombre: "Deadpool",
      imagen: "https://w7.pngwing.com/pngs/885/843/png-transparent-superman-clark-kent-iron-man-superhero-silhouette-superman-comics-heroes-superhero.png",
      editorial: "Marvel"
    },
    {
      id: 3,
      imagen: "https://w7.pngwing.com/pngs/885/843/png-transparent-superman-clark-kent-iron-man-superhero-silhouette-superman-comics-heroes-superhero.png",
      editorial: "Marvel"
    },
  ]

  return (
    <>
      <Navbar />

      {superHeroes.map((hero) => (
        <HeroCard
          key={hero.id}
          nombre={hero.nombre}
          image={hero.imagen}
          editorial={hero.editorial}
        >

          <hr />

        </HeroCard>
      ))}

    </>
  )
}

export default App
