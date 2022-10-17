import React from "react";
import { cardData }  from "../data/cardData.js";
import Card from "./card.jsx";

const images = cardData;

export default class Cardboard extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
        const cards = this.props.cards.map((card) => <Card
            description={card.description}
            src={card.src}
            id={card.id}
            key={card.id}
            hidden={card.hidden}
            flip={this.props.flip}/>);
    
        return (
          <div className="cardBoard">
            {cards}
          </div>
        );
      }
    

}