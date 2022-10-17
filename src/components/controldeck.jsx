import React from 'react';
import '../assets/style/card.css';

export default class ControlDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="controldeck">
            Nb paires : <input type="number" id="wantedPaires" name="wantedPaires" min="2" max="100"></input>
            <input type="button" value="Go !" />
        </div>
        );
    }
}