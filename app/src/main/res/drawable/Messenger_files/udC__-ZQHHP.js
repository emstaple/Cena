/*!CK:1365153347!*//*1438150723,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["F7HKY"]); }

__d("VideoPlayerController",["Arbiter","AsyncRequest","Banzai","DOM","DOMDimensions","DOMQuery","CSS","EventEmitter","Flash","FullScreen","Run","Map","ScriptPath","SubscriptionsHandler","Promise","JSLogger","JSResource","VideoChannelViewChainLengthManager","VideoPlayerApiEvents","VideoPlayerLogger","VideoPlayerLoggerErrors","VideoPlayerLoggerErrorStates","VideoPlayerLoggerEvents","VideoPlayerInitializationEvents","VideosRenderingInstrumentation","Visibility","VideoMimeTypes","VideoPlayerReason","XVideoLiveViewCountController","XVideoDataController","arrayContains","canVideoPlayType","collectDataAttributes","cx","csx","destroyOnUnload","emptyFunction","getElementPosition","invariant","logVideosClickTracking","mapObject"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua){b.__markCompiled&&b.__markCompiled();for(var va in n)if(n.hasOwnProperty(va))xa[va]=n[va];var wa=n===null?null:n.prototype;xa.prototype=Object.create(wa);xa.prototype.constructor=xa;xa.__superConstructor__=n;function xa(ya,za){"use strict";var ab=ya.video_ids,bb=ya.chaining_token,cb=ya.source,db=ya.ad_client_token,eb=ya.should_autoplay,fb=ya.player_version,gb=ya.autoplay_setting,hb=ya.additional_logdata_getter,ib=ya.apiModule,jb=ya.apiConfig,kb=ya.useInlineFallback,lb=za.root_element,mb=za.container_element,nb=za.video_element;n.call(this);if(eb===(void 0))throw new Error('Must pass should_autoplay to '+this.constructor.name+'!');this.$VideoPlayerController0=new r();this.$VideoPlayerController1=0;this.$VideoPlayerController2=eb;this.$VideoPlayerController3=gb;this.$VideoPlayerController4=db;this.$VideoPlayerController5=nb;this.$VideoPlayerController6=lb;this.$VideoPlayerController7=mb;this.$VideoPlayerController8=false;this.$VideoPlayerController9=false;this.$VideoPlayerControllera=fb;this.$VideoPlayerControllerb=false;this.$VideoPlayerControllerc=false;this.$VideoPlayerControllerd=ab;this.$VideoPlayerControllere=bb;this.$VideoPlayerControllerf=hb||{get:qa};this.$VideoPlayerControllerg=ib;this.$VideoPlayerControllerh=jb;this.$VideoPlayerControlleri=kb;this.$VideoPlayerControllerj=null;this.$VideoPlayerControllerk=null;this.$VideoPlayerControllerl=null;this.$VideoPlayerControllerm=new z(cb);this.collectFeedTrackingData();this.$VideoPlayerControllerm.setScriptPath(s.getScriptPath());var ob=ea.retrieveRenderTime(this.$VideoPlayerController6);this.$VideoPlayerControllern=Date.now()-ob;this.logEvent(da.PLAYER_INITIALIZATION,{time_ms:ob});this.$VideoPlayerControllero=false;this.setState('loading');if(this.$VideoPlayerControllerg.isImplementationUnavailable(this.$VideoPlayerControlleri)){if(this.$VideoPlayerControlleri){this.$VideoPlayerControllerp();}else{this.$VideoPlayerControllerq();return;}}else this.$VideoPlayerControllerr();i.subscribe(i.SHUTDOWN,function(){this.pause('unloaded');}.bind(this));if(this.$VideoPlayerController2)if(fa.isHidden()){fa.once(fa.VISIBLE,function(){this.play(ha.AUTOPLAY);}.bind(this));}else this.play(ha.AUTOPLAY);this.$VideoPlayerControllers=0;this.$VideoPlayerControllert=false;this.$VideoPlayerControlleru=new t();this.$VideoPlayerControlleru.addSubscriptions(g.subscribe('layer_shown',function(pb,qb){if(qb.type==='DialogX'||qb.type==='PhotoSnowlift'){this.$VideoPlayerControllers=this.$VideoPlayerControllers+1;if(this.$VideoPlayerControllers>0)if(this.isState('playing')&&!this.getIsInChannel()){this.pause(ha.PAGE_VISIBILITY);this.$VideoPlayerControllert=true;}}}.bind(this)),g.subscribe('layer_hidden',function(pb,qb){if(qb.type==='DialogX'||qb.type==='PhotoSnowlift'){this.$VideoPlayerControllers=this.$VideoPlayerControllers-1;if(this.$VideoPlayerControllers===0)if(this.$VideoPlayerControllert&&!this.getIsInChannel()){this.play(ha.PAGE_VISIBILITY);this.$VideoPlayerControllert=false;}}}.bind(this)),g.subscribe(v.DUMP_EVENT,function(pb,qb){return this.$VideoPlayerControllerw(pb,qb);}.bind(this)));pa(function(){return this.$VideoPlayerControlleru.release();}.bind(this));q.onLeave(function(){return this.pause('unloaded');}.bind(this));}xa.prototype.$VideoPlayerControllerx=function(){"use strict";var ya=l.scry(this.getVideoNode(),'[data-fallback-markup="1"]');if(!ya.length)return u.reject();j.replace(this.getVideoNode(),ya[0]);this.$VideoPlayerController5=ya[0];return w('VideoPlayerFlashApi').load();};xa.prototype.$VideoPlayerControllerp=function(){"use strict";this.logEvent('switched_implementation',{error_user_info:this.getDebugInfo()});this.$VideoPlayerControllerx().then(function(ya){if(ya.isImplementationUnavailable()){return u.reject();}else return u.resolve(ya);}).done(function(ya){this.$VideoPlayerControllerg=ya;this.$VideoPlayerControllerr();}.bind(this),function(ya){return this.$VideoPlayerControllerq();}.bind(this));};xa.prototype.collectFeedTrackingData=function(){"use strict";this.$VideoPlayerControllerm.setFTData(ma(this.getRootNode(),['ft']));};xa.prototype.$VideoPlayerControllerw=function(ya,za){"use strict";za.video_player_debug_info=za.video_player_debug_info||{};za.video_player_debug_info[this.getVideoID()]=this.getDebugInfo();};xa.prototype.setIsLooping=function(ya){"use strict";if(!this.isState('fallback')&&!this.isState('loading'))this.getVideoAPI().setIsLooping(ya);this.$VideoPlayerControllerc=ya;};xa.prototype.setSphericalViewport=function(ya,za){"use strict";this.getVideoAPI().setSphericalViewport(ya,za);};xa.prototype.setAdditionalLogDataGetter=function(ya){"use strict";this.$VideoPlayerControllerf=ya;};xa.prototype.$VideoPlayerControllerr=function(){"use strict";this.$VideoPlayerControllerg.onImplementationReady(this.getVideoNode(),function(){return this.onApiReady();}.bind(this));};xa.prototype.isImplementationUnavailable=function(){"use strict";return this.$VideoPlayerControllerg.isImplementationUnavailable(this.$VideoPlayerControlleri)&&!this.$VideoPlayerControlleri;};xa.prototype.getIsInChannel=function(){"use strict";return this.$VideoPlayerControllery;};xa.prototype.setIsInChannel=function(ya){"use strict";this.$VideoPlayerControllery=ya;};xa.prototype.$VideoPlayerControllerq=function(){"use strict";var ya={error:aa.ERROR_CALLING_FLASH,state:ba.PLAYER_FAILURE,error_description:'Implementation unavailable',error_user_info:this.getDebugInfo()};this.logEvent(ca.ERROR,ya);this.$VideoPlayerController2=false;};xa.prototype.$VideoPlayerControllerz=function(ya,za,ab){"use strict";var bb={error:ya,error_description:za,error_user_info:this.getDebugInfo(),state:ab?ba.PLAYBACK_FAILURE:ba.PLAYER_FAILURE};this.logEvent(ca.ERROR,bb);if(ab&&this.$VideoPlayerControllero)this.$VideoPlayerControllero=false;if(this.getVideoInfo().isHLS)this.$VideoPlayerControllerA();};xa.prototype.setDimensions=function(ya,za){"use strict";this.$VideoPlayerController7.style.width=ya+'px';this.$VideoPlayerController7.style.height=za+'px';if(this.isState('loading')){this.$VideoPlayerControllerB={width:ya,height:za};}else if(this.getVideoAPI().setDimensions)this.getVideoAPI().setDimensions(ya,za);};xa.prototype.handleFlashApiFactoryError=function(ya,za){"use strict";this.$VideoPlayerControllerz(aa.ERROR_CALLING_FLASH,ya.message,za);};xa.prototype.isPlayRequestPending=function(){"use strict";return this.$VideoPlayerControllero;};xa.prototype.play=function(ya){"use strict";this.$VideoPlayerControllerC();if(!this.$VideoPlayerControllerD)this.$VideoPlayerControllerD=ya;if(!this.$VideoPlayerControllero){this.$VideoPlayerControllerl=this.$VideoPlayerControllerE();var za=this.$VideoPlayerControllerF({debug_reason:ya});this.logEvent(ca.REQUESTED_PLAYING,za);}this.emit('playRequested');this.sendPlayRequest(ya);};xa.prototype.sendPlayRequest=function(ya){"use strict";if(this.isState('fallback')){this.emit('fallbackPlay');return;}this.$VideoPlayerControllero=true;if(this.isState('loading')){this.$VideoPlayerControllerG={reason:ya};}else{if(!this.getVideoAPI().isMuted()&&this.$VideoPlayerControllerH)this.logEvent(ca.UNMUTED);this.$VideoPlayerControllerH=false;this.getVideoAPI().play(ya);}};xa.prototype.getOriginalPlayReason=function(){"use strict";return this.$VideoPlayerControllerD;};xa.prototype.reset=function(){"use strict";if(this.isState('loading')||this.isState('fallback'))return;this.resetPositions();this.$VideoPlayerControllerI();if(this.$VideoPlayerControllerJ&&this.$VideoPlayerControllerJ.destroy)this.$VideoPlayerControllerJ.destroy();this.$VideoPlayerControllerJ=null;this.setState('loading');this.$VideoPlayerControllerr();};xa.prototype.detachRootNode=function(){"use strict";j.remove(this.$VideoPlayerController6);if(this.isState('fallback')||this.isState('loading'))return;this.setState('loading');this.$VideoPlayerControllerg.onImplementationReady(this.getVideoNode(),function(){return this.$VideoPlayerControllerK();}.bind(this));};xa.prototype.cancelPlayRequest=function(){"use strict";if(this.$VideoPlayerControllero){var ya={debug_reason:this.getOriginalPlayReason()};this.$VideoPlayerControllero=false;this.logEvent(ca.CANCELLED_REQUESTED_PLAYING,ya);}};xa.prototype.getVideoAPI=function(){"use strict";return this.$VideoPlayerControllerJ;};xa.prototype.getVideoNode=function(){"use strict";return this.$VideoPlayerController5;};xa.prototype.getRootNode=function(){"use strict";return this.$VideoPlayerController6;};xa.prototype.$VideoPlayerControllerK=function(){"use strict";this.setState('ready');this.getVideoAPI().setIsLooping(this.$VideoPlayerControllerc);this.logEvent(da.PLAYER_ALLOCATED);this.$VideoPlayerControllerL=this.getVideoAPI().isMuted();this.$VideoPlayerControllerH=!this.$VideoPlayerControllerL;if(this.$VideoPlayerControllerG){this.sendPlayRequest(this.$VideoPlayerControllerG.reason);this.$VideoPlayerControllerG=null;}if(this.$VideoPlayerControllerB){this.setDimensions(this.$VideoPlayerControllerB.width,this.$VideoPlayerControllerB.height);this.$VideoPlayerControllerB=null;}if(this.$VideoPlayerControllerM){this.getVideoAPI().unmute();this.$VideoPlayerControllerM=null;}};xa.prototype.onApiReady=function(ya){"use strict";this.$VideoPlayerControllerJ=new this.$VideoPlayerControllerg(this.getVideoNode(),this.$VideoPlayerControllerh);this.logEvent(da.PLAYER_ALLOCATED);this.$VideoPlayerControllerN();this.$VideoPlayerControllerK();var za={is_auto_played:this.isAutoplayable()};if(ya)za.init_delay=ya;this.logEvent(ca.PLAYER_LOADED,za);};xa.prototype.resetPositions=function(){"use strict";this.$VideoPlayerControllerj=null;this.$VideoPlayerControllerk=null;};xa.prototype.getCurrentTimePosition=function(){"use strict";return this.$VideoPlayerControllerj;};xa.prototype.$VideoPlayerControllerC=function(){"use strict";x.registerChainingInfos(this.getVideoID(),this.$VideoPlayerControllere);};xa.prototype.$VideoPlayerControllerO=function(ya){"use strict";var za=ya&&('playing_live' in ya)&&ya.playing_live;if(za==this.$VideoPlayerController9)return;if(za){this.logEvent(ca.PLAYING_LIVE_STARTED);}else this.logEvent(ca.PLAYING_LIVE_STOPPED);this.$VideoPlayerController9=za;this.$VideoPlayerControllerP();m.conditionClass(this.$VideoPlayerController7,"_2vq_",this.$VideoPlayerController9);};xa.prototype.$VideoPlayerControllerP=function(){"use strict";if(this.$VideoPlayerController9&&!this.$VideoPlayerControllerb)this.$VideoPlayerControllerQ(this.$VideoPlayerControllerQ,null);};xa.prototype.$VideoPlayerControllerA=function(){"use strict";this.getVideoAPI().replaceVideoDataFromURL(ja.getURIBuilder().setString('video_id',this.getVideoID()).getURI().toString());};xa.prototype.$VideoPlayerControllerQ=function(ya,za){"use strict";this.$VideoPlayerControllerb=true;setTimeout((function(){var ab=l.scry(this.$VideoPlayerController7,"._5jnq")[0];if(!ab){this.$VideoPlayerControllerb=false;return;}else if(za)j.replace(ab,za);var bb=ia.getURIBuilder().setString('video_id',this.getVideoID()).getURI();this.request=new h().setMethod('GET').setURI(bb).setReadOnly(true).setHandler(function(cb){if(this.$VideoPlayerController9&&this.$VideoPlayerControllerb&&this.isState('playing')){var db=ya.bind(this,ya,cb.payload);db();}else this.$VideoPlayerControllerb=false;}.bind(this)).send();}).bind(this),2000);};xa.prototype.$VideoPlayerControllerR=function(ya){"use strict";this.$VideoPlayerControllerO(ya);var za=ya.position;this.$VideoPlayerControllero=false;if(za!==(void 0))this.$VideoPlayerControllerk=za;this.setState('playing');this.$VideoPlayerControllerP();};xa.prototype.$VideoPlayerControllerS=function(ya){"use strict";this.$VideoPlayerControllerO(ya);var za=ya.position;if(za!==(void 0))this.$VideoPlayerControllerj=za;};xa.prototype.$VideoPlayerControllerT=function(ya){"use strict";var event=ya.event;delete ya.event;this.logEvent(event,ya);};xa.prototype.$VideoPlayerControllerU=function(){"use strict";this.$VideoPlayerControllerO({});this.resetPositions();if(!this.isState('finished'))this.setState('paused');this.$VideoPlayerController9=false;};xa.prototype.$VideoPlayerControllerV=function(){"use strict";var ya=this.$VideoPlayerController9;this.$VideoPlayerControllerO({});this.resetPositions();this.setState('finished');if(ya)this.$VideoPlayerControllerA();};xa.prototype.getVideosCount=function(){"use strict";return this.$VideoPlayerControllerd.length;};xa.prototype.$VideoPlayerControllerW=function(){"use strict";var ya=this.getVideosCount();return (this.$VideoPlayerController1+1)%ya;};xa.prototype.getVolume=function(){"use strict";return this.getVideoAPI().getVolume();};xa.prototype.$VideoPlayerControllerX=function(){"use strict";var ya=this.isFullscreen();m.conditionClass(this.$VideoPlayerController7,"_5gr8",ya);m.conditionClass(this.$VideoPlayerController7,"_52fb",ya);if(!ya&&this.$VideoPlayerControllerY){this.$VideoPlayerControllerY.unsubscribe();this.$VideoPlayerControllerY=null;}if(this.$VideoPlayerControllerZ!=ya){this.logEvent(ya?ca.ENTERED_FS:ca.EXITED_FS);this.emit('toggleFullscreen');if(this.$VideoPlayerControllerL)this.unmute();}this.$VideoPlayerControllerZ=ya;};xa.prototype.isFullscreen=function(){"use strict";return p.isFullScreen()&&this.$VideoPlayerController7===p.getFullScreenElement();};xa.prototype.toggleFullscreen=function(){"use strict";if(p.toggleFullScreen(this.$VideoPlayerController7)){m.addClass(this.$VideoPlayerController7,"_5gr8");this.$VideoPlayerControllerY=p.subscribe('changed',this.$VideoPlayerControllerX.bind(this));}};xa.prototype.$VideoPlayerController10=function(){"use strict";var ya=this.getVideosCount();return (this.$VideoPlayerController1-1+ya)%ya;};xa.prototype.$VideoPlayerController11=function(ya){"use strict";this.logEvent(ca.CAROUSEL_CHANGE,{source_index:this.$VideoPlayerController1,target_index:ya});this.getVideoAPI().switchVideo(ya);this.$VideoPlayerController1=ya;this.emit('switchVideo');};xa.prototype.unmute=function(){"use strict";if(!this.isState('loading')){this.getVideoAPI().unmute();}else this.$VideoPlayerControllerM=true;};xa.prototype.isMuted=function(){"use strict";return this.getVideoAPI().isMuted();};xa.prototype.mute=function(){"use strict";this.getVideoAPI().mute();};xa.prototype.getPlaybackDuration=function(){"use strict";return this.getVideoAPI().getPlaybackDuration();};xa.prototype.getPlaybackPosition=function(){"use strict";return this.$VideoPlayerControllerj||0;};xa.prototype.nextVideo=function(){"use strict";this.$VideoPlayerController11(this.$VideoPlayerControllerW());};xa.prototype.previousVideo=function(){"use strict";this.$VideoPlayerController11(this.$VideoPlayerController10());};xa.prototype.getVideoIndex=function(){"use strict";return this.$VideoPlayerController1;};xa.prototype.getVideoID=function(){"use strict";return this.$VideoPlayerControllerd[this.getVideoIndex()];};xa.prototype.$VideoPlayerControllerN=function(){"use strict";var ya=this.$VideoPlayerControllerJ;this.$VideoPlayerController12=new t();var za=[['buffered',function(){return this.setBuffering(false);}.bind(this)],['buffering',function(){return this.setBuffering(true);}.bind(this)],['beginPlayback',function(bb){return this.$VideoPlayerControllerR(bb);}.bind(this)],['updateStatus',function(bb){return this.$VideoPlayerControllerS(bb);}.bind(this)],['logEvent',function(bb){return this.$VideoPlayerControllerT(bb.logData);}.bind(this)],['unmuteVideo',function(){return this.$VideoPlayerController13();}.bind(this)],['pausePlayback',function(){return this.$VideoPlayerControllerU();}.bind(this)],['clickForTracking',function(){return ta(this.getVideoNode());}.bind(this)],['error',function(bb){return this.$VideoPlayerControllerz(bb.error,bb.message,bb.isPlayback);}.bind(this)],['finishPlayback',function(){return this.$VideoPlayerControllerV();}.bind(this)]],ab=function(event){return this.emit.bind(this,event);}.bind(this);this.$VideoPlayerController12.addSubscriptions.apply(this.$VideoPlayerController12,za.map(function(bb){return ya.addListener.apply(ya,bb);}).concat(y.map(function(event){return ya.addListener(event,ab(event));})));};xa.prototype.$VideoPlayerControllerI=function(){"use strict";if(this.$VideoPlayerController12)this.$VideoPlayerController12.release();};xa.prototype.seek=function(ya){"use strict";this.getVideoAPI().seek(ya);};xa.prototype.pause=function(ya){"use strict";if(this.isState('loading')){this.$VideoPlayerControllerG=null;}else if(this.isState('playing')){this.getVideoAPI().pause(ya);}else if(this.isState('ready'))this.getVideoAPI().pause(ya);this.cancelPlayRequest();};xa.prototype.isPlayerVersion=function(ya){"use strict";return this.$VideoPlayerController14()===ya;};xa.prototype.isAutoplayable=function(){"use strict";return this.$VideoPlayerController2;};xa.prototype.isBuffering=function(){"use strict";return this.$VideoPlayerController8;};xa.prototype.setBuffering=function(ya){"use strict";if(ya!==this.$VideoPlayerController8){this.$VideoPlayerController8=ya;if(this.$VideoPlayerController8){this.$VideoPlayerControllerm.startBuffering();}else this.$VideoPlayerControllerm.endBuffering();}};xa.prototype.setVolume=function(ya){"use strict";this.getVideoAPI().setVolume(ya);};xa.prototype.getDOMPosition=function(){"use strict";return ra(this.getRootNode());};xa.prototype.$VideoPlayerController15=function(){"use strict";var ya=this.getDOMPosition(),za=k.getViewportDimensions().height,ab=null;if(ya.y<=0){ab=ya.y;}else if(ya.y+ya.height<za){ab=0;}else ab=ya.y+ya.height-za;return {viewport_distance:ab,unit_height:ya.height};};xa.prototype.$VideoPlayerController16=function(){"use strict";var ya=o.getVersion();if(ya)ya=ya.join('.');return Object.assign(Object.assign({},this.$VideoPlayerController15(),{ad_client_token:this.$VideoPlayerController4,autoplay_eligible:this.isAutoplayable(),autoplay_setting:this.$VideoPlayerController3,player_version:this.$VideoPlayerController14(),flash_version:ya,video_id:this.getVideoID(),player_state:this.$VideoPlayerController17,video_time_position:this.$VideoPlayerControllerj||0,fbcdn_pop:this.$VideoPlayerControllerl},x.getLoggingData()),this.$VideoPlayerControllerf.get());};xa.prototype.$VideoPlayerControllerE=function(){"use strict";var ya=this.getVideoInfo();if(!ya)return null;var za=ya.resourceUrl,ab=/scontent-([a-z]+)\./.exec(za);if(!ab)return null;return ab[1];};xa.prototype.getVideoInfo=function(){"use strict";if(this.isState('loading')||this.isState('fallback'))return null;return this.getVideoAPI().getVideoInfo();};xa.prototype.getDebugInfo=function(){"use strict";var ya=this.getVideoInfo(),za={initializationTime:this.$VideoPlayerControllern,version:this.$VideoPlayerController14(),stallTime:this.$VideoPlayerControllerm.getCurrentStallTime(),state:this.$VideoPlayerController17,canPlayType:ua(ga,la)},ab={videoID:this.getVideoID()};if(!ya)return {player:za,currentVideo:ab};return {currentVideo:Object.assign({},ab,{isHLS:ya.isHLS,streamType:ya.streamType,isHD:ya.isHD,hasHD:ya.hasHD,resourceUrl:ya.resourceUrl,hasSubtitles:ya.hasSubtitles,hasRateLimit:!!ya.hasUnlimitedSrc,isRateLimited:ya.hasUnlimitedSrc&&!ya.useUnlimitedSrc,tagHD:ya.tagHD,tagSD:ya.tagSD,projection:ya.projection}),player:za};};xa.prototype.hasSubtitles=function(){"use strict";return this.getVideoAPI().hasSubtitles();};xa.prototype.areSubtitlesActive=function(){"use strict";return this.getVideoAPI().areSubtitlesActive();};xa.prototype.toggleSubtitles=function(){"use strict";this.getVideoAPI().toggleSubtitles();if(this.areSubtitlesActive()){this.logEvent(ca.TOGGLE_SUBTITLE_ON);}else this.logEvent(ca.TOGGLE_SUBTITLE_OFF);};xa.prototype.isHD=function(){"use strict";return this.getVideoAPI().isHD();};xa.prototype.hasHD=function(){"use strict";return this.getVideoAPI().hasHD();};xa.prototype.toggleHD=function(){"use strict";this.getVideoAPI().toggleHD();};xa.prototype.$VideoPlayerControllerF=function(ya){"use strict";var za=this.getVideoInfo();if(za!=null)return Object.assign({resource_url:za.resourceUrl,hls:za.isHLS,player_type:za.streamType,hd:za.isHD},ya);return ya;};xa.prototype.logEvent=function(event,ya){"use strict";var za=Object.assign(this.$VideoPlayerController16(),ya),ab=this.getOriginalPlayReason();if(ab&&event!==ca.DISPLAYED)za.video_play_reason=ab;this.$VideoPlayerControllerm.logEvent(event,za);};xa.prototype.setState=function(ya){"use strict";if(this.isState('fallback'))return;this.$VideoPlayerController17=ya;if(this.$VideoPlayerController17==='fallback'){m.addClass(this.getRootNode(),"_3-n5");this.$VideoPlayerControllerI();}this.emit('stateChange');};xa.prototype.isState=function(ya){"use strict";return this.$VideoPlayerController17===ya;};xa.prototype.abortLoading=function(){"use strict";if(this.isState('loading')||this.isState('fallback'))return;this.getVideoAPI().abortLoading();};xa.prototype.preload=function(){"use strict";if(this.isState('loading')||this.isState('fallback'))return;this.getVideoAPI().preload();};xa.prototype.$VideoPlayerController14=function(){"use strict";if(this.$VideoPlayerControllerg.getPlayerVersion){return this.$VideoPlayerControllerg.getPlayerVersion();}else this.$VideoPlayerControllera;};xa.prototype.$VideoPlayerController13=function(){"use strict";this.$VideoPlayerControllerH=false;this.$VideoPlayerControllerL=false;};xa.prototype.registerOption=function(ya,za,ab,bb){"use strict";if(!this.$VideoPlayerController0.has(ya))this.$VideoPlayerController0.set(ya,new r());if(this.$VideoPlayerController0.get(ya).has(za))throw new Error('An option can only be registered once for each component');this.$VideoPlayerController0.get(ya).set(za,{getter:ab,setter:bb});this.emit('optionsChange');};xa.prototype.getComponents=function(){"use strict";return this.$VideoPlayerController0.keys();};xa.prototype.getOptions=function(ya){"use strict";if(this.$VideoPlayerController0.has(ya))return ya.keys();return [];};xa.prototype.getOption=function(ya,za){"use strict";if(!this.$VideoPlayerController0.has(ya))return (void 0);if(!this.$VideoPlayerController0.get(ya).has(za))return (void 0);return this.$VideoPlayerController0.get(ya).get(za).getter();};xa.prototype.setOption=function(ya,za,ab){"use strict";if(!this.$VideoPlayerController0.has(ya))throw new Error('Component not registered');if(!this.$VideoPlayerController0.get(ya).has(za))throw new Error('Option not registered');var bb=this.$VideoPlayerController0.get(ya).get(za).setter;if(bb)return bb(ab);throw new Error('Read-only option');};xa.playerStates=['finished','loading','paused','playing','ready','fallback'];e.exports=xa;},null);