import React from "react";
import './loadMore.scss'
const LoadMore = ({ children, ...restProps }) => (
  <a className="load-more__btn" { ...restProps }>
    { children }
  </a>
);

export default LoadMore;
