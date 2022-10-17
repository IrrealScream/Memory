import React from 'react';
import Memory from './memory.jsx';
import '../assets/style/memory.css';

/*
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Memory />
      </div>
    );
  }
}
