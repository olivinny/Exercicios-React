// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import Header from "./Desafios/Header";
import Home from "./Desafios/Home";
import Produtos from "./Desafios/Produtos";

const App = () => {
  const { pathname } = window.location;

  let Pagina;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};
export default App;
