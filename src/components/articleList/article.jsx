import React from "react";
import PropTypes from "prop-types";

const getDomainName = str => {
  const result = "".match.call(str, /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g);
  if (result && result.length) {
    return result[0];
  }
}

const Article = ({ article, number, dismiss }) => (
  <article className="article-item">
    <section className="article-item__number">
      <em>{ number }</em>
    </section>
    <section className="article-item__content">
      <h1 className="article-item__title">
        <a href={ article.url } className="article-item__link">
          { article.title }
          {
            article.url &&
            <small className="article-item__domain">
              ({ getDomainName(article.url) })
            </small>
          }
        </a>
      </h1>
      <p>
        { article.points } points by <a
        className="article-item__link"
        >{ article.author }</a>
        &nbsp;|&nbsp;
        <a className="article-item__link">1 hours ago</a>
        &nbsp;|&nbsp;
        <a
          className="article-item__link"
          onClick={() => dismiss(article.objectID)}
        >hide</a>
        &nbsp;|&nbsp;
        <a
          className="article-item__link"
          >{ article.num_comments } comments</a>
      </p>
    </section>
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
  dismiss: PropTypes.func.isRequired,
}

export default Article;