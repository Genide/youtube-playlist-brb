(this["webpackJsonpyoutube-playlist-brb"]=this["webpackJsonpyoutube-playlist-brb"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyCSYXi5SwmlMoPUwPi3UfEciupRruwBksc","playlistId":"","loadingText":"BE RIGHT BACK!"}')},56:function(e,t,a){e.exports=a.p+"static/media/SMPTE_Color_Bars.bba5813e.svg"},64:function(e,t,a){e.exports=a(89)},69:function(e,t,a){},71:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),l=(a(69),a(11)),o=a.n(l),u=a(16),c=a(12),p=a(13),d=a(17),h=a(18),y=(a(71),a(41)),f=function(){function e(t){Object(c.a)(this,e),this._apiKey=void 0,this._apiKey=t}return Object(p.a)(e,[{key:"GetPlaylistVideos",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n="";case 2:return e.next=4,this._getPlaylistVideoPage(t,n);case 4:if(!(i=e.sent).error){e.next=7;break}throw new Error(i.error.message);case 7:a.push.apply(a,Object(y.a)(i.items)),n=null!==(r=i.nextPageToken)&&void 0!==r?r:"";case 9:if(""!==n){e.next=2;break}case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetPlaylistVideoIds",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GetPlaylistVideos(t);case 2:return a=e.sent,e.abrupt("return",a.map((function(e){var t,a;return null!==(t=null===(a=e.contentDetails)||void 0===a?void 0:a.videoId)&&void 0!==t?t:""})).filter((function(e){return""!==e})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getPlaylistVideoPage",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("https://www.googleapis.com/youtube/v3/playlistItems")).searchParams.append("part","contentDetails"),n.searchParams.append("playlistId",t),n.searchParams.append("key",this._apiKey),n.searchParams.append("maxResults","50"),a&&n.searchParams.append("pageToken",a),e.next=8,fetch(n.href,{headers:{Accept:"application/json"}});case 8:return r=e.sent,e.next=11,r.json();case 11:return i=e.sent,e.abrupt("return",i);case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),v=a(31);function m(e){for(var t,a,n=e.length,r=Object(y.a)(e);0!==n;)a=Math.floor(Math.random()*n),t=r[n-=1],r[n]=r[a],r[a]=t;return r}function b(e,t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(t,a){var n,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("https://www.googleapis.com/youtube/v3/playlists")).searchParams.append("part","id"),n.searchParams.append("id",t),n.searchParams.append("key",a),e.next=6,fetch(n.href,{headers:{Accept:"application/json"}});case 6:return r=e.sent,e.next=9,r.json();case 9:return i=e.sent,s=i.items.find((function(e){return e.id===t})),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=a(57),w=a(120),I=a(121),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(p.a)(a,[{key:"render",value:function(){return this.props.playlist&&this.props.playlist.snippet?r.a.createElement("div",{style:{display:"flex",flexGrow:1,padding:"1em"}},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.playlist.snippet.thumbnails.default.url,alt:"thumbnail"})),r.a.createElement("div",{style:{paddingLeft:"1em"}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Playlist Title"),r.a.createElement("td",null,this.props.playlist.snippet.title)),r.a.createElement("tr",null,r.a.createElement("th",null,"Channel Name"),r.a.createElement("td",null,this.props.playlist.snippet.channelTitle)),r.a.createElement("tr",null,r.a.createElement("th",null,"Playlist Description"),r.a.createElement("td",null,this.props.playlist.snippet.description)))))):r.a.createElement(n.Fragment,null)}}]),a}(n.Component),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(p.a)(a,[{key:"getYTList",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new URL("https://www.googleapis.com/youtube/v3/playlists")).searchParams.append("part","snippet"),a.searchParams.append("id",t),a.searchParams.append("key",this.props.YoutubeApiKey),e.next=6,fetch(a.href,{headers:{Accept:"application/json"}});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,i=r.items.find((function(e){return e.id===t})),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex",padding:"1em"}},r.a.createElement(x.a,{initialValues:{youtubeListId:"",loadingText:"BE RIGHT BACK!"},validate:function(){var t=Object(u.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={},a.youtubeListId){t.next=5;break}n.youtubeListId="Required",t.next=10;break;case 5:return t.next=7,e.getYTList(a.youtubeListId);case 7:(r=t.sent)||(n.youtubeListId="Invalid playlist ID"),e.setState({currentPlaylist:r});case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onSubmit:function(t,a){var n=a.setSubmitting;e.props.onSubmit(t),n(!1)},validateOnChange:!1},(function(e){var t,a;return r.a.createElement("form",{onSubmit:e.handleSubmit,style:{borderStyle:"groove",borderWidth:"5px",padding:"1em",width:"25%",minWidth:"500px"}},r.a.createElement(w.a,{label:"Youtube Playlist ID",value:e.values.youtubeListId,onChange:e.handleChange,onBlur:e.handleBlur,name:"youtubeListId",error:!!e.errors.youtubeListId,helperText:null!==(t=e.errors.youtubeListId)&&void 0!==t?t:"Enter a youtube playlist ID",fullWidth:!0,disabled:e.isSubmitting}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,{label:"Loading Text",value:e.values.loadingText,onChange:e.handleChange,onBlur:e.handleBlur,name:"loadingText",error:!!e.errors.loadingText,helperText:null!==(a=e.errors.loadingText)&&void 0!==a?a:"Displayed while loading the next video in the playlist",fullWidth:!0,disabled:e.isSubmitting}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{type:"submit",disabled:e.isSubmitting},"Create Link"))})),r.a.createElement(E,{playlist:this.state.currentPlaylist}))}}]),a}(n.Component);P.defaultProps={onSubmit:function(){}};var k=a(53),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;Object(c.a)(this,e),this._context=void 0,this._oscillator=void 0,this._gain=void 0,this._beepVolume=void 0,this._beepVolume=t,this._context=new AudioContext,this._oscillator=this._context.createOscillator(),this._oscillator.frequency.value=1e3,this._gain=this._context.createGain(),this._oscillator.connect(this._gain),this._gain.connect(this._context.destination),this._gain.gain.value=0,this._oscillator.start(0)}return Object(p.a)(e,[{key:"Beep",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.StartBeep(),setTimeout((function(){e.StopBeep()}),t)}},{key:"StartBeep",value:function(){this._gain.gain.value=this._beepVolume}},{key:"StopBeep",value:function(){this._gain.gain.value=0}}]),e}(),_=a(58),O=a(56),V=a.n(O),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(_.a)({},{width:"100%",height:"100%"},{display:this.props.hidden?"none":"flex"})},r.a.createElement("img",{src:V.a,alt:"",style:{width:"100%"}}),r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",fontSize:"150px",color:"white",transform:"translate(-50%,-50%)",backgroundColor:"black",textAlign:"center"}},this.props.text))}}]),a}(n.Component);S.defaultProps={hidden:!1,text:""};var T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentVideoId:"",IsVideoPlaying:!1,IsLoadingVideo:!0},n._beeper=void 0,n._currentVideoIndex=void 0,n._beeper=new j(.1),n._currentVideoIndex=0,n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.loadCurrentPlaylistVideo()}},{key:"onPlayerStart",value:function(){this.setState({IsVideoPlaying:!0,IsLoadingVideo:!1}),this._beeper.StopBeep()}},{key:"loadNextPlaylistVideo",value:function(){this._currentVideoIndex++,this.loadCurrentPlaylistVideo()}},{key:"loadCurrentPlaylistVideo",value:function(){var e={IsVideoPlaying:!1,IsLoadingVideo:!1,currentVideoId:""};this._currentVideoIndex<this.props.playlist.length&&(e.currentVideoId=this.props.playlist[this._currentVideoIndex],e.IsLoadingVideo=!0,this._beeper.StartBeep()),this.setState(e)}},{key:"render",value:function(){var e=this;if(0===this.props.playlist.length)return r.a.createElement(n.Fragment,null);return r.a.createElement("div",{style:{height:"inherit"}},r.a.createElement("div",{hidden:!this.state.IsVideoPlaying,style:{height:"inherit"}},r.a.createElement(k.a,{containerClassName:"YTPlayerContainer",videoId:this.state.currentVideoId,opts:{height:"100%",width:"100%",playerVars:{autoplay:1,controls:0,fs:0,rel:0,modestbranding:1}},onPlay:function(){return e.onPlayerStart()},onEnd:function(){return e.loadNextPlaylistVideo()}})),r.a.createElement(S,{hidden:!this.state.IsLoadingVideo,text:this.props.loadingText}))}}]),a}(n.Component);T.defaultProps={playlist:[],loadingText:""};var L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r,i,s,l;Object(c.a)(this,a),(l=t.call(this,e)).state={currentVideoId:"",IsVideoPlaying:!1,IsLoadingVideo:!0,LoadingText:"",playlist:[],playlistId:""},l._playlistRetriever=void 0,l._playlistRetriever=new f(v.apiKey);var o=new URL(window.location.href);return l.state.playlistId=null!==(n=null!==(r=o.searchParams.get("list"))&&void 0!==r?r:v.playlistId)&&void 0!==n?n:"",l.state.LoadingText=null!==(i=null!==(s=o.searchParams.get("loadingText"))&&void 0!==s?s:v.loadingText)&&void 0!==i?i:"",o.search="",l}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.onMount()}},{key:"onMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.playlistId){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b(this.state.playlistId,v.apiKey);case 4:if(e.sent){e.next=8;break}return this.setState({playlistId:"",playlist:[]}),e.abrupt("return");case 8:return e.prev=8,e.next=11,this._playlistRetriever.GetPlaylistVideoIds(this.state.playlistId);case 11:t=e.sent,this.setState({playlist:m(t)}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.error(e.t0);case 18:case"end":return e.stop()}}),e,this,[[8,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"onConfigFormSubmit",value:function(e){console.log(e);var t=new URL(window.location.href);t.search="",t.searchParams.append("list",e.youtubeListId),t.searchParams.append("loadingText",e.loadingText);var a=t.href;navigator.clipboard.writeText(a),alert("The link has been copied to your clipboard. Redirecting you to your new page."),window.location.href=t.href}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"inherit"}},this.state.playlist.length>0?r.a.createElement(T,{playlist:this.state.playlist,loadingText:this.state.LoadingText}):"",this.state.playlistId?"":r.a.createElement(P,{YoutubeApiKey:v.apiKey,onSubmit:function(t){return e.onConfigFormSubmit(t)}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.f771175e.chunk.js.map