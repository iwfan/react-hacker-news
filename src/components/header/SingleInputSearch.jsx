import React from 'react';
import PropTypes from "prop-types";

const SingleInputSearch = ({searchText, onInputChange, onSearchTextChange, onKeyDown = _ => _}) => (
  <React.Fragment>
    <input
      className='search__text'
      type="text"
      value={searchText}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      placeholder={'input here'}
    />
    <input
      className='search__btn'
      type="button"
      value="🔍"
      onClick={onSearchTextChange}
    />
  </React.Fragment>
)

SingleInputSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onkeydown: PropTypes.func,
}

export default SingleInputSearch;