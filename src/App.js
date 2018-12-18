import React, { Component } from 'react';
import Header from './components/header'
import ArticleList from './components/articleList';
import './a.scss'
import { fetchHackerNewsData } from "./constants";

class App extends Component {
  state = {
    articles: [],
    pageNo: 0,
    pageSize: 20,
    error: false,
  }

  componentDidMount() {
    fetchHackerNewsData().then(data => this.setState({ articles: data.hits }));
  }

  render() {
    return (
      <div className="hn-app">
        <Header/>
        <main className="hn-content">
          <ArticleList articles={ this.state.articles } pageNo={this.state.pageNo} pageSize={this.state.pageSize}/>
        </main>
        <footer className="hn__footer">
        </footer>
      </div>
    );
  }
}

export default App;
