import React from "react";
import PropTypes from 'prop-types';
import Article from './article';

const ArticleList = ({ articles, pageNo, pageSize }) => (
  <div className="article-list center-content">
    {
      articles.map(( article, index ) =>
        <Article
          key={ article.objectID }
          number={pageNo * pageSize + index + 1}
          article={ article }
        />
      )
    }
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;