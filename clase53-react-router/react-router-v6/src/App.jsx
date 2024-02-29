import { Routes, Route } from 'react-router-dom'
import './App.css'
import AnimeApiFetch from './Components/AnimeApiFetch'
import { ClassComponentStateLess } from './Components/ClassComponentStateless'
import { Counter } from './Components/Counter'
import { Form } from './Components/Form'
import NavBar from './Components/NavBar'
import { SimpleStateFull } from './Components/SimpleStateFull'


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path='/' element={
          <>
          <h1>Ejemplos con react-router-dom v6</h1>
          <small>Puede fallar...</small>
          </>
        }/>
        {/* Stateless */}
        <Route path="/stateless" element={<ClassComponentStateLess/>}/>        
        {/* Anime */}
        <Route path="/anime" element={<AnimeApiFetch/>} />
        {/* Counter */}
        <Route path="/counter" element={<Counter/>}/>          
        {/* form */}
        <Route path="/form" element={<Form />}></Route>
        {/* simpleStatefull */}
        <Route path="/simple-statefull" element={<SimpleStateFull />}/>   
      </Routes>

    </>
  )
}

export default App


