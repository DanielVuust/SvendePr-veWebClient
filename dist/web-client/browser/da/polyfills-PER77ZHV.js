(function(e){e.ng??={},e.ng.common??={},e.ng.common.locales??={};let t=void 0;function a(n){let c=n,l=Math.floor(Math.abs(n)),_=parseInt(n.toString().replace(/^[^.]*\.?|0+$/g,""),10)||0;return c===1||_!==0&&(l===0||l===1)?1:5;}e.ng.common.locales.da=["da",[["a","p"],["AM","PM"],t],[["AM","PM"],t,t],[["S","M","T","O","T","F","L"],["s\xF8n.","man.","tir.","ons.","tor.","fre.","l\xF8r."],["s\xF8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xF8rdag"],["s\xF8","ma","ti","on","to","fr","l\xF8"]],[["S","M","T","O","T","F","L"],["s\xF8n","man","tir","ons","tor","fre","l\xF8r"],["s\xF8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xF8rdag"],["s\xF8","ma","ti","on","to","fr","l\xF8"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]],t,[["fKr","eKr"],["f.Kr.","e.Kr."],t],1,[6,0],["dd.MM.y","d. MMM y","d. MMMM y","EEEE 'den' d. MMMM y"],["HH.mm","HH.mm.ss","HH.mm.ss z","HH.mm.ss zzzz"],["{1} {0}",t,"{1} 'kl'. {0}",t],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN","."],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"DKK","kr.","dansk krone",{AUD:["AU$","$"],BYN:[t,"Br."],DKK:["kr."],ISK:[t,"kr."],JPY:["JP\xA5","\xA5"],NOK:[t,"kr."],PHP:[t,"\u20B1"],RON:[t,"L"],SEK:[t,"kr."],THB:["\u0E3F"],TWD:["NT$"],USD:["US$","$"]},"ltr",a,[[["midnat","om morgenen","om formiddagen","om eftermiddagen","om aftenen","om natten"],t,t],[["midnat","morgen","formiddag","eftermiddag","aften","nat"],t,t],["00:00",["05:00","10:00"],["10:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","05:00"]]]];})(globalThis);var ce=globalThis;function te(e){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+e;}function dt(){let e=ce.performance;function t(I){e&&e.mark&&e.mark(I);}function a(I,s){e&&e.measure&&e.measure(I,s);}t("Zone");class n{static{this.__symbol__=te;}static assertZonePatched(){if(ce.Promise!==D.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");}static get root(){let s=n.current;for(;s.parent;)s=s.parent;return s;}static get current(){return b.zone;}static get currentTask(){return C;}static __load_patch(s,i,o=!1){if(D.hasOwnProperty(s)){let g=ce[te("forceDuplicateZoneCheck")]===!0;if(!o&&g)throw Error("Already loaded patch: "+s);}else if(!ce["__Zone_disable_"+s]){let g="Zone:"+s;t(g),D[s]=i(ce,n,R),a(g,g);}}get parent(){return this._parent;}get name(){return this._name;}constructor(s,i){this._parent=s,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,i);}get(s){let i=this.getZoneWith(s);if(i)return i._properties[s];}getZoneWith(s){let i=this;for(;i;){if(i._properties.hasOwnProperty(s))return i;i=i._parent;}return null;}fork(s){if(!s)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,s);}wrap(s,i){if(typeof s!="function")throw new Error("Expecting function got: "+s);let o=this._zoneDelegate.intercept(this,s,i),g=this;return function(){return g.runGuarded(o,this,arguments,i);};}run(s,i,o,g){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,s,i,o,g);}finally{b=b.parent;}}runGuarded(s,i=null,o,g){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,s,i,o,g);}catch(F){if(this._zoneDelegate.handleError(this,F))throw F;}}finally{b=b.parent;}}runTask(s,i,o){if(s.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");let g=s,{type:F,data:{isPeriodic:ee=!1,isRefreshable:Z=!1}={}}=s;if(s.state===q&&(F===U||F===m))return;let he=s.state!=A;he&&g._transitionTo(A,d);let _e=C;C=g,b={parent:b,zone:this};try{F==m&&s.data&&!ee&&!Z&&(s.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,g,i,o);}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q;}}finally{let Q=s.state;if(Q!==q&&Q!==X)if(F==U||ee||Z&&Q===k)he&&g._transitionTo(d,A,k);else{let Ee=g._zoneDelegates;this._updateTaskCount(g,-1),he&&g._transitionTo(q,A,q),Z&&(g._zoneDelegates=Ee);}b=b.parent,C=_e;}}scheduleTask(s){if(s.zone&&s.zone!==this){let o=this;for(;o;){if(o===s.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);o=o.parent;}}s._transitionTo(k,q);let i=[];s._zoneDelegates=i,s._zone=this;try{s=this._zoneDelegate.scheduleTask(this,s);}catch(o){throw s._transitionTo(X,k,q),this._zoneDelegate.handleError(this,o),o;}return s._zoneDelegates===i&&this._updateTaskCount(s,1),s.state==k&&s._transitionTo(d,k),s;}scheduleMicroTask(s,i,o,g){return this.scheduleTask(new _(G,s,i,o,g,void 0));}scheduleMacroTask(s,i,o,g,F){return this.scheduleTask(new _(m,s,i,o,g,F));}scheduleEventTask(s,i,o,g,F){return this.scheduleTask(new _(U,s,i,o,g,F));}cancelTask(s){if(s.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");if(!(s.state!==d&&s.state!==A)){s._transitionTo(x,d,A);try{this._zoneDelegate.cancelTask(this,s);}catch(i){throw s._transitionTo(X,x),this._zoneDelegate.handleError(this,i),i;}return this._updateTaskCount(s,-1),s._transitionTo(q,x),s.runCount=-1,s;}}_updateTaskCount(s,i){let o=s._zoneDelegates;i==-1&&(s._zoneDelegates=null);for(let g=0;g<o.length;g++)o[g]._updateTaskCount(s.type,i);}}let c={name:"",onHasTask:(I,s,i,o)=>I.hasTask(i,o),onScheduleTask:(I,s,i,o)=>I.scheduleTask(i,o),onInvokeTask:(I,s,i,o,g,F)=>I.invokeTask(i,o,g,F),onCancelTask:(I,s,i,o)=>I.cancelTask(i,o)};class l{get zone(){return this._zone;}constructor(s,i,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=s,this._parentDelegate=i,this._forkZS=o&&(o&&o.onFork?o:i._forkZS),this._forkDlgt=o&&(o.onFork?i:i._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:i._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:i._interceptZS),this._interceptDlgt=o&&(o.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:i._invokeZS),this._invokeDlgt=o&&(o.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:i._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:i._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:i._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:i._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let g=o&&o.onHasTask,F=i&&i._hasTaskZS;(g||F)&&(this._hasTaskZS=g?o:c,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone));}fork(s,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,s,i):new n(s,i);}intercept(s,i,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,s,i,o):i;}invoke(s,i,o,g,F){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,s,i,o,g,F):i.apply(o,g);}handleError(s,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,s,i):!0;}scheduleTask(s,i){let o=i;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,s,i),o||(o=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==G)B(i);else throw new Error("Task is missing scheduleFn.");return o;}invokeTask(s,i,o,g){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,s,i,o,g):i.callback.apply(o,g);}cancelTask(s,i){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,s,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");o=i.cancelFn(i);}return o;}hasTask(s,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,s,i);}catch(o){this.handleError(s,o);}}_updateTaskCount(s,i){let o=this._taskCounts,g=o[s],F=o[s]=g+i;if(F<0)throw new Error("More tasks executed then were scheduled.");if(g==0||F==0){let ee={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:s};this.hasTask(this._zone,ee);}}}class _{constructor(s,i,o,g,F,ee){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=s,this.source=i,this.data=g,this.scheduleFn=F,this.cancelFn=ee,!o)throw new Error("callback is not defined");this.callback=o;let Z=this;s===U&&g&&g.useG?this.invoke=_.invokeTask:this.invoke=function(){return _.invokeTask.call(ce,Z,this,arguments);};}static invokeTask(s,i,o){s||(s=this),J++;try{return s.runCount++,s.zone.runTask(s,i,o);}finally{J==1&&$(),J--;}}get zone(){return this._zone;}get state(){return this._state;}cancelScheduleRequest(){this._transitionTo(q,k);}_transitionTo(s,i,o){if(this._state===i||this._state===o)this._state=s,s==q&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${s}', expecting state '${i}'${o?" or '"+o+"'":""}, was '${this._state}'.`);}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this);}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount};}}let T=te("setTimeout"),p=te("Promise"),S=te("then"),E=[],P=!1,L;function H(I){if(L||ce[p]&&(L=ce[p].resolve(0)),L){let s=L[S];s||(s=L.then),s.call(L,I);}else ce[T](I,0);}function B(I){J===0&&E.length===0&&H($),I&&E.push(I);}function $(){if(!P){for(P=!0;E.length;){let I=E;E=[];for(let s=0;s<I.length;s++){let i=I[s];try{i.zone.runTask(i,null,null);}catch(o){R.onUnhandledError(o);}}}R.microtaskDrainDone(),P=!1;}}let K={name:"NO ZONE"},q="notScheduled",k="scheduling",d="scheduled",A="running",x="canceling",X="unknown",G="microTask",m="macroTask",U="eventTask",D={},R={symbol:te,currentZoneFrame:()=>b,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:B,showUncaughtError:()=>!n[te("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:H},b={parent:null,zone:new n(null,null)},C=null,J=0;function W(){}return a("Zone","Zone"),n;}function _t(){let e=globalThis,t=e[te("forceDuplicateZoneCheck")]===!0;if(e.Zone&&(t||typeof e.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return e.Zone??=dt(),e.Zone;}var be=Object.getOwnPropertyDescriptor,Ae=Object.defineProperty,je=Object.getPrototypeOf,Et=Object.create,Tt=Array.prototype.slice,He="addEventListener",xe="removeEventListener",Me=te(He),Le=te(xe),ae="true",le="false",Pe=te("");function Fe(e,t){return Zone.current.wrap(e,t);}function Ge(e,t,a,n,c){return Zone.current.scheduleMacroTask(e,t,a,n,c);}var j=te,Ce=typeof window<"u",pe=Ce?window:void 0,Y=Ce&&pe||globalThis,gt="removeAttribute";function Ve(e,t){for(let a=e.length-1;a>=0;a--)typeof e[a]=="function"&&(e[a]=Fe(e[a],t+"_"+a));return e;}function mt(e,t){let a=e.constructor.name;for(let n=0;n<t.length;n++){let c=t[n],l=e[c];if(l){let _=be(e,c);if(!tt(_))continue;e[c]=(T=>{let p=function(){return T.apply(this,Ve(arguments,a+"."+c));};return fe(p,T),p;})(l);}}}function tt(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0;}var nt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,De=!("nw"in Y)&&typeof Y.process<"u"&&Y.process.toString()==="[object process]",ze=!De&&!nt&&!!(Ce&&pe.HTMLElement),rt=typeof Y.process<"u"&&Y.process.toString()==="[object process]"&&!nt&&!!(Ce&&pe.HTMLElement),Se={},yt=j("enable_beforeunload"),Ye=function(e){if(e=e||Y.event,!e)return;let t=Se[e.type];t||(t=Se[e.type]=j("ON_PROPERTY"+e.type));let a=this||e.target||Y,n=a[t],c;if(ze&&a===pe&&e.type==="error"){let l=e;c=n&&n.call(this,l.message,l.filename,l.lineno,l.colno,l.error),c===!0&&e.preventDefault();}else c=n&&n.apply(this,arguments),e.type==="beforeunload"&&Y[yt]&&typeof c=="string"?e.returnValue=c:c!=null&&!c&&e.preventDefault();return c;};function $e(e,t,a){let n=be(e,t);if(!n&&a&&be(a,t)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let c=j("on"+t+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete n.writable,delete n.value;let l=n.get,_=n.set,T=t.slice(2),p=Se[T];p||(p=Se[T]=j("ON_PROPERTY"+T)),n.set=function(S){let E=this;if(!E&&e===Y&&(E=Y),!E)return;typeof E[p]=="function"&&E.removeEventListener(T,Ye),_&&_.call(E,null),E[p]=S,typeof S=="function"&&E.addEventListener(T,Ye,!1);},n.get=function(){let S=this;if(!S&&e===Y&&(S=Y),!S)return null;let E=S[p];if(E)return E;if(l){let P=l.call(this);if(P)return n.set.call(this,P),typeof S[gt]=="function"&&S.removeAttribute(t),P;}return null;},Ae(e,t,n),e[c]=!0;}function ot(e,t,a){if(t)for(let n=0;n<t.length;n++)$e(e,"on"+t[n],a);else{let n=[];for(let c in e)c.slice(0,2)=="on"&&n.push(c);for(let c=0;c<n.length;c++)$e(e,n[c],a);}}var oe=j("originalInstance");function ve(e){let t=Y[e];if(!t)return;Y[j(e)]=t,Y[e]=function(){let c=Ve(arguments,e);switch(c.length){case 0:this[oe]=new t();break;case 1:this[oe]=new t(c[0]);break;case 2:this[oe]=new t(c[0],c[1]);break;case 3:this[oe]=new t(c[0],c[1],c[2]);break;case 4:this[oe]=new t(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.");}},fe(Y[e],t);let a=new t(function(){}),n;for(n in a)e==="XMLHttpRequest"&&n==="responseBlob"||function(c){typeof a[c]=="function"?Y[e].prototype[c]=function(){return this[oe][c].apply(this[oe],arguments);}:Ae(Y[e].prototype,c,{set:function(l){typeof l=="function"?(this[oe][c]=Fe(l,e+"."+c),fe(this[oe][c],l)):this[oe][c]=l;},get:function(){return this[oe][c];}});}(n);for(n in t)n!=="prototype"&&t.hasOwnProperty(n)&&(Y[e][n]=t[n]);}function ue(e,t,a){let n=e;for(;n&&!n.hasOwnProperty(t);)n=je(n);!n&&e[t]&&(n=e);let c=j(t),l=null;if(n&&(!(l=n[c])||!n.hasOwnProperty(c))){l=n[c]=n[t];let _=n&&be(n,t);if(tt(_)){let T=a(l,c,t);n[t]=function(){return T(this,arguments);},fe(n[t],l);}}return l;}function pt(e,t,a){let n=null;function c(l){let _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments);},n.apply(_.target,_.args),l;}n=ue(e,t,l=>function(_,T){let p=a(_,T);return p.cbIdx>=0&&typeof T[p.cbIdx]=="function"?Ge(p.name,T[p.cbIdx],p,c):l.apply(_,T);});}function fe(e,t){e[j("OriginalDelegate")]=t;}var Ke=!1,Ie=!1;function kt(){try{let e=pe.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0;}catch{}return!1;}function vt(){if(Ke)return Ie;Ke=!0;try{let e=pe.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ie=!0);}catch{}return Ie;}function Je(e){return typeof e=="function";}function Qe(e){return typeof e=="number";}var ye=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){ye=!0;}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch{ye=!1;}var bt={useG:!0},ne={},st={},it=new RegExp("^"+Pe+"(\\w+)(true|false)$"),ct=j("propagationStopped");function at(e,t){let a=(t?t(e):e)+le,n=(t?t(e):e)+ae,c=Pe+a,l=Pe+n;ne[e]={},ne[e][le]=c,ne[e][ae]=l;}function Pt(e,t,a,n){let c=n&&n.add||He,l=n&&n.rm||xe,_=n&&n.listeners||"eventListeners",T=n&&n.rmAll||"removeAllListeners",p=j(c),S="."+c+":",E="prependListener",P="."+E+":",L=function(k,d,A){if(k.isRemoved)return;let x=k.callback;typeof x=="object"&&x.handleEvent&&(k.callback=m=>x.handleEvent(m),k.originalDelegate=x);let X;try{k.invoke(k,d,[A]);}catch(m){X=m;}let G=k.options;if(G&&typeof G=="object"&&G.once){let m=k.originalDelegate?k.originalDelegate:k.callback;d[l].call(d,A.type,m,G);}return X;};function H(k,d,A){if(d=d||e.event,!d)return;let x=k||d.target||e,X=x[ne[d.type][A?ae:le]];if(X){let G=[];if(X.length===1){let m=L(X[0],x,d);m&&G.push(m);}else{let m=X.slice();for(let U=0;U<m.length&&!(d&&d[ct]===!0);U++){let D=L(m[U],x,d);D&&G.push(D);}}if(G.length===1)throw G[0];for(let m=0;m<G.length;m++){let U=G[m];t.nativeScheduleMicroTask(()=>{throw U;});}}}let B=function(k){return H(this,k,!1);},$=function(k){return H(this,k,!0);};function K(k,d){if(!k)return!1;let A=!0;d&&d.useG!==void 0&&(A=d.useG);let x=d&&d.vh,X=!0;d&&d.chkDup!==void 0&&(X=d.chkDup);let G=!1;d&&d.rt!==void 0&&(G=d.rt);let m=k;for(;m&&!m.hasOwnProperty(c);)m=je(m);if(!m&&k[c]&&(m=k),!m||m[p])return!1;let U=d&&d.eventNameToString,D={},R=m[p]=m[c],b=m[j(l)]=m[l],C=m[j(_)]=m[_],J=m[j(T)]=m[T],W;d&&d.prepend&&(W=m[j(d.prepend)]=m[d.prepend]);function I(r,f){return!ye&&typeof r=="object"&&r?!!r.capture:!ye||!f?r:typeof r=="boolean"?{capture:r,passive:!0}:r?typeof r=="object"&&r.passive!==!1?{...r,passive:!0}:r:{passive:!0};}let s=function(r){if(!D.isExisting)return R.call(D.target,D.eventName,D.capture?$:B,D.options);},i=function(r){if(!r.isRemoved){let f=ne[r.eventName],v;f&&(v=f[r.capture?ae:le]);let w=v&&r.target[v];if(w){for(let y=0;y<w.length;y++)if(w[y]===r){w.splice(y,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),w.length===0&&(r.allRemoved=!0,r.target[v]=null);break;}}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?$:B,r.options);},o=function(r){return R.call(D.target,D.eventName,r.invoke,D.options);},g=function(r){return W.call(D.target,D.eventName,r.invoke,D.options);},F=function(r){return b.call(r.target,r.eventName,r.invoke,r.options);},ee=A?s:o,Z=A?i:F,he=function(r,f){let v=typeof f;return v==="function"&&r.callback===f||v==="object"&&r.originalDelegate===f;},_e=d&&d.diff?d.diff:he,Q=Zone[j("UNPATCHED_EVENTS")],Ee=e[j("PASSIVE_EVENTS")];function h(r){if(typeof r=="object"&&r!==null){let f={...r};return r.signal&&(f.signal=r.signal),f;}return r;}let u=function(r,f,v,w,y=!1,O=!1){return function(){let N=this||e,M=arguments[0];d&&d.transferEventName&&(M=d.transferEventName(M));let V=arguments[1];if(!V)return r.apply(this,arguments);if(De&&M==="uncaughtException")return r.apply(this,arguments);let z=!1;if(typeof V!="function"){if(!V.handleEvent)return r.apply(this,arguments);z=!0;}if(x&&!x(r,V,N,arguments))return;let de=ye&&!!Ee&&Ee.indexOf(M)!==-1,se=h(I(arguments[2],de)),Te=se?.signal;if(Te?.aborted)return;if(Q){for(let ie=0;ie<Q.length;ie++)if(M===Q[ie])return de?r.call(N,M,V,se):r.apply(this,arguments);}let Oe=se?typeof se=="boolean"?!0:se.capture:!1,Be=se&&typeof se=="object"?se.once:!1,ht=Zone.current,Ne=ne[M];Ne||(at(M,U),Ne=ne[M]);let Ue=Ne[Oe?ae:le],ge=N[Ue],We=!1;if(ge){if(We=!0,X){for(let ie=0;ie<ge.length;ie++)if(_e(ge[ie],V))return;}}else ge=N[Ue]=[];let Re,qe=N.constructor.name,Xe=st[qe];Xe&&(Re=Xe[M]),Re||(Re=qe+f+(U?U(M):M)),D.options=se,Be&&(D.options.once=!1),D.target=N,D.capture=Oe,D.eventName=M,D.isExisting=We;let ke=A?bt:void 0;ke&&(ke.taskData=D),Te&&(D.options.signal=void 0);let re=ht.scheduleEventTask(Re,V,ke,v,w);if(Te){D.options.signal=Te;let ie=()=>re.zone.cancelTask(re);r.call(Te,"abort",ie,{once:!0}),re.removeAbortListener=()=>Te.removeEventListener("abort",ie);}if(D.target=null,ke&&(ke.taskData=null),Be&&(D.options.once=!0),!ye&&typeof re.options=="boolean"||(re.options=se),re.target=N,re.capture=Oe,re.eventName=M,z&&(re.originalDelegate=V),O?ge.unshift(re):ge.push(re),y)return N;};};return m[c]=u(R,S,ee,Z,G),W&&(m[E]=u(W,P,g,Z,G,!0)),m[l]=function(){let r=this||e,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=arguments[2],w=v?typeof v=="boolean"?!0:v.capture:!1,y=arguments[1];if(!y)return b.apply(this,arguments);if(x&&!x(b,y,r,arguments))return;let O=ne[f],N;O&&(N=O[w?ae:le]);let M=N&&r[N];if(M)for(let V=0;V<M.length;V++){let z=M[V];if(_e(z,y)){if(M.splice(V,1),z.isRemoved=!0,M.length===0&&(z.allRemoved=!0,r[N]=null,!w&&typeof f=="string")){let de=Pe+"ON_PROPERTY"+f;r[de]=null;}return z.zone.cancelTask(z),G?r:void 0;}}return b.apply(this,arguments);},m[_]=function(){let r=this||e,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=[],w=lt(r,U?U(f):f);for(let y=0;y<w.length;y++){let O=w[y],N=O.originalDelegate?O.originalDelegate:O.callback;v.push(N);}return v;},m[T]=function(){let r=this||e,f=arguments[0];if(f){d&&d.transferEventName&&(f=d.transferEventName(f));let v=ne[f];if(v){let w=v[le],y=v[ae],O=r[w],N=r[y];if(O){let M=O.slice();for(let V=0;V<M.length;V++){let z=M[V],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options);}}if(N){let M=N.slice();for(let V=0;V<M.length;V++){let z=M[V],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options);}}}}else{let v=Object.keys(r);for(let w=0;w<v.length;w++){let y=v[w],O=it.exec(y),N=O&&O[1];N&&N!=="removeListener"&&this[T].call(this,N);}this[T].call(this,"removeListener");}if(G)return this;},fe(m[c],R),fe(m[l],b),J&&fe(m[T],J),C&&fe(m[_],C),!0;}let q=[];for(let k=0;k<a.length;k++)q[k]=K(a[k],n);return q;}function lt(e,t){if(!t){let l=[];for(let _ in e){let T=it.exec(_),p=T&&T[1];if(p&&(!t||p===t)){let S=e[_];if(S)for(let E=0;E<S.length;E++)l.push(S[E]);}}return l;}let a=ne[t];a||(at(t),a=ne[t]);let n=e[a[le]],c=e[a[ae]];return n?c?n.concat(c):n.slice():c?c.slice():[];}function Rt(e,t){let a=e.Event;a&&a.prototype&&t.patchMethod(a.prototype,"stopImmediatePropagation",n=>function(c,l){c[ct]=!0,n&&n.apply(c,l);});}function wt(e,t){t.patchMethod(e,"queueMicrotask",a=>function(n,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0]);});}var we=j("zoneTask");function me(e,t,a,n){let c=null,l=null;t+=n,a+=n;let _={};function T(S){let E=S.data;E.args[0]=function(){return S.invoke.apply(this,arguments);};let P=c.apply(e,E.args);return Qe(P)?E.handleId=P:(E.handle=P,E.isRefreshable=Je(P.refresh)),S;}function p(S){let{handle:E,handleId:P}=S.data;return l.call(e,E??P);}c=ue(e,t,S=>function(E,P){if(Je(P[0])){let L={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?P[1]||0:void 0,args:P},H=P[0];P[0]=function(){try{return H.apply(this,arguments);}finally{let{handle:A,handleId:x,isPeriodic:X,isRefreshable:G}=L;!X&&!G&&(x?delete _[x]:A&&(A[we]=null));}};let B=Ge(t,P[0],L,T,p);if(!B)return B;let{handleId:$,handle:K,isRefreshable:q,isPeriodic:k}=B.data;if($)_[$]=B;else if(K&&(K[we]=B,q&&!k)){let d=K.refresh;K.refresh=function(){let{zone:A,state:x}=B;return x==="notScheduled"?(B._state="scheduled",A._updateTaskCount(B,1)):x==="running"&&(B._state="scheduling"),d.call(this);};}return K??$??B;}else return S.apply(e,P);}),l=ue(e,a,S=>function(E,P){let L=P[0],H;Qe(L)?(H=_[L],delete _[L]):(H=L?.[we],H?L[we]=null:H=L),H?.type?H.cancelFn&&H.zone.cancelTask(H):S.apply(e,P);});}function St(e,t){let{isBrowser:a,isMix:n}=t.getGlobalObjects();if(!a&&!n||!e.customElements||!("customElements"in e))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",c);}function Ct(e,t){if(Zone[t.symbol("patchEventTarget")])return;let{eventNames:a,zoneSymbolEventNames:n,TRUE_STR:c,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=t.getGlobalObjects();for(let p=0;p<a.length;p++){let S=a[p],E=S+l,P=S+c,L=_+E,H=_+P;n[S]={},n[S][l]=L,n[S][c]=H;}let T=e.EventTarget;if(!(!T||!T.prototype))return t.patchEventTarget(e,t,[T&&T.prototype]),!0;}function Dt(e,t){t.patchEventPrototype(e,t);}function ut(e,t,a){if(!a||a.length===0)return t;let n=a.filter(l=>l.target===e);if(!n||n.length===0)return t;let c=n[0].ignoreProperties;return t.filter(l=>c.indexOf(l)===-1);}function et(e,t,a,n){if(!e)return;let c=ut(e,t,a);ot(e,c,n);}function Ze(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2));}function Ot(e,t){if(De&&!rt||Zone[e.symbol("patchEvents")])return;let a=t.__Zone_ignore_on_properties,n=[];if(ze){let c=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=kt()?[{target:c,ignoreProperties:["error"]}]:[];et(c,Ze(c),a&&a.concat(l),je(c));}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<n.length;c++){let l=t[n[c]];l&&l.prototype&&et(l.prototype,Ze(l.prototype),a);}}function Nt(e){e.__load_patch("legacy",t=>{let a=t[e.__symbol__("legacyPatch")];a&&a();}),e.__load_patch("timers",t=>{let a="set",n="clear";me(t,a,n,"Timeout"),me(t,a,n,"Interval"),me(t,a,n,"Immediate");}),e.__load_patch("requestAnimationFrame",t=>{me(t,"request","cancel","AnimationFrame"),me(t,"mozRequest","mozCancel","AnimationFrame"),me(t,"webkitRequest","webkitCancel","AnimationFrame");}),e.__load_patch("blocking",(t,a)=>{let n=["alert","prompt","confirm"];for(let c=0;c<n.length;c++){let l=n[c];ue(t,l,(_,T,p)=>function(S,E){return a.current.run(_,t,E,p);});}}),e.__load_patch("EventTarget",(t,a,n)=>{Dt(t,n),Ct(t,n);let c=t.XMLHttpRequestEventTarget;c&&c.prototype&&n.patchEventTarget(t,n,[c.prototype]);}),e.__load_patch("MutationObserver",(t,a,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver");}),e.__load_patch("IntersectionObserver",(t,a,n)=>{ve("IntersectionObserver");}),e.__load_patch("FileReader",(t,a,n)=>{ve("FileReader");}),e.__load_patch("on_property",(t,a,n)=>{Ot(n,t);}),e.__load_patch("customElements",(t,a,n)=>{St(t,n);}),e.__load_patch("XHR",(t,a)=>{S(t);let n=j("xhrTask"),c=j("xhrSync"),l=j("xhrListener"),_=j("xhrScheduled"),T=j("xhrURL"),p=j("xhrErrorBeforeScheduled");function S(E){let P=E.XMLHttpRequest;if(!P)return;let L=P.prototype;function H(R){return R[n];}let B=L[Me],$=L[Le];if(!B){let R=E.XMLHttpRequestEventTarget;if(R){let b=R.prototype;B=b[Me],$=b[Le];}}let K="readystatechange",q="scheduled";function k(R){let b=R.data,C=b.target;C[_]=!1,C[p]=!1;let J=C[l];B||(B=C[Me],$=C[Le]),J&&$.call(C,K,J);let W=C[l]=()=>{if(C.readyState===C.DONE)if(!b.aborted&&C[_]&&R.state===q){let s=C[a.__symbol__("loadfalse")];if(C.status!==0&&s&&s.length>0){let i=R.invoke;R.invoke=function(){let o=C[a.__symbol__("loadfalse")];for(let g=0;g<o.length;g++)o[g]===R&&o.splice(g,1);!b.aborted&&R.state===q&&i.call(R);},s.push(R);}else R.invoke();}else!b.aborted&&C[_]===!1&&(C[p]=!0);};return B.call(C,K,W),C[n]||(C[n]=R),U.apply(C,b.args),C[_]=!0,R;}function d(){}function A(R){let b=R.data;return b.aborted=!0,D.apply(b.target,b.args);}let x=ue(L,"open",()=>function(R,b){return R[c]=b[2]==!1,R[T]=b[1],x.apply(R,b);}),X="XMLHttpRequest.send",G=j("fetchTaskAborting"),m=j("fetchTaskScheduling"),U=ue(L,"send",()=>function(R,b){if(a.current[m]===!0||R[c])return U.apply(R,b);{let C={target:R,url:R[T],isPeriodic:!1,args:b,aborted:!1},J=Ge(X,d,C,k,A);R&&R[p]===!0&&!C.aborted&&J.state===q&&J.invoke();}}),D=ue(L,"abort",()=>function(R,b){let C=H(R);if(C&&typeof C.type=="string"){if(C.cancelFn==null||C.data&&C.data.aborted)return;C.zone.cancelTask(C);}else if(a.current[G]===!0)return D.apply(R,b);});}}),e.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&mt(t.navigator.geolocation,["getCurrentPosition","watchPosition"]);}),e.__load_patch("PromiseRejectionEvent",(t,a)=>{function n(c){return function(l){lt(t,c).forEach(T=>{let p=t.PromiseRejectionEvent;if(p){let S=new p(c,{promise:l.promise,reason:l.rejection});T.invoke(S);}});};}t.PromiseRejectionEvent&&(a[j("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),a[j("rejectionHandledHandler")]=n("rejectionhandled"));}),e.__load_patch("queueMicrotask",(t,a,n)=>{wt(t,n);});}function Mt(e){e.__load_patch("ZoneAwarePromise",(t,a,n)=>{let c=Object.getOwnPropertyDescriptor,l=Object.defineProperty;function _(h){if(h&&h.toString===Object.prototype.toString){let u=h.constructor&&h.constructor.name;return(u||"")+": "+JSON.stringify(h);}return h?h.toString():Object.prototype.toString.call(h);}let T=n.symbol,p=[],S=t[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,E=T("Promise"),P=T("then"),L="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){let u=h&&h.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(h);}},n.microtaskDrainDone=()=>{for(;p.length;){let h=p.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h;});}catch(u){B(u);}}};let H=T("unhandledPromiseRejectionHandler");function B(h){n.onUnhandledError(h);try{let u=a[H];typeof u=="function"&&u.call(this,h);}catch{}}function $(h){return h&&h.then;}function K(h){return h;}function q(h){return Z.reject(h);}let k=T("state"),d=T("value"),A=T("finally"),x=T("parentPromiseValue"),X=T("parentPromiseState"),G="Promise.then",m=null,U=!0,D=!1,R=0;function b(h,u){return r=>{try{I(h,u,r);}catch(f){I(h,!1,f);}};}let C=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments));};};},J="Promise resolved with itself",W=T("currentTaskTrace");function I(h,u,r){let f=C();if(h===r)throw new TypeError(J);if(h[k]===m){let v=null;try{(typeof r=="object"||typeof r=="function")&&(v=r&&r.then);}catch(w){return f(()=>{I(h,!1,w);})(),h;}if(u!==D&&r instanceof Z&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==m)i(r),I(h,r[k],r[d]);else if(u!==D&&typeof v=="function")try{v.call(r,f(b(h,u)),f(b(h,!1)));}catch(w){f(()=>{I(h,!1,w);})();}else{h[k]=u;let w=h[d];if(h[d]=r,h[A]===A&&u===U&&(h[k]=h[X],h[d]=h[x]),u===D&&r instanceof Error){let y=a.currentTask&&a.currentTask.data&&a.currentTask.data[L];y&&l(r,W,{configurable:!0,enumerable:!1,writable:!0,value:y});}for(let y=0;y<w.length;)o(h,w[y++],w[y++],w[y++],w[y++]);if(w.length==0&&u==D){h[k]=R;let y=r;try{throw new Error("Uncaught (in promise): "+_(r)+(r&&r.stack?`
`+r.stack:""));}catch(O){y=O;}S&&(y.throwOriginal=!0),y.rejection=r,y.promise=h,y.zone=a.current,y.task=a.currentTask,p.push(y),n.scheduleMicroTask();}}}return h;}let s=T("rejectionHandledHandler");function i(h){if(h[k]===R){try{let u=a[s];u&&typeof u=="function"&&u.call(this,{rejection:h[d],promise:h});}catch{}h[k]=D;for(let u=0;u<p.length;u++)h===p[u].promise&&p.splice(u,1);}}function o(h,u,r,f,v){i(h);let w=h[k],y=w?typeof f=="function"?f:K:typeof v=="function"?v:q;u.scheduleMicroTask(G,()=>{try{let O=h[d],N=!!r&&A===r[A];N&&(r[x]=O,r[X]=w);let M=u.run(y,void 0,N&&y!==q&&y!==K?[]:[O]);I(r,!0,M);}catch(O){I(r,!1,O);}},r);}let g="function ZoneAwarePromise() { [native code] }",F=function(){},ee=t.AggregateError;class Z{static toString(){return g;}static resolve(u){return u instanceof Z?u:I(new this(null),U,u);}static reject(u){return I(new this(null),D,u);}static withResolvers(){let u={};return u.promise=new Z((r,f)=>{u.resolve=r,u.reject=f;}),u;}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new ee([],"All promises were rejected"));let r=[],f=0;try{for(let y of u)f++,r.push(Z.resolve(y));}catch{return Promise.reject(new ee([],"All promises were rejected"));}if(f===0)return Promise.reject(new ee([],"All promises were rejected"));let v=!1,w=[];return new Z((y,O)=>{for(let N=0;N<r.length;N++)r[N].then(M=>{v||(v=!0,y(M));},M=>{w.push(M),f--,f===0&&(v=!0,O(new ee(w,"All promises were rejected")));});});}static race(u){let r,f,v=new this((O,N)=>{r=O,f=N;});function w(O){r(O);}function y(O){f(O);}for(let O of u)$(O)||(O=this.resolve(O)),O.then(w,y);return v;}static all(u){return Z.allWithCallback(u);}static allSettled(u){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})});}static allWithCallback(u,r){let f,v,w=new this((M,V)=>{f=M,v=V;}),y=2,O=0,N=[];for(let M of u){$(M)||(M=this.resolve(M));let V=O;try{M.then(z=>{N[V]=r?r.thenCallback(z):z,y--,y===0&&f(N);},z=>{r?(N[V]=r.errorCallback(z),y--,y===0&&f(N)):v(z);});}catch(z){v(z);}y++,O++;}return y-=2,y===0&&f(N),w;}constructor(u){let r=this;if(!(r instanceof Z))throw new Error("Must be an instanceof Promise.");r[k]=m,r[d]=[];try{let f=C();u&&u(f(b(r,U)),f(b(r,D)));}catch(f){I(r,!1,f);}}get[Symbol.toStringTag](){return"Promise";}get[Symbol.species](){return Z;}then(u,r){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||Z);let v=new f(F),w=a.current;return this[k]==m?this[d].push(w,v,u,r):o(this,w,v,u,r),v;}catch(u){return this.then(null,u);}finally(u){let r=this.constructor?.[Symbol.species];(!r||typeof r!="function")&&(r=Z);let f=new r(F);f[A]=A;let v=a.current;return this[k]==m?this[d].push(v,f,u,u):o(this,v,f,u,u),f;}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;let he=t[E]=t.Promise;t.Promise=Z;let _e=T("thenPatched");function Q(h){let u=h.prototype,r=c(u,"then");if(r&&(r.writable===!1||!r.configurable))return;let f=u.then;u[P]=f,h.prototype.then=function(v,w){return new Z((O,N)=>{f.call(this,O,N);}).then(v,w);},h[_e]=!0;}n.patchThen=Q;function Ee(h){return function(u,r){let f=h.apply(u,r);if(f instanceof Z)return f;let v=f.constructor;return v[_e]||Q(v),f;};}return he&&(Q(he),ue(t,"fetch",h=>Ee(h))),Promise[a.__symbol__("uncaughtPromiseErrors")]=p,Z;});}function Lt(e){e.__load_patch("toString",t=>{let a=Function.prototype.toString,n=j("OriginalDelegate"),c=j("Promise"),l=j("Error"),_=function(){if(typeof this=="function"){let E=this[n];if(E)return typeof E=="function"?a.call(E):Object.prototype.toString.call(E);if(this===Promise){let P=t[c];if(P)return a.call(P);}if(this===Error){let P=t[l];if(P)return a.call(P);}}return a.call(this);};_[n]=a,Function.prototype.toString=_;let T=Object.prototype.toString,p="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?p:T.call(this);};});}function It(e,t,a,n,c){let l=Zone.__symbol__(n);if(t[l])return;let _=t[l]=t[n];t[n]=function(T,p,S){return p&&p.prototype&&c.forEach(function(E){let P=`${a}.${n}::`+E,L=p.prototype;try{if(L.hasOwnProperty(E)){let H=e.ObjectGetOwnPropertyDescriptor(L,E);H&&H.value?(H.value=e.wrapWithCurrentZone(H.value,P),e._redefineProperty(p.prototype,E,H)):L[E]&&(L[E]=e.wrapWithCurrentZone(L[E],P));}else L[E]&&(L[E]=e.wrapWithCurrentZone(L[E],P));}catch{}}),_.call(t,T,p,S);},e.attachOriginToPatched(t[n],_);}function Zt(e){e.__load_patch("util",(t,a,n)=>{let c=Ze(t);n.patchOnProperties=ot,n.patchMethod=ue,n.bindArguments=Ve,n.patchMacroTask=pt;let l=a.__symbol__("BLACK_LISTED_EVENTS"),_=a.__symbol__("UNPATCHED_EVENTS");t[_]&&(t[l]=t[_]),t[l]&&(a[l]=a[_]=t[l]),n.patchEventPrototype=Rt,n.patchEventTarget=Pt,n.isIEOrEdge=vt,n.ObjectDefineProperty=Ae,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=Et,n.ArraySlice=Tt,n.patchClass=ve,n.wrapWithCurrentZone=Fe,n.filterProperties=ut,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=It,n.getGlobalObjects=()=>({globalSources:st,zoneSymbolEventNames:ne,eventNames:c,isBrowser:ze,isMix:rt,isNode:De,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:He,REMOVE_EVENT_LISTENER_STR:xe});});}function At(e){Mt(e),Lt(e),Zt(e);}var ft=_t();At(ft);Nt(ft);(globalThis.$localize??={}).locale="da";/**i18n:2c51f871af6dcd0508a5537a6235f52dc8601890c7ebb0e235dd515078cf6bbc*/