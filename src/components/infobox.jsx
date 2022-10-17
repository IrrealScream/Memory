import React from 'react';
import '../assets/style/card.css';

export default class Infobox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="infobox">
            {'Nombre de paires à découvrir : ' + this.props.numberOfPairs}
            <div className="paires">

            </div>
            {'Description : ' + this.props.desc}
            <div className="descriptionCarte">

            </div>
            <div className="nbEssais">
                {'Nombre d\'essais effectués : ' + this.props.numberOfTries}
            </div>

        </div>
        );
    }
}