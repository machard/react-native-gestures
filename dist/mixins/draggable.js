var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};Object.defineProperty(exports,"__esModule",{value:true});exports.default=





draggableMixin;var _rx=require('rx');var _rx2=_interopRequireDefault(_rx);var _create=require('../create');var _create2=_interopRequireDefault(_create);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function yes(){return true;}function draggableMixin(gestureDefs){
gestureDefs=gestureDefs||[];

var target;
var layout;

var getInitialLayout=function(){return layout;};
var isCurrentTarget=function(ev){return ev.target===target;};

return {
componentWillMount:function(){
var onDragStart=new _rx2.default.Subject();
var onDragMove=new _rx2.default.Subject();
var onDragRelease=new _rx2.default.Subject();

this.
onLayout.
take(1).
subscribe(function(ev){return target=ev.target;});

this.
onLayout.
subscribe(function(ev){return layout=ev.layout;});

var draggable={
onDragStart:onDragStart.filter(isCurrentTarget),
onDragMove:onDragMove.filter(isCurrentTarget).map(function(evt){
return _extends({},evt,{touches:evt.touches.filter(function(touche){return isCurrentTarget(touche);})});}),

onDragRelease:onDragRelease.filter(isCurrentTarget)};


this.gestureResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:yes,
onStartShouldSetPanResponderCapture:yes,
onMoveShouldSetPanResponder:yes,
onMoveShouldSetPanResponderCapture:yes,
onPanResponderGrant:function(evt){return onDragStart.onNext(evt.nativeEvent);},
onPanResponderMove:function(evt,gestureState){return onDragMove.onNext(evt.nativeEvent);},
onPanResponderStart:function(evt){return onDragMove.onNext(evt.nativeEvent);},
onPanResponderEnd:function(evt){return onDragMove.onNext(evt.nativeEvent);},
onPanResponderTerminationRequest:yes,
onPanResponderRelease:function(evt){return onDragRelease.onNext(evt.nativeEvent);},
onPanResponderTerminate:yes,
onShouldBlockNativeResponder:yes});


if(this.props&&this.props.gestures){
gestureDefs=gestureDefs.concat(this.props.gestures);}


this.layoutStream=_rx2.default.
Observable.
merge(gestureDefs.map(function(def){return (
(0,_create2.default)(def.responder,def.transducer,getInitialLayout,draggable));}));}};}