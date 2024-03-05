// https://thronesapi.com/api/v2/Characters

import { useEffect, useState } from "react";
import { Card } from "./Card";

export const GOT = () => {
  const [characters, setCharacters] = useState([]);

  const URL = "https://thronesapi.com/api/v2/Characters";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {characters.map((character) => {
        return <Card key={character.id} {...character} />;
      })}
    </>
  );
};
