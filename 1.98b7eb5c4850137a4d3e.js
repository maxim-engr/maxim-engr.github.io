(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{909:function(e,t,n){"use strict";var r=n(17),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,".raptor-forest {\n\tmargin: 10px;\n}\n\n.raptor-forest p {\n\tflex: 0 0 50%;\n}\n\n.raptor-forest h2 {\n\tflex: 1 1 100%;\n\tmin-width: 100%;\n\tmargin-bottom: 20px;\n}",""]),t.a=a},913:function(e,t,n){"use strict";n.r(t);var r,a,o=n(5),c=n.n(o),l=n(11),u=n(15),i=n(16),s=n(23),m=n(22),f=n(20),p=n(0),h=n(24),d=n(907),g=n(906),b=n(40),E=n(21),_=n(35),v=n.n(_),x=n(28),w=n.n(x),O=n(909),k={insert:"head",singleton:!1},A=(w()(O.a,k),O.a.locals,Object(E.c)(r||(r=Object(f.a)(["",""])),b.fadeIn)),j=E.b.div(a||(a=Object(f.a)(["\n  animation: ease-in 0.4s ",";\n"])),A),S=function(e){Object(s.a)(r,e);var t,n=Object(m.a)(r);function r(e){var t;return Object(u.a)(this,r),(t=n.call(this,e)).plantDate=new Date("05/18/2021"),t._timeout=null,t.handleChange=function(e){var n=e.target,r=n.treeAge,a=n.treeAmount,o=n.carbonOffset;t.setState({treeAge:r,treeAmount:a,carbonOffset:o})},t.state={treeAge:0,treeAmount:0,carbonOffset:0},t}return Object(i.a)(r,[{key:"componentDidMount",value:function(){console.log("mount"),this.tick()}},{key:"componentWillUnmount",value:function(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this.setState({exit:!0})}},{key:"tick",value:(t=Object(l.a)(c.a.mark((function e(){var t,n,r,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,!this.readState().exit){e.next=4;break}return e.abrupt("return");case 4:n=(new Date).getTime()-this.plantDate.getTime(),r=Math.floor(n/864e5),this.setState({treeAge:r}),fetch("https://public.ecologi.com/users/raptorfinance/impact").then((function(e){return e.json()})).then((function(e){a.setState({treeAmount:e.trees,carbonOffset:e.carbonOffset})}),(function(e){console.error("Error fetching data from ecologi API",e)})),this._timeout=setTimeout(Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.tick.call(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),6e4);case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){this.readState();var e=this.readProps().t;return p.createElement(j,null,p.createElement("div",{className:"shadow d-flex flex-row align-self-center flex-wrap gradient-card primary raptor-forest"},p.createElement("h2",{className:"flex-fill"},p.createElement("strong",null,e("home.raptor_forest.title"))),p.createElement("p",null,p.createElement(d.a,{i18nKey:"home.raptor_forest.funder"},p.createElement("strong",null,"Funded by: "),p.createElement("span",null,"Raptor Finance"))),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.age")," "),p.createElement(v.a,{value:this.state.treeAge,duration:"1000",formatValue:function(e){return"".concat(Number(e).toFixed(0),"d")}},e("home.raptor_forest.day",{count:this.readState().treeAge}))),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.co2_offset")," "),p.createElement(v.a,{value:this.state.carbonOffset,duration:"1000",formatValue:function(e){return"".concat(Number(e).toFixed(2),"t")}},this.readState().carbonOffset," ",e("home.raptor_forest.tonnes"))),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.species")," "),p.createElement(v.a,{value:"8",duration:"1000",formatValue:function(e){return"".concat(Number(e).toFixed(0))}},"0")),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.tree_amount")," "),p.createElement(v.a,{value:this.state.treeAmount,duration:"1000",formatValue:function(e){return"".concat(Number(parseFloat(e).toFixed(0)).toLocaleString("en",{minimumFractionDigits:0}))}},this.readState().treeAmount)),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.planting_projects")," "),p.createElement(v.a,{value:"2",duration:"1000",formatValue:function(e){return"".concat(Number(e).toFixed(0))}},"0")),p.createElement("p",null,p.createElement("strong",null,e("home.raptor_forest.our_forest")," 🌳: "),p.createElement("span",null,p.createElement("strong",null,p.createElement("a",{className:"title-white",href:"https://ecologi.com/raptorfinance",rel:"noreferrer"},e("home.raptor_forest.click_here")))))))}}]),r}(h.a);t.default=Object(g.a)()(S)}}]);