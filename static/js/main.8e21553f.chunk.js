(this["webpackJsonplayout-alg"]=this["webpackJsonplayout-alg"]||[]).push([[0],{13:function(e,t,a){e.exports=a(37)},18:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(18),a(1)),o=a(2),s=a(4),m=a(3),u=a(12),d=a.n(u),h=a(5),p=a.n(h),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"page-header"})}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderLevel=function(){return e.props.arrayLevel.map((function(e,t){switch(e){case 0:return l.a.createElement("option",{key:t,value:e},"Small");case 1:return l.a.createElement("option",{key:t,value:e},"Medium");default:return l.a.createElement("option",{key:t,value:e},"High")}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return!1===this.props.showForm?null:l.a.createElement("form",{className:"form-inline",onSubmit:function(){return e.props.handleFormClickSubmit()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Item Name",value:this.props.valueItem,onChange:function(t){return e.props.handleFormInputChange(t.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{className:"form-control",value:this.props.levelItem,onChange:function(t){return e.props.handleFormSelectChange(t.target.value)}},this.renderLevel())),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.handleFormClickCancel()}},"Submit"),l.a.createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.props.handleFormClickSubmit()}},"Cancel"))}}]),a}(n.Component),b=[{id:p()(),name:"Mike",point:1.23,level:3,star:3},{id:p()(),name:"Alex",point:45,level:2,star:2},{id:p()(),name:"Christopher",point:0,level:1,star:1},{id:p()(),name:"John",point:10,level:0,star:0},{id:p()(),name:"Aden",point:1.23,level:3,star:3}],f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.index;if(0===a)return l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"text-center"},l.a.createElement("h4",null,"No Item")));var r="",c="";switch(a.level){case 1:r="label label-info",c="Low";break;case 2:r="label label-warning",c="Medium";break;case 3:r="label label-danger",c="High";break;default:r="label label-info",c="Low"}var i="",o="";switch(a.star){case 2:i="bi bi-star-fill",o=l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),l.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})));break;case 3:i="bi bi-star-fill",o=l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),l.a.createElement("svg",{classame:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),l.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})));break;default:i="bi bi-star-fill",o=l.a.createElement("svg",{classame:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))}return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},n),l.a.createElement("td",null,a.name),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",null,a.point)),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",{className:r},c)),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",{className:i},o)),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm marginR5",onClick:function(){return e.props.handleEditItem(n,a)}}," Edit"),l.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return e.props.handleShowAlert(a)}},"Delete")))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderLevel=function(){return e.props.arrayLevel.map((function(e,t){switch(e){case 0:return l.a.createElement("option",{key:t,value:e},"Low");case 1:return l.a.createElement("option",{key:t,value:e},"Medium");default:return l.a.createElement("option",{key:t,value:e},"High")}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},this.props.indexEdit),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:this.props.nameEdit,onChange:function(t){return e.props.handleEditInputChange(t.target.value)}})),l.a.createElement("td",{className:"text-center"},l.a.createElement("select",{className:"form-control",value:this.props.levelEdit,onChange:function(t){return e.props.handleEditSelectChange(t.target.value)}},this.renderLevel())),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-default btn-sm marginR5",onClick:function(){return e.props.handleEditClickCancel()}},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return e.props.handleEditClickSubmit()}},"Save")))}}]),a}(n.Component),w=(a(36),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).renderItem=function(){var e=n.state,t=e.items,a=e.idEdit,r=e.indexEdit,c=e.nameEdit,i=e.levelEdit,o=e.arrayLevel;return console.log(t),0===t.length?l.a.createElement(f,{item:0}):t.map((function(e,t){return e.id===a?l.a.createElement(g,{key:t,indexEdit:r,nameEdit:c,levelEdit:i,arrayLevel:o,handleEditSelectChange:n.handleEditSelectChange,handleEditClickSubmit:n.handleEditClickSubmit}):l.a.createElement(f,{index:t+1,item:e,key:e.id,handleShowAlert:n.handleShowAlert,handleEditItem:function(){return console.log("edit item")}})}))},n.handleShowAlert=function(e){n.setState({showAlert:!0,titleAlert:e.name,idAlert:e.id})},n.handleDeleteItem=function(){var e=n.state,t=e.idAlert,a=e.items;if(a.length>0){for(var l=0;l<a.length;l++)if(a[l].id===t){a.splice(l,1),n.setState({items:a,showAlert:!1});break}console.log(a)}},n.handleEditItem=function(e,t){n.setState({indexEdit:e,idEdit:t.id,nameEdit:t.name,levelEdit:t.level})},n.handleEditSelectChange=function(e){n.setState({levelEdit:e})},n.handleEditClickSubmit=function(){var e=n.state,t=e.items,a=e.idEdit,l=e.nameEdit,r=e.levelEdit;if(t.length>0)for(var c=0;c<t.length;c++)if(t[c].id===a){t[c].name=l,t[c].level=+r;break}n.setState({idEdit:""})},n.handleFormSelectChange=function(e){n.setState({levelItem:e})},n.handleFormClickCancel=function(){n.setState({valueItem:"",levelItem:0})};var r=[];if(b.length>0)for(var c=0;c<b.length;c++)-1===r.indexOf(b[c].level)&&r.push(b[c].level);return r.sort((function(e,t){return e-t})),n.state={items:b,showAlert:!1,titleAlert:"",idAlert:"",indexEdit:0,idEdit:"",nameEdit:"",levelEdit:0,arrayLevel:r,showForm:!1,valueItem:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{showCancelButton:!0,show:this.state.showAlert,title:"Delete Item?",text:this.state.titleAlert,onOutsideClick:function(){return e.setState({showAlert:!1})},onEscapeKey:function(){return e.setState({showAlert:!1})},onCancel:function(){return e.setState({showAlert:!1})},onConfirm:function(){return e.handleDeleteItem()}}),l.a.createElement(E,null),l.a.createElement("div",{className:"row marginB10"},l.a.createElement("div",{className:"col-md-offset-7 col-md-5"},l.a.createElement(v,{showForm:this.state.showForm,arrayLevel:this.state.arrayLevel,valueItem:this.state.valueItem,handleFormSelectChange:this.handleFormSelectChange,handleFormClickCancel:this.handleFormClickCancel}))),l.a.createElement("div",{className:"panel panel-success"},l.a.createElement("div",{className:"panel-heading"},"Stage1"),l.a.createElement("table",{className:"table table-hover",style:{backgroundColor:"white"}},l.a.createElement("thead",{style:{backgroundColor:"#0077cc",color:"white"}},l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"10%"},className:"text-center"},"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{style:{width:"15%"},className:"text-center"},"Point"),l.a.createElement("th",{style:{width:"15%"},className:"text-center"},"Level"),l.a.createElement("th",{style:{width:"15%"},className:"text-center"},"star"),l.a.createElement("th",{style:{width:"15%"}},"Action"))),l.a.createElement("tbody",null,this.renderItem()))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8e21553f.chunk.js.map