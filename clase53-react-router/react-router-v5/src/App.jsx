import { Switch, Route } from 'react-router-dom'
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

      <Switch>
        {/* Home */}
        <Route path="/" exact>
          <h1>Ciclo de vida de un componente</h1>
        </Route>
        {/* Stateless */}
        <Route path="/stateless">
          <ClassComponentStateLess />
        </Route>
        {/* Anime */}
        <Route path="/anime">
          <AnimeApiFetch />
        </Route>
        {/* Counter */}
        <Route path="/counter">
          <Counter />
        </Route>
        {/* form */}
        <Route path="/form">
          <Form />
        </Route>
        {/* simpleStatefull */}
        <Route path="/simple-statefull">
          <SimpleStateFull />
        </Route>
      </Switch>

    </>
  )
}

export default App
