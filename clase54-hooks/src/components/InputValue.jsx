import { useRef, useState } from "react";

export const InputValue = () => {
  const [nombre, setNombre] = useState("");
  const inputRef = useRef("null");

  const handleChange = () => {
    setNombre(inputRef.current?.value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        ref={inputRef}
        value={nombre}
        type="text"
        placeholder="carlitos..."
      />
      <p>El nombre que ingresaste es: {nombre}</p>
    </>
  );
};
