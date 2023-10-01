import Home from "./components/Home";
function App() {
  let apiKey = process.env.REACT_APP_CURRENCY_KEY;
  return (
    <>
      <Home apiKey={apiKey} />
    </>
  );
}

export default App;
