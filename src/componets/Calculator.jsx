import React from "react";
import "../App.css";

class Calculator extends React.Component {
  number = [7, 8, 9, "+", , 4, 5, 6, "-", 1, 2, 3, "*", 0, ".", "=", "/"];

  state = {
    item: "",
  };

  insertNumber = (newItem) =>{
    console.log(newItem.taget.value);
    this.setState({
      item: this.state.item + newItem
    })
  }

  render() {
    return (
      <div className="maytinh">
        <h1>CASIO</h1>
        <input type="text" placeholder="0" />
        <br />
        <input type="text" placeholder="Kết quả" />
        <br />
        <button className="ac">AC</button>
        <div className="list-number">
          {this.number.map((num) => (
            <button onClick={this.insertNumber} key={num}>
              {num}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
