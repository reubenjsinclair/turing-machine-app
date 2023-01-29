import logo from "./logo.svg";
import "./App.css";
import Colour from "./Colour.js";

function App() {
  return (
    <div className="App">
      <Colour colour={"#58b3da"} />
      <Colour colour={"#febc12"} />
      <Colour colour={"#7f66ad"} />
    </div>
  );
}

export default App;
