(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),s=(a(18),a(1)),l=a.n(s),o=a(8),m=a(2),u=a(3),h=a(4),f=a(6),p=a(5),d=a(7),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:a.props.searchText},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"hn__header"},r.a.createElement("nav",{className:"user-nav center-content"},r.a.createElement("ul",{className:"user-nav__list"},r.a.createElement("li",{className:"user-nav__item hn-logo"},r.a.createElement("a",{href:"/"},r.a.createElement("b",null,r.a.createElement("span",{className:"hn-logo__brand"},"Y"),"Hacker News"))),r.a.createElement("li",{className:"user-nav__item user-nav__item--active"},r.a.createElement("a",null,"news")))))}}],[{key:"getDrivedStateFromProps",value:function(){}}]),t}(r.a.PureComponent);g.defaultProps={searchText:""};var E=g,y=function(e){var t=e.article,a=e.number,n=e.dismiss;return r.a.createElement("article",{className:"article-item"},r.a.createElement("section",{className:"article-item__number"},r.a.createElement("em",null,a)),r.a.createElement("section",{className:"article-item__content"},r.a.createElement("h1",{className:"article-item__title"},r.a.createElement("a",{href:t.url,className:"article-item__link"},t.title,t.url&&r.a.createElement("small",{className:"article-item__domain"},"(",function(e){var t="".match.call(e,/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g);if(t&&t.length)return t[0]}(t.url),")"))),r.a.createElement("p",null,t.points," points by ",r.a.createElement("a",{className:"article-item__link"},t.author),"\xa0|\xa0",r.a.createElement("a",{className:"article-item__link",onClick:function(){return n(t.objectID)}},"hide"),"\xa0|\xa0",r.a.createElement("a",{className:"article-item__link"},t.num_comments," comments"))))},v=function(e){var t=e.articles,a=e.pageNo,n=e.pageSize,i=e.onDismiss;return r.a.createElement("div",{className:"article-list center-content"},t.map(function(e,t){return r.a.createElement(y,{key:e.objectID,number:a*n+t+1,dismiss:i,article:e})}))},b=(a(22),function(){var e=Object(m.a)(l.a.mark(function e(){var t,a,n,r,i=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",a=i.length>1&&void 0!==i[1]?i[1]:0,e.prev=2,e.next=5,fetch("".concat("https://hn.algolia.com/api/v1","/").concat("search","?").concat("query=").concat(t,"&").concat("tags=","front_page&").concat("page=").concat(a));case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("fetch failed");case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(2),e.t0;case 17:case"end":return e.stop()}},e,this,[[2,14]])}));return function(){return e.apply(this,arguments)}}());function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var w=r.a.createElement("g",{transform:"rotate(0 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),N=r.a.createElement("g",{transform:"rotate(30 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),k=r.a.createElement("g",{transform:"rotate(60 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),_=r.a.createElement("g",{transform:"rotate(90 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),j=r.a.createElement("g",{transform:"rotate(120 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),C=r.a.createElement("g",{transform:"rotate(150 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),O=r.a.createElement("g",{transform:"rotate(180 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),T=r.a.createElement("g",{transform:"rotate(210 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),D=r.a.createElement("g",{transform:"rotate(240 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),z=r.a.createElement("g",{transform:"rotate(270 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),S=r.a.createElement("g",{transform:"rotate(300 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),P=r.a.createElement("g",{transform:"rotate(330 50 50)"},r.a.createElement("rect",{x:47,y:24,rx:9.4,ry:4.8,width:6,height:12,fill:"#ff5500"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))),M=function(e){return r.a.createElement("svg",x({className:"lds-spinner",width:"200px",height:"200px",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",style:{background:"none"}},e),w,N,k,_,j,C,O,T,D,z,S,P)},I=(a.p,function(e){var t=e.style;return r.a.createElement(M,{width:50,height:50,style:t})}),A=a(11),B=function(e){var t=e.children,a=Object(A.a)(e,["children"]);return r.a.createElement("a",Object.assign({className:"load-more__btn"},a),t)},H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],searchText:"",loading:!1,error:!1,articlesCount:0,pageCount:0,pageNumber:0,pageSize:0},a.handleDismiss=function(e){var t=a.state.articles.filter(function(t){return t.objectID!==e});a.setState(function(){return{articles:t}})},a.handleLoadMore=function(){a.loadData(a.state.pageNumber+1)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=Object(m.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,b(this.state.searchText,t);case 4:a=e.sent,this.setState(function(e){return{loading:!1,pageNumber:a.page,pageCount:a.nbPages,pageSize:a.hitsPerPage,articlesCount:a.nbHits,articles:Object(o.a)(e.articles).concat(Object(o.a)(a.hits))}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({loading:!1,error:e.t0.message});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.articlesCount-this.state.articles.length;return r.a.createElement("div",{className:"hn-app"},r.a.createElement(E,null),r.a.createElement("main",{className:"hn-content"},this.state.articles.length>0&&r.a.createElement(v,{articles:this.state.articles,pageNo:0,pageSize:this.state.articles.length,onDismiss:this.handleDismiss})),r.a.createElement("footer",{className:"hn__footer"},r.a.createElement("div",{className:"center-content center-text"},this.state.loading?r.a.createElement(I,null):e>0?r.a.createElement(B,{onClick:this.handleLoadMore},"See ",this.state.articlesCount-this.state.articles.length," more articles"):null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.7232af43.chunk.js.map