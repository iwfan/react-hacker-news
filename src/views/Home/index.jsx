import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from "./redux";
import Header from '../../components/header';
import { Prompt } from "react-router-dom";
import ArticleList from "../../components/articleList";

// import Loading from "./components/loading";
// import LoadMore from "./components/loadMore";

class Home extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <div className="hn-app">
        <Header onSearchTextChange={ this.handleSearchTextChange }/>
        <main className="hn-content">
         {
          this.props.data.articles.length > 0
          &&
          <ArticleList
            articles={this.props.data.articles}
            pageNo={0}
            pageSize={20}
            onDismiss={() => {}}
          />
        }
      </main>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleSearchTextChange = () => {

  }
}

Home.propTypes = {};

export default connect(state => ({ ...state }), {
  fetchData: actions.fetchData
})(Home);