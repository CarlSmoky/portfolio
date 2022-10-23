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
          <p className="header__paragraph">Self-motivated and determined junior full stack developer, highly adept at seeking innovative solutions with evolving new technologies. Strong proficiency in various languages, libraries, and environments with expertise in JavaScript, Node, React, CSS, PostgreSQL and MySQL. Previous experience as an IT analyst brings great problem solving skills, customer-centric approach, high attention to detail.</p>
        </div>
      </div>
    </header >
  )
}

export default Header;
