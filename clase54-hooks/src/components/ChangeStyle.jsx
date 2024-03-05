// <h1>Hooks! 🙌</h1>

import { useRef } from "react";

export const ChangeStyle = () => {
  const h1Ref = useRef(null);
  console.log(h1Ref.current);

  const changeColor = () => {
    h1Ref.current.style.color = "Red";
  };

  return (
    <>
      <h1 ref={h1Ref}>Hooks! 🙌</h1>
      <button onClick={changeColor}>Cambiar color del titulo</button>
    </>
  );
};

/* 
  function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * numPosibilidades;
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + aleatorio;
  }

  const changeColor = () => {
    let hexadecimal = new Array(
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    );
    let color_aleatorio = "#";
    for (let i = 0; i < 6; i++) {
      let posarray = aleatorio(0, hexadecimal.length);
      color_aleatorio += hexadecimal[posarray];
    }

    h1Ref.current.style.color = color_aleatorio;
  };

*/
