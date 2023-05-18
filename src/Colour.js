import "./App.css";
import NumberBox from "./NumberBox.js";
import { useState } from "react";

function Colour(props) {
  const colours = [props.colour, "grey", "green"];
  const [cols, setCols] = useState(Array(5).fill(0));
  const [selected, setSelected] = useState(-1);

  function test(num) {
    const newCols = cols.slice();
    var newIndex;
    if (newCols[num] + 1 === 2 && selected === -1) {
      setSelected(num);
    }
    if (selected === num) {
      newIndex = (newCols[num] + 1) % 3;
      setSelected(-1);
    } else if (selected !== -1) {
      newIndex = (newCols[num] + 1) % 2;
    } else {
      newIndex = (newCols[num] + 1) % 3;
    }

    newCols[num] = newIndex;
    setCols(newCols);
  }
  return (
    <div className="colourBox">
      <area shape="circle" />
      <NumberBox cycle={test} num={4} colour={colours[cols[4]]} />
      <NumberBox cycle={test} num={3} colour={colours[cols[3]]} />
      <NumberBox cycle={test} num={2} colour={colours[cols[2]]} />
      <NumberBox cycle={test} num={1} colour={colours[cols[1]]} />
      <NumberBox cycle={test} num={0} colour={colours[cols[0]]} />
    </div>
  );
}

export default Colour;
