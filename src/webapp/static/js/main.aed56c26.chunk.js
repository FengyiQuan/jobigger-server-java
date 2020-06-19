(this.webpackJsonpjobigger=this.webpackJsonpjobigger||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),o=(a(32),a(33),a(2)),c=a(3),i=a(5),m=a(4),u=a(1),p=a(7),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={keyword:"",role:"VISITOR",username:"",loggedIn:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profile",{method:"GET",credentials:"include"}).then((function(e){return e.json()})).catch((function(t){return e.setState({role:"visitor"})})).then((function(t){t&&e.setState({role:t.role,username:t.username,loggedIn:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row",id:"cover"},r.a.createElement("form",null,r.a.createElement("div",{className:"tb"},r.a.createElement("div",{className:"td"},r.a.createElement("input",{value:this.state.keyword,onChange:function(t){return e.setState({keyword:t.target.value})},type:"text",placeholder:"Search",className:"none-outline searchInput"})),r.a.createElement("div",{className:"td",id:"s-cover"},r.a.createElement(u.b,{to:"/table/jobs?keyword=".concat(this.state.keyword)},r.a.createElement("button",{className:"searchBtn none-outline",type:"submit"},r.a.createElement("div",{id:"s-circle"}),r.a.createElement("span",{className:"searchSpan"}))))))),r.a.createElement("div",{className:"row float-right "},r.a.createElement(u.b,{to:"/PROTOTYPE",className:"home-link pr-5"},"WIKI"),!this.state.loggedIn&&r.a.createElement(u.b,{to:"/login",className:"home-link pr-5"},"Sign In"),!this.state.loggedIn&&r.a.createElement(u.b,{to:"/register",className:"home-link pr-5"},"Sign Up"),this.state.loggedIn&&r.a.createElement(u.b,{to:"/profile",className:"home-link pr-5"},"Signed in as ".concat(this.state.username)))))}}]),a}(r.a.Component),h=function(){function e(){var t=this;Object(o.a)(this,e),this.url="https://api.adzuna.com/v1/api/jobs/gb/search/",this.app_id=28179437,this.app_key="f9dea5dad6f8a1a0f33d402572c8d3b1",this.searchJobs=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(t.url+a,"?app_id=").concat(t.app_id,"&app_key=").concat(t.app_key,"&what=").concat(e,"&content-type=application/json")).then((function(e){return e.json()}))}}return Object(c.a)(e,null,[{key:"getInstance",value:function(){return null==e.myInstance&&(e.myInstance=new e),this.myInstance}}]),e}();h.myInstance=null;var E=function(e){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},b=function(e){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/".concat(e)).then((function(e){return e.json()})).catch((function(e){}))},f=function e(t,a){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/".concat(a,"/wishlist/").concat(t),{method:"POST",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(n){return E(t),e(t,a)}))},v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addToWishList=function(){return b(n.state.job.id)?E({jobId:n.props.job.id,jobName:n.props.job.title}).then((function(){return f(n.state.job.id,n.props.username)})):f(n.state.job.id,n.props.username)},n.state={job:n.props.job},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.state.job.title.replace(/(<([^>]+)>)/gi,"")),r.a.createElement("td",{className:"d-none d-sm-table-cell"},this.state.job.company.display_name),r.a.createElement("td",{className:"d-none d-md-table-cell"},this.state.job.location.display_name),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/detail/".concat(this.state.job.id)},r.a.createElement("button",{className:"btn btn-primary",onClick:this.ok},r.a.createElement("i",{className:"fa fa-angle-double-right"}))),"JOB_SEEKER"===this.props.type&&r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.addToWishList()}},r.a.createElement("i",{className:"fa fa-heart"}))))}}]),a}(r.a.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,0!==this.props.jobs.length&&r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",{className:"d-none d-sm-table-cell"},"Company"),r.a.createElement("th",{className:"d-none d-md-table-cell"},"Location"),r.a.createElement("th",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn",onClick:function(){return e.props.setLayout("grid")}},r.a.createElement("i",{className:"fa fa-th pr-2"})),r.a.createElement("button",{className:"btn"},r.a.createElement("i",{className:"fa fa-sort"})))))),r.a.createElement("tbody",null,this.props.jobs.map((function(t){return r.a.createElement(v,{job:t,key:t.id,type:e.props.type,username:e.props.username})})))))}}]),a}(r.a.Component),N=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Sorry, your search did not match any documents."))},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addToWishList=function(){return b(n.state.job.id)?E({jobId:n.props.job.id,jobName:n.props.job.title}).then((function(){return f(n.state.job.id,n.props.username)})):f(n.state.job.id,n.props.username)},n.state={job:n.props.job},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2014/11/18/20/27/elections-536656_1280.png",className:"card-img-top",alt:this.state.job.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(u.b,{to:"/detail/".concat(this.state.job.id)},this.state.job.title.replace(/(<([^>]+)>)/gi,""))),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},this.state.job.company.display_name)),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},this.state.job.location.display_name)),"JOB_SEEKER"===this.props.type&&r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.addToWishList()}},r.a.createElement("i",{className:"fa fa-heart"})))))}}]),a}(r.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,0!==this.props.jobs.length&&r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",{className:"d-none d-sm-table-cell"},"Company"),r.a.createElement("th",{className:"d-none d-md-table-cell"},"Location"),r.a.createElement("th",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn",onClick:function(){return e.props.setLayout("table")}},r.a.createElement("i",{className:"fa fa-th pr-2"})),r.a.createElement("button",{className:"btn"},r.a.createElement("i",{className:"fa fa-sort"}))))))),r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6"},this.props.jobs.map((function(t){return r.a.createElement(y,{job:t,key:t.id,type:e.props.type,username:e.props.username})})))))}}]),a}(r.a.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={layout:e.props.match.params.layout,page:1,jobs:[],newCourseTitle:"New Title",count:1,type:"visitor",username:""},e.getSearchResult=function(){var t=e.props.location.search.split("=").pop();h.getInstance().searchJobs(t,e.state.page).then((function(t){return e.setState({jobs:t.results,count:t.count})}))},e.setLayout=function(t){e.props.history.push("/".concat(t,"/jobs").concat(e.props.location.search))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getSearchResult(),fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profile",{method:"GET",credentials:"include"}).then((function(e){return e.json()})).catch((function(e){})).then((function(t){t&&e.setState({type:t.role,username:t.username})}))}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.layout!==this.props.match.params.layout?this.setState({layout:this.props.match.params.layout}):t.page!==this.state.page&&this.getSearchResult()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,0===this.state.count&&r.a.createElement(N,null),"table"===this.state.layout&&r.a.createElement(g,{jobs:this.state.jobs,type:this.state.type,setLayout:this.setLayout,username:this.state.username}),"grid"===this.state.layout&&r.a.createElement(j,{jobs:this.state.jobs,type:this.state.type,setLayout:this.setLayout,username:this.state.username}),0!==this.state.count&&r.a.createElement("div",null,r.a.createElement("div",null,"Current: ",this.state.page),1!==this.state.page&&r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.setState({page:1===e.state.page?e.state.page:e.state.page-1})}},"Previous Page"),this.state.count-10*this.state.page>=10&&r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.setState({page:e.state.page+1})}},"Next Page")),r.a.createElement(u.b,{className:"btn btn-primary",to:"/"},"Back"))}}]),a}(r.a.Component),k=a(18),O=a(19),S="https://cs4550-20su1-team2-jobigger.herokuapp.com",I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={editing:!1,text:n.props.review.text},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pl-area pl-show-box"},r.a.createElement("div",{className:"pl-area-userpic"},r.a.createElement("img",{className:"pl-userpic",src:"https://ae01.alicdn.com/kf/H596671506b9243b7abf3d7c95edda908B.png",alt:"review"})),r.a.createElement("div",{className:"pl-area-post"},r.a.createElement("div",{className:"pl-show-title"},r.a.createElement(u.b,{className:"review-username",to:"/profile/".concat(this.props.review.username)},this.props.review.username)),!this.state.editing&&r.a.createElement("div",{className:"pl-show-saytext"},this.props.review.text),this.state.editing&&r.a.createElement("textarea",{value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},className:"form-control"}),r.a.createElement("div",{className:"pl-show-tools"},("ADMIN"===this.props.role||this.props.review.username===this.props.currentUser)&&r.a.createElement("span",null,!this.state.editing&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn",onClick:function(){return e.setState({editing:!0})}},r.a.createElement("i",{className:"fa fa-pencil"}),r.a.createElement("span",null)),r.a.createElement("button",{className:"btn",onClick:function(){return e.props.deleteReviewById(e.props.review.reviewId)}},r.a.createElement("i",{className:"fa fa-trash"}),r.a.createElement("span",null))),this.state.editing&&r.a.createElement("button",{className:"btn",onClick:function(){e.props.updateReview(e.props.review.reviewId,{reviewId:e.props.review.reviewId,text:e.state.text,jobId:e.props.review.jobId,username:e.props.review.username}).then((function(){return e.setState({editing:!1})}))}},r.a.createElement("i",{className:"fa fa-check"}),r.a.createElement("span",null))),r.a.createElement("a",{className:"pl-reply"},"Reply"))),r.a.createElement("div",{className:"pl-clr"}))}}]),a}(r.a.Component),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).equal=function(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0},n.deleteReviewById=function(e){return function(e){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/reviews/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(t){return n.setState((function(t){return{reviews:t.reviews.filter((function(t){return t.reviewId!==e}))}}))}))},n.updateReview=function(e,t){return function(e,t){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/reviews/".concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))}(e,t).then((function(a){return n.setState((function(a){return{reviews:a.reviews.map((function(a){return a.reviewId===e?t:a}))}}))}))},n.state={editing:!1,username:"",text:"",role:"VISITOR",reviews:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(S,"/api/profile"),{method:"POST",credentials:"include"}).then((function(e){return e.json()})).then((function(t){t?e.setState({username:t.username,role:t.role}):e.props.history.push("/")})),this.props.findReviewForJob(this.props.params.id)}},{key:"componentDidUpdate",value:function(e,t,a){this.state.reviews!==t.reviews&&this.props.findReviewForJob(this.props.params.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"REVIEWS"),"VISITOR"===this.state.role&&r.a.createElement(u.b,{to:"/login",className:"btn btn-warning btn-lg"},"Login To Write Review"),"VISITOR"!==this.state.role&&r.a.createElement("button",{className:"btn btn-warning btn-lg",onClick:function(){return e.setState({editing:!e.state.editing})}},"Write Review"),this.state.editing&&r.a.createElement("div",{className:"pl-area"},r.a.createElement("div",{className:"pl-area-userpic"},r.a.createElement("img",{className:"pl-userpic",src:"https://ae01.alicdn.com/kf/H596671506b9243b7abf3d7c95edda908B.png",alt:"review"})),r.a.createElement("div",{className:"pl-area-post"},r.a.createElement("div",{className:"pl-post"},r.a.createElement("div",{className:"pl-textarea"},r.a.createElement("textarea",{className:"pl-post-word",placeholder:"Write your review!! ",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})}})),r.a.createElement("div",{className:"pl-tools"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"pl-icon icon-face"})),r.a.createElement("li",null,r.a.createElement("span",{className:"pl-icon icon-img"})),r.a.createElement("li",{className:"pl-tools-lastchild"},r.a.createElement("button",{className:"pl-submit-btn",id:"pl-submit-btn-main",onClick:function(){e.props.createReview(e.props.params.id,e.state.username,{jobId:e.props.params.id,username:e.state.username,text:e.state.text}),e.setState({reviews:[].concat(Object(O.a)(e.state.reviews),[{jobId:e.props.params.id,username:e.state.username,text:e.state.text}]),editing:!1,text:""})}},"Submit"))))))),r.a.createElement("div",{className:"pl-clr",id:"pl-start"}),r.a.createElement("div",{className:"pl-title"},"New Review"),this.props.reviews.map((function(t){return r.a.createElement(I,{review:t,key:"review".concat(t.reviewId),currentUser:e.state.username,role:e.state.role,deleteReviewById:e.deleteReviewById,updateReview:e.updateReview})}))))}}]),a}(r.a.Component),C=Object(k.b)((function(e,t){return{reviews:e.ReviewReducer.reviews}}),(function(e){return{findReviewForJob:function(t){var a;(a=t,fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/".concat(a,"/reviews")).then((function(e){return e.json()}))).then((function(t){return e({type:"FIND_REVIEWS_FOR_JOB",actualReviews:t})}))},findReviewByUsername:function(t){(function(e){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profiles/".concat(e,"/reviews")).then((function(e){return e.json()}))})(t).then((function(t){return e({type:"FIND_REVIEW_BY_USERNAME",actualReviews:t})}))},createReview:function(t,a,n){(function(e,t,a){return fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/".concat(e,"/reviews/").concat(t),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}))})(t,a,n).then((function(t){return e({type:"CREATE_REVIEW",newReview:t})}))}}}))(_),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={job:{},location:{},category:{},company:{}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getInstance().searchJobs(this.props.match.params.id).then((function(t){return e.setState({job:t.results[0]})})).then((function(){return e.setState({location:e.state.job.location})})).then((function(){return e.setState({category:e.state.job.category})})).then((function(){return e.setState({company:e.state.job.company})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"job-detail"},r.a.createElement("div",{className:"jumbotron px-5"},r.a.createElement("h1",{className:"display-4"},this.state.job.title),r.a.createElement("h2",{className:"lead form-group row"},r.a.createElement("span",{className:"col-sm-6"},r.a.createElement("i",{className:"fa fa-building pr-3"}),this.state.company.display_name),r.a.createElement("span",{className:"col-sm-6"},r.a.createElement("i",{className:"fa fa-map-marker pr-3"}),this.state.location.display_name)),r.a.createElement(u.b,{className:"btn btn-primary",to:"/"},"Back To Search")),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Title"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.title)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Description"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.description)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Salary"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.salary_min,this.state.job.salary_max)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Contract time"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.contract_time)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Category"),r.a.createElement("span",{className:"col-sm-8"},this.state.category.label)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"Created by"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.created)),r.a.createElement("div",{className:"form-group row px-5"},r.a.createElement("span",{className:"col-sm-4"},"ID"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.id)),r.a.createElement(C,this.props.match))}}]),a}(r.a.Component),R=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={job:{salary_is_predicted:"1",description:" Bike Courier   Get a taste of freedom on the road with the UK's largest food delivery network.   Become a self-employed Bike Courier and discover a feast of flexible opportunities at Just Eat.   Whether you're a student trying to make some extra cash, or have a bicycle and are looking to get on the road, this is a great opportunity for you to boost your income (and work on your calf muscles too). You can work weekdays or weekends, daytime or evenings, a full schedule or bits here and there - t\u2026",adref:"eyJhbGciOiJIUzI1NiJ9.eyJzIjoiWEVFa29pS2g2aEdrYXV3VDM3TV9UZyIsImkiOiIxMTk5MDc5NTcxIn0.qg_tl0DG11d-Ymuled_TqKFurrUcpbpAZ96HI3xcf_E",salary_min:24565.21,latitude:51.270302,location:{__CLASS__:"Adzuna::API::Response::Location",display_name:"Maidstone, Kent",area:["UK","South East England","Kent","Maidstone"]},salary_max:24565.21,__CLASS__:"Adzuna::API::Response::Job",company:{display_name:"Just Eat",__CLASS__:"Adzuna::API::Response::Company"},title:"Bike Courier",contract_type:"contract",id:"1199079571",contract_time:"part_time",longitude:.523841,redirect_url:"https://www.adzuna.co.uk/jobs/land/ad/1199079571?se=XEEkoiKh6hGkauwT37M_Tg&utm_medium=api&utm_source=28179437&v=F064F35DBF936B6FE6D9EE7FB01F4EC8C3C9EAC1",created:"2019-07-04T10:36:07Z",category:{__CLASS__:"Adzuna::API::Response::Category",tag:"other-general-jobs",label:"Other/General Jobs"}}},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"wiki"),r.a.createElement(u.b,{to:"/"},"Back"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://developer.adzuna.com/docs/search"},"Azuna"),r.a.createElement("ul",null,r.a.createElement("li",null,"job search api based on job keyword and location"))),r.a.createElement("li",null,"Search criteria",r.a.createElement("ul",null,r.a.createElement("li",null,"for now just type keyword for desired job position"),r.a.createElement("li",null,"the keyword also supports the location when it is provided in searchbar"))),r.a.createElement("li",null,"example query:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"keyword: software"),r.a.createElement("ul",null,r.a.createElement("li",null,"would query jobs on software and json containes raw data, then it is parsed")),r.a.createElement("ul",null,r.a.createElement("li",null,'keyword: England, a subset of a returned json would be "area": [ "UK", "North East England" ]')),r.a.createElement("ul",null,r.a.createElement("li",null,"the summary result would be a list of brief information: company, title, and location"),r.a.createElement("li",null,"the detailed page would provide additional information like salary, description with url of /_id example: ",r.a.createElement(u.b,{to:"/detail/1533798912"},"Example Detailed page")),r.a.createElement("li",null," One example here is the keyword search for software to make a brief joblist is:",r.a.createElement(u.b,{to:"/table/jobs?keyword=software"},"Example Job list")),r.a.createElement("li",null,"a detailed page example would rendered as following"),r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},this.state.job.title),r.a.createElement("h2",{className:"lead form-group row"},r.a.createElement("span",{className:"col-sm-6"},r.a.createElement("i",{className:"fa fa-building pr-3"}),this.state.job.company.display_name),r.a.createElement("span",{className:"col-sm-6"},r.a.createElement("i",{className:"fa fa-map-marker pr-3"}),this.state.job.location.display_name)),r.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."),r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"#",role:"button"},"Learn more")),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Title"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.title)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Description"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.description)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Salary"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.salary_min,this.state.job.salary_max)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Contract time"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.contract_time)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Category"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.category.label)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"Created by"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.created)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("span",{className:"col-sm-4"},"ID"),r.a.createElement("span",{className:"col-sm-8"},this.state.job.id)))))))))}}]),a}(r.a.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).login=function(){fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/login",{body:JSON.stringify({username:n.state.username,password:n.state.password}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).catch((function(e){n.props.history.push("/")})).then(n.props.history.push("/profile"))},n.state={username:"",password:"",loginStatus:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"sign",align:"center"},"Sign in"),r.a.createElement("form",{className:"form1"},r.a.createElement("input",{className:"login-input",type:"text",align:"center",placeholder:"Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{className:"login-input",type:"password",align:"center",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"submit",onClick:this.login},"Login"),r.a.createElement("div",{className:"forgot",align:"center"},r.a.createElement("a",{className:"login-link",href:"#"},"Forgot Password?")),r.a.createElement("div",{className:"forgot",align:"center"},r.a.createElement(u.b,{className:"login-link",to:"/register"},"Register"))))}}]),a}(r.a.Component),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",error:null},e.register=function(){fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/register",{body:JSON.stringify({username:e.state.username,password:e.state.password,role:"JOB_SEEKER"}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e.props.history.push("/profile")}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"sign",align:"center"},"Register"),r.a.createElement("form",{className:"form1"},this.state.error&&r.a.createElement("div",{className:"alert alert-danger"},this.state.error),r.a.createElement("input",{className:"login-input",type:"text",align:"center",placeholder:"Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{className:"login-input",type:"password",align:"center",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"submit",onClick:this.register},"Sign Up"),r.a.createElement("div",{className:"forgot",align:"center"},r.a.createElement(u.b,{className:"login-link",to:"/login"},"Login")),r.a.createElement("div",{className:"forgot",align:"center"},r.a.createElement(u.b,{className:"login-link",to:"/"},"Back"))))}}]),a}(r.a.Component),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",profileUser:"",password:"",email:"",dob:"",type:"",currentTab:"OVERVIEW",wishList:[]},e.isLookingForOtherProfile=function(){return e.state.username!==e.state.profileUser},e.findProfileByCurrentUser=function(){fetch("http://localhost:8080/api/profile",{headers:{"content-type":"application/json"},method:"GET",credentials:"include"}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(t){t?e.setState({username:t.username,profileUser:t.username,password:t.password,email:t.email,dob:t.dob,type:t.role,wishList:t.jobs}):window.location.reload()}))},e.findProfileByUsername=function(){fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profile",{headers:{"content-type":"application/json"},method:"GET",credentials:"include"}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(t){t&&e.setState({username:t.username})})),fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profile/".concat(e.props.match.params.username),{headers:{"content-type":"application/json"},method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){t&&e.setState({profileUser:t.username,password:t.password,email:t.email,dob:t.dob,type:t.role,wishList:t.jobs})}))},e.update=function(){fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profile",{body:JSON.stringify({username:e.state.username,password:e.state.password,email:e.state.email,dob:e.state.dob,role:e.state.type}),headers:{"content-type":"application/json"},method:"PUT",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e.setState({username:t.username,password:t.password,email:t.email,dob:t.dob,type:t.role})}))},e.logout=function(){fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/logout",{method:"POST",credentials:"include"}).then((function(t){return e.props.history.push("/")}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){void 0===this.props.match.params.username?this.findProfileByCurrentUser():this.findProfileByUsername()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row profile"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"profile-sidebar"},r.a.createElement("div",{className:"profile-usertitle"},r.a.createElement("div",{className:"profile-usertitle-name"},this.state.profileUser),r.a.createElement("div",{className:"profile-usertitle-job"},this.state.type)),r.a.createElement("div",{className:"profile-userbuttons"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-sm"},"Follow"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm"},"Message")),r.a.createElement("div",{className:"profile-usermenu"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item ".concat("OVERVIEW"===this.state.currentTab?"profile-usermenu-active":"")},r.a.createElement("a",{onClick:function(){return e.setState({currentTab:"OVERVIEW"})}},r.a.createElement("i",{className:"fa fa-home"}),"Overview")),!this.isLookingForOtherProfile()&&r.a.createElement("li",{className:"list-group-item ".concat("SETTINGS"===this.state.currentTab?"profile-usermenu-active":"")},r.a.createElement("a",{onClick:function(){return e.setState({currentTab:"SETTINGS"})}},r.a.createElement("i",{className:"fa fa-user"}),"Account Setting")),r.a.createElement("li",{className:"list-group-item ".concat("WISH_LIST"===this.state.currentTab?"profile-usermenu-active":"")},r.a.createElement("a",{onClick:function(){return e.setState({currentTab:"WISH_LIST"})}},r.a.createElement("i",{className:"fa fa-calendar-check-o"}),"Wish List")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(u.b,{to:"/"},r.a.createElement("i",{className:"fa fa-backward"}),"Back")),!this.isLookingForOtherProfile()&&r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{onClick:this.logout},r.a.createElement("i",{className:"fa fa-backward"}),"Logout")))))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"profile-content"},("SETTINGS"===this.state.currentTab||"OVERVIEW"===this.state.currentTab)&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-2 col-form-label"},"Username:"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{value:this.state.profileUser,onChange:function(t){return e.setState({profileUser:t.target.value})},className:"form-control",title:"Username",readOnly:!0}))),!this.isLookingForOtherProfile()&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-2 col-form-label"},"Password:"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"form-control",title:"Current Password",readOnly:"OVERVIEW"===this.state.currentTab}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-2 col-form-label"},"Email:"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"email",value:this.state.email||"",onChange:function(t){return e.setState({email:t.target.value})},className:"form-control",title:"email",readOnly:"OVERVIEW"===this.state.currentTab})))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-2 col-form-label"},"Date of Birth:"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"date",value:null===this.state.dob?new Date:this.state.dob,onChange:function(t){e.setState({dob:t.target.value})},className:"form-control",title:"dob",readOnly:"OVERVIEW"===this.state.currentTab}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-2 col-form-label"},"Role:"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("select",{className:"form-control",value:null===this.state.type?"EMPLOYEE":this.state.type,onChange:function(t){return e.setState({type:t.target.value})},disabled:"OVERVIEW"===this.state.currentTab},r.a.createElement("option",{value:"EMPLOYEE"},"Employee"),r.a.createElement("option",{value:"JOB_SEEKER"},"Job Seeker"),r.a.createElement("option",{value:"ADMIN"},"Admin")))),"SETTINGS"===this.state.currentTab&&r.a.createElement("button",{onClick:function(){return e.update()},className:"btn btn-primary float-right"},"Update")),"WISH_LIST"===this.state.currentTab&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},this.state.wishList.map((function(t){return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:"".concat(e.state.profileUser,"wishList").concat(t.jobId)},r.a.createElement(u.b,{to:"/detail/".concat(t.jobId)},t.jobName),!e.isLookingForOtherProfile()&&r.a.createElement("span",{className:"badge badge-pill"},r.a.createElement("button",{className:"btn",onClick:function(){return(a=t.jobId,n=e.state.username,fetch("https://cs4550-20su1-team2-jobigger.herokuapp.com/api/".concat(n,"/wishlist/").concat(a),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))).then((function(a){return e.setState((function(e){return{wishList:e.wishList.filter((function(e){return t!==e}))}}))}));var a,n}},r.a.createElement("i",{className:"fa fa-trash"}))))})))))))}}]),a}(r.a.Component),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{path:"/login",exact:!0,component:x}),r.a.createElement(p.a,{path:"/register",exact:!0,component:L}),r.a.createElement(p.a,{path:"/profile",exact:!0,component:P}),r.a.createElement(p.a,{path:"/profile/:username",exact:!0,component:P}),r.a.createElement(p.a,{path:"/",exact:!0,component:d}),r.a.createElement(p.a,{path:"/PROTOTYPE",exact:!0,component:R}),r.a.createElement(p.a,{path:"/:layout/jobs",exact:!0,component:w}),r.a.createElement(p.a,{path:"/detail/:id",exact:!0,component:T})))}}]),a}(r.a.Component);var U=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(15),W=a(12),J={reviews:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_REVIEW":return{reviews:e.reviews.filter((function(e){return t.reviewId!==e.reviewId}))};case"FIND_REVIEWS_FOR_JOB":return Object(W.a)(Object(W.a)({},e),{},{reviews:t.actualReviews});case"CREATE_REVIEW":return{reviews:[].concat(Object(O.a)(e.reviews),[t.newReview])};case"FIND_REVIEW":return Object(W.a)(Object(W.a)({},e),{},{reviews:t.reviews});case"UPDATE_REVIEW":return Object(W.a)(Object(W.a)({},e),{},{reviews:e.reviews.map((function(e){return e.reviewId===t.updatedReview._id?t.updatedReview:e}))});default:return e}},A=Object(V.b)({ReviewReducer:D}),F=Object(V.c)(A);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{store:F},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.aed56c26.chunk.js.map