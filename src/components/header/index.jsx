import React from "react";

const Header = (props) => (
  <header className="hn__header">
    <nav className="user-nav center-content">
      <ul className="user-nav__list">
        <li className="user-nav__item hn-logo">
          <a href="/"><b><span className="hn-logo__brand">Y</span>Hacker News</b></a>
        </li>
        <li className="user-nav__item user-nav__item--active">
          <a href="#">news</a>
        </li>
        <li className="user-nav__item">
          <a href="">top</a>
        </li>
        <li className="user-nav__item">
          <a href="">search</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header