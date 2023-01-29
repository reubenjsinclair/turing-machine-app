import "./App.css";

function NumberBox(props) {
  return (
    <div
      className="numberBox"
      style={{ backgroundColor: props.colour }}
      onClick={() => props.cycle(props.num)}
    >
      <p>{1 + props.num}</p>
    </div>
  );
}

export default NumberBox;
