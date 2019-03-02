window.__require=function t(e,r,i){function o(s,n){if(!r[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!n&&h)return h(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+s+"'")}}var d=r[s]={exports:{}};e[s][0].call(d.exports,function(t){return o(e[s][1][t]||t)},d,d.exports,t,e,r,i)}return r[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<i.length;s++)o(i[s]);return o}({Car:[function(t,e,r){"use strict";cc._RF.push(e,"9b969UUMNxITompQe2ABocP","Car"),Object.defineProperty(r,"__esModule",{value:!0});var i=t("./Tire"),o=cc._decorator,c=o.ccclass,s=o.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.keys=[],e.velX=0,e.velY=0,e.accX=0,e.accY=0,e.rad=0,e.MAXRAD=.1,e.RADINTERVAL=.02,e.currentRad=0,e.camera=null,e.tires=[],e._showTire=!1,e.tirePrefab=null,e}return __extends(e,t),Object.defineProperty(e.prototype,"showTire",{get:function(){return this._showTire},set:function(t){t!==this._showTire&&(this._showTire=t,t?this.addTire():this.deleteTire())},enumerable:!0,configurable:!0}),e.prototype.start=function(){this.node.zIndex=100,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.update=function(t){this.node.rotation=180*this.rad/Math.PI,this.velX*=.95,this.velY*=.95,this.velX+=this.accX,this.velY+=this.accY,this.node.x+=this.velX,this.node.y+=this.velY,this.camera.x=this.node.x,this.camera.y=this.node.y,this.moveCar(),this.showTire&&this.tires.forEach(function(t){t.updatePosition()})},e.prototype.moveCar=function(){if(this.keys[cc.macro.KEY.w]){var t=.8*Math.sin(this.rad),e=.8*Math.cos(this.rad);this.accX=t,this.accY=e}else this.accX=this.accY=0;if(this.keys[cc.macro.KEY.a]?(this.currentRad<this.MAXRAD&&(this.currentRad+=this.RADINTERVAL,this.currentRad>this.MAXRAD&&(this.currentRad=this.MAXRAD)),this.rad-=this.currentRad,this.showTire=!0):this.currentRad>0&&!this.keys[cc.macro.KEY.d]&&(this.currentRad-=this.RADINTERVAL,this.currentRad<0&&(this.currentRad=0,this.showTire=!1),this.rad-=this.currentRad),this.keys[cc.macro.KEY.d]?(this.currentRad<this.MAXRAD&&(this.currentRad+=this.RADINTERVAL,this.currentRad>this.MAXRAD&&(this.currentRad=this.MAXRAD)),cc.log(this.currentRad),this.rad+=this.currentRad,this.showTire=!0):this.currentRad>0&&!this.keys[cc.macro.KEY.a]&&(this.currentRad-=this.RADINTERVAL,this.currentRad<0&&(this.currentRad=0,this.showTire=!1),this.rad+=this.currentRad),this.keys[cc.macro.KEY.s]){t=.05*Math.sin(this.rad)*-1,e=.05*Math.cos(this.rad)*-1;this.accX=t,this.accY=e}},e.prototype.onKeyDown=function(t){this.keys[t.keyCode]=!0},e.prototype.onKeyUp=function(t){this.keys[t.keyCode]=!1},e.prototype.addTire=function(){this.tires.length>0&&this.deleteTire();for(var t=0;t<2;t++){var e=cc.instantiate(this.tirePrefab);e.zIndex=this.node.zIndex-1,e.parent=this.node.parent;var r=e.getComponent(i.default);r.target=this.node,r.type=t,this.tires.push(r)}},e.prototype.deleteTire=function(){this.tires.forEach(function(t){t.delayDestroy()}),this.tires=[]},__decorate([s(cc.Float)],e.prototype,"MAXRAD",void 0),__decorate([s(cc.Float)],e.prototype,"RADINTERVAL",void 0),__decorate([s(cc.Float)],e.prototype,"currentRad",void 0),__decorate([s(cc.Node)],e.prototype,"camera",void 0),__decorate([s([i.default])],e.prototype,"tires",void 0),__decorate([s(cc.Prefab)],e.prototype,"tirePrefab",void 0),e=__decorate([c],e)}(cc.Component);r.default=n,cc._RF.pop()},{"./Tire":"Tire"}],Tire:[function(t,e,r){"use strict";cc._RF.push(e,"c87f8nm0jdFVYdmtPND8LHE","Tire"),Object.defineProperty(r,"__esModule",{value:!0});var i=cc._decorator,o=i.ccclass,c=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e.targetPrevPosition=cc.Vec2.ZERO,e.type=0,e.angle=5,e.distance=50,e}return __extends(e,t),e.prototype.updatePosition=function(){if(null!==this.target){var t=cc.Vec2.UP.rotate(-Math.PI/180*this.target.rotation).normalize(),e=new cc.Vec2(-t.x,-t.y).rotate(0==this.type?-Math.PI/180*this.angle:Math.PI/180*this.angle);this.node.position=this.target.position.add(e.mul(this.distance))}},e.prototype.delayDestroy=function(){var t=this;this.node.runAction(cc.sequence(cc.delayTime(10),cc.callFunc(function(){t.node.destroy()},this)))},__decorate([c(cc.Node)],e.prototype,"target",void 0),__decorate([c(cc.Integer)],e.prototype,"type",void 0),__decorate([c(cc.Float)],e.prototype,"angle",void 0),__decorate([c(cc.Float)],e.prototype,"distance",void 0),e=__decorate([o],e)}(cc.Component);r.default=s,cc._RF.pop()},{}]},{},["Car","Tire"]);