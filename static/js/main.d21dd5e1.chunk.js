(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{117:function(e,t,n){e.exports=n(1203)},1195:function(e,t,n){},1200:function(e,t,n){},1203:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(16),r=n.n(i),c=n(38),l=n(39),s=n(42),d=n(41),u=n(111),m=n(67),h=n.n(m),f=n(88),g=n(89),v=n.n(g),p=n(90),b=n.n(p),w=n(1226),y=n(1222),S=n(1223),E=n(1224),k=n(98),C=n.n(k),x=n(99),M=n.n(x),O=n(101),j=n.n(O),A=n(102),D=n.n(A),T=n(103),U=n.n(T),V=n(104),L=n.n(V),N=n(100),R=n.n(N),W=n(107),F=n.n(W),I=n(105),J=n.n(I),P=n(106),B=n.n(P),H=n(1225),z=(n(1193),n(1227)),q=n(44),G=(n(1194),n(1195),new(window.SpeechRecognition||window.webkitSpeechRecognition));G.continuous=!0,G.interimResults=!0,G.lang="en-US";var Y={},$={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]},K=null,Q=null,X=0,Z=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).ccSubtitle=function(){},a.getPermissions=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return a.videoAvailable=!0})).catch((function(){return a.videoAvailable=!1}));case 3:return e.next=5,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){return a.audioAvailable=!0})).catch((function(){return a.audioAvailable=!1}));case 5:navigator.mediaDevices.getDisplayMedia?a.setState({screenAvailable:!0}):a.setState({screenAvailable:!1}),(a.videoAvailable||a.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:a.videoAvailable,audio:a.audioAvailable}).then((function(e){window.localStream=e,a.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.getMedia=function(){a.setState({video:a.videoAvailable,audio:a.audioAvailable},(function(){a.getUserMedia(),a.connectToSocketServer()}))},a.getUserMedia=function(){if(a.state.video&&a.videoAvailable||a.state.audio&&a.audioAvailable)navigator.mediaDevices.getUserMedia({video:a.state.video,audio:a.state.audio}).then(a.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},a.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===Q)return"continue";Y[e].addStream(window.localStream),Y[e].createOffer().then((function(t){Y[e].setLocalDescription(t).then((function(){K.emit("signal",e,JSON.stringify({sdp:Y[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in Y)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({video:!1,audio:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream;var e=function(e){Y[e].addStream(window.localStream),Y[e].createOffer().then((function(t){Y[e].setLocalDescription(t).then((function(){K.emit("signal",e,JSON.stringify({sdp:Y[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in Y)e(t)}))}}))},a.getDislayMedia=function(){a.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(a.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},a.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===Q)return"continue";Y[e].addStream(window.localStream),Y[e].createOffer().then((function(t){Y[e].setLocalDescription(t).then((function(){K.emit("signal",e,JSON.stringify({sdp:Y[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in Y)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({screen:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream,a.getUserMedia()}))}}))},a.gotMessageFromServer=function(e,t){var n=JSON.parse(t);e!==Q&&(n.sdp&&Y[e].setRemoteDescription(new RTCSessionDescription(n.sdp)).then((function(){"offer"===n.sdp.type&&Y[e].createAnswer().then((function(t){Y[e].setLocalDescription(t).then((function(){K.emit("signal",e,JSON.stringify({sdp:Y[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),n.ice&&Y[e].addIceCandidate(new RTCIceCandidate(n.ice)).catch((function(e){return console.log(e)})))},a.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var n=String(100/X)+"%",a="";0===X||1===X?(a="100%",n="100%"):2===X?(a="45%",n="100%"):3===X||4===X?(a="35%",n="50%"):a=String(100/X)+"%";for(var o=e.querySelectorAll("video"),i=0;i<o.length;++i)o[i].style.minWidth=t,o[i].style.minHeight="40%",o[i].style.setProperty("width",a),o[i].style.setProperty("height",n);return{minWidth:t,minHeight:"40%",width:a,height:n}},a.connectToSocketServer=function(){(K=v.a.connect("https://video.sebastienbiollo.com",{secure:!0})).on("signal",a.gotMessageFromServer),K.on("connect",(function(){K.emit("join-call",window.location.href),Q=K.id,K.on("chat-message",a.addMessage),K.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){X--,t.parentNode.removeChild(t);var n=document.getElementById("main");a.changeCssVideos(n)}})),K.on("user-joined",(function(e,t){if(t.forEach((function(e){if(Y[e]=new RTCPeerConnection($),Y[e].onicecandidate=function(t){null!=t.candidate&&K.emit("signal",e,JSON.stringify({ice:t.candidate}))},Y[e].onaddstream=function(n){var o=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==o)o.srcObject=n.stream;else{X=t.length;var i=document.getElementById("main"),r=a.changeCssVideos(i),c=document.createElement("video"),l={minWidth:r.minWidth,minHeight:r.minHeight,maxHeight:"100%",margin:"10px",borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill"};for(var s in l)c.style[s]=l[s];c.style.setProperty("width",r.width),c.style.setProperty("height",r.height),c.setAttribute("data-socket",e),c.srcObject=n.stream,c.autoplay=!0,c.playsinline=!0,i.appendChild(c)}},void 0!==window.localStream&&null!==window.localStream)Y[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),Y[e].addStream(window.localStream)}})),e===Q){var n=function(e){if(e===Q)return"continue";try{Y[e].addStream(window.localStream)}catch(t){}Y[e].createOffer().then((function(t){Y[e].setLocalDescription(t).then((function(){K.emit("signal",e,JSON.stringify({sdp:Y[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var o in Y)n(o)}}))}))},a.silence=function(){var e=new AudioContext,t=e.createOscillator(),n=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(n.stream.getAudioTracks()[0],{enabled:!1})},a.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?640:t,a=e.height,o=void 0===a?480:a,i=Object.assign(document.createElement("canvas"),{width:n,height:o});i.getContext("2d").fillRect(0,0,n,o);var r=i.captureStream();return Object.assign(r.getVideoTracks()[0],{enabled:!1})},a.handleVideo=function(){return a.setState({video:!a.state.video},(function(){return a.getUserMedia()}))},a.handleAudio=function(){return a.setState({audio:!a.state.audio},(function(){return a.getUserMedia()}))},a.handleScreen=function(){return a.setState({screen:!a.state.screen},(function(){return a.getDislayMedia()}))},a.handleEndCall=function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},a.openChat=function(){return a.setState({showModal:!0,newmessages:0})},a.closeChat=function(){return a.setState({showModal:!1})},a.handleMessage=function(e){return a.setState({message:e.target.value})},a.addMessage=function(e,t,n){a.setState((function(n){return{messages:[].concat(Object(u.a)(n.messages),[{sender:t,data:e}])}})),n!==Q&&a.setState({newmessages:a.state.newmessages+1})},a.handleUsername=function(e){return a.setState({username:e.target.value})},a.sendMessage=function(){a.state.note&&(a.setState({sortedSubtitle:a.state.sortedSubtitle.split(".").pop()}),K.emit("chat-message",a.state.sortedSubtitle,a.state.username),a.setState({message:"",sender:a.state.username}),a.setState({sortedSubtitle:""}))},a.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){H.b.success("Link copied to clipboard!")}),(function(){H.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),H.b.success("Link copied to clipboard!")}catch(n){H.b.error("Failed to copy")}document.body.removeChild(t)}},a.connect=function(){return a.setState({askForUsername:!1},(function(){return a.getMedia()}))},a.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},a.localVideoref=o.a.createRef(),a.videoAvailable=!1,a.audioAvailable=!1,a.state={note:"",sortedSubtitle:"",isListening:!1,video:!1,audio:!1,screen:!1,subtitle:"",showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:b.a.internet.userName()},Y={},a.getPermissions(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.sendMessage,1e4)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,!0===this.state.askForUsername?o.a.createElement("div",null,o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Set your username"),o.a.createElement(w.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Connect")),o.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):o.a.createElement("div",null,o.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleVideo},!0===this.state.video?o.a.createElement(C.a,null):o.a.createElement(M.a,null)),o.a.createElement(S.a,{style:{color:"#f44336"},onClick:this.handleEndCall},o.a.createElement(R.a,null)),o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleAudio},!0===this.state.audio?o.a.createElement(j.a,null):o.a.createElement(D.a,null)),!0===this.state.screenAvailable?o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleScreen},!0===this.state.screen?o.a.createElement(U.a,null):o.a.createElement(L.a,null)):null,o.a.createElement(S.a,{style:{color:"#424242"},onClick:function(){e.setState({isListening:!e.state.isListening}),e.state.isListening?(G.start(),G.onend=function(){G.start()}):(G.stop(),G.onend=function(){}),G.onstart=function(){console.log("Mics on")},G.onresult=function(t){var n=Array.from(t.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join(".");console.log(n),e.setState({note:n}),e.setState({sortedSubtitle:e.state.note}),G.onerror=function(e){console.log(e.error)}}}},!0===this.state.isListening?o.a.createElement(J.a,null):o.a.createElement(B.a,null)),o.a.createElement(E.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.openChat},o.a.createElement(F.a,null)))),o.a.createElement(q.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},o.a.createElement(q.a.Header,{closeButton:!0},o.a.createElement(q.a.Title,null,"Chat Room")),o.a.createElement(q.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return o.a.createElement("div",{key:t,style:{textAlign:"left"}},o.a.createElement("p",{style:{wordBreak:"break-all"}},o.a.createElement("b",null,e.sender),": ",e.data))})):o.a.createElement("p",null,"No message yet")),o.a.createElement(q.a.Footer,{className:"div-send-msg"},o.a.createElement(w.a,{placeholder:"Message",value:this.state.sortedSubtitle,onChange:function(t){return e.handleMessage(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{paddingTop:"20px"}},o.a.createElement(w.a,{value:window.location.href,disable:"true"}),o.a.createElement(y.a,{style:{backgroundColor:"#3f51b5",color:"whitesmoke",marginLeft:"20px",marginTop:"10px",width:"120px",fontSize:"10px"},onClick:this.copyUrl},"Copy invite link")),this.state.isListening?o.a.createElement("span",null,"Translation Stopped"):o.a.createElement("span",null,"Translating"),o.a.createElement("div",{id:"box"},o.a.createElement("p",{id:"text1",placeholder:"TRANSLATION"},this.state.note)),o.a.createElement(z.a,{id:"main",className:"flex-container",style:{margin:0,padding:0}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",margin:"10px",objectFit:"fill",width:"100%",height:"100%"}})))))}}]),n}(a.Component),_=n(108),ee=n.n(_),te=(n(1200),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState({url:e.target.value})},a.join=function(){if(""!==a.state.url){var e=a.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},a.state={url:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container2"},o.a.createElement("div",{style:{fontSize:"14px",background:"white",width:"10%",textAlign:"center",margin:"auto",marginBottom:"10px"}},"Source code:",o.a.createElement(S.a,{style:{color:"black"},onClick:function(){return window.location.href="https://github.com/0x5eba/Video-Meeting"}},o.a.createElement(ee.a,null))),o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:"45px"}},"Video Meeting"),o.a.createElement("p",{style:{fontWeight:"200"}},"Video conference website that lets you stay in touch with all your friends.")),o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"100px"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Start or join a meeting"),o.a.createElement(w.a,{placeholder:"URL",onChange:function(t){return e.handleChange(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.join,style:{margin:"20px"}},"Go")))}}]),n}(a.Component)),ne=n(109),ae=n(14),oe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ne.a,null,o.a.createElement(ae.c,null,o.a.createElement(ae.a,{path:"/home",exact:!0,component:te}),o.a.createElement(ae.a,{path:"/:url",component:Z}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},144:function(e,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.d21dd5e1.chunk.js.map