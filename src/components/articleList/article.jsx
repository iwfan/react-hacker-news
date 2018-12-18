import React from "react";
import PropTypes from "prop-types";

const Article = ({ article, number }) => (
  <article className="article-item">
    <h1 className="article-item__title">
      { number }.
      <a href={ article.url } className="article-item__link">
         { article.title }
      </a>
    </h1>
    <p>
      { article.points } by <a href="javascript: void(0)">{ article.author }</a>
      |
      <a href="javascript:void(0)">{ article.num_comments } comments</a>
    </p>
    { console.log(article) }
  </article>
);

Article.propTypes = {
  article: PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    num_comments: PropTypes.number.isRequired,
  }),
}

export default Article;