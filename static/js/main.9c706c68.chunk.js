(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),c=a.n(l),r=(a(15),a(4)),s=a(5),i=a(8),u=a(6),m=a(1),h=a(7),d=(a(16),function(){return o.a.createElement("nav",{className:"Nav"})}),v=function(e){var t=e.query,a=e.onSearchChange,n=e.onBtnSubmit;return o.a.createElement("form",{className:"SearchBox",onSubmit:n},o.a.createElement("input",{className:"input",type:"search",name:"searchfield",placeholder:"title, author...",autoFocus:!0,onChange:a,value:t}),o.a.createElement("button",{type:"submit",className:"search-btn",name:"search-btn"},o.a.createElement("svg",{version:"1.1",id:"lupita-svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 500 500"},o.a.createElement("g",null,o.a.createElement("g",null,o.a.createElement("path",{className:"lupita-path",d:"M332.74,315.35c30.883-33.433,50.15-78.2,50.15-127.5C382.89,84.433,298.74,0,195.04,0S7.19,84.433,7.19,187.85 S91.34,375.7,195.04,375.7c42.217,0,81.033-13.883,112.483-37.4l139.683,139.683c3.4,3.4,7.65,5.1,11.9,5.1s8.783-1.7,11.9-5.1 c6.517-6.517,6.517-17.283,0-24.083L332.74,315.35z M41.19,187.85C41.19,103.133,110.04,34,195.04,34 c84.717,0,153.85,68.85,153.85,153.85S280.04,341.7,195.04,341.7S41.19,272.567,41.19,187.85z"}))))))},b=function(){return o.a.createElement("div",{className:"Default"},o.a.createElement("h3",{className:"temptext top"},"Type your search query above."))},p=function(){return o.a.createElement("div",{className:"notavail"},o.a.createElement("h3",null,"No Cover Available"))},f=function(e){return e.data.items.map(function(e,t){return o.a.createElement("div",{className:"Card",key:e.id},o.a.createElement("div",{className:"book-container"},o.a.createElement("h3",{className:"book-title"},e.volumeInfo.title?e.volumeInfo.title:"Sin T\xedtulo"),o.a.createElement("div",{className:"book-info"},e.volumeInfo.imageLinks?o.a.createElement("img",{className:"book-img",src:e.volumeInfo.imageLinks.thumbnail,alt:"book cover"}):o.a.createElement(p,null),o.a.createElement("div",{className:"book-more"},o.a.createElement("h4",{className:"book-subtext"},e.volumeInfo.subtitle),o.a.createElement("div",{className:"book-desc"},e.volumeInfo.description?e.volumeInfo.description:"Sin Descripci\xf3n")))))})},E=(Object({NODE_ENV:"production",PUBLIC_URL:"/bookworm"}).GBOOKS_API_KEY,function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={query:"",api_url:"https://www.googleapis.com/books/v1/volumes?q=",isLoaded:!1,results:{items:[],kind:"",totalItems:0}},a.handleSearchChange=a.handleSearchChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoaded:!this.state.isLoaded})}},{key:"handleSearchChange",value:function(e){this.setState({query:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.api_url,o=a.query,l=o.replace(/\s/g,"+");e.target.elements.searchfield.value.length>0&&(console.log("".concat(n).concat(l)),fetch("".concat(n).concat(o,"&maxResults=25")).then(function(e){return e.json()}).then(function(e){return t.setState({results:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"BookWorm"),o.a.createElement(d,null)),o.a.createElement(v,{onSearchChange:this.handleSearchChange,onBtnSubmit:this.handleSubmit,query:this.state.query}),this.state.query.length<=0?o.a.createElement(b,null):null,this.state.results.items?o.a.createElement(f,{data:this.state.results}):null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9c706c68.chunk.js.map