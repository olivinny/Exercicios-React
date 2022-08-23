import Footer from "./Ex-Components1/Footer";
import Form from "./Ex-Components1/Form/Form";
import Header from "./Ex-Components1/Header";

const Teste = () => {
  const active = false;
  if (active) {
    return <p>teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  );
};
export default App;
