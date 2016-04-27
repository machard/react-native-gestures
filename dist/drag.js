Object.defineProperty(exports,"__esModule",{value:true});exports.transducer=exports.responder=undefined;var _transducers=require('transducers.js');var _oneFinger=require('./responder/oneFinger');var _oneFinger2=_interopRequireDefault(_oneFinger);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var responder=exports.responder=_oneFinger2.default;

var transducer=exports.transducer=(0,_transducers.map)(function(gesture){
var layout=gesture.get('initialLayout').set('rotate',0);
var initialTouch=gesture.get('initialTouches').get(0);
var currentTouch=gesture.get('touches').get(0);

return layout.withMutations(function(l){
return l.
set('x',l.get('x')+(
currentTouch.get('pageX')-initialTouch.get('pageX'))).
set('y',l.get('y')+(
currentTouch.get('pageY')-initialTouch.get('pageY')));}).
toJS();});