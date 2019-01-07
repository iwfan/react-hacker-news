import React from "react";
import PropTypes from "prop-types";
import './header.scss'
import SingleInputSearch from "./SingleInputSearch";

class Header extends React.PureComponent {
  static propTypes = {
    onSearchTextChange: PropTypes.func.isRequired,
  }

  state = {
    searchText: ''
  }

  handleSearchChange = () => {
    const {searchText: keywords} = this.state;
    const text = ''.trim.call(keywords);
    if (text.length > 0) {
      this.props.onSearchTextChange(text);
      this.setState({searchText: ''})
    }
  }

  handleInputChange = (evt) => {
    const {target: {value}} = evt;
    this.setState({
      searchText: value
    })
  }

  handleKeydown = (evt) => {
    if (evt.keyCode === 13) {
      this.handleSearchChange();
    }
  }
  render() {
    return (
      <header className="hn__header">
        <nav className="user-nav center-content">
          <ul className="user-nav__list">
            <li className="user-nav__item hn-logo">
              <a href="/"><b><span className="hn-logo__brand">Y</span>Hacker News</b></a>
            </li>
            <li className="user-nav__item user-nav__search">
              <SingleInputSearch
                searchText={this.state.searchText}
                onInputChange={this.handleInputChange}
                onSearchTextChange={this.handleSearchChange}
                onKeyDown={this.handleKeydown}
              />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header