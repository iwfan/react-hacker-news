import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import Routes from './routes';
import './styles/main.scss';

const App = () => (
  <React.StrictMode>
    <Provider store={createStore}>
      <Routes/>
    </Provider>
  </React.StrictMode>
);

export default App;
// class App1 extends Component {
//   state = {
//     articles: [],
//     loading: false,
//     error: false,
//     articlesCount: 0,
//     pageNumber: 0,
//   }
//
//   componentDidMount() {
//     this.loadData(this.state.searchText, this.state.pageNumber);
//     window.addEventListener('scroll', this.onScroll)
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.onScroll)
//   }
//
//   onScroll = (evt) => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
//       && !this.state.loading && !this.state.error
//     ) {
//       this.handleLoadMore()
//     }
//   }
//   applySetError = prevState => ({
//     error: true,
//     loading: false
//   })
//
//   handleDismiss = (objectID) => {
//     const result = this.state.articles.filter(item => item.objectID !== objectID)
//     this.setState(() => ({
//       articles: result
//     }))
//   }
//
//   handleLoadMore = () => {
//     this.loadData(this.state.searchText, this.state.pageNumber + 1);
//   }
//
//   async loadData(searchText, pageNo) {
//     const state = {
//       loading: true,
//     }
//     if (this.state.searchText !== searchText) {
//       state.articles = []
//     }
//     this.setState(state);
//     try {
//       const data = await fetchHackerNewsData(searchText, pageNo)
//       // console.log(data)
//       this.setState((prev) => ({
//         error: false,
//         loading: false,
//         searchText: searchText,
//         pageNumber: data.page,
//         pageCount: data.nbPages,
//         pageSize: data.hitsPerPage,
//         articlesCount: data.nbHits,
//         articles: pageNo === 0 ? data.hits : [...prev.articles, ...data.hits]
//       }))
//     } catch (exception) {
//       this.setState(this.applySetError)
//     }
//   }
//
//   handleSearchTextChange = (searchText) => {
//     // 搜索时， 重置页码
//     this.loadData(searchText, 0);
//   }
//
//
//   render() {
//     return (
//       <div className="hn-app">
//         <Header onSearchTextChange={this.handleSearchTextChange}/>
//         {this.renderList()}
//         {this.renderFooter()}
//       </div>
//     );
//   }
//
//   renderList() {
//     return (
//       <main className="hn-content">
//         {
//           this.state.articles.length > 0
//           &&
//           <ArticleList
//             articles={this.state.articles}
//             pageNo={0}
//             pageSize={this.state.articles.length}
//             onDismiss={this.handleDismiss}
//           />
//         }
//       </main>
//     )
//   }
//
//   renderFooter() {
//     const restItems = this.state.articlesCount - this.state.articles.length;
//     return (<footer className="hn__footer">
//       {
//         <div className="center-content center-text">
//           {
//             this.state.loading
//               ? <Loading/>
//               : restItems > 0
//               ?
//               <LoadMore
//                 onClick={this.handleLoadMore}
//               >
//                 See {this.state.articlesCount - this.state.articles.length} more articles
//               </LoadMore>
//               : null
//           }
//         </div>
//       }
//     </footer>)
//   }
// }
