import React from 'react';
import Cardboard from './cardboard.jsx';
import Infobox from './infobox.jsx';
import ControlDeck from './controldeck.jsx';
import { shuffle } from "../scripts/utils.js";
import { cardData }  from "../data/cardData.js";


export default class Memory extends React.Component{

    constructor(props){
        super(props);
        this.state = { cards:[] , 
            revealed  : [],
            numberOfPairs: 4,
            tries : 0,
            lastDesc : null
          };
        this.flip = this.flip.bind(this);
    }

    async componentDidMount() {
        const select = shuffle(cardData).slice(0,this.state.numberOfPairs);
        const cards = shuffle([...select, ...select])
                      .map((card,index) => {
                        return { ...card , id : index , hidden : true};
                      });
        this.setState( {cards:cards} );
      }
    
    cardHide(key) {
        let newCards = this.state.cards;
        newCards[key].hidden = true;
        this.setState({cards : newCards});
      }
    
    cardShow(key) {
      let newCards = this.state.cards;
      newCards[key].hidden = false;
      this.setState({cards : newCards});
    }

    flip(key) {
      this.cardShow(key);
      
      //On stocke la description à afficher
      this.setState({lastDesc : this.state.cards[key].description});
      
      // Cas à traiter : il ne faut rien faire si la carte est déjà révélé
      // On décide juste de la faire clignoter
      const copyOfRevealed = this.state.revealed;
      const alredayRevealed = copyOfRevealed.find(elt => elt.id == key);
      if (alredayRevealed) {
          this.cardHide(key);
          const showAgain = () => this.cardShow(key);
          setTimeout(showAgain, 100);
      }
      else {
        // lastRevelation doit prendre comme valeur la première carte d'un essai,
        // null sinon.
        const lengthOfReveal = this.state.revealed.length;
        const lastRevelation = (lengthOfReveal > 0 && lengthOfReveal % 2 == 1) ? this.state.revealed[lengthOfReveal - 1] : null;
        if (lastRevelation != null) { // Si une carte a déjà été révélé, alors...

          if (this.state.cards[key].description == lastRevelation.description) {
          // Traitement en cas de paire.
          let newRevealed = this.state.revealed;
          newRevealed.push(this.state.cards[key]);
          this.setState({revealed : newRevealed});

          //Comme on a découvert une paire, on décrémente le compteur
          this.setState( prevState => ({numberOfPairs : prevState.numberOfPairs - 1}));
          }
          
          else {
            // Traitement sinon
            // Permet d'attendre deux secondes avant le changement d'état
            const flipRevealed = () => {
              this.cardHide(key);
              this.cardHide(lastRevelation.id);
            };
            window.setTimeout(flipRevealed, 1500);
            let newRevealed = this.state.revealed;
            newRevealed.pop();
            this.state = ({revealed : newRevealed });
          }
        }
        else {
          //Si il n'y a jamais eu de carte précédente
          let newRevealed = this.state.revealed;
          newRevealed.push(this.state.cards[key]);
          this.setState({revealed : newRevealed});

          //On va incrémenter le compteur d'essai de 1
          this.setState(prevState => ({tries : prevState.tries + 1}));
        }
      }
    }    
 
    render(){
    const descToSend = this.state.lastDesc ? this.state.lastDesc : '?';;
    return <div className="memory">
      <ControlDeck />
      <Cardboard
        cards={this.state.cards}
        flip={this.flip}
      />
      <Infobox numberOfPairs={this.state.numberOfPairs}
               numberOfTries={this.state.tries}
               desc = {descToSend}
               />
    </div>

    }
}





































// JS = CANCER