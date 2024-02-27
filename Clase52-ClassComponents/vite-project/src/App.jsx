import './App.css'
import AnimeApiFetch from './Components/AnimeApiFetch'
import { ClassComponentStateLess } from './Components/ClassComponentStateless'
import { Counter } from './Components/Counter'
import { Form } from './Components/Form'
import { SimpleStateFull } from './Components/SimpleStateFull'


function App() {

  return (
    <>
      <h1>Ciclo de vida de un componente</h1>
      <ClassComponentStateLess />
      <hr />
      <SimpleStateFull />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      <AnimeApiFetch />
    </>
  )
}

export default App
