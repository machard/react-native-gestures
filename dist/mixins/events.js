var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};Object.defineProperty(exports,"__esModule",{value:true});exports.default=

events;var _rx=require('rx');var _rx2=_interopRequireDefault(_rx);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function events(){var evs=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];

return {
componentWillMount:function(){
this.streams=evs.reduce(function(res,eventName){
res[eventName]=new _rx2.default.Subject();
return res;},
{});
_extends(this,this.streams);},

componentWillUnmount:function(){var _this=this;
evs.forEach(function(ev){return _this.streams[ev].onCompleted();});}};}