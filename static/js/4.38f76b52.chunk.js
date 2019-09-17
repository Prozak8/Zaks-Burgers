(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(105),u=n.n(l);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:u.a.Input},i.a.createElement("label",{className:u.a.Label},e.label),t)}},105:function(e,t,n){e.exports={Input:"Input_Input__r54YH",Label:"Input_Label__3P5iu",InputElement:"Input_InputElement__19up3",Invalid:"Input_Invalid__2zoGC"}},108:function(e,t,n){e.exports={Auth:"Auth_Auth__LqS5W",Input:"Auth_Input__3dKvY"}},110:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n(5),l=n(6),u=n(8),r=n(7),o=n(9),c=n(0),s=n.n(c),p=n(14),h=n(99),d=n(34),m=n(104),v=n(42),g=n(108),f=n.n(g),b=n(15),I=n(3),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"John@smith.com"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"********"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var i=Object(I.b)(n.state.controls,Object(a.a)({},t,Object(I.b)(n.state.controls[t],{value:e.target.value,valid:Object(I.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:i})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return s.a.createElement(m.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=s.a.createElement(v.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(h.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:f.a.Auth},l,i,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(d.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(d.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(c.Component);t.default=Object(p.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}})(E)}}]);
//# sourceMappingURL=4.38f76b52.chunk.js.map