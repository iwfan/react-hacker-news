import React from "react";

const LoadMore = ({ children, ...restProps }) => (
  <a className="load-more__btn" { ...restProps }>
    { children }
  </a>
);

export default LoadMore;
