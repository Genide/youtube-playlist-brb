(this["webpackJsonpyoutube-playlist-brb"]=this["webpackJsonpyoutube-playlist-brb"]||[]).push([[0],{112:function(e,t,a){e.exports=a(138)},117:function(e,t,a){},118:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(117),a(58)),s=a(96),u=a(171),c=(a(118),a(97)),p=a(22),d=a(27),m=a(10),b=a.n(m),h=a(20),g=a(33),f=a(28),v=a(174),y=a(163),x=a(168),E=a(100),k=a(170);function V(e){var t=e.playlist,a=e.style,n=Object(f.a)();return t&&t.snippet?r.a.createElement(y.a,{style:Object(p.a)({},a,{display:"flex",color:n.palette.text.primary}),elevation:3},r.a.createElement(v.a,null,r.a.createElement("img",{src:t.snippet.thumbnails.default.url,alt:"thumbnail"})),r.a.createElement(v.a,{style:{paddingLeft:"1em"}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Playlist Title"),r.a.createElement("td",null,t.snippet.title)),r.a.createElement("tr",null,r.a.createElement("th",null,"Channel Name"),r.a.createElement("td",null,t.snippet.channelTitle)),r.a.createElement("tr",null,r.a.createElement("th",null,"Playlist Description"),r.a.createElement("td",{style:{textOverflow:"initial"}},t.snippet.description)))))):r.a.createElement("div",{style:Object(p.a)({},a)})}var w=a(71);function O(e){for(var t,a,n=e.length,r=Object(w.a)(e);0!==n;)a=Math.floor(Math.random()*n),t=r[n-=1],r[n]=r[a],r[a]=t;return r}function P(e,t){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(b.a.mark((function e(t,a){var n,r,i,o,l,s,u=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]&&u[2],r=new URL("https://www.googleapis.com/youtube/v3/playlists"),i="id",n&&(i+=",snippet"),r.searchParams.append("part",i),r.searchParams.append("id",t),r.searchParams.append("key",a),e.next=9,fetch(r.href,{headers:{Accept:"application/json"}});case 9:return o=e.sent,e.next=12,o.json();case 12:return l=e.sent,s=l.items.find((function(e){return e.id===t})),e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","Missing image link");case 2:return e.prev=2,e.next=5,fetch(t);case 5:if(200===(a=e.sent).status){e.next=8;break}return e.abrupt("return","Unable to load image");case 8:return e.next=10,a.blob();case 10:if(n=e.sent,["image/png","image/jpeg","image/gif"].includes(n.type)){e.next=15;break}return console.error(n),e.abrupt("return","This is not a link for an image");case 15:return e.abrupt("return","");case 18:return e.prev=18,e.t0=e.catch(2),e.abrupt("return","Unable to load image");case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}var T=a(12),L=a(89),_=a.n(L),S=a(177),M=a(166),B=a(167),Y=a(88),R=a.n(Y);function A(e){var t=e.onJumpToBrb,a=e.style,n=e.open,i=e.onClose;return r.a.createElement(v.a,{style:Object(p.a)({},a)},r.a.createElement(S.a,{open:n,onClose:i},r.a.createElement(M.a,null,"Link has been created"),r.a.createElement(B.a,null,r.a.createElement(v.a,null,"The link has been copied to your clipboard. Click the button below to go to your new BRB page."),r.a.createElement("br",null),r.a.createElement(x.a,{variant:"outlined",style:{float:"right"},onClick:t,startIcon:r.a.createElement(R.a,null)},"JUMP TO BRB"))))}A.defaultProps={open:!1,onJumpToBrb:function(){}};var D=a(172);function F(e){var t,a=Object(g.c)(e),n=Object(d.a)(a,2),i=n[0],o=n[1],l=Object(p.a)({},e.textFieldProps);return l.error=!!o.error,l.helperText=null!==(t=o.error)&&void 0!==t?t:l.helperText,r.a.createElement(D.a,Object.assign({},i,l))}var z=a(169),K=a(176);function W(e){var t=Object(g.c)(e),a=Object(d.a)(t,1)[0];return r.a.createElement(z.a,Object.assign({},e.FormControlLabelProps,{control:r.a.createElement(K.a,Object.assign({},a,e.CheckboxProps))}))}var G=a(178);function H(e){var t=Object(g.c)(e),a=Object(d.a)(t,3),i=a[0],o=a[2];return r.a.createElement(n.Fragment,null,r.a.createElement(G.a,Object.assign({},i,e.SliderProps,{"aria-labelledby":i.name,onChange:function(e,t){Array.isArray(t)?o.setValue(t[0]):o.setValue(t)},onBlur:function(){return o.setTouched(!0)}})))}var J=a(90),N=a.n(J),U=a(91),Q=a.n(U),q=function(){var e=Object(h.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t,a,!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function Z(e){var t=e.YoutubeApiKey,a=Object(n.useState)({}),i=Object(d.a)(a,2),o=i[0],l=i[1],s=Object(n.useState)(!1),u=Object(d.a)(s,2),c=u[0],m=u[1],E=Object(n.useState)(""),k=Object(d.a)(E,2),w=k[0],O=k[1],P=Object(n.useState)(""),j=Object(d.a)(P,2),C=j[0],L=j[1],S=Object(f.a)(),M=Object(T.g)(),B={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:S.palette.background.default,paddingLeft:"2em",paddingRight:"2em"},Y=function(){var e=Object(h.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=5;break}return l({}),e.abrupt("return","Required");case 5:return e.next=7,q(a,t);case 7:if(n=e.sent){e.next=11;break}return l({}),e.abrupt("return","Invalid playlist ID");case 11:l(n);case 12:return e.abrupt("return","");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return L(""),e.abrupt("return","");case 3:return e.next=5,I(t);case 5:if(!(a=e.sent)){e.next=9;break}return L(""),e.abrupt("return",a);case 9:return L(t),e.abrupt("return","");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{style:Object(p.a)({},B)},r.a.createElement(v.a,{style:{width:"30%"}},r.a.createElement("img",{src:C,alt:"",style:{maxWidth:"100%",maxHeight:"100%",margin:"auto",width:"auto",height:"auto"}}),r.a.createElement(A,{style:{width:"30%"},onJumpToBrb:function(){w&&M.push("/BRB".concat(w))},open:c,onClose:function(){return m(!1)}})),r.a.createElement(g.b,{initialValues:{youtubeListId:"",loadingText:"",showYTControls:!1,randomizeOrder:!1,imageLink:"",beepVolume:10,videoVolume:100},onSubmit:function(e,t){var a=t.setSubmitting,n=new URL(window.location.origin);n.pathname="".concat("/youtube-playlist-brb","/BRB"),n.searchParams.append("list",e.youtubeListId),n.searchParams.append("loadingText",e.loadingText),n.searchParams.append("showYTControls",e.showYTControls?"1":"0"),n.searchParams.append("randomizeOrder",e.randomizeOrder?"1":"0"),n.searchParams.append("brbImage",e.imageLink),n.searchParams.append("beepVolume",e.beepVolume.toString()),n.searchParams.append("videoVolume",e.videoVolume.toString()),O(n.search),navigator.clipboard.writeText(n.href),m(!0),a(!1)},validateOnChange:!1},(function(e){return r.a.createElement(y.a,{elevation:3,style:{padding:"1em",width:"30%",minWidth:"450px",margin:"auto"}},r.a.createElement(g.a,null,r.a.createElement($,{name:"youtubeListId",validate:Y,textFieldProps:{label:"Youtube Playlist ID",helperText:"Enter a youtube playlist ID",disabled:e.isSubmitting}}),r.a.createElement($,{name:"loadingText",textFieldProps:{label:"Loading Text",helperText:"The text to display while loading the next video in the playlist",disabled:e.isSubmitting}}),r.a.createElement($,{name:"imageLink",validate:R,textFieldProps:{label:"BRB Image Link",helperText:"The image to display while loading the next video in the playlist",disabled:e.isSubmitting}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ee,{name:"beepVolume",label:"Beep volume"}),r.a.createElement("br",null),r.a.createElement(ee,{name:"videoVolume",label:"Video volume"}),r.a.createElement("br",null),r.a.createElement(X,{name:"showYTControls",FormControlLabelProps:{label:"Show Youtube controls"},CheckboxProps:{disabled:e.isSubmitting}}),r.a.createElement("br",null),r.a.createElement(X,{name:"randomizeOrder",FormControlLabelProps:{label:"Randomize playlist order"},CheckboxProps:{disabled:e.isSubmitting}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a,{type:"submit",variant:"outlined",disabled:e.isSubmitting,style:{float:"right"},startIcon:r.a.createElement(_.a,null)},"Create Link")))})),r.a.createElement(V,{playlist:o,style:{width:"30%",padding:"1em"}}))}var $=function(e){var t,a,n,i=e.textFieldProps,o=Object(c.a)(e,["textFieldProps"]);return i.variant=null!==(t=i.variant)&&void 0!==t?t:"outlined",i.fullWidth=null===(a=i.fullWidth)||void 0===a||a,i.margin=null!==(n=i.margin)&&void 0!==n?n:"normal",r.a.createElement(F,Object.assign({textFieldProps:i},o))},X=function(e){var t=Object(f.a)(),a={backgroundColor:t.palette.background.paper,color:t.palette.text.primary};return e.FormControlLabelProps.style=Object(p.a)({},a),e.CheckboxProps||(e.CheckboxProps={}),e.CheckboxProps.color="secondary",r.a.createElement(W,e)},ee=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{gutterBottom:!0},e.label),r.a.createElement(k.a,{container:!0,spacing:2,style:{width:"25%",minWidth:"300px"}},r.a.createElement(k.a,{item:!0},r.a.createElement(N.a,null)),r.a.createElement(k.a,{item:!0,xs:!0},r.a.createElement(H,{name:e.name,SliderProps:{min:0,max:100,valueLabelDisplay:"auto",color:"secondary"}})),r.a.createElement(k.a,{item:!0},r.a.createElement(Q.a,null))))},te=a(57),ae=a(29),ne=a(30),re=a(45),ie=a(46),oe=function(){function e(t){Object(ae.a)(this,e),this._apiKey=void 0,this._apiKey=t}return Object(ne.a)(e,[{key:"GetPlaylistVideos",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n="";case 2:return e.next=4,this._getPlaylistVideoPage(t,n);case 4:if(!(i=e.sent).error){e.next=7;break}throw new Error(i.error.message);case 7:a.push.apply(a,Object(w.a)(i.items)),n=null!==(r=i.nextPageToken)&&void 0!==r?r:"";case 9:if(""!==n){e.next=2;break}case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetPlaylistVideoIds",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GetPlaylistVideos(t);case 2:return a=e.sent,e.abrupt("return",a.map((function(e){var t,a;return null!==(t=null===(a=e.contentDetails)||void 0===a?void 0:a.videoId)&&void 0!==t?t:""})).filter((function(e){return""!==e})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getPlaylistVideoPage",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a){var n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("https://www.googleapis.com/youtube/v3/playlistItems")).searchParams.append("part","contentDetails"),n.searchParams.append("playlistId",t),n.searchParams.append("key",this._apiKey),n.searchParams.append("maxResults","50"),a&&n.searchParams.append("pageToken",a),e.next=8,fetch(n.href,{headers:{Accept:"application/json"}});case 8:return r=e.sent,e.next=11,r.json();case 11:return i=e.sent,e.abrupt("return",i);case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),le=a(92),se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;Object(ae.a)(this,e),this._context=void 0,this._oscillator=void 0,this._gain=void 0,this._beepVolume=void 0,this._beepVolume=t,this._context=new AudioContext,this._oscillator=this._context.createOscillator(),this._oscillator.frequency.value=1e3,this._gain=this._context.createGain(),this._oscillator.connect(this._gain),this._gain.connect(this._context.destination),this._gain.gain.value=0,this._oscillator.start(0)}return Object(ne.a)(e,[{key:"Beep",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.StartBeep(),setTimeout((function(){e.StopBeep()}),t)}},{key:"StartBeep",value:function(){this._gain.gain.value=this._beepVolume}},{key:"StopBeep",value:function(){this._gain.gain.value=0}}]),e}(),ue=a(95),ce=a.n(ue),pe=function(e){Object(ie.a)(a,e);var t=Object(re.a)(a);function a(){var e;Object(ae.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(ne.a)(a,[{key:"render",value:function(){var e=this.props.brbImageLink?this.props.brbImageLink:ce.a,t=this.props.brbImageLink?{maxWidth:"100%",maxHeight:"100%",margin:"auto",width:"auto",height:"auto"}:{width:"100%"};return r.a.createElement("div",{style:Object(p.a)({},{width:"100%",height:"100%"},{display:this.props.hidden?"none":"flex"})},r.a.createElement("img",{src:e,alt:"",style:t}),r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",fontSize:"150px",color:"white",transform:"translate(-50%,-50%)",backgroundColor:"black",textAlign:"center"}},this.props.text))}}]),a}(n.Component);pe.defaultProps={hidden:!1,text:"",brbImageLink:""};var de=function(e){Object(ie.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(ae.a)(this,a),(n=t.call(this,e)).state={currentVideoId:"",IsVideoPlaying:!1,IsLoadingVideo:!0},n._beeper=void 0,n._currentVideoIndex=void 0,n._beeper=new se(.01*e.beepVolume),n._currentVideoIndex=0,n}return Object(ne.a)(a,[{key:"componentDidMount",value:function(){this.loadCurrentPlaylistVideo()}},{key:"onPlayerStart",value:function(){this.setState({IsVideoPlaying:!0,IsLoadingVideo:!1}),this._beeper.StopBeep()}},{key:"loadNextPlaylistVideo",value:function(){this._currentVideoIndex++,this.loadCurrentPlaylistVideo()}},{key:"loadCurrentPlaylistVideo",value:function(){var e={IsVideoPlaying:!1,IsLoadingVideo:!1,currentVideoId:""};this._currentVideoIndex<this.props.playlist.length&&(e.currentVideoId=this.props.playlist[this._currentVideoIndex],e.IsLoadingVideo=!0,this._beeper.StartBeep()),this.setState(e)}},{key:"render",value:function(){var e=this;if(0===this.props.playlist.length)return r.a.createElement(n.Fragment,null);var t={height:"100%",width:"100%",playerVars:{autoplay:1,controls:this.props.showYTControls?1:0,fs:0,rel:0,modestbranding:1}};return r.a.createElement("div",{style:{height:"inherit"}},r.a.createElement("div",{hidden:!this.state.IsVideoPlaying,style:{height:"inherit"}},r.a.createElement(le.a,{containerClassName:"YTPlayerContainer",videoId:this.state.currentVideoId,opts:t,onPlay:function(){return e.onPlayerStart()},onEnd:function(){return e.loadNextPlaylistVideo()},onReady:function(t){return t.target.setVolume(e.props.videoVolume)}})),r.a.createElement(pe,{hidden:!this.state.IsLoadingVideo,text:this.props.loadingText,brbImageLink:this.props.brbImageLink}))}}]),a}(n.Component);de.defaultProps={playlist:[],loadingText:"",showYTControls:!1,brbImageLink:"",beepVolume:10,videoVolume:100};var me=function(e){Object(ie.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(ae.a)(this,a),(n=t.call(this,e)).state={playlistId:"",playlist:[],loadingText:"",showYTControls:!1,randomizeOrder:!0,brbImageLink:"",beepVolume:10,videoVolume:10},n._playlistRetriever=void 0,n._playlistRetriever=new oe(e.YoutubeApiKey),n}return Object(ne.a)(a,[{key:"componentDidMount",value:function(){this.onMount()}},{key:"onMount",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(window.location.href),e.next=3,this.validateQueryParams(t);case 3:if((a=e.sent).isValid){e.next=8;break}return alert(a.errorMessage),this.props.history.push("/config"),e.abrupt("return");case 8:return n=a.state,e.prev=9,e.next=12,this._playlistRetriever.GetPlaylistVideoIds(n.playlistId);case 12:n.playlist=e.sent,n.randomizeOrder&&(n.playlist=O(n.playlist)),this.setState(n),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.error(e.t0);case 20:case"end":return e.stop()}}),e,this,[[9,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"validateQueryParams",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r,i,o,l,s,u,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={errorMessage:"",isValid:!0,state:{}},(o={}).playlistId=null!==(a=t.searchParams.get("list"))&&void 0!==a?a:"",e.next=5,this.isValidPlaylistId(o.playlistId);case 5:if((l=e.sent).isValid){e.next=10;break}return i.isValid=!1,i.errorMessage=l.errorMessage,e.abrupt("return",i);case 10:if(o.loadingText=null!==(n=t.searchParams.get("loadingText"))&&void 0!==n?n:"",o.showYTControls="1"===t.searchParams.get("showYTControls"),o.randomizeOrder="1"===t.searchParams.get("randomizeOrder"),o.brbImageLink=null!==(r=t.searchParams.get("brbImage"))&&void 0!==r?r:"",s="",!o.brbImageLink){e.next=23;break}return e.next=18,I(o.brbImageLink);case 18:if(!(s=e.sent)){e.next=23;break}return i.isValid=!1,i.errorMessage=s,e.abrupt("return",i);case 23:if((u=this.isValidVolume(t.searchParams.get("beepVolume"),10,"beep volume")).isValid){e.next=28;break}return i.isValid=!1,i.errorMessage=u.errorMessage,e.abrupt("return",i);case 28:if(o.beepVolume=u.volume,(c=this.isValidVolume(t.searchParams.get("videoVolume"),10,"video volume")).isValid){e.next=34;break}return i.isValid=!1,i.errorMessage=c.errorMessage,e.abrupt("return",i);case 34:return o.videoVolume=c.volume,i.state=o,e.abrupt("return",i);case 37:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isValidPlaylistId",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={errorMessage:"",isValid:!0,playlistId:""},t){e.next=5;break}return a.errorMessage="Missing playlist ID. \nRedirecting to configuration page.",a.isValid=!1,e.abrupt("return",a);case 5:return e.next=7,P(t,this.props.YoutubeApiKey);case 7:if(e.sent){e.next=12;break}return a.errorMessage="Invalid youtube playlist ID of ".concat(t,"\nRedirecting to configuration page."),a.isValid=!1,e.abrupt("return",a);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isValidVolume",value:function(e,t,a){var n={errorMessage:"",isValid:!0,volume:0};return n.volume=e?parseInt(e):t,(n.volume<0||n.volume>100||isNaN(n.volume))&&(n.errorMessage="Invalid value for ".concat(a," of ").concat(e,". Must be between 0 and 100 inclusive.\nRedirecting to configuration page."),n.isValid=!1,n.volume=NaN),n}},{key:"render",value:function(){return this.state.playlist.length>0?r.a.createElement(de,{playlist:this.state.playlist,loadingText:this.state.loadingText,showYTControls:this.state.showYTControls,brbImageLink:this.state.brbImageLink,beepVolume:this.state.beepVolume,videoVolume:this.state.videoVolume}):""}}]),a}(n.Component);function be(e){Object(l.a)(e);var t=Object(T.g)();return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Page not found. Click the button to go to the configuration page."),r.a.createElement("div",null,r.a.createElement(x.a,{onClick:function(){t.push("/config")},variant:"outlined"},"Go to Configuration Page")))}var he=null!=="AIzaSyA0Qv78ZM4HhEleQnbHfKdcq7WGAiEHJDY"?"AIzaSyA0Qv78ZM4HhEleQnbHfKdcq7WGAiEHJDY":"";function ge(e){Object(l.a)(e);var t=Object(s.a)({palette:{type:"dark"}});return r.a.createElement(u.a,{theme:t},r.a.createElement(te.a,{basename:"/youtube-playlist-brb"},r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/brb",render:function(e){return r.a.createElement(me,Object.assign({YoutubeApiKey:he},e))}}),r.a.createElement(T.b,{path:"/config"},r.a.createElement(Z,{YoutubeApiKey:he})),r.a.createElement(T.b,{path:"/",exact:!0},r.a.createElement(T.a,{to:"/config"})),r.a.createElement(T.b,null,r.a.createElement(be,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a.p+"static/media/SMPTE_Color_Bars.bba5813e.svg"}},[[112,1,2]]]);
//# sourceMappingURL=main.f0eea3de.chunk.js.map