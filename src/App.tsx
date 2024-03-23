import "./App.css";
import Context from "./components/Context";
import Counter from "./components/Counter";
import Form from "./components/Form";
import PropDrilling from "./components/PropDrilling";

function App() {
  return (
    <div className="App">
      <Counter initialCount={397} />
      <PropDrilling />
      <Context />
      <br />
      <Form />
    </div>
  );
}

export default App;
