var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};Object.defineProperty(exports,"__esModule",{value:true});var _events=require('./mixins/events');var _events2=_interopRequireDefault(_events);var _draggable=require('./mixins/draggable');var _draggable2=_interopRequireDefault(_draggable);var _reactNative=require('react-native');var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=






_reactNative2.default.createClass({displayName:'GestureView',
mixins:[(0,_events2.default)(['onLayout']),(0,_draggable2.default)()],

propTypes:{
gestures:_reactNative.PropTypes.array.isRequired,
onError:_reactNative.PropTypes.func.isRequired,
toStyle:_reactNative.PropTypes.func.isRequired,
style:_reactNative.PropTypes.any,
children:_reactNative.PropTypes.array},


componentDidMount:function(){var _this=this;
this.layoutStream.subscribe(
function(layout){return _this.container.setNativeProps({
style:_this.props.toStyle(layout)});},

function(err){return _this.props.onError(err);});},



render:function(){var _this2=this;
var props=_extends({
ref:function(container){return _this2.container=container;},
style:this.props.style,
onLayout:function(_ref){var nativeEvent=_ref.nativeEvent;
_this2.onLayout.onNext(nativeEvent);}},

this.gestureResponder.panHandlers);


return (
_reactNative2.default.createElement(_reactNative.View,props,
this.props.children));}});