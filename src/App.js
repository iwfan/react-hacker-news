import React, { Component } from 'react';
import Header from './components/header'
import ArticleList from './components/articleList';
import './a.scss'
import { fetchHackerNewsData } from "./constants";
import Loading from "./components/loading";
import LoadMore from "./components/loadMore";

class App extends Component {
  state = {
    articles: [],
    searchText: "",
    loading: false,
    error: false,
    articlesCount: 0,
    pageCount: 0,
    pageNumber: 0,
    pageSize: 0,
  }

  componentDidMount() {
    this.loadData();
  }

  handleDismiss = (objectID) => {
    const result = this.state.articles.filter(item => item.objectID !== objectID)
    this.setState(() => ({
      articles: result
    }))
  }

  handleLoadMore = () => {
    this.loadData(this.state.pageNumber + 1);
  }

  async loadData(pageNo) {
    this.setState({ loading: true });
    try {
      const data = await fetchHackerNewsData(this.state.searchText, pageNo)
      // console.log(data)
      this.setState((prev) => ({
        loading: false,
        pageNumber: data.page,
        pageCount: data.nbPages,
        pageSize: data.hitsPerPage,
        articlesCount: data.nbHits,
        articles: [...prev.articles, ...data.hits]
      }))
    } catch (exception) {
      this.setState({ loading: false, error: exception.message })
    }
  }

  render() {
    const restItems = this.state.articlesCount - this.state.articles.length;
    return (
      <div className="hn-app">
        <Header/>
        <main className="hn-content">
          {
            this.state.articles.length > 0
            &&
            <ArticleList
              articles={ this.state.articles }
              pageNo={ 0 }
              pageSize={ this.state.articles.length }
              onDismiss={ this.handleDismiss }
            />
          }
        </main>
        <footer className="hn__footer">
          {
            <div className="center-content center-text">
              {
                this.state.loading
                  ? <Loading/>
                  : restItems > 0
                  ?
                  <LoadMore
                    onClick={ this.handleLoadMore }
                  >
                    See { this.state.articlesCount - this.state.articles.length } more articles
                  </LoadMore>
                  : null
              }
            </div>
          }
        </footer>
      </div>
    );
  }
}

export default App;
