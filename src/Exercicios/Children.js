const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="Meu titulo 1">
        Isso é o children
      </Titulo>
      <Titulo cor="blue" texto="Meu titulo 2" />
      <Titulo cor="cyan" texto="Meu titulo 3" />
    </>
  );
};
export default App;
