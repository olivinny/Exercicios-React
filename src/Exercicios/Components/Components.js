import Footer from "./Ex-Components/Footer";
import Form from "./Ex-Components/Form/Form";
import Header from "./Ex-Components/Header";

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
