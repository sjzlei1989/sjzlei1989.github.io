window.__require=function t(e,o,i){function c(n,s){if(!o[n]){if(!e[n]){var a=n.split("/");if(a=a[a.length-1],!e[a]){var d="function"==typeof __require&&__require;if(!s&&d)return d(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+n+"'")}}var h=o[n]={exports:{}};e[n][0].call(h.exports,function(t){return c(e[n][1][t]||t)},h,h.exports,t,e,o,i)}return o[n].exports}for(var r="function"==typeof __require&&__require,n=0;n<i.length;n++)c(i[n]);return c}({Cam:[function(t,e,o){"use strict";cc._RF.push(e,"3eb4fqG/S5GcoqqVu5wY1iC","Cam"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,r=i.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e}return __extends(e,t),e.prototype.update=function(t){this.node.position=this.target.position},__decorate([r(cc.Node)],e.prototype,"target",void 0),e=__decorate([c],e)}(cc.Component);o.default=n,cc._RF.pop()},{}],Car:[function(t,e,o){"use strict";cc._RF.push(e,"9b969UUMNxITompQe2ABocP","Car"),Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Tire"),c=cc._decorator,r=c.ccclass,n=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.keys=[],e.velX=0,e.velY=0,e.accX=0,e.accY=0,e.rad=0,e.MAXRAD=.1,e.RADINTERVAL=.02,e.currentRad=0,e.leftRad=0,e.rightRad=0,e.tires=[],e.tirePrefab=null,e.body=null,e}return __extends(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0},e.prototype.start=function(){this.node.zIndex=100,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.update=function(t){this.node.rotation=180*this.rad/Math.PI,this.velX*=.95,this.velY*=.95,this.velX+=this.accX,this.velY+=this.accY,this.body.linearVelocity=new cc.Vec2(20*this.velX,20*this.velY),this.moveCar(),this.tires.forEach(function(t){t.updatePosition()})},e.prototype.moveCar=function(){if(this.keys[cc.macro.KEY.w]){var t=3*Math.sin(this.rad),e=3*Math.cos(this.rad);this.accX=t,this.accY=e}else this.accX=this.accY=0;if(this.keys[cc.macro.KEY.a]?(this.leftRad<this.MAXRAD&&(this.leftRad+=this.RADINTERVAL,this.leftRad>this.MAXRAD&&(this.leftRad=this.MAXRAD)),this.rad-=this.leftRad):this.leftRad>0&&!this.keys[cc.macro.KEY.d]&&(this.leftRad-=this.RADINTERVAL,this.leftRad<0&&(this.leftRad=0),this.rad-=this.leftRad),this.keys[cc.macro.KEY.d]?(this.rightRad<this.MAXRAD&&(this.rightRad+=this.RADINTERVAL,this.rightRad>this.MAXRAD&&(this.rightRad=this.MAXRAD)),this.rad+=this.rightRad):this.rightRad>0&&!this.keys[cc.macro.KEY.a]&&(this.rightRad-=this.RADINTERVAL,this.rightRad<0&&(this.rightRad=0),this.rad+=this.rightRad),this.keys[cc.macro.KEY.s]){t=.05*Math.sin(this.rad)*-1,e=.05*Math.cos(this.rad)*-1;this.accX=t,this.accY=e}},e.prototype.onKeyDown=function(t){this.keys[t.keyCode]=!0},e.prototype.onKeyUp=function(t){this.keys[t.keyCode]=!1},e.prototype.addTire=function(){this.tires.length>0&&this.deleteTire();for(var t=0;t<2;t++){var e=cc.instantiate(this.tirePrefab);e.zIndex=this.node.zIndex-1,e.parent=this.node.parent;var o=e.getComponent(i.default);o.target=this.node,o.type=t,this.tires.push(o)}},e.prototype.deleteTire=function(){this.tires.forEach(function(t){t.delayDestroy()}),this.tires=[]},__decorate([n(cc.Float)],e.prototype,"MAXRAD",void 0),__decorate([n(cc.Float)],e.prototype,"RADINTERVAL",void 0),__decorate([n([i.default])],e.prototype,"tires",void 0),__decorate([n(cc.Prefab)],e.prototype,"tirePrefab",void 0),__decorate([n(cc.RigidBody)],e.prototype,"body",void 0),e=__decorate([r],e)}(cc.Component);o.default=s,cc._RF.pop()},{"./Tire":"Tire"}],Tire:[function(t,e,o){"use strict";cc._RF.push(e,"c87f8nm0jdFVYdmtPND8LHE","Tire"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,r=i.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e.targetPrevPosition=cc.Vec2.ZERO,e.type=0,e.angle=5,e.distance=50,e}return __extends(e,t),e.prototype.updatePosition=function(){if(null!==this.target){var t=cc.Vec2.UP.rotate(-Math.PI/180*this.target.rotation).normalize(),e=new cc.Vec2(-t.x,-t.y).rotate(0==this.type?-Math.PI/180*this.angle:Math.PI/180*this.angle);this.node.position=this.target.position.add(e.mul(this.distance))}},e.prototype.delayDestroy=function(){var t=this;this.node.runAction(cc.sequence(cc.delayTime(10),cc.callFunc(function(){t.node.destroy()},this)))},__decorate([r(cc.Node)],e.prototype,"target",void 0),__decorate([r(cc.Integer)],e.prototype,"type",void 0),__decorate([r(cc.Float)],e.prototype,"angle",void 0),__decorate([r(cc.Float)],e.prototype,"distance",void 0),e=__decorate([c],e)}(cc.Component);o.default=n,cc._RF.pop()},{}],Wall:[function(t,e,o){"use strict";cc._RF.push(e,"f9c010ggkJJ47eiw10qgCtx","Wall"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,r=i.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.left=null,e.right=null,e}return __extends(e,t),e.prototype.init=function(){this.left.x=-(cc.winSize.width/2+5),this.right.x=cc.winSize.width/2-5},e.prototype.updatePosition=function(t){this.left.y=this.right.y=t.y,this.left.getComponent(cc.RigidBody).syncPosition(!0),this.right.getComponent(cc.RigidBody).syncPosition(!0)},__decorate([r(cc.Node)],e.prototype,"left",void 0),__decorate([r(cc.Node)],e.prototype,"right",void 0),e=__decorate([c],e)}(cc.Component);o.default=n,cc._RF.pop()},{}],test:[function(t,e,o){"use strict";cc._RF.push(e,"ce931TJfAZPQJ1AE7hL4tqu","test"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,r=i.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.body=null,e.isMove=!1,e}return __extends(e,t),e.prototype.onLoad=function(){var t=this;cc.director.getPhysicsManager().enabled=!0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){e.keyCode===cc.macro.KEY.a&&(t.body.applyAngularImpulse(1e3,!0),cc.log("aaaaaaaaaaa")),e.keyCode===cc.macro.KEY.d&&(t.body.applyAngularImpulse(-1e3,!0),cc.log("dddddddddddd")),e.keyCode===cc.macro.KEY.w&&(t.body.applyForce(cc.Vec2.UP.mul(1e3),t.node.position,!0),cc.log("wwwwwwwwwwwwwwww"))},this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(t){},this)},e.prototype.update=function(t){this.isMove&&this.node.y--},__decorate([r(cc.RigidBody)],e.prototype,"body",void 0),e=__decorate([c],e)}(cc.Component);o.default=n,cc._RF.pop()},{}]},{},["Cam","Car","Tire","Wall","test"]);