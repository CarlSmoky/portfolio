import React from "react";

function Header() {
  return (
    <header className="header" id="home">
      {/* <div class="header__logo-box">
        <img src="img/logo-white.png" alt="Logo" class="header__logo" />
      </div> */}
      <div className="header__text-box">
        <h1 className="heading-primary">
          <div className="fadeup-enter--1">
            <span className="heading-primary--main">
              Kaoru Tsumita
            </span>
          </div>
          <div className="fadeup-enter--2">
            <span className="heading-primary--sub">
              Full Stack Developer
            </span>
          </div>
        </h1>
        <div className="fadeup-enter--3">
          <p className="header__paragraph">Hi Kaoru!  amet consectetur adipisicing elit. Maiores ab sapiente rem nihil atque harum nobis iusto fugit incidunt eligendi amet, asperiores doloremque non dicta aliquid saepe aperiam doloribus eius!</p>
        </div>
      </div>
    </header >
  )
}

export default Header;
