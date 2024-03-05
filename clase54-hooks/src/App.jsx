import "./App.css";
import { ChangeStyle } from "./components/ChangeStyle";
import { Counter } from "./components/Counter";
import { GOT } from "./components/GOT";
import { InputValue } from "./components/InputValue";

function App() {
  return (
    <>
      <ChangeStyle />
      <hr />
      <Counter />
      <hr />
      <InputValue />
      <hr />
      <GOT />
      <hr />
    </>
  );
}

export default App;
