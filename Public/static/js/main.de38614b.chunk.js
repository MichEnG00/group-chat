(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(9),c=a(3),r=a(4),l=a(6),i=a(5),o=a(1),u=a.n(o),h=a(8),j=a.n(h),d=(a(15),a(0));function b(){var e=new Date;return("0"+e.getHours()).substr(-2,2)+":"+("0"+e.getMinutes()).substr(-2,2)}var p=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCallbackMessage=function(e){e&&n.setState((function(t){return{allMessage:[].concat(Object(s.a)(t.allMessage),[e])}}))},n.handleCallbackContact=function(e){e&&n.setState({activePeople:e})},n.state={allMessage:[]},n}return Object(r.a)(a,[{key:"render",value:function(){var e;return this.state.allMessage&&(e=Object(d.jsx)(g,{dataParentToChild:this.state.allMessage,activePeople:this.state.activePeople})),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"contacts",children:[" ",Object(d.jsx)(O,{parentCallback:this.handleCallbackContact})," "]}),Object(d.jsx)("div",{className:"chat",children:e}),Object(d.jsx)(v,{parentCallback:this.handleCallbackMessage})]})}}]),a}(u.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onTrigger=function(e){s.props.parentCallback(s.state.value),s.setState({value:""}),e.preventDefault()},s.state={value:""},s.handleChange=s.handleChange.bind(Object(n.a)(s)),s.onTrigger=s.onTrigger.bind(Object(n.a)(s)),s}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),e.preventDefault()}},{key:"handleEnter",value:function(e){"Enter"===e.code&&e.ctrlKey&&(e.preventDefault(),this.props.parentCallback(e.target.value.trim(/(\s|\n|\r)/)),this.setState({value:""}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{id:"form",onSubmit:this.onTrigger,children:[Object(d.jsx)("textarea",{id:"input",placeholder:"Your message",autoComplete:"off",type:"text",value:this.state.value,onChange:this.handleChange,onKeyUp:function(t){return e.handleEnter(t)}}),Object(d.jsx)("button",{id:"sendButton"})]})}}]),a}(u.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={contactList:["Darrel Steward","Ralph Edwards"," Albert Flores","Ronald Richards","Kathryn Murphy"],name:"",activeContacts:[]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.parentCallback(this.state.contactList[0])}},{key:"render",value:function(){return Object(d.jsx)(f,{dataParentToChild:this.state.contactList})}}]),a}(u.a.Component);function f(e){var t=e.dataParentToChild.map((function(e){return Object(d.jsx)(m,{value:e},e)}));return Object(d.jsxs)("ul",{id:"Contacts-List",children:[" ",t," "]})}function m(e){var t=b(),a=e.value.trim(" ")[0].toUpperCase();return Object(d.jsxs)("li",{className:"people",children:[Object(d.jsx)("div",{class:"PeopleImage",children:a}),Object(d.jsx)("div",{className:"PeopleInfo",children:Object(d.jsxs)("span",{children:[Object(d.jsxs)("p",{className:"PeopleName",children:[" ",e.value]}),Object(d.jsxs)("p",{className:"People-Date",children:[" ",t," "]})]})})]})}function g(e){var t=e.dataParentToChild.map((function(t){return Object(d.jsx)(x,{value:t,activePeople:e.activePeople},t)}));return Object(d.jsxs)("ul",{id:"messages",children:[" ",t," "]})}function x(e){var t=b(),a=e.activePeople.trim(" ")[0].toUpperCase();return Object(d.jsxs)("li",{children:[Object(d.jsx)("div",{class:"PeopleImage",children:a}),Object(d.jsxs)("span",{children:[Object(d.jsx)("p",{className:"Message-User item",children:e.activePeople}),Object(d.jsx)("p",{className:"Text item",children:e.value}),Object(d.jsx)("p",{className:"Message-Date",children:t})]})]})}j.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))},15:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.de38614b.chunk.js.map