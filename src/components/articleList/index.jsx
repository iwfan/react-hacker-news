import React from "react";
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => (
  <main className="hn__content">
    <div className="content-wrap center-content">
      {
        articles && articles.length && articles.map(article => <article key={ article.objectID }>
          <h1><a href={ article.url }>{ article.title }</a></h1>
            { console.log(article) }
         <span>{article.points}</span> | <span>{ article.author }</span>| <span>{ article.num_comments }</span>
        </article>)
      }
    </div>
  </main>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;