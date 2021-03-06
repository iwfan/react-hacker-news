import React from "react";
import PropTypes from 'prop-types';
import Article from './article';
import './articleList.scss'

const ArticleList = ({articles, pageNo, pageSize, onDismiss}) => (
  <div className="article-list center-content">
    {
      articles.map((article, index) => article.title && article.url ?
        <Article
          key={article.objectID}
          number={pageNo * pageSize + index + 1}
          dismiss={onDismiss}
          article={article}
        />
        : null
      )
    }
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default ArticleList;