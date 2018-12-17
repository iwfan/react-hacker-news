import React, { Component } from 'react';
import Header from './components/header'
import ArticleList from './components/articleList';
import './App.css';
import './a.scss'
import { fetchHackerNewsData } from "./constants";

class App extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    fetchHackerNewsData().then(data => this.setState({ articles: data.hits }));
  }
  render() {
    return (
      <div className="hn-app">
        <Header/>
        <ArticleList articles={ this.state.articles }/>
        <footer className="hn__footer">
        </footer>
      </div>
    );
  }
}

export default App;
