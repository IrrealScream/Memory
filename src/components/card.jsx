import React from "react";
import '../assets/style/card.css';
import { UNKNOWN_SRC } from "../data/cardData";


export default class Card extends React.Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.flip(this.props.id);
    }

    render(){
        return (
            <div className="card">
              <img
                src={this.props.hidden ? UNKNOWN_SRC : this.props.src}
                alt={this.props.description}
                onClick={this.handleClick}/>
            </div>
          );
    }
}