import { useNavigate } from "react-router-dom";
import "./App.css";

function NewGame() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
  return (
    <div className="App">
        <p>New Game?</p>
        <button onClick={routeChange}>Go</button>
    </div>
  );
}

export default NewGame;
