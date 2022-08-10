import React from "react";

function Header() {
  return (
    <header className="header" id="home">
      <div className="header__text-box">
        <div className="fadeup-enter--1">
          <h1 className="header__name">Kaoru Tsumita</h1>
        </div>
        <div className="fadeup-enter--2">
          <h2 className="header__title">Full Stack Develper</h2>
        </div>
        <div className="fadeup-enter--3">
          <p className="header__text paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab sapiente rem nihil atque harum nobis iusto fugit incidunt eligendi amet, asperiores doloremque non dicta aliquid saepe aperiam doloribus eius!</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
