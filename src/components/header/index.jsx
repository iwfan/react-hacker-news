import React from "react";
import PropTypes from "prop-types";
import './header.scss'

class Header extends React.PureComponent {
  static propTypes = {
    searchText: PropTypes.string,
    searchChange: PropTypes.func,
  }
  static defaultProps = {
    searchText: ""
  }

  static getDrivedStateFromProps() {

  }

  state = {
    searchText: this.props.searchText
  }

  render() {
    // const { searchText } = this.state;
    // const { searchChange } = this.props;
    return (
      <header className="hn__header">
        <nav className="user-nav center-content">
          <ul className="user-nav__list">
            <li className="user-nav__item hn-logo">
              <a href="/"><b><span className="hn-logo__brand">Y</span>Hacker News</b></a>
            </li>
            <li className="user-nav__item user-nav__search">
              <input className='search__text' type="text"/>
              <input className='search__btn' type="button" value="🔍"/>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header