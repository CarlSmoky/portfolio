import React from "react";

function Header({ headerRef }) {
  return (
    <header className="header" id="home" ref={headerRef} >
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
          <p className="header__paragraph">
          Self-motivated and determined, highly adept at seeking innovative solutions with evolving new technologies. Strong proficiency in various languages, libraries, and environments with expertise in JavaScript, React, Node.js, PostgreSQL and MySQL.
          </p>
        </div>
      </div>
    </header >
  )
}

export default Header;
