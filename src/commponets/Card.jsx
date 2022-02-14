import React from "react";
import "../App.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">

        <div className="khoi">
          <div className="img">
            <img
              src="https://www.nodemy.vn/projects/html-css-js/profile-card/aNam.jpg"
              alt=""
            />
          </div>
          <h1>Dinh Nam</h1>
          <p className="code">Fullstack Developer</p>
          <p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-github"></i>
          </p>
          <button className="contact">Contact me</button>
        </div>
        <div className="khoi">
          <div className="img">
            <img
              src="https://www.nodemy.vn/projects/html-css-js/profile-card/aThai.jpg"
              alt=""
            />
          </div>
          <h1>Dinh Nam</h1>
          <p className="code">Fullstack Developer</p>
          <p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-github"></i>
          </p>
          <button className="contact">Contact me</button>
        </div>
        <div className="khoi">
          <div className="img">
            <img
              src="https://www.nodemy.vn/projects/html-css-js/profile-card/Cuong.jpg"
              alt=""
            />
          </div>
          <h1>Dinh Nam</h1>
          <p className="code">Fullstack Developer</p>
          <p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-github"></i>
          </p>
          <button className="contact">Contact me</button>
        </div>


      </div>
    );
  }
}

export default Card;
