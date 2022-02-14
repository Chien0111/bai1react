import React from 'react';
import './App.css';
import Calculatorcommponent from './commponets/Calculator';
import Cardcommponent from './commponets/Card';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Calculatorcommponent/>
        <Cardcommponent/>
      </div>
    );
  }
}

export default App;
