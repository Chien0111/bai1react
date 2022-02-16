import React from 'react';
import './App.css';
import Calculatorcommponent from './componets/Calculator';
import Cardcommponent from './componets/Card';


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
