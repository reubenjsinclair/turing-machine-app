import { useState } from "react";
import "./App.css";
import CardOption from "./CardOption";
import { getCard } from "./lib";


function Card(props) {
    const [card,setCard] =  useState(getCard(props.cardNum))
    const [selected,setSelected] = useState(card["cardOptions"].map((el)=>0))
    function updateOpts(el,c){
        const nextSelected = selected.slice();
        nextSelected[el]=(selected[el]+1)%3;
        setSelected(nextSelected)
    }
    return (
        <div>
            <p><b>{card["cardDescription"]}</b></p>
            <ul>
                {card["cardOptions"].map((opt,i) => <CardOption selected={selected[i]} optDesc={opt} key={i} updateOpts={(c)=>updateOpts(i,c)}></CardOption>)}
            </ul>
        </div>
    );
}

export default Card;
