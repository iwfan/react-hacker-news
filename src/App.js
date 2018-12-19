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
  }

  pageInfo = {
    no: 0,
    size: 20,
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
    this.pageInfo.no += 1;
    this.loadData();
  }

  loadData() {
    this.setState({ loading: true });
    fetchHackerNewsData(this.state.searchText, this.pageInfo.no).then(data => {
      console.log(data)
      this.pageInfo.no = data.page;
      this.pageInfo.size = data.hitsPerPage;
      this.setState((prev) => ({ articles: [...prev.articles, ...data.hits], loading: false }))
    });
  }

  render() {
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
                  : <LoadMore
                    onClick={ this.handleLoadMore }
                  >
                    See xxx more articles
                  </LoadMore>
              }
            </div>
          }
        </footer>
      </div>
    );
  }
}

export default App;
