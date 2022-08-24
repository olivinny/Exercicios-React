import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      <Titulo texto="Produtos" />
      <ul>
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </ul>
    </>
  );
};

export default Produtos;
