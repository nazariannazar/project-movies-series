(this.webpackJsonpfrontendreactjs=this.webpackJsonpfrontendreactjs||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/facebook-blue.5ba738e8.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter-blue.24707189.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram-blue.0ab2d96b.svg"},function(e,t,a){e.exports=a.p+"static/media/app-store.0e8d88c0.svg"},function(e,t,a){e.exports=a.p+"static/media/play-store.e017762f.svg"},function(e,t,a){e.exports=a.p+"static/media/windows-store.f0450282.svg"},,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),l=(a(30),a(23)),c=a(1),o=(a(31),a(7)),m=a(9),u=a(8),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("/read/allcategories").then((function(e){if(e.ok)return e.json();null===n.state.categories&&n.setState({error:!0})})).then((function(e){console.log(e),n.state.categories,n.setState({categories:e,Loading:!1})})).catch((function(e){return console.log(e)}))},n.redirect=function(e){return n.props.history.push("/"+e.name_category)},n.render=function(){return console.log(n.state),r.a.createElement("div",{className:"categories ml-5"},n.state.Loading?n.state.waitingMessage:"",n.state.error?n.state.errMessage:"",n.state.categories.map((function(e,t){return r.a.createElement("div",{className:"insertImg ml-4 pt-2 mt-5",onClick:function(){return n.redirect(e)},key:t},r.a.createElement("h4",{className:"text-uppercase  my-5 pt-4"},e.name_category),r.a.createElement("div",{className:"text-capitalize popular-text"},"Popular ",e.name_category))})))},n.state={categories:[],errMessage:"Oups, somthing went ronge ...",waitingMessage:"Loading ...",Loading:!0,error:!1},n}return a}(r.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).redirectToHomesPage=function(){n.props.history.push("/")},n.redirectToSeriesPage=function(){n.props.history.push("/series")},n.componentDidMount=function(){fetch("/read/allmovies").then((function(e){if(e.ok)return e.json();null===n.state.allMovies&&n.setState({errMessage:"Oops, something went wrong ..."})})).then((function(e){console.log(e),null!==n.state.allMovies&&setTimeout((function(){n.setState({waitingMessage:"Loading ..."})}),100),n.setState({allMovies:e})})).catch((function(e){return console.log(e)}))},n.render=function(){var e=n.state.allMovies.map((function(e,t){return r.a.createElement("div",{className:"showmovies mx-0 mb-4",key:t},r.a.createElement("img",{src:e.url_image,alt:"",width:"150"}),r.a.createElement("h6",null,e.title))}));return r.a.createElement("div",{className:"mx-auto mt-5 mb-5"},r.a.createElement("div",{className:"movielist mx-5 d-flex flex-wrap justify-content-around"},e),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:n.redirectToHomesPage},"Home"),r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:n.redirectToSeriesPage},"Series")),r.a.createElement("div",null,r.a.createElement("h1",{className:"margin text-white h1 my-3 py-5"},"Margin")))},n.state={allMovies:[],height:"300"},n}return a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).redirectToHomesPage=function(){n.props.history.push("/")},n.redirectToMoviesPage=function(){n.props.history.push("/movies")},n.componentDidMount=function(){fetch("/read/allseries").then((function(e){if(e.ok)return e.json();null===n.state.allSeries&&n.setState({errMessage:"Oops, something went wrong ..."})})).then((function(e){console.log(e),null!==n.state.allSeries&&setTimeout((function(){n.setState({waitingMessage:"Loading ..."})}),100),n.setState({allSeries:e})})).catch((function(e){return console.log(e)}))},n.render=function(){var e=n.state.allSeries.map((function(e,t){return r.a.createElement("div",{className:"showseries  mx-0 mb-4",key:t},r.a.createElement("img",{src:e.url_image,alt:"",width:"150"}),r.a.createElement("h6",null,e.title))}));return r.a.createElement("div",{className:"mx-auto mt-5 mb-5"},r.a.createElement("div",{className:"serielist mx-5 d-flex flex-wrap justify-content-around"},e),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:n.redirectToHomesPage},"Home"),r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:n.redirectToMoviesPage},"Movies")),r.a.createElement("div",null,r.a.createElement("h1",{className:"margin text-white h1 my-3 py-5"},"Margin")))},n.state={allSeries:[]},n}return a}(r.a.Component),p=(a(32),a(17)),f=a.n(p),v=a(18),E=a.n(v),b=a(19),N=a.n(b),w=a(20),x=a.n(w),y=a(21),k=a.n(y),M=a(22),S=a.n(M);function j(){return r.a.createElement("header",{className:"navigater"},r.a.createElement("div",{className:"nav-logo navbar navbar-dark bg-primary"},r.a.createElement("div",{className:"logo text-white ml-5"},r.a.createElement("h1",{className:""},"DEMO Streaming")),r.a.createElement("div",{className:"login mr-5"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Login"),r.a.createElement("button",{type:"button",className:"btn btn-dark"},"Start your free trial"))),r.a.createElement("div",{className:"header-title text-white bg-dark pt-3 pb-3 text-left"},r.a.createElement("div",{className:"ml-5"},r.a.createElement("h3",{className:"pl-3"},"Popular Titles"))))}function O(){return r.a.createElement("div",{className:"links bg-dark"},r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-dark ml-3 mt-2"},r.a.createElement("a",{className:"nav-link text-white font-weight-bold",href:"#"},"Home"),r.a.createElement("a",{className:"nav-link text-white",href:"#"},"| Terms and Conditions"),r.a.createElement("a",{className:"nav-link text-white",href:"#"},"| Privacy Policy"),r.a.createElement("a",{className:"nav-link text-white",href:"#"},"| Collection Statement"),r.a.createElement("a",{className:"nav-link text-white",href:"#"},"| Help"),r.a.createElement("a",{className:"nav-link text-white",href:"#"},"| Manage Account")),r.a.createElement("div",{className:"text-white-50 d-flex justify-content-start ml-5 mb-4"},"Copyright \xa9 2016 DEMO Streaming All Rights Reserved"),r.a.createElement("div",{className:"socials-and-stores ml-5 mr-5 "},r.a.createElement("div",{className:"social  rounded float-left ml-2"},r.a.createElement("img",{className:"mr-3",src:f.a,alt:"",width:"35",height:"35"}),r.a.createElement("img",{className:"mr-3",src:E.a,alt:"",width:"35",height:"35"}),r.a.createElement("img",{className:"",src:N.a,alt:"",width:"35",height:"35"})),r.a.createElement("div",{className:"play rounded float-right mb-3 mr-2"},r.a.createElement("img",{className:"ml-2",src:x.a,alt:"",width:"130",height:"40"}),r.a.createElement("img",{className:"ml-2",src:k.a,alt:"",width:"130",height:"40"}),r.a.createElement("img",{className:"ml-0",src:S.a,alt:"",width:"130",height:"40"}))))}var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(j,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:g}),r.a.createElement(c.a,{exact:!0,path:"/movies",component:h}),r.a.createElement(c.a,{exact:!0,path:"/series",component:d})),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.f41165bd.chunk.js.map