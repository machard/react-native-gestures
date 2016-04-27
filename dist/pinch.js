Object.defineProperty(exports,"__esModule",{value:true});exports.transducer=exports.responder=undefined;var _twoFinger=require('./responder/twoFinger');var _twoFinger2=_interopRequireDefault(_twoFinger);var _transducers=require('transducers.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var responder=exports.responder=_twoFinger2.default;

var transducer=exports.transducer=(0,_transducers.map)(function(gesture){
var layout=gesture.get('initialLayout');
var startX=layout.get('x');
var startY=layout.get('y');
var startWidth=layout.get('width');
var startHeight=layout.get('height');
var newHeight=startHeight+gesture.get('increasedDistance');
var scale=newHeight/startHeight;
var newWidth=startWidth*scale;
var xWidthDiff=(newWidth-startWidth)/2;
var yHeightDiff=(newHeight-startHeight)/2;

return {
x:startX-gesture.getIn(['centerDiff','x'])-xWidthDiff,
y:startY-gesture.getIn(['centerDiff','y'])-yHeightDiff,
width:newWidth,
height:newHeight,
rotate:gesture.get('angleChanged')};});