import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem", padding: "1rem" }}>
      <p>{nome}</p>
      {propriedades.map((propriedade, id) => (
        <p key={id}>{propriedade}</p>
      ))}
    </div>
  );
};

export default Produto;
