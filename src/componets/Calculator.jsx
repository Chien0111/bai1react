import React from "react";
import "../App.css";

class Calculator extends React.Component {
  number = [7,8,9,"+",,4,5,6,"-",1,2,3,"*",0,'.','=','/']
  render() {
    return (
      <div className="maytinh">
        <h1>CASIO</h1>
        <input type="text" placeholder="0" />
        <br />
        <input type="text" placeholder="Kết quả" />
        <br />
        <button className="ac">AC</button>
        
      </div>
    );
  }
}

export default Calculator;
