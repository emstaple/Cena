/*!CK:1944259732!*//*1438197740,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3o7fF"]); }

__d("VideoPlaybackControl.react",["React","AbstractButton.react","Image.react","ReactComponentWithPureRenderMixin","cx","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=g,o=n.PropTypes,p=g.createClass({displayName:"PlaybackControl",mixins:[j],propTypes:{isPlaying:o.bool,onPlay:o.func,onPause:o.func,tabIndex:o.string},getInitialState:function(){return {awaitingUpdate:false};},isPlaying:function(){if(this.state.awaitingUpdate)return this.state.isPlayingOverwrite;return this.props.isPlaying;},onButtonClick:function(){var q=this.isPlaying();this.setState({awaitingUpdate:true,isPlayingOverwrite:!q});if(q){this.props.onPause&&this.props.onPause();}else this.props.onPlay&&this.props.onPlay();},componentWillReceiveProps:function(){this.setState({awaitingUpdate:false});},render:function(){var q=this.isPlaying()?m('images/video/player/controls/hq_icons/pause.png'):m('images/video/player/controls/hq_icons/play.png'),r=g.createElement(i,{src:q,className:"_zbc"}),s=(("_zbd")+(' '+"_1fmx")),t=this.isPlaying()?l._("Pause"):l._("Play");return g.createElement(h,{"aria-label":t,tabIndex:this.props.tabIndex,type:"button",image:r,className:s,onClick:this.onButtonClick});}});e.exports=p;},null);