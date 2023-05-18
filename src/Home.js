import "./App.css";
import Colour from "./Colour.js";
import Card from "./Card.js"

function Home() {
  return (
    <div className="App">
      <Colour colour={"#58b3da"} />
      <Colour colour={"#febc12"} />
      <Colour colour={"#7f66ad"} />
      <Card cardNum={2}></Card>
    </div>
  );
}

export default Home;
