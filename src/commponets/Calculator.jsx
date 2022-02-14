import React from "react";
import "../App.css";

class Calculator extends React.Component {
  render() {
    return (
      <div className="maytinh">
        <h1>CASIO</h1>
        <input type="text" placeholder="0" />
        <br />
        <input type="text" placeholder="Kết quả" />
        <br />
        <button className="ac">AC</button>
        <table className="tinh">
          <td>
            <button class="button number">7</button>
          </td>
          <td>
            <button class="button number">8</button>
          </td>
          <td>
            <button class="button number">9</button>
          </td>
          <td>
            <button class="button number">+</button>
          </td>
        </table>
        <table className="tinh">
          <td>
            <button class="button number">4</button>
          </td>
          <td>
            <button class="button number">5</button>
          </td>
          <td>
            <button class="button number">6</button>
          </td>
          <td>
            <button class="button number">-</button>
          </td>
        </table>
        <table className="tinh">
          <td>
            <button class="button number">1</button>
          </td>
          <td>
            <button class="button number">2</button>
          </td>
          <td>
            <button class="button number">3</button>
          </td>
          <td>
            <button class="button number">*</button>
          </td>
        </table>
        <table className="tinh">
          <td>
            <button class="button number">0</button>
          </td>
          <td>
            <button class="button number">.</button>
          </td>
          <td>
            <button class="button number">=</button>
          </td>
          <td>
            <button class="button number">/</button>
          </td>
        </table>
      </div>
    );
  }
}

export default Calculator;
