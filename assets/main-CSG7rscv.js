import{$ as e,$n as t,A as n,An as r,Bn as i,D as a,Dt as o,En as s,Et as c,Fn as l,G as u,Gn as d,H as f,Hn as p,In as m,It as h,J as g,Jn as _,K as v,Kn as y,L as b,Ln as x,M as S,Mn as C,Mt as w,N as T,Nn as E,On as D,Ot as O,P as k,Pn as A,Pt as j,Q as ee,Qn as M,Qt as te,Rn as N,Sn as P,St as ne,T as F,Tt as re,U as ie,Un as I,Vn as ae,Vt as oe,W as se,Wn as ce,X as le,Xn as L,Xt as ue,Y as de,Yn as R,Z as z,Zn as B,_n as V,_t as H,a as fe,an as pe,ar as me,at as he,bt as ge,c as _e,cn as ve,cr as ye,ct as be,d as xe,dr as Se,et as Ce,f as we,fn as Te,ft as Ee,gn as De,gt as Oe,h as ke,hn as Ae,ht as je,i as Me,in as Ne,ir as Pe,it as Fe,j as Ie,jn as Le,jt as Re,k as ze,l as Be,lr as Ve,lt as He,mt as Ue,n as We,nr as Ge,nt as Ke,o as qe,on as Je,or as Ye,p as Xe,pt as Ze,q as Qe,qn as $e,qt as et,r as tt,rn as nt,rr as rt,rt as it,s as at,sn as ot,sr as st,t as ct,tr as lt,u as ut,un as dt,ur as ft,ut as pt,vt as mt,w as ht,wt as gt,x as _t,xt as vt,yt,z as bt,zn as xt}from"./Tooltip-BeoShpTu.js";var St=`attached`,Ct=1e3,wt=1001,Tt=1002,Et=1003,Dt=1004,Ot=1005,kt=1006,At=1007,jt=1008,Mt=1009,Nt=1014,Pt=1015,Ft=1016,It=1020,Lt=1023,Rt=1026,zt=1027,Bt=2300,Vt=2301,Ht=2302,Ut=2400,Wt=2401,Gt=2402,Kt=2500,qt=3e3,Jt=3001,Yt=3200,Xt=3201,Zt=`srgb`,Qt=`srgb-linear`,$t=`display-p3`,en=`display-p3-linear`,tn=`linear`,nn=`srgb`,rn=`rec709`,an=7680,on=35044,sn=1035,cn=2e3,ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},un=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),dn=1234567,fn=Math.PI/180,pn=180/Math.PI;function mn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[e&255]+un[e>>8&255]+un[e>>16&255]+un[e>>24&255]+`-`+un[t&255]+un[t>>8&255]+`-`+un[t>>16&15|64]+un[t>>24&255]+`-`+un[n&63|128]+un[n>>8&255]+`-`+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function hn(e,t,n){return Math.max(t,Math.min(n,e))}function gn(e,t){return(e%t+t)%t}function _n(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function vn(e,t,n){return e===t?0:(n-e)/(t-e)}function yn(e,t,n){return(1-n)*e+n*t}function bn(e,t,n,r){return yn(e,t,1-Math.exp(-n*r))}function xn(e,t=1){return t-Math.abs(gn(e,t*2)-t)}function Sn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Cn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function wn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Tn(e,t){return e+Math.random()*(t-e)}function En(e){return e*(.5-Math.random())}function Dn(e){e!==void 0&&(dn=e);let t=dn+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function On(e){return e*fn}function kn(e){return e*pn}function An(e){return!(e&e-1)&&e!==0}function jn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Mn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Nn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Pn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var In={DEG2RAD:fn,RAD2DEG:pn,generateUUID:mn,clamp:hn,euclideanModulo:gn,mapLinear:_n,inverseLerp:vn,lerp:yn,damp:bn,pingpong:xn,smoothstep:Sn,smootherstep:Cn,randInt:wn,randFloat:Tn,randFloatSpread:En,seededRandom:Dn,degToRad:On,radToDeg:kn,isPowerOfTwo:An,ceilPowerOfTwo:jn,floorPowerOfTwo:Mn,setQuaternionFromProperEuler:Nn,normalize:Fn,denormalize:Pn},Ln=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zn.makeScale(e,t)),this}rotate(e){return this.premultiply(zn.makeRotation(-e)),this}translate(e,t){return this.premultiply(zn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zn=new Rn;function Bn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Hn(){let e=Vn(`canvas`);return e.style.display=`block`,e}var Un={};function Wn(e){e in Un||(Un[e]=!0,console.warn(e))}var Gn=new Rn().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kn=new Rn().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qn={[Qt]:{transfer:tn,primaries:rn,toReference:e=>e,fromReference:e=>e},[Zt]:{transfer:nn,primaries:rn,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[en]:{transfer:tn,primaries:`p3`,toReference:e=>e.applyMatrix3(Kn),fromReference:e=>e.applyMatrix3(Gn)},[$t]:{transfer:nn,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Kn),fromReference:e=>e.applyMatrix3(Gn).convertLinearToSRGB()}},Jn=new Set([Qt,en]),Yn={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Jn.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=qn[t].toReference,i=qn[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return qn[e].primaries},getTransfer:function(e){return e===``?tn:qn[e].transfer}};function Xn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Zn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Qn,$n=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=Vn(`canvas`)),Qn.width=e.width,Qn.height=e.height;let n=Qn.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qn}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Vn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Xn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Xn(t[e]/255)*255):t[e]=Xn(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},er=0,tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:er++}),this.uuid=mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(nr(r[t].image)):e.push(nr(r[t]))}else e=nr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function nr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?$n.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var rr=0,ir=class e extends ln{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=wt,i=wt,a=kt,o=jt,s=Lt,c=Mt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=mn(),this.name=``,this.source=new tr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ln(0,0),this.repeat=new Ln(1,1),this.center=new Ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u==`string`?this.colorSpace=u:(Wn(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=u===3001?Zt:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ct:e.x-=Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case Tt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ct:e.y-=Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case Tt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wn(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?Jt:qt}set encoding(e){Wn(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?Zt:``}};ir.DEFAULT_IMAGE=null,ir.DEFAULT_MAPPING=300,ir.DEFAULT_ANISOTROPY=1;var ar=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},or=class extends ln{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ar(0,0,e,t),this.scissorTest=!1,this.viewport=new ar(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Wn(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?Zt:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ir(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new tr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},sr=class extends or{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cr=class extends ir{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lr=class extends ir{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ur=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dr.copy(this).projectOnVector(e),this.sub(dr)}reflect(e){return this.sub(dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dr=new U,fr=new ur,pr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,hr):hr.fromBufferAttribute(r,t),hr.applyMatrix4(e.matrixWorld),this.expandByPoint(hr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),wr.subVectors(this.max,Cr),_r.subVectors(e.a,Cr),vr.subVectors(e.b,Cr),yr.subVectors(e.c,Cr),br.subVectors(vr,_r),xr.subVectors(yr,vr),Sr.subVectors(_r,yr);let t=[0,-br.z,br.y,0,-xr.z,xr.y,0,-Sr.z,Sr.y,br.z,0,-br.x,xr.z,0,-xr.x,Sr.z,0,-Sr.x,-br.y,br.x,0,-xr.y,xr.x,0,-Sr.y,Sr.x,0];return!Dr(t,_r,vr,yr,wr)||(t=[1,0,0,0,1,0,0,0,1],!Dr(t,_r,vr,yr,wr))?!1:(Tr.crossVectors(br,xr),t=[Tr.x,Tr.y,Tr.z],Dr(t,_r,vr,yr,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mr=[new U,new U,new U,new U,new U,new U,new U,new U],hr=new U,gr=new pr,_r=new U,vr=new U,yr=new U,br=new U,xr=new U,Sr=new U,Cr=new U,wr=new U,Tr=new U,Er=new U;function Dr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Er.fromArray(e,a);let o=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),s=t.dot(Er),c=n.dot(Er),l=r.dot(Er);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Or=new pr,kr=new U,Ar=new U,jr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mr=new U,Nr=new U,Pr=new U,Fr=new U,Ir=new U,Lr=new U,Rr=new U,zr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nr.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Nr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=Fr.dot(this.direction),s=-Fr.dot(Pr),c=Fr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nr).addScaledVector(Pr,d),f}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);let n=Mr.dot(this.direction),r=Mr.dot(Mr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,n,r,i){Ir.subVectors(t,e),Lr.subVectors(n,e),Rr.crossVectors(Ir,Lr);let a=this.direction.dot(Rr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fr.subVectors(this.origin,e);let s=o*this.direction.dot(Lr.crossVectors(Fr,Lr));if(s<0)return null;let c=o*this.direction.dot(Ir.cross(Fr));if(c<0||s+c>a)return null;let l=-o*Fr.dot(Rr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Br=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),i=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ur,e,Wr)}lookAt(e,t,n){let r=this.elements;return qr.subVectors(e,t),qr.lengthSq()===0&&(qr.z=1),qr.normalize(),Gr.crossVectors(n,qr),Gr.lengthSq()===0&&(Math.abs(n.z)===1?qr.x+=1e-4:qr.z+=1e-4,qr.normalize(),Gr.crossVectors(n,qr)),Gr.normalize(),Kr.crossVectors(qr,Gr),r[0]=Gr.x,r[4]=Kr.x,r[8]=qr.x,r[1]=Gr.y,r[5]=Kr.y,r[9]=qr.y,r[2]=Gr.z,r[6]=Kr.z,r[10]=qr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Vr.set(r[0],r[1],r[2]).length(),a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Hr.copy(this);let s=1/i,c=1/a,l=1/o;return Hr.elements[0]*=s,Hr.elements[1]*=s,Hr.elements[2]*=s,Hr.elements[4]*=c,Hr.elements[5]*=c,Hr.elements[6]*=c,Hr.elements[8]*=l,Hr.elements[9]*=l,Hr.elements[10]*=l,t.setFromRotationMatrix(Hr),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=cn){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=cn){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vr=new U,Hr=new Br,Ur=new U(0,0,0),Wr=new U(1,1,1),Gr=new U,Kr=new U,qr=new U,Jr=new Br,Yr=new ur,Xr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-hn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(hn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yr.setFromEuler(this),this.setFromQuaternion(Yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER=`XYZ`;var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Qr=0,$r=new U,ei=new ur,ti=new Br,ni=new U,ri=new U,ii=new U,ai=new ur,oi=new U(1,0,0),si=new U(0,1,0),ci=new U(0,0,1),li={type:`added`},ui={type:`removed`},di=class e extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qr++}),this.uuid=mn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Xr,r=new ur,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Br},normalMatrix:{value:new Rn}}),this.matrix=new Br,this.matrixWorld=new Br,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(oi,e)}rotateY(e){return this.rotateOnAxis(si,e)}rotateZ(e){return this.rotateOnAxis(ci,e)}translateOnAxis(e,t){return $r.copy(e).applyQuaternion(this.quaternion),this.position.add($r.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oi,e)}translateY(e){return this.translateOnAxis(si,e)}translateZ(e){return this.translateOnAxis(ci,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ni.copy(e):ni.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ri,ni,this.up):ti.lookAt(ni,ri,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(ti),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(li)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ui)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ri,e,ii),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ri,ai,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};di.DEFAULT_UP=new U(0,1,0),di.DEFAULT_MATRIX_AUTO_UPDATE=!0,di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new U,pi=new U,mi=new U,hi=new U,gi=new U,_i=new U,vi=new U,yi=new U,bi=new U,xi=new U,Si=!1,Ci=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fi.subVectors(e,t),r.cross(fi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){fi.subVectors(r,t),pi.subVectors(n,t),mi.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(pi),s=fi.dot(mi),c=pi.dot(pi),l=pi.dot(mi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)!==null&&hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,n,r,i,a,o,s){return Si===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),Si=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,hi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,hi.x),s.addScaledVector(a,hi.y),s.addScaledVector(o,hi.z),s)}static isFrontFacing(e,t,n,r){return fi.subVectors(n,t),pi.subVectors(e,t),fi.cross(pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),fi.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return Si===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),Si=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;gi.subVectors(r,n),_i.subVectors(i,n),yi.subVectors(e,n);let s=gi.dot(yi),c=_i.dot(yi);if(s<=0&&c<=0)return t.copy(n);bi.subVectors(e,r);let l=gi.dot(bi),u=_i.dot(bi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(gi,a);xi.subVectors(e,i);let f=gi.dot(xi),p=_i.dot(xi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_i,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return vi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(vi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function Di(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yn.workingColorSpace){if(e=gn(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Di(i,r,e+1/3),this.g=Di(i,r,e),this.b=Di(i,r,e-1/3)}return Yn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=wi[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Yn.fromWorkingColorSpace(Oi.copy(this),e),Math.round(hn(Oi.r*255,0,255))*65536+Math.round(hn(Oi.g*255,0,255))*256+Math.round(hn(Oi.b*255,0,255))}getHexString(e=Zt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yn.workingColorSpace){Yn.fromWorkingColorSpace(Oi.copy(this),t);let n=Oi.r,r=Oi.g,i=Oi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Yn.workingColorSpace){return Yn.fromWorkingColorSpace(Oi.copy(this),t),e.r=Oi.r,e.g=Oi.g,e.b=Oi.b,e}getStyle(e=Zt){Yn.fromWorkingColorSpace(Oi.copy(this),e);let t=Oi.r,n=Oi.g,r=Oi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ei);let n=yn(Ti.h,Ei.h,t),r=yn(Ti.s,Ei.s,t),i=yn(Ti.l,Ei.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oi=new W;W.NAMES=wi;var ki=0,Ai=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ki++}),this.uuid=mn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=an,this.stencilZFail=an,this.stencilZPass=an,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ji=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mi=new U,Ni=new Ln,Pi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=on,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ni.fromBufferAttribute(this,t),Ni.applyMatrix3(e),this.setXY(t,Ni.x,Ni.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix3(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix4(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyNormalMatrix(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.transformDirection(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array),i=Fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Fi=class extends Pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ii=class extends Pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Li=class extends Pi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ri=0,zi=new Br,Bi=new di,Vi=new U,Hi=new pr,Ui=new pr,Wi=new U,Gi=class e extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ri++}),this.uuid=mn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Bn(e)?Ii:Fi)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Rn().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return Bi.lookAt(e),Bi.updateMatrix(),this.applyMatrix4(Bi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Hi.setFromBufferAttribute(n),this.morphTargetsRelative?(Wi.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(Wi),Wi.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(Wi)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Hi.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ui.setFromBufferAttribute(n),this.morphTargetsRelative?(Wi.addVectors(Hi.min,Ui.min),Hi.expandByPoint(Wi),Wi.addVectors(Hi.max,Ui.max),Hi.expandByPoint(Wi)):(Hi.expandByPoint(Ui.min),Hi.expandByPoint(Ui.max))}Hi.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Wi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Wi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Wi.fromBufferAttribute(a,t),o&&(Vi.fromBufferAttribute(e,t),Wi.add(Vi)),r=Math.max(r,n.distanceToSquared(Wi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Pi(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new U,l[e]=new U;let u=new U,d=new U,f=new U,p=new Ln,m=new Ln,h=new Ln,g=new U,_=new U;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new U,x=new U,S=new U,C=new U;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Pi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wi.fromBufferAttribute(e,t),Wi.normalize(),e.setXYZ(t,Wi.x,Wi.y,Wi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Pi(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ki=new Br,qi=new zr,Ji=new jr,Yi=new U,Xi=new U,Zi=new U,Qi=new U,$i=new U,ea=new U,ta=new Ln,na=new Ln,ra=new Ln,ia=new U,aa=new U,oa=new U,sa=new U,ca=new U,la=class extends di{constructor(e=new Gi,t=new ji){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ea.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($i.fromBufferAttribute(s,e),a?ea.addScaledVector($i,r):ea.addScaledVector($i.sub(t),r))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),qi.copy(e.ray).recast(e.near),!(Ji.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ji,Yi)===null||qi.origin.distanceToSquared(Yi)>(e.far-e.near)**2))&&(Ki.copy(i).invert(),qi.copy(e.ray).applyMatrix4(Ki),(n.boundingBox===null||qi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=da(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=da(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=da(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=da(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ua(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ca.copy(s),ca.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ca);return l<n.near||l>n.far?null:{distance:l,point:ca.clone(),object:e}}function da(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xi),e.getVertexPosition(c,Zi),e.getVertexPosition(l,Qi);let u=ua(e,t,n,r,Xi,Zi,Qi,sa);if(u){i&&(ta.fromBufferAttribute(i,s),na.fromBufferAttribute(i,c),ra.fromBufferAttribute(i,l),u.uv=Ci.getInterpolation(sa,Xi,Zi,Qi,ta,na,ra,new Ln)),a&&(ta.fromBufferAttribute(a,s),na.fromBufferAttribute(a,c),ra.fromBufferAttribute(a,l),u.uv1=Ci.getInterpolation(sa,Xi,Zi,Qi,ta,na,ra,new Ln),u.uv2=u.uv1),o&&(ia.fromBufferAttribute(o,s),aa.fromBufferAttribute(o,c),oa.fromBufferAttribute(o,l),u.normal=Ci.getInterpolation(sa,Xi,Zi,Qi,ia,aa,oa,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new U,materialIndex:0};Ci.getNormal(Xi,Zi,Qi,e.normal),u.face=e}return u}var fa=class e extends Gi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Li(c,3)),this.setAttribute(`normal`,new Li(l,3)),this.setAttribute(`uv`,new Li(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function pa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function ma(e){let t={};for(let n=0;n<e.length;n++){let r=pa(e[n]);for(let e in r)t[e]=r[e]}return t}function ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ga(e){return e.getRenderTarget()===null?e.outputColorSpace:Yn.workingColorSpace}var _a={clone:pa,merge:ma},va=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ya=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ba=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=va,this.fragmentShader=ya,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends di{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Br,this.projectionMatrix=new Br,this.projectionMatrixInverse=new Br,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sa=class extends xa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pn*2*Math.atan(Math.tan(fn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ca=-90,wa=1,Ta=class extends di{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sa(Ca,wa,e,t);r.layers=this.layers,this.add(r);let i=new Sa(Ca,wa,e,t);i.layers=this.layers,this.add(i);let a=new Sa(Ca,wa,e,t);a.layers=this.layers,this.add(a);let o=new Sa(Ca,wa,e,t);o.layers=this.layers,this.add(o);let s=new Sa(Ca,wa,e,t);s.layers=this.layers,this.add(s);let c=new Sa(Ca,wa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ea=class extends ir{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Da=class extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Wn(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?Zt:``),this.texture=new Ea(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?kt:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fa(5,5,5),i=new ba({name:`CubemapFromEquirect`,uniforms:pa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new la(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=kt),new Ta(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Oa=new U,ka=new U,Aa=new Rn,ja=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Oa.subVectors(n,t).cross(ka.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Aa.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ma=new jr,Na=new U,Pa=class{constructor(e=new ja,t=new ja,n=new ja,r=new ja,i=new ja,a=new ja){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ma)}intersectsSprite(e){return Ma.center.set(0,0,0),Ma.radius=.7071067811865476,Ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ma)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ia(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var La=class e extends Gi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Li(p,3)),this.setAttribute(`normal`,new Li(m,3)),this.setAttribute(`uv`,new Li(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ra={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rn},alphaMap:{value:null},alphaMapTransform:{value:new Rn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rn}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rn},normalScale:{value:new Ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rn},alphaTest:{value:0},uvTransform:{value:new Rn}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new Ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rn},alphaMap:{value:null},alphaMapTransform:{value:new Rn},alphaTest:{value:0}}},za={basic:{uniforms:ma([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Ra.meshbasic_vert,fragmentShader:Ra.meshbasic_frag},lambert:{uniforms:ma([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)}}]),vertexShader:Ra.meshlambert_vert,fragmentShader:Ra.meshlambert_frag},phong:{uniforms:ma([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:Ra.meshphong_vert,fragmentShader:Ra.meshphong_frag},standard:{uniforms:ma([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ra.meshphysical_vert,fragmentShader:Ra.meshphysical_frag},toon:{uniforms:ma([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new W(0)}}]),vertexShader:Ra.meshtoon_vert,fragmentShader:Ra.meshtoon_frag},matcap:{uniforms:ma([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Ra.meshmatcap_vert,fragmentShader:Ra.meshmatcap_frag},points:{uniforms:ma([G.points,G.fog]),vertexShader:Ra.points_vert,fragmentShader:Ra.points_frag},dashed:{uniforms:ma([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ra.linedashed_vert,fragmentShader:Ra.linedashed_frag},depth:{uniforms:ma([G.common,G.displacementmap]),vertexShader:Ra.depth_vert,fragmentShader:Ra.depth_frag},normal:{uniforms:ma([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Ra.meshnormal_vert,fragmentShader:Ra.meshnormal_frag},sprite:{uniforms:ma([G.sprite,G.fog]),vertexShader:Ra.sprite_vert,fragmentShader:Ra.sprite_frag},background:{uniforms:{uvTransform:{value:new Rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ra.background_vert,fragmentShader:Ra.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ra.backgroundCube_vert,fragmentShader:Ra.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ra.cube_vert,fragmentShader:Ra.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ra.equirect_vert,fragmentShader:Ra.equirect_frag},distanceRGBA:{uniforms:ma([G.common,G.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ra.distanceRGBA_vert,fragmentShader:Ra.distanceRGBA_frag},shadow:{uniforms:ma([G.lights,G.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Ra.shadow_vert,fragmentShader:Ra.shadow_frag}};za.physical={uniforms:ma([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rn},clearcoatNormalScale:{value:new Ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rn},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rn},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rn},transmissionSamplerSize:{value:new Ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rn},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rn},anisotropyVector:{value:new Ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rn}}]),vertexShader:Ra.meshphysical_vert,fragmentShader:Ra.meshphysical_frag};var Ba={r:0,b:0,g:0};function Va(e,t,n,r,i,a,o){let s=new W(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new la(new fa(1,1,1),new ba({name:`BackgroundCubeMaterial`,uniforms:pa(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Yn.getTransfer(_.colorSpace)!==nn,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new la(new La(2,2),new ba({name:`BackgroundMaterial`,uniforms:pa(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Yn.getTransfer(_.colorSpace)!==nn,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(Ba,ga(e)),r.buffers.color.setClear(Ba.r,Ba.g,Ba.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Ha(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Ua(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Wa(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Ga(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ja,s=new Rn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ka(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Da(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var qa=class extends xa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ja=4,Ya=[.125,.215,.35,.446,.526,.582],Xa=20,Za=new qa,Qa=new W,$a=null,eo=0,to=0,no=(1+Math.sqrt(5))/2,ro=1/no,io=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,no,ro),new U(0,no,-ro),new U(ro,0,no),new U(-ro,0,no),new U(no,ro,0),new U(-no,ro,0)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){$a=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,eo,to),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ft,format:Lt,colorSpace:Qt,depthBuffer:!1},r=so(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oo(r)),this._blurMaterial=lo(r,e,t)}return r}_compileMaterial(e){let t=new la(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,r){let i=new Sa(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Qa),s.toneMapping=0,s.autoClear=!1;let u=new ji({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new la(new fa,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Qa),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;co(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new la(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;co(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=io[(t-1)%io.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new la(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Xa;m>Xa&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xa}`);let h=[],g=0;for(let e=0;e<Xa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];co(t,3*v*(r>_-Ja?r-_+Ja:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Za)}};function oo(e){let t=[],n=[],r=[],i=e,a=e-Ja+1+Ya.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ja?s=Ya[o-e+Ja-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Gi;h.setAttribute(`position`,new Pi(f,3)),h.setAttribute(`uv`,new Pi(p,2)),h.setAttribute(`faceIndex`,new Pi(m,1)),t.push(h),i>Ja&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function so(e,t,n){let r=new sr(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function co(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function lo(e,t,n){let r=new Float32Array(Xa),i=new U(0,1,0);return new ba({name:`SphericalGaussianBlur`,defines:{n:Xa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uo(){return new ba({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fo(){return new ba({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mo(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new ao(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new ao(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ho(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function go(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Bn(n)?Ii:Fi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function _o(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function vo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function yo(e,t){return e[0]-t[0]}function bo(e,t){return Math.abs(t[1])-Math.abs(e[1])}function xo(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new ar,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let p=l.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*i),g=new cr(h,p,m,i);g.type=Pt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=p*m*4*t;for(let t=0;t<i.count;t++){let c=t*_;e===!0&&(o.fromBufferAttribute(i,t),h[l+c+0]=o.x,h[l+c+1]=o.y,h[l+c+2]=o.z,h[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),h[l+c+4]=o.x,h[l+c+5]=o.y,h[l+c+6]=o.z,h[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),h[l+c+8]=o.x,h[l+c+9]=o.y,h[l+c+10]=o.z,h[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:g,size:new Ln(p,m)},a.set(l,s);function v(){g.dispose(),a.delete(l),l.removeEventListener(`dispose`,v)}l.addEventListener(`dispose`,v)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,d),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(bo);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(yo);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function So(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Co=class extends ir{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?Rt:l,l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=Nt),n===void 0&&l===1027&&(n=It),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Et:o,this.minFilter=s===void 0?Et:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wo=new ir,To=new Co(1,1);To.compareFunction=515;var Eo=new cr,Do=new lr,Oo=new Ea,ko=[],Ao=[],jo=new Float32Array(16),Mo=new Float32Array(9),No=new Float32Array(4);function Po(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ko[i];if(a===void 0&&(a=new Float32Array(i),ko[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Fo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Io(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Lo(e,t){let n=Ao[t];n===void 0&&(n=new Int32Array(t),Ao[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ro(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2fv(this.addr,t),Io(n,t)}}function Bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fo(n,t))return;e.uniform3fv(this.addr,t),Io(n,t)}}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4fv(this.addr,t),Io(n,t)}}function Ho(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;No.set(r),e.uniformMatrix2fv(this.addr,!1,No),Io(n,r)}}function Uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;Mo.set(r),e.uniformMatrix3fv(this.addr,!1,Mo),Io(n,r)}}function Wo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;jo.set(r),e.uniformMatrix4fv(this.addr,!1,jo),Io(n,r)}}function Go(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2iv(this.addr,t),Io(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fo(n,t))return;e.uniform3iv(this.addr,t),Io(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4iv(this.addr,t),Io(n,t)}}function Yo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2uiv(this.addr,t),Io(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fo(n,t))return;e.uniform3uiv(this.addr,t),Io(n,t)}}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4uiv(this.addr,t),Io(n,t)}}function $o(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?To:wo;n.setTexture2D(t||a,i)}function es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Do,i)}function ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Oo,i)}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Eo,i)}function rs(e){switch(e){case 5126:return Ro;case 35664:return zo;case 35665:return Bo;case 35666:return Vo;case 35674:return Ho;case 35675:return Uo;case 35676:return Wo;case 5124:case 35670:return Go;case 35667:case 35671:return Ko;case 35668:case 35672:return qo;case 35669:case 35673:return Jo;case 5125:return Yo;case 36294:return Xo;case 36295:return Zo;case 36296:return Qo;case 35678:case 36198:case 36298:case 36306:case 35682:return $o;case 35679:case 36299:case 36307:return es;case 35680:case 36300:case 36308:case 36293:return ts;case 36289:case 36303:case 36311:case 36292:return ns}}function is(e,t){e.uniform1fv(this.addr,t)}function as(e,t){let n=Po(t,this.size,2);e.uniform2fv(this.addr,n)}function os(e,t){let n=Po(t,this.size,3);e.uniform3fv(this.addr,n)}function ss(e,t){let n=Po(t,this.size,4);e.uniform4fv(this.addr,n)}function cs(e,t){let n=Po(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ls(e,t){let n=Po(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function us(e,t){let n=Po(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ds(e,t){e.uniform1iv(this.addr,t)}function fs(e,t){e.uniform2iv(this.addr,t)}function ps(e,t){e.uniform3iv(this.addr,t)}function ms(e,t){e.uniform4iv(this.addr,t)}function hs(e,t){e.uniform1uiv(this.addr,t)}function gs(e,t){e.uniform2uiv(this.addr,t)}function _s(e,t){e.uniform3uiv(this.addr,t)}function vs(e,t){e.uniform4uiv(this.addr,t)}function ys(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||wo,a[e])}function bs(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Do,a[e])}function xs(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Oo,a[e])}function Ss(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Eo,a[e])}function Cs(e){switch(e){case 5126:return is;case 35664:return as;case 35665:return os;case 35666:return ss;case 35674:return cs;case 35675:return ls;case 35676:return us;case 5124:case 35670:return ds;case 35667:case 35671:return fs;case 35668:case 35672:return ps;case 35669:case 35673:return ms;case 5125:return hs;case 36294:return gs;case 36295:return _s;case 36296:return vs;case 35678:case 36198:case 36298:case 36306:case 35682:return ys;case 35679:case 36299:case 36307:return bs;case 35680:case 36300:case 36308:case 36293:return xs;case 36289:case 36303:case 36311:case 36292:return Ss}}var ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rs(t.type)}},Ts=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cs(t.type)}},Es=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ds=/(\w+)(\])?(\[|\.)?/g;function Os(e,t){e.seq.push(t),e.map[t.id]=t}function ks(e,t,n){let r=e.name,i=r.length;for(Ds.lastIndex=0;;){let a=Ds.exec(r),o=Ds.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Os(n,l===void 0?new ws(s,e,t):new Ts(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Es(s),Os(n,e)),n=e}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ks(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function js(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ms=37297,Ns=0;function Ps(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Fs(e){let t=Yn.getPrimaries(Yn.workingColorSpace),n=Yn.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Qt:case en:return[r,`LinearTransferOETF`];case Zt:case $t:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Is(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ps(e.getShaderSource(t),r)}return i}function Ls(e,t){let n=Fs(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Rs(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function zs(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Us).join(`
`)}function Bs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Us).join(`
`)}function Vs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Hs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Us(e){return e!==``}function Ws(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ks=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(e){return e.replace(Ks,Ys)}var Js=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function Ys(e,t){let n=Ra[t];if(n===void 0){let e=Js.get(t);if(e!==void 0)n=Ra[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return qs(n)}var Xs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zs(e){return e.replace(Xs,Qs)}function Qs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $s(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function ec(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function tc(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function nc(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function rc(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function ic(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ac(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ec(n),l=tc(n),u=nc(n),d=rc(n),f=ic(n),p=n.isWebGL2?``:zs(n),m=Bs(n),h=Vs(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Us).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Us).join(`
`),v.length>0&&(v+=`
`)):(_=[$s(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Us).join(`
`),v=[p,$s(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ra.tonemapping_pars_fragment,n.toneMapping===0?``:Rs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ra.colorspace_pars_fragment,Ls(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Us).join(`
`)),o=qs(o),o=Ws(o,n),o=Gs(o,n),s=qs(s),s=Ws(s,n),s=Gs(s,n),o=Zs(o),s=Zs(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=js(i,i.VERTEX_SHADER,b),C=js(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Is(i,S,`vertex`),t=Is(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new As(i,g),E=Hs(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Ms)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ns++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var oc=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cc(e),t.set(e,n)),n}},cc=class{constructor(e){this.id=oc++,this.code=e,this.usedTimes=0}};function lc(e,t,n,r,i,a,o){let s=new Zr,c=new sc,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=za[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=_.isInstancedMesh===!0,M=_.isBatchedMesh===!0,te=!!a.map,N=!!a.matcap,P=!!x,ne=!!a.aoMap,F=!!a.lightMap,re=!!a.bumpMap,ie=!!a.normalMap,I=!!a.displacementMap,ae=!!a.emissiveMap,oe=!!a.metalnessMap,se=!!a.roughnessMap,ce=a.anisotropy>0,le=a.clearcoat>0,L=a.iridescence>0,ue=a.sheen>0,de=a.transmission>0,R=ce&&!!a.anisotropyMap,z=le&&!!a.clearcoatMap,B=le&&!!a.clearcoatNormalMap,V=le&&!!a.clearcoatRoughnessMap,H=L&&!!a.iridescenceMap,fe=L&&!!a.iridescenceThicknessMap,pe=ue&&!!a.sheenColorMap,me=ue&&!!a.sheenRoughnessMap,he=!!a.specularMap,ge=!!a.specularColorMap,_e=!!a.specularIntensityMap,ve=de&&!!a.transmissionMap,ye=de&&!!a.thicknessMap,be=!!a.gradientMap,xe=!!a.alphaMap,Se=a.alphaTest>0,Ce=!!a.alphaHash,we=!!a.extensions,Te=!!y.attributes.uv1,Ee=!!y.attributes.uv2,De=!!y.attributes.uv3,Oe=0;return a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:M,instancing:ee,instancingColor:ee&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qt,map:te,matcap:N,envMap:P,envMapMode:P&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:F,bumpMap:re,normalMap:ie,displacementMap:f&&I,emissiveMap:ae,normalMapObjectSpace:ie&&a.normalMapType===1,normalMapTangentSpace:ie&&a.normalMapType===0,metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:R,clearcoat:le,clearcoatMap:z,clearcoatNormalMap:B,clearcoatRoughnessMap:V,iridescence:L,iridescenceMap:H,iridescenceThicknessMap:fe,sheen:ue,sheenColorMap:pe,sheenRoughnessMap:me,specularMap:he,specularColorMap:ge,specularIntensityMap:_e,transmission:de,transmissionMap:ve,thicknessMap:ye,gradientMap:be,opaque:a.transparent===!1&&a.blending===1,alphaMap:xe,alphaTest:Se,alphaHash:Ce,combine:a.combine,mapUv:te&&h(a.map.channel),aoMapUv:ne&&h(a.aoMap.channel),lightMapUv:F&&h(a.lightMap.channel),bumpMapUv:re&&h(a.bumpMap.channel),normalMapUv:ie&&h(a.normalMap.channel),displacementMapUv:I&&h(a.displacementMap.channel),emissiveMapUv:ae&&h(a.emissiveMap.channel),metalnessMapUv:oe&&h(a.metalnessMap.channel),roughnessMapUv:se&&h(a.roughnessMap.channel),anisotropyMapUv:R&&h(a.anisotropyMap.channel),clearcoatMapUv:z&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:B&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:me&&h(a.sheenRoughnessMap.channel),specularMapUv:he&&h(a.specularMap.channel),specularColorMapUv:ge&&h(a.specularColorMap.channel),specularIntensityMapUv:_e&&h(a.specularIntensityMap.channel),transmissionMapUv:ve&&h(a.transmissionMap.channel),thicknessMapUv:ye&&h(a.thicknessMap.channel),alphaMapUv:xe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ie||ce),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Ee,vertexUv3s:De,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(te||xe),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,useLegacyLights:e._useLegacyLights,decodeVideoTexture:te&&a.map.isVideoTexture===!0&&Yn.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:we&&a.extensions.derivatives===!0,extensionFragDepth:we&&a.extensions.fragDepth===!0,extensionDrawBuffers:we&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=za[t];n=_a.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new ac(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function uc(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||dc),r.length>1&&r.sort(t||fc),i.length>1&&i.sort(t||fc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function mc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pc,e.set(t,[i])):n>=r.length?(i=new pc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new W};break;case`SpotLight`:n={position:new U,direction:new U,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ln};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ln};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ln,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _c=0;function vc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yc(e,t){let n=new hc,r=gc(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new U);let a=new U,o=new Br,s=new Br;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(vc);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=G.LTC_FLOAT_1,i.rectAreaLTC2=G.LTC_FLOAT_2):(i.rectAreaLTC1=G.LTC_HALF_1,i.rectAreaLTC2=G.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=G.LTC_FLOAT_1,i.rectAreaLTC2=G.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=G.LTC_HALF_1,i.rectAreaLTC2=G.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=_c++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function bc(e,t){let n=new yc(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function xc(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new bc(e,t),n.set(r,[o])):i>=a.length?(o=new bc(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var Sc=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Yt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ec(e,t,n){let r=new Pa,i=new Ln,a=new Ln,o=new ar,s=new Sc({depthPacking:Xt}),c=new Cc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ln},radius:{value:4}},vertexShader:wc,fragmentShader:Tc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Gi;m.setAttribute(`position`,new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new la(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Et,magFilter:Et};d.map!==null&&d.map.dispose(),d.map=new sr(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new sr(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Dc(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new ar,r=null,i=new ar(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new W(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),te=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),te=N>=1);let ne=null,F={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),I=new ar().fromArray(re),ae=new ar().fromArray(ie);function oe(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(e.DEPTH_TEST),c.setFunc(3),H(!1),fe(1),ce(e.CULL_FACE),B(0);function ce(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function le(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function L(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function ue(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function de(t){return g!==t&&(e.useProgram(t),g=t,!0)}let R={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)R[103]=e.MIN,R[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(R[103]=e.MIN_EXT,R[104]=e.MAX_EXT)}let z={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function B(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(le(e.BLEND),_=!1);return}if(_===!1&&(ce(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(R[n],R[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(z[r],z[i],z[o],z[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function V(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),H(r),t.blending===1&&t.transparent===!1?B(0):B(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function H(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function fe(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function pe(t){t!==A&&(te&&e.lineWidth(t),A=t)}function me(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(j!==n||ee!==r)&&(e.polygonOffset(n,r),j=n,ee=r)):le(e.POLYGON_OFFSET_FILL)}function he(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function _e(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function ve(){let t=F[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(t){I.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))}function Ae(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function je(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Me(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ne=null,F={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new W(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,I.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ce,disable:le,bindFramebuffer:L,drawBuffers:ue,useProgram:de,setBlending:B,setMaterial:V,setFlipSided:H,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:De,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:ke,viewport:Ae,reset:Ne}}function Oc(e,t,n,r,i,a,o){let s=i.isWebGL2,c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Vn(`canvas`)}function h(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?Mn:Math.floor,a=r(i*e.width),o=r(i*e.height);d===void 0&&(d=m(a,o));let s=n?m(a,o):d;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function g(e){return An(e.width)&&An(e.height)}function _(e){return s?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function v(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function y(t){e.generateMipmap(t)}function b(n,r,i,a,o=!1){if(s===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c=r;if(r===e.RED&&(i===e.FLOAT&&(c=e.R32F),i===e.HALF_FLOAT&&(c=e.R16F),i===e.UNSIGNED_BYTE&&(c=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.R8UI),i===e.UNSIGNED_SHORT&&(c=e.R16UI),i===e.UNSIGNED_INT&&(c=e.R32UI),i===e.BYTE&&(c=e.R8I),i===e.SHORT&&(c=e.R16I),i===e.INT&&(c=e.R32I)),r===e.RG&&(i===e.FLOAT&&(c=e.RG32F),i===e.HALF_FLOAT&&(c=e.RG16F),i===e.UNSIGNED_BYTE&&(c=e.RG8)),r===e.RGBA){let t=o?tn:Yn.getTransfer(a);i===e.FLOAT&&(c=e.RGBA32F),i===e.HALF_FLOAT&&(c=e.RGBA16F),i===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),c}function x(e,t,n){return v(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=t.texture,i=r.get(t),a=r.get(n);if(a.__webglTexture!==void 0&&(e.deleteTexture(a.__webglTexture),o.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(i.__webglFramebuffer[t]))for(let n=0;n<i.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(i.__webglFramebuffer[t][n]);else e.deleteFramebuffer(i.__webglFramebuffer[t]);i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t])}else{if(Array.isArray(i.__webglFramebuffer))for(let t=0;t<i.__webglFramebuffer.length;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer);if(i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(let t=0;t<i.__webglColorRenderbuffer.length;t++)i.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),o.memory.textures--),r.remove(n[t])}r.remove(n),r.remove(t)}let O=0;function k(){O=0}function A(){let e=O;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&V(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{I(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){I(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){I(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ae(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let P={[Ct]:e.REPEAT,[wt]:e.CLAMP_TO_EDGE,[Tt]:e.MIRRORED_REPEAT},ne={[Et]:e.NEAREST,[Dt]:e.NEAREST_MIPMAP_NEAREST,[Ot]:e.NEAREST_MIPMAP_LINEAR,[kt]:e.LINEAR,[At]:e.LINEAR_MIPMAP_NEAREST,[jt]:e.LINEAR_MIPMAP_LINEAR},F={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function re(n,a,o){if(o?(e.texParameteri(n,e.TEXTURE_WRAP_S,P[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,P[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,P[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ne[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ne[a.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(a.wrapS!==1001||a.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,S(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,S(a.minFilter)),a.minFilter!==1003&&a.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,F[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1||s===!1&&a.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function ie(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=ie(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let f=r.get(d);if(d.version!==f.__version||u===!0){n.activeTexture(e.TEXTURE0+c);let t=Yn.getPrimaries(Yn.workingColorSpace),r=o.colorSpace===``?null:Yn.getPrimaries(o.colorSpace),p=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=_(o)&&g(o.image)===!1,S=h(o.image,m,!1,i.maxTextureSize);S=H(o,S);let C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace,o.isVideoTexture);re(l,o,C);let D,O=o.mipmaps,k=s&&o.isVideoTexture!==!0&&E!==36196,A=f.__version===void 0||u===!0,j=x(o,S,C);if(o.isDepthTexture)E=e.DEPTH_COMPONENT,s?E=o.type===1015?e.DEPTH_COMPONENT32F:o.type===1014?e.DEPTH_COMPONENT24:o.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:o.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),o.format===1026&&E===e.DEPTH_COMPONENT&&o.type!==1012&&o.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),o.type=Nt,T=a.convert(o.type)),o.format===1027&&E===e.DEPTH_COMPONENT&&(E=e.DEPTH_STENCIL,o.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),o.type=It,T=a.convert(o.type))),A&&(k?n.texStorage2D(e.TEXTURE_2D,1,E,S.width,S.height):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,null));else if(o.isDataTexture){if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,w,T,S.data)):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,S.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){k&&A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,O[0].width,O[0].height,S.depth);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,T,D.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,D.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,D.data,0,0)}else{k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,D.data):n.compressedTexImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,D.data)}}else if(o.isDataArrayTexture)k?(A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isData3DTexture)k?(A&&n.texStorage3D(e.TEXTURE_3D,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_3D,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isFramebufferTexture){if(A){if(k)n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height);else{let t=S.width,r=S.height;for(let i=0;i<j;i++)n.texImage2D(e.TEXTURE_2D,i,E,t,r,0,w,T,null),t>>=1,r>>=1}}}else if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,w,T,D):n.texImage2D(e.TEXTURE_2D,t,E,w,T,D);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,w,T,S)):n.texImage2D(e.TEXTURE_2D,0,E,w,T,S);v(o,C)&&y(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,o,c){if(o.image.length!==6)return;let l=ie(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=Yn.getPrimaries(Yn.workingColorSpace),r=o.colorSpace===``?null:Yn.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,_=[];for(let e=0;e<6;e++)!p&&!m?_[e]=h(o.image[e],!1,!0,i.maxCubemapSize):_[e]=m?o.image[e].image:o.image[e],_[e]=H(o,_[e]);let S=_[0],C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace),D=s&&o.isVideoTexture!==!0,O=d.__version===void 0||l===!0,k=x(o,S,C);re(e.TEXTURE_CUBE_MAP,o,C);let A;if(p){D&&O&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,S.width,S.height);for(let t=0;t<6;t++){A=_[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];o.format===1023?D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,w,T,i.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):D?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,i.data)}}}else{A=o.mipmaps,D&&O&&(A.length>0&&k++,n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,_[0].width,_[0].height));for(let t=0;t<6;t++)if(m){D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_[t].width,_[t].height,w,T,_[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,_[t].width,_[t].height,0,w,T,_[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,i.width,i.height,0,w,T,i.data)}}else{D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,w,T,_[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,w,T,_[t]);for(let r=0;r<A.length;r++){let i=A[r];D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,w,T,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,w,T,i.image[t])}}}v(o,C)&&y(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),B(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,0,z(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=s===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||B(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=z(n);B(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=z(n);r&&B(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):B(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,s,l,o.colorSpace),d=z(n);r&&B(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):B(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),ee(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=z(i);if(i.depthTexture.format===1026)B(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)B(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function le(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);ce(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),se(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),se(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,i){let a=r.get(t);n!==void 0&&oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&le(t)}function ue(t){let c=t.texture,l=r.get(t),u=r.get(c);t.addEventListener(`dispose`,w),t.isWebGLMultipleRenderTargets!==!0&&(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=c.version,o.memory.textures++);let d=t.isWebGLCubeRenderTarget===!0,f=t.isWebGLMultipleRenderTargets===!0,p=g(t)||s;if(d){l.__webglFramebuffer=[];for(let t=0;t<6;t++)if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer[t]=[];for(let n=0;n<c.mipmaps.length;n++)l.__webglFramebuffer[t][n]=e.createFramebuffer()}else l.__webglFramebuffer[t]=e.createFramebuffer()}else{if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer=[];for(let t=0;t<c.mipmaps.length;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else l.__webglFramebuffer=e.createFramebuffer();if(f){if(i.drawBuffers){let n=t.texture;for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(s&&t.samples>0&&B(t)===!1){let r=f?c:[c];l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer);for(let n=0;n<r.length;n++){let i=r[n];l.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let o=a.convert(i.format,i.colorSpace),s=a.convert(i.type),c=b(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),u=z(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,l.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),se(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),re(e.TEXTURE_CUBE_MAP,c,p);for(let n=0;n<6;n++)if(s&&c.mipmaps&&c.mipmaps.length>0)for(let r=0;r<c.mipmaps.length;r++)oe(l.__webglFramebuffer[n][r],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else oe(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(c,p)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){let i=t.texture;for(let a=0,o=i.length;a<o;a++){let o=i[a],s=r.get(o);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),re(e.TEXTURE_2D,o,p),oe(l.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,e.TEXTURE_2D,0),v(o,p)&&y(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s?r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),n.bindTexture(r,u.__webglTexture),re(r,c,p),s&&c.mipmaps&&c.mipmaps.length>0)for(let n=0;n<c.mipmaps.length;n++)oe(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,r,n);else oe(l.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0,r,0);v(c,p)&&y(r),n.unbindTexture()}t.depthBuffer&&le(t)}function de(t){let i=g(t)||s,a=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let o=0,s=a.length;o<s;o++){let s=a[o];if(v(s,i)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(s).__webglTexture;n.bindTexture(i,a),y(i),n.unbindTexture()}}}function R(t){if(s&&t.samples>0&&B(t)===!1){let i=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=[],u=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,d=r.get(t),f=t.isWebGLMultipleRenderTargets===!0;if(f)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let n=0;n<i.length;n++){c.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&c.push(u);let p=d.__ignoreDepthValues!==void 0&&d.__ignoreDepthValues;if(p===!1&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),f&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,d.__webglColorRenderbuffer[n]),p===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[u]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])),f){let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,c)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),f)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,d.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}}function z(e){return Math.min(i.maxSamples,e.samples)}function B(e){let n=r.get(e);return s&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function V(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function H(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(Yn.getTransfer(r)===`srgb`?s===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=sn,e.minFilter=kt,e.generateMipmaps=!1):n=$n.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=M,this.setTexture3D=te,this.setTextureCube=N,this.rebindTextures=L,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=B}function kc(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=Yn.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var Ac=class extends Sa{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},jc=class extends di{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mc={type:`move`},Nc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pc=class extends ln{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=t.getContextAttributes(),h=null,g=null,_=[],v=[],y=new Ln,b=null,x=new Sa;x.layers.enable(1),x.viewport=new ar;let S=new Sa;S.layers.enable(2),S.viewport=new ar;let C=[x,S],w=new Ac;w.layers.enable(1),w.layers.enable(2);let T=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=_[e];return t===void 0&&(t=new Nc,_[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=_[e];return t===void 0&&(t=new Nc,_[e]=t),t.getGripSpace()},this.getHand=function(e){let t=_[e];return t===void 0&&(t=new Nc,_[e]=t),t.getHandSpace()};function D(e){let t=v.indexOf(e.inputSource);if(t===-1)return;let n=_[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function O(){r.removeEventListener(`select`,D),r.removeEventListener(`selectstart`,D),r.removeEventListener(`selectend`,D),r.removeEventListener(`squeeze`,D),r.removeEventListener(`squeezestart`,D),r.removeEventListener(`squeezeend`,D),r.removeEventListener(`end`,O),r.removeEventListener(`inputsourceschange`,k);for(let e=0;e<_.length;e++){let t=v[e];t!==null&&(v[e]=null,_[e].disconnect(t))}T=null,E=null,e.setRenderTarget(h),f=null,d=null,u=null,r=null,g=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(h=e.getRenderTarget(),r.addEventListener(`select`,D),r.addEventListener(`selectstart`,D),r.addEventListener(`selectend`,D),r.addEventListener(`squeeze`,D),r.addEventListener(`squeezestart`,D),r.addEventListener(`squeezeend`,D),r.addEventListener(`end`,O),r.addEventListener(`inputsourceschange`,k),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new sr(f.framebufferWidth,f.framebufferHeight,{format:Lt,type:Mt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let n=null,a=null,o=null;m.depth&&(o=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=m.stencil?zt:Rt,a=m.stencil?It:Nt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new sr(d.textureWidth,d.textureHeight,{format:Lt,type:Mt,depthTexture:new Co(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let c=e.properties.get(g);c.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=v.indexOf(n);r>=0&&(v[r]=null,_[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=v.indexOf(n);if(r===-1){for(let e=0;e<_.length;e++)if(e>=v.length){v.push(n),r=e;break}else if(v[e]===null){v[e]=n,r=e;break}if(r===-1)break}let i=_[r];i&&i.connect(n)}}let A=new U,j=new U;function ee(e,t,n){A.setFromMatrixPosition(t.matrixWorld),j.setFromMatrixPosition(n.matrixWorld);let r=A.distanceTo(j),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function M(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;w.near=S.near=x.near=e.near,w.far=S.far=x.far=e.far,(T!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,E=w.far);let t=e.parent,n=w.cameras;M(w,t);for(let e=0;e<n.length;e++)M(n[e],t);n.length===2?ee(w,x,S):w.projectionMatrix.copy(x.projectionMatrix),te(e,w,t)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=pn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)};let N=null;function P(t,r){if(l=r.getViewerPose(c||a),p=r,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let n=!1;t.length!==w.cameras.length&&(w.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(g,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let o=C[r];o===void 0&&(o=new Sa,o.layers.enable(r),o.viewport=new ar,C[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(w.matrix.copy(o.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),n===!0&&w.cameras.push(o)}}for(let e=0;e<_.length;e++){let t=v[e],n=_[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}N&&N(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),p=null}let ne=new Fa;ne.setAnimationLoop(P),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}};function Fc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ga(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ic(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Lc=class{constructor(e={}){let{canvas:t=Hn(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;d=n===null?a:n.getContextAttributes().alpha;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new ar,E=new ar,D=null,O=new W(0),k=0,A=t.width,j=t.height,ee=1,M=null,te=null,N=new ar(0,0,A,j),P=new ar(0,0,A,j),ne=!1,F=new Pa,re=!1,ie=!1,I=null,ae=new Br,oe=new Ln,se=new U,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return S===null?ee:1}let L=n;function ue(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,Me,!1),t.addEventListener(`webglcontextrestored`,Ne,!1),t.addEventListener(`webglcontextcreationerror`,Pe,!1),L===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(v.isWebGL1Renderer===!0&&t.shift(),L=ue(t,e),L===null)throw ue(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&L instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let de,R,z,B,V,H,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke;function Ae(){de=new ho(L),R=new Wa(L,de,e),de.init(R),De=new kc(L,de,R),z=new Dc(L,de,R),B=new vo(L),V=new uc,H=new Oc(L,de,z,V,R,De,B),fe=new Ka(v),pe=new mo(v),me=new Ia(L,R),Oe=new Ha(L,de,me,R),he=new go(L,me,B,Oe),ge=new So(L,he,me,B),we=new xo(L,R,H),xe=new Ga(V),_e=new lc(v,fe,pe,de,R,Oe,xe),ve=new Fc(v,V),ye=new mc,be=new xc(de,R),Ce=new Va(v,fe,pe,z,ge,d,s),Se=new Ec(v,ge,R),ke=new Ic(L,B,R,z),Te=new Ua(L,de,B,R),Ee=new _o(L,de,B,R),B.programs=_e.programs,v.capabilities=R,v.extensions=de,v.properties=V,v.renderLists=ye,v.shadowMap=Se,v.state=z,v.info=B}Ae();let je=new Pc(v,L);this.xr=je,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=de.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=de.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(e){e!==void 0&&(ee=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){if(je.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,j=n,t.width=Math.floor(e*ee),t.height=Math.floor(n*ee),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*ee,j*ee).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,ee=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(N)},this.setViewport=function(e,t,n,r){e.isVector4?N.set(e.x,e.y,e.z,e.w):N.set(e,t,n,r),z.viewport(T.copy(N).multiplyScalar(ee).floor())},this.getScissor=function(e){return e.copy(P)},this.setScissor=function(e,t,n,r){e.isVector4?P.set(e.x,e.y,e.z,e.w):P.set(e,t,n,r),z.scissor(E.copy(P).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(e){z.setScissorTest(ne=e)},this.setOpaqueSort=function(e){M=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ce.getClearColor(),r=Ce.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,L.clearBufferuiv(L.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,L.clearBufferiv(L.COLOR,0,p))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Me,!1),t.removeEventListener(`webglcontextrestored`,Ne,!1),t.removeEventListener(`webglcontextcreationerror`,Pe,!1),ye.dispose(),be.dispose(),V.dispose(),fe.dispose(),pe.dispose(),ge.dispose(),Oe.dispose(),ke.dispose(),_e.dispose(),je.dispose(),je.removeEventListener(`sessionstart`,Ve),je.removeEventListener(`sessionend`,He),I&&=(I.dispose(),null),Ue.stop()};function Me(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Ne(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=B.autoReset,t=Se.enabled,n=Se.autoUpdate,r=Se.needsUpdate,i=Se.type;Ae(),B.autoReset=e,Se.enabled=t,Se.autoUpdate=n,Se.needsUpdate=r,Se.type=i}function Pe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Fe(e){let t=e.target;t.removeEventListener(`dispose`,Fe),Ie(t)}function Ie(e){Le(e),V.remove(e)}function Le(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){_e.releaseProgram(e)}),e.isShaderMaterial&&_e.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Qe(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=he.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Oe.setup(i,r,s,n,c);let h,g=Te;if(c!==null&&(h=me.get(c),g=Ee,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*le()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*le()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Re(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ye(e,t,n),e.side=0,e.needsUpdate=!0,Ye(e,t,n),e.side=2):Ye(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=be.get(n),h.init(),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights(v._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Re(a,n,e),r.add(a)}else Re(t,n,e),r.add(t)}}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}de.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ze=null;function Be(e){ze&&ze(e)}function Ve(){Ue.stop()}function He(){Ue.start()}let Ue=new Fa;Ue.setAnimationLoop(Be),typeof self<`u`&&Ue.setContext(self),this.setAnimationLoop=function(e){ze=e,je.setAnimationLoop(e),e===null?Ue.stop():Ue.start()},je.addEventListener(`sessionstart`,Ve),je.addEventListener(`sessionend`,He),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(t),t=je.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=be.get(e,_.length),h.init(),_.push(h),ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),F.setFromProjectionMatrix(ae),ie=this.localClippingEnabled,re=xe.init(this.clippingPlanes,ie),m=ye.get(e,g.length),m.init(),g.push(m),We(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(M,te),this.info.render.frame++,re===!0&&xe.beginShadows();let n=h.state.shadowsArray;if(Se.render(n,e,t),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(m,e),h.setupLights(v._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];Ge(m,e,r,r.viewport)}}else Ge(m,e,t);S!==null&&(H.updateMultisampleRenderTarget(S),H.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),Oe.resetDefaultState(),C=-1,w=null,_.pop(),h=_.length>0?_[_.length-1]:null,g.pop(),m=g.length>0?g[g.length-1]:null};function We(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||F.intersectsSprite(e)){r&&se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ae);let t=ge.update(e),i=e.material;i.visible&&m.push(e,t,i,n,se.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||F.intersectsObject(e))){let t=ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),se.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),se.copy(e.boundingSphere.center)),se.applyMatrix4(e.matrixWorld).applyMatrix4(ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,se.z,o)}}else i.visible&&m.push(e,t,i,n,se.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)We(i[e],t,n,r)}function Ge(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),re===!0&&xe.setGlobalState(v.clippingPlanes,n),a.length>0&&Ke(i,a,t,n),r&&z.viewport(T.copy(r)),i.length>0&&qe(i,t,n),a.length>0&&qe(a,t,n),o.length>0&&qe(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ke(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=R.isWebGL2;I===null&&(I=new sr(1,1,{generateMipmaps:!0,type:de.has(`EXT_color_buffer_half_float`)?Ft:Mt,minFilter:jt,samples:i?4:0})),v.getDrawingBufferSize(oe),i?I.setSize(oe.x,oe.y):I.setSize(Mn(oe.x),Mn(oe.y));let a=v.getRenderTarget();v.setRenderTarget(I),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();let o=v.toneMapping;v.toneMapping=0,qe(e,n,r),H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,Je(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),v.setRenderTarget(a),v.setClearColor(O,k),v.toneMapping=o}function qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Je(o,t,n,s,c,l)}}function Je(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function Ye(e,t,n){t.isScene!==!0&&(t=ce);let r=V.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=_e.getParameters(e,i.state,a,t,n),c=_e.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?pe:fe).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Fe),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ze(e,s),u}else s.uniforms=_e.getUniforms(e),e.onBuild(n,s,v),e.onBeforeCompile(s,v),u=_e.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=xe.uniform),Ze(e,s),r.needsLights=et(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Xe(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=As.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ze(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Qe(e,t,n,r,i){t.isScene!==!0&&(t=ce),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Qt,c=(r.isMeshStandardMaterial?pe:fe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=V.get(r),b=h.state.lights;if(re===!0&&(ie===!0||e!==w)){let t=e===w&&r.id===C;xe.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==xe.numPlanes||y.numIntersection!==xe.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?R.isWebGL2===!0&&y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=Ye(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(z.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){k.setValue(L,`projectionMatrix`,e.projectionMatrix),k.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(L,se.setFromMatrixPosition(e.matrixWorld)),R.logarithmicDepthBuffer&&k.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(L,i,`bindMatrix`),k.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(R.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(L,`boneTexture`,e.boneTexture,H)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(k.setOptional(L,i,`batchingTexture`),k.setValue(L,`batchingTexture`,i._matricesTexture,H));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0&&R.isWebGL2===!0)&&we.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(L,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),D&&(k.setValue(L,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&$e(A,O),a&&r.fog===!0&&ve.refreshFogUniforms(A,a),ve.refreshMaterialUniforms(A,r,ee,j,I),As.upload(L,Xe(y),A,H)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(As.upload(L,Xe(y),A,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(L,`center`,i.center),k.setValue(L,`modelViewMatrix`,i.modelViewMatrix),k.setValue(L,`normalMatrix`,i.normalMatrix),k.setValue(L,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(R.isWebGL2){let n=e[t];ke.update(n,T),ke.bind(n,T)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return T}function $e(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=n;let r=V.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||de.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=V.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?H.setupRenderTarget(e):s.__hasExternalTextures&&H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture):(z.bindFramebuffer(L.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=R.isWebGL2&&e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(N).multiplyScalar(ee).floor(),E.copy(P).multiplyScalar(ee).floor(),D=ne;if(z.bindFramebuffer(L.FRAMEBUFFER,i)&&R.drawBuffers&&r&&z.drawBuffers(e,i),z.viewport(T),z.scissor(E),z.setScissorTest(D),a){let r=V.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=V.get(e.texture),i=t||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){z.bindFramebuffer(L.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&De.convert(s)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(de.has(`EXT_color_buffer_half_float`)||R.isWebGL2&&de.has(`EXT_color_buffer_float`));if(c!==1009&&De.convert(c)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(R.isWebGL2||de.has(`OES_texture_float`)||de.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,De.convert(s),De.convert(c),a)}finally{let e=S===null?null:V.get(S).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);H.setTexture2D(t,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,e.x,e.y,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=De.convert(n.format),s=De.convert(n.type);H.setTexture2D(n,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,n.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(v.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=De.convert(r.format),l=De.convert(r.type),u;if(r.isData3DTexture)H.setTexture3D(r,0),u=L.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)H.setTexture2DArray(r,0),u=L.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,r.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,r.unpackAlignment);let d=L.getParameter(L.UNPACK_ROW_LENGTH),f=L.getParameter(L.UNPACK_IMAGE_HEIGHT),p=L.getParameter(L.UNPACK_SKIP_PIXELS),m=L.getParameter(L.UNPACK_SKIP_ROWS),h=L.getParameter(L.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,g.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,g.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,e.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,e.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?L.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),L.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):L.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),L.pixelStorei(L.UNPACK_ROW_LENGTH,d),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,f),L.pixelStorei(L.UNPACK_SKIP_PIXELS,p),L.pixelStorei(L.UNPACK_SKIP_ROWS,m),L.pixelStorei(L.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&L.generateMipmap(u),z.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,z.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Yn.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?Jt:qt}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?Zt:Qt}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},Rc=class extends Lc{};Rc.prototype.isWebGL1Renderer=!0;var zc=class extends di{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Bc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=on,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vc=new U,Hc=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix4(e),this.setXYZ(t,Vc.x,Vc.y,Vc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.applyNormalMatrix(e),this.setXYZ(t,Vc.x,Vc.y,Vc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.transformDirection(e),this.setXYZ(t,Vc.x,Vc.y,Vc.z);return this}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array),i=Fn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Pi(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uc=new U,Wc=new ar,Gc=new ar,Kc=new U,qc=new Br,Jc=new U,Yc=new jr,Xc=new Br,Zc=new zr,Qc=class extends la{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=St,this.bindMatrix=new Br,this.bindMatrixInverse=new Br,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Jc),this.boundingBox.expandByPoint(Jc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Jc),this.boundingSphere.expandByPoint(Jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yc.copy(this.boundingSphere),Yc.applyMatrix4(r),e.ray.intersectsSphere(Yc)!==!1&&(Xc.copy(r).invert(),Zc.copy(e.ray).applyMatrix4(Xc),(this.boundingBox===null||Zc.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ar,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Wc.fromBufferAttribute(r.attributes.skinIndex,e),Gc.fromBufferAttribute(r.attributes.skinWeight,e),Uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=Gc.getComponent(e);if(r!==0){let i=Wc.getComponent(e);qc.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Kc.copy(Uc).applyMatrix4(qc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn(`THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151.`),this.applyBoneTransform(e,t)}},$c=class extends di{constructor(){super(),this.isBone=!0,this.type=`Bone`}},el=class extends ir{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Et,l=Et,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tl=new Br,nl=new Br,rl=class e{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Br)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Br;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:nl;tl.multiplyMatrices(i,t[r]),tl.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new el(t,e,e,Lt,Pt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new $c),this.bones.push(i),this.boneInverses.push(new Br().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},il=class extends Pi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},al=new Br,ol=new Br,sl=[],cl=new pr,ll=new Br,ul=new la,dl=new jr,fl=class extends la{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ll)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,al),cl.copy(e.boundingBox).applyMatrix4(al),this.boundingBox.union(cl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,al),dl.copy(e.boundingSphere).applyMatrix4(al),this.boundingSphere.union(dl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(n),e.ray.intersectsSphere(dl)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,al),ol.multiplyMatrices(n,al),ul.matrixWorld=ol,ul.raycast(e,sl);for(let e=0,n=sl.length;e<n;e++){let n=sl[e];n.instanceId=i,n.object=this,t.push(n)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},pl=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ml=new U,hl=new U,gl=new Br,_l=new zr,vl=new jr,yl=class extends di{constructor(e=new Gi,t=new pl){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ml.fromBufferAttribute(t,e-1),hl.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ml.distanceTo(hl);e.setAttribute(`lineDistance`,new Li(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),vl.radius+=i,e.ray.intersectsSphere(vl)===!1)return;gl.copy(r).invert(),_l.copy(e.ray).applyMatrix4(gl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new U,l=new U,u=new U,d=new U,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),_l.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),_l.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},bl=new U,xl=new U,Sl=class extends yl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)bl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+bl.distanceTo(xl);e.setAttribute(`lineDistance`,new Li(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Cl=class extends yl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},wl=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tl=new Br,El=new zr,Dl=new jr,Ol=new U,kl=class extends di{constructor(e=new Gi,t=new wl){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=i,e.ray.intersectsSphere(Dl)===!1)return;Tl.copy(r).invert(),El.copy(e.ray).applyMatrix4(Tl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ol.fromBufferAttribute(l,n),Al(Ol,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ol.fromBufferAttribute(l,a),Al(Ol,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Al(e,t,n,r,i,a,o){let s=El.distanceSqToPoint(e);if(s<n){let n=new U;El.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}var jl=class extends ir{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ml=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nl=class extends Ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ln(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Il(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ll(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Rl(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var zl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Bl=class extends zl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ut,endingEnd:Ut}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wt:i=e,o=2*t-n;break;case Gt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Wt:a=e,s=2*n-t;break;case Gt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Vl=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Hl=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Pl(t,this.TimeBufferType),this.values=Pl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pl(e.times,Array),values:Pl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bt:t=this.InterpolantFactoryMethodDiscrete;break;case Vt:t=this.InterpolantFactoryMethodLinear;break;case Ht:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bt;case this.InterpolantFactoryMethodLinear:return Vt;case this.InterpolantFactoryMethodSmooth:return Ht}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Fl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ht,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ul.prototype.TimeBufferType=Float32Array,Ul.prototype.ValueBufferType=Float32Array,Ul.prototype.DefaultInterpolation=Vt;var Wl=class extends Ul{};Wl.prototype.ValueTypeName=`bool`,Wl.prototype.ValueBufferType=Array,Wl.prototype.DefaultInterpolation=Bt,Wl.prototype.InterpolantFactoryMethodLinear=void 0,Wl.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Ul{};Gl.prototype.ValueTypeName=`color`;var Kl=class extends Ul{};Kl.prototype.ValueTypeName=`number`;var ql=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ur.slerpFlat(i,0,a,c-o,a,c,s);return i}},Jl=class extends Ul{InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};Jl.prototype.ValueTypeName=`quaternion`,Jl.prototype.DefaultInterpolation=Vt,Jl.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Ul{};Yl.prototype.ValueTypeName=`string`,Yl.prototype.ValueBufferType=Array,Yl.prototype.DefaultInterpolation=Bt,Yl.prototype.InterpolantFactoryMethodLinear=void 0,Yl.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Ul{};Xl.prototype.ValueTypeName=`vector`;var Zl=class{constructor(e,t=-1,n,r=Kt){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push($l(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(Ul.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Il(o);o=Ll(o,1,c),s=Ll(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Kl(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Rl(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new Kl(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(Xl,a+`.position`,i,`pos`,r),n(Jl,a+`.quaternion`,i,`rot`,r),n(Xl,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ql(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Kl;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Xl;case`color`:return Gl;case`quaternion`:return Jl;case`bool`:case`boolean`:return Wl;case`string`:return Yl}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function $l(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Ql(e.type);if(e.times===void 0){let t=[],n=[];Rl(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var eu={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},tu=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},nu=class{constructor(e){this.manager=e===void 0?tu:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};nu.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ru={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},au=class extends nu{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=eu.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(ru[e]!==void 0){ru[e].push({onLoad:t,onProgress:n,onError:r});return}ru[e]=[],ru[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=ru[e],r=t.body.getReader(),i=t.headers.get(`Content-Length`)||t.headers.get(`X-File-Size`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}})}}});return new Response(c)}throw new iu(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{eu.add(e,t);let n=ru[e];delete ru[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=ru[e];if(n===void 0)throw this.manager.itemError(e),t;delete ru[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},ou=class extends nu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=eu.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=Vn(`img`);function s(){l(),eu.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},su=class extends nu{constructor(e){super(e)}load(e,t,n,r){let i=new ir,a=new ou(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},cu=class extends di{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},lu=new Br,uu=new U,du=new U,fu=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ln(512,512),this.map=null,this.mapPass=null,this.matrix=new Br,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Ln(1,1),this._viewportCount=1,this._viewports=[new ar(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pu=class extends fu{constructor(){super(new Sa(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=pn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mu=class extends cu{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hu=new Br,gu=new U,_u=new U,vu=class extends fu{constructor(){super(new Sa(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ln(4,2),this._viewportCount=6,this._viewports=[new ar(2,1,1,1),new ar(0,1,1,1),new ar(3,1,1,1),new ar(1,1,1,1),new ar(3,0,1,1),new ar(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),gu.setFromMatrixPosition(e.matrixWorld),n.position.copy(gu),_u.copy(n.position),_u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_u),n.updateMatrixWorld(),r.makeTranslation(-gu.x,-gu.y,-gu.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}},yu=class extends cu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bu=class extends fu{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xu=class extends cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.shadow=new bu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Su=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Cu=class extends nu{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=eu.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return eu.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),eu.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});eu.add(e,s),i.manager.itemStart(e)}},wu=`\\[\\]\\.:\\/`,Tu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Eu=`[^\\[\\]\\.:\\/]`,Du=`[^`+wu.replace(`\\.`,``)+`]`,Ou=`((?:WC+[\\/:])*)`.replace(`WC`,Eu),ku=`(WCOD+)?`.replace(`WCOD`,Du),Au=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Eu),ju=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Eu),Mu=RegExp(`^`+Ou+ku+Au+ju+`$`),Nu=[`material`,`materials`,`bones`,`map`],Pu=class{constructor(e,t,n){let r=n||Fu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Fu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Tu,``)}static parseTrackName(e){let t=Mu.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Nu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fu.Composite=Pu,Fu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fu.prototype.GetterByBindingType=[Fu.prototype._getValue_direct,Fu.prototype._getValue_array,Fu.prototype._getValue_arrayElement,Fu.prototype._getValue_toArray],Fu.prototype.SetterByBindingTypeAndVersioning=[[Fu.prototype._setValue_direct,Fu.prototype._setValue_direct_setNeedsUpdate,Fu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_array,Fu.prototype._setValue_array_setNeedsUpdate,Fu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_arrayElement,Fu.prototype._setValue_arrayElement_setNeedsUpdate,Fu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_fromArray,Fu.prototype._setValue_fromArray_setNeedsUpdate,Fu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);function Iu(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Lu=class extends nu{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Uu(e)}),this.register(function(e){return new Qu(e)}),this.register(function(e){return new $u(e)}),this.register(function(e){return new ed(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Ku(e)}),this.register(function(e){return new qu(e)}),this.register(function(e){return new Ju(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new Yu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new Zu(e)}),this.register(function(e){return new Xu(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new td(e)}),this.register(function(e){return new nd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Su.extractUrlBase(e);a=Su.resolveURL(t,this.path)}else a=Su.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new au(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error(`THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".`)}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===rd){try{a[zu.KHR_BINARY_GLTF]=new od(e)}catch(e){r&&r(e);return}i=JSON.parse(a[zu.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Md(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case zu.KHR_MATERIALS_UNLIT:a[t]=new Vu;break;case zu.KHR_DRACO_MESH_COMPRESSION:a[t]=new sd(i,this.dracoLoader);break;case zu.KHR_TEXTURE_TRANSFORM:a[t]=new cd;break;case zu.KHR_MESH_QUANTIZATION:a[t]=new ld;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Ru(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var zu={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Bu=class{constructor(e){this.parser=e,this.name=zu.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Qt);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new xu(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new yu(s),o.distance=c;break;case`spot`:o=new mu(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,wd(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Vu=class{constructor(){this.name=zu.KHR_MATERIALS_UNLIT}getMaterialType(){return ji}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Qt),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Zt))}return Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ln(e,e)}return Promise.all(i)}},Wu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,Zt)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},Ku=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(o[0],o[1],o[2],Qt),Promise.all(i)}},Ju=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(o[0],o[1],o[2],Qt),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,Zt)),Promise.all(i)}},Xu=class{constructor(e){this.parser=e,this.name=zu.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=zu.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Nl}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=zu.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},$u=class{constructor(e){this.parser=e,this.name=zu.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},ed=class{constructor(e){this.parser=e,this.name=zu.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},td=class{constructor(e){this.name=zu.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},nd=class{constructor(e){this.name=zu.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==pd.TRIANGLES&&e.mode!==pd.TRIANGLE_STRIP&&e.mode!==pd.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new Br,n=new U,a=new ur,s=new U(1,1,1),c=new fl(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new il(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);di.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},rd=`glTF`,id=12,ad={JSON:1313821514,BIN:5130562},od=class{constructor(e){this.name=zu.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,id),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rd)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-id,i=new DataView(e,id),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===ad.JSON){let r=new Uint8Array(e,id+a,t);this.content=n.decode(r)}else if(r===ad.BIN){let n=id+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},sd=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=zu.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=vd[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=vd[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=md[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Qt,n)})})}},cd=class{constructor(){this.name=zu.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},ld=class{constructor(){this.name=zu.KHR_MESH_QUANTIZATION}},ud=class extends zl{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},dd=new ur,fd=class extends ud{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return dd.fromArray(i).normalize().toArray(i),i}},pd={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},md={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hd={9728:Et,9729:kt,9984:Dt,9985:At,9986:Ot,9987:jt},gd={33071:wt,33648:Tt,10497:Ct},_d={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vd={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},yd={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},bd={CUBICSPLINE:void 0,LINEAR:Vt,STEP:Bt},xd={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Sd(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Ml({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Cd(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function wd(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Td(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Ed(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Dd(e){let t,n=e.extensions&&e.extensions[zu.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Od(n.attributes):e.indices+`:`+Od(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Od(e.targets[n]);return t}function Od(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function kd(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Ad(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:`image/png`}var jd=new Br,Md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ru,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<`u`&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf(`Firefox`)>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),this.textureLoader=typeof createImageBitmap>`u`||n||r&&i<98?new su(this.options.manager):new Cu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new au(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Cd(i,a,r),wd(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[zu.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Su.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=_d[r.type],t=md[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Pi(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=_d[r.type],o=md[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Bc(f,u/s),t.cache.add(n,c)),p=new Hc(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Pi(f,a,d);if(r.sparse!==void 0){let t=_d.SCALAR,n=md[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Pi(p.array.slice(),p.itemSize,p.normalized));for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=hd[n.magFilter]||1006,t.minFilter=hd[n.minFilter]||1008,t.wrapS=gd[n.wrapS]||1e3,t.wrapT=gd[n.wrapT]||1e3,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new ir(e);t.needsUpdate=!0,n(t)}),t.load(Su.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),e.userData.mimeType=a.mimeType||Ad(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[zu.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[zu.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[zu.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new wl,Ai.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new pl,Ai.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Ml}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[zu.KHR_MATERIALS_UNLIT]){let e=r[zu.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Qt),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Zt)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||xd.OPAQUE;if(l===xd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===xd.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==ji&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Ln(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==ji&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==ji){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],Qt)}return i.emissiveTexture!==void 0&&a!==ji&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Zt)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),wd(n,i),t.associations.set(n,{materials:e}),i.extensions&&Cd(r,n,i),n})}createUniqueName(e){let t=Fu.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[zu.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Pd(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Dd(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[zu.KHR_DRACO_MESH_COMPRESSION]?i(o):Pd(new Gi,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Sd(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===pd.TRIANGLES||u.mode===pd.TRIANGLE_STRIP||u.mode===pd.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Qc(l,f):new la(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===pd.TRIANGLE_STRIP?d.geometry=Iu(d.geometry,1):u.mode===pd.TRIANGLE_FAN&&(d.geometry=Iu(d.geometry,2));else if(u.mode===pd.LINES)d=new Sl(l,f);else if(u.mode===pd.LINE_STRIP)d=new yl(l,f);else if(u.mode===pd.LINE_LOOP)d=new Cl(l,f);else if(u.mode===pd.POINTS)d=new kl(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ed(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),wd(d,i),u.extensions&&Cd(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Cd(r,c[0],i),c[0];let l=new jc;i.extensions&&Cd(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Sa(In.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new qa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wd(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new Br;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new rl(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new Zl(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,jd)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new $c:t.length>1?new jc:t.length===1?t[0]:new di,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),wd(o,i),i.extensions&&Cd(n,o,i),i.matrix!==void 0){let e=new Br;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new jc;n.name&&(i.name=r.createUniqueName(n.name)),wd(i,n),n.extensions&&Cd(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ai||e instanceof ir)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];yd[i.path]===yd.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(yd[i.path]){case yd.weights:c=Kl;break;case yd.rotation:c=Jl;break;case yd.position:case yd.scale:c=Xl;break;default:switch(n.itemSize){case 1:c=Kl;break;default:c=Xl}}let l=r.interpolation===void 0?Vt:bd[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+yd[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=kd(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Jl?fd:ud)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Nd(e,t,n){let r=t.attributes,i=new pr;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new U(t[0],t[1],t[2]),new U(a[0],a[1],a[2])),e.normalized){let t=kd(md[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new U,t=new U;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=kd(md[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new jr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Pd(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=vd[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Yn.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yn.workingColorSpace}" not supported.`),wd(e,t),Nd(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Td(e,t.targets,n)})}var Fd=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?t:e,a,o=WebAssembly.instantiate(s(i),{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,o){var s=a.exports.sbrk,c=n+3&-4,l=s(c*r),u=s(i.length),d=new Uint8Array(a.exports.memory.buffer);d.set(i,u);var f=e(l,n,r,u,i.length);if(f==0&&o&&o(l,c,r),t.set(d.subarray(l,l+n*r)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`var instance; var ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(s(i))+`]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=0;a<e;++a)d[a]=p(r);URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=f++;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){o.then(function(){var t=e.data;try{var n=new Uint8Array(t.count*t.size);c(a.exports[t.mode],n,t.count,t.size,t.source,a.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Id=class extends zc{constructor(e=null){super();let t=new fa;t.deleteAttribute(`uv`);let n=new Ml({side:1}),r=new Ml,i=5;e!==null&&e._useLegacyLights===!1&&(i=900);let a=new yu(16777215,i,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new la(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let s=new la(t,r);s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);let c=new la(t,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let l=new la(t,r);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let u=new la(t,r);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new la(t,r);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new la(t,r);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new la(t,Ld(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let m=new la(t,Ld(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let h=new la(t,Ld(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let g=new la(t,Ld(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new la(t,Ld(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let v=new la(t,Ld(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ld(e){let t=new ji;return t.color.setScalar(e),t}var Rd=matchMedia(`(prefers-reduced-motion: reduce)`).matches,zd=document.getElementById(`laptop`),Bd=2048,Vd=1330,Hd=48,Ud={x:14,y:58,w:2020};Ud.h=Vd-Ud.y-150;var Wd=2048,Gd=Math.round(Wd*Ud.h/Ud.w),Kd=1,qd=document.createElement(`canvas`),Jd=qd.getContext(`2d`),Yd=document.createElement(`canvas`),Xd=Yd.getContext(`2d`),K=Xd;function Zd(e){Kd=e,qd.width=Math.round(Bd*Kd),qd.height=Math.round(Vd*Kd),Jd=qd.getContext(`2d`),Jd.setTransform(Kd,0,0,Kd,0,0),Yd.width=Math.round(Wd*Kd),Yd.height=Math.round(Gd*Kd),Xd=Yd.getContext(`2d`),Xd.setTransform(Kd,0,0,Kd,0,0),K=Xd,Uf=null,Wf=null}var Qd={indigo:{light:`#4f46e5`,soft:`#eef0ff`,dark:`#818cf8`,hue:245},blue:{light:`#2563eb`,soft:`#e8f0fe`,dark:`#60a5fa`,hue:222},teal:{light:`#0f766e`,soft:`#e3f5f2`,dark:`#2dd4bf`,hue:178},rose:{light:`#e11d48`,soft:`#fdecf0`,dark:`#fb7185`,hue:345},amber:{light:`#b45309`,soft:`#fdf2e1`,dark:`#fbbf24`,hue:34}},$d={light:{bg:`#f6f7f9`,surface:`#ffffff`,line:`#dcdfe5`,ink:`#0f1115`,muted:`#474c57`,panel:`#f4f5f7`,btn:`#eef0f3`,chip:`#e4e7ec`,icon:`#3d424c`,ink2:`#24272d`,topbar:`#1c1e24`},dark:{bg:`#111216`,surface:`#191a20`,line:`#30323b`,ink:`#f4f5f8`,muted:`#b4b8c3`,panel:`#1f2027`,btn:`#272932`,chip:`#30323c`,icon:`#b5b9c4`,ink2:`#d0d3db`,topbar:`#0c0d10`}},ef={sharp:0,rounded:1,full:3},tf={accent:`blue`,mode:`light`,radius:`rounded`},nf=1,rf=!1,af=245,q={};function of(){let e=Qd[tf.accent];rf=tf.mode===`dark`,af=e.hue,nf=ef[tf.radius],Object.assign(q,$d[tf.mode]),q.accent=rf?e.dark:e.light,q.onAccent=rf?`#111216`:`#ffffff`,q.accentSoft=rf?e.dark+`29`:e.soft,q.selBg=q.accentSoft,q.selLine=q.accent+(rf?`80`:`59`)}of();var sf=e=>rf?q.ink2:e,cf={story:`#2e9e5b`,bug:`#d6453d`,task:`#2f5bd3`},lf={HØ:250,IV:160,TK:40,MA:320,RS:200},uf={HØ:`Halvard Østby`,IV:`Ilse Vandermeer`,TK:`Tomasz Kowalczyk`,MA:`Mirela Ambroz`,RS:`Ravi Sundaram`},df={todo:[`TO DO`,q.chip,q.ink2],prog:[`IN PROGRESS`,q.accent,q.onAccent],rev:[`IN REVIEW`,`#7a4fd6`,`#fff`],done:[`DONE`,`#2e9e5b`,`#fff`]};function ff(){df.todo[1]=q.chip,df.todo[2]=q.ink2,df.prog[1]=q.accent,df.prog[2]=q.onAccent}var pf={4:[`Highest`,`#d6453d`],3:[`High`,`#e5622d`],2:[`Medium`,`#c27a00`],1:[`Low`,`#2f5bd3`]},mf=[[`BRY-214`,`story`,3,`Replace window.confirm with ConfirmDialog`,`HØ`,3,`prog`,`Design system`,`IV`,`0.9.1`,[`dialogs`,`a11y`],`3 days ago`,`2 hours ago`,12],[`BRY-226`,`bug`,4,`Search returns archived blades`,`TK`,2,`prog`,`Search`,`RS`,`0.9.1`,[`search`],`4 days ago`,`40 minutes ago`,7],[`BRY-203`,`task`,2,`Audit focus rings on the dark theme`,`IV`,2,`rev`,`Design system`,`HØ`,`0.9.1`,[`a11y`,`tokens`],`6 days ago`,`Yesterday`,5],[`BRY-211`,`story`,3,`Guest checkout keeps the address after an error`,`RS`,3,`rev`,`Checkout`,`MA`,`0.9.1`,[`forms`],`1 week ago`,`Yesterday`,9],[`BRY-207`,`story`,1,`Invoice PDF uses tabular numbers`,`MA`,5,`todo`,`Accounts`,`RS`,`0.10.0`,[`print`],`1 week ago`,`3 days ago`,2],[`BRY-228`,`bug`,3,`Date picker loses focus after the month changes`,`IV`,2,`todo`,`Design system`,`TK`,`0.9.1`,[`a11y`,`date-picker`],`2 days ago`,`5 hours ago`,4],[`BRY-236`,`task`,1,`Write migration notes for the Theme radius prop`,null,1,`todo`,`Design system`,`HØ`,`0.10.0`,[`docs`],`Yesterday`,`Yesterday`,0],[`BRY-195`,`task`,1,`Bump marram to 0.9.0`,`IV`,1,`done`,`Design system`,`IV`,`0.9.0`,[`deps`],`2 weeks ago`,`1 day ago`,3]],hf=[[`BRY-241`,`story`,2,`Bulk edit order status from the table`,null,5],[`BRY-244`,`bug`,3,`Toast overlaps the cookie banner on iPad`,`MA`,2],[`BRY-250`,`story`,2,`Saved carts sync across devices`,`RS`,8]],gf=[[`Design system`,`#2f5bd3`,.57],[`Checkout`,`#c27a00`,.31],[`Accounts`,`#0f766e`,.46],[`Search`,`#b4234a`,.22]],_f=(e,t=400)=>`${t} ${e}px "Instrument Sans", ui-sans-serif, system-ui, sans-serif`;function J(e,t,n,r,i,a,o){i=Math.min(i*nf,Math.abs(r)/2,Math.abs(n)/2),K.beginPath(),K.roundRect(e,t,n,r,i),a&&(K.fillStyle=a,K.fill()),o&&(K.strokeStyle=o,K.lineWidth=2,K.stroke())}function Y(e,t,n,r,i,a,o=`left`){K.font=_f(r,i),K.fillStyle=a,K.textAlign=o,K.textBaseline=`middle`,K.fillText(e,t,n)}function vf(e,t,n,r){K.font=_f(n,r);let i=[],a=``;for(let n of e.split(` `)){let e=a?a+` `+n:n;K.measureText(e).width>t&&a?(i.push(a),a=n):a=e}return i.push(a),i.slice(0,2)}function yf(e,t,n,r){K.beginPath(),K.arc(e,t,n,0,Math.PI*2),K.fillStyle=`hsl(${lf[r]} 55% 86%)`,K.fill(),Y(r,e,t+1,n*.8,600,`#2a2d34`,`center`)}var bf=66,xf=74;function Sf(e,t,n,r,i,a=2){K.strokeStyle=i,K.lineWidth=a,K.beginPath(),K.moveTo(e,t),K.lineTo(n,r),K.stroke()}function Cf(e,t,n,r=24){J(t,n,r,r,5,cf[e]),K.strokeStyle=`#fff`,K.lineWidth=2.6,K.beginPath(),e===`task`?(K.moveTo(t+r*.25,n+r*.52),K.lineTo(t+r*.43,n+r*.7),K.lineTo(t+r*.76,n+r*.32)):e===`bug`?K.arc(t+r/2,n+r/2,r*.2,0,7):(K.moveTo(t+r*.3,n+r*.24),K.lineTo(t+r*.7,n+r*.24),K.lineTo(t+r*.7,n+r*.78),K.lineTo(t+r/2,n+r*.62),K.lineTo(t+r*.3,n+r*.78),K.closePath()),K.stroke()}function wf(e,t,n){let[,r]=pf[e];K.strokeStyle=r,K.lineWidth=2.6;let i=e>=3,a=e===4?2:1;for(let e=0;e<a;e++){let r=e*7;K.beginPath(),i?(K.moveTo(t,n+8-r+6),K.lineTo(t+7,n+1-r+6),K.lineTo(t+14,n+8-r+6)):(K.moveTo(t,n+6),K.lineTo(t+7,n+13),K.lineTo(t+14,n+6)),K.stroke()}}function Tf(e,t,n,r,i,a=15){K.font=_f(a,700);let o=K.measureText(e).width+18;return J(t,n,o,a+13,5,r),Y(e,t+9,n+(a+13)/2+1,a,700,i),o}function Ef(e,t,n,r=19){Y(e,t,n,r,500,q.accent)}function Df(){K.fillStyle=q.topbar,K.fillRect(0,0,Wd,bf),[[`#ff5f57`,`#e0443e`],[`#febc2e`,`#dea123`],[`#28c840`,`#1aab29`]].forEach(([e,t],n)=>{K.beginPath(),K.arc(30+n*28,bf/2,9,0,7),K.fillStyle=e,K.fill(),K.strokeStyle=t,K.lineWidth=1.5,K.stroke()}),Y(`Smedja`,116,34,24,600,`#fff`);let e=300;for(let t of[`Dashboards`,`Projects`,`Issues`,`Boards`])Y(t,e,34,20,500,`#fff`),K.font=_f(20,500),e+=K.measureText(t).width+10,K.strokeStyle=`#fff`,K.lineWidth=2,K.beginPath(),K.moveTo(e,bf/2-2),K.lineTo(e+5,36),K.lineTo(e+10,bf/2-2),K.stroke(),e+=36;J(e,13,104,40,8,q.accent),Y(`Create`,e+52,34,20,600,q.onAccent,`center`),J(1388,13,440,40,8,`rgba(255,255,255,0.1)`),Y(`Search`,1406,34,19,400,`rgba(255,255,255,0.85)`),K.strokeStyle=`#fff`,K.lineWidth=2.5,K.beginPath(),K.arc(1798,bf/2-2,8,0,7),K.moveTo(1804,37),K.lineTo(1810,43),K.stroke(),K.beginPath(),K.arc(1872,bf/2,13,0,7),K.stroke(),Y(`?`,1872,34,18,700,`#fff`,`center`),K.beginPath(),K.arc(1928,bf/2,8,0,7),K.stroke();for(let e=0;e<8;e++){let t=e*Math.PI/4;Sf(1928+Math.cos(t)*10,bf/2+Math.sin(t)*10,1928+Math.cos(t)*15,bf/2+Math.sin(t)*15,`#fff`,3.5)}yf(1992,bf/2,18,`HØ`)}function Of(){K.fillStyle=q.panel,K.fillRect(0,bf,xf,Gd),K.fillStyle=q.line,K.fillRect(72,bf,2,Gd),K.beginPath(),K.arc(37,104,21,0,7),K.fillStyle=`#0d9488`,K.fill(),Y(`B`,37,105,21,700,`#fff`,`center`);let e=(e,t,n)=>{t&&J(12,e-23,50,46,8,q.chip);let r=t?q.ink:q.icon;K.strokeStyle=r,K.fillStyle=r,K.lineWidth=2.4,K.lineCap=`round`,K.lineJoin=`round`,n(37,e),K.lineCap=`butt`,K.lineJoin=`miter`},t=170;e(t,!1,(e,t)=>{J(e-12,t-9,14,5,2.5,K.fillStyle),J(e-6,t-2,16,5,2.5,K.fillStyle),J(e,t+5,12,5,2.5,K.fillStyle)}),K.fillStyle=q.line,K.fillRect(14,t+34,46,2),t+=72,e(t,!0,(e,t)=>{K.beginPath(),K.moveTo(e-13,t+2),K.lineTo(e-13,t+11),K.lineTo(e+13,t+11),K.lineTo(e+13,t+2),K.stroke(),K.beginPath(),K.moveTo(e-13,t+2),K.lineTo(e-5,t+2),K.lineTo(e-3,t+6),K.lineTo(e+3,t+6),K.lineTo(e+5,t+2),K.lineTo(e+13,t+2),K.stroke(),Sf(e,t-13,e,t-1,K.strokeStyle),K.beginPath(),K.moveTo(e-5,t-6),K.lineTo(e,t-1),K.lineTo(e+5,t-6),K.stroke()}),t+=60,e(t,!1,(e,t)=>{J(e-13,t-12,26,24,5,null,K.strokeStyle),J(e-8,t-7,7,4,1.5,K.fillStyle),J(e+1,t-7,7,4,1.5,K.fillStyle),J(e-8,t,7,4,1.5,K.fillStyle),J(e+1,t+4,7,4,1.5,K.fillStyle)}),t+=60,e(t,!1,(e,t)=>{Sf(e-12,t+11,e+12,t+11,K.strokeStyle),J(e-10,t+1,5,8,1.5,K.fillStyle),J(e-2,t-5,5,14,1.5,K.fillStyle),J(e+6,t-11,5,20,1.5,K.fillStyle)}),t+=60,e(t,!1,(e,t)=>{K.beginPath(),K.moveTo(e-12,t-4),K.lineTo(e-12,t-12),K.lineTo(e-4,t-12),K.lineTo(e+12,t+4),K.lineTo(e+4,t+12),K.closePath(),K.stroke(),K.beginPath(),K.arc(e-7,t-7,2.2,0,7),K.fill()}),t+=60,e(t,!1,(e,t)=>{J(e-12,t-12,9,9,2,null,K.strokeStyle),J(e+3,t-12,9,9,2,null,K.strokeStyle),J(e-12,t+3,9,9,2,null,K.strokeStyle),K.beginPath(),K.moveTo(e+7.5,t+1.5),K.lineTo(e+13,t+7.5),K.lineTo(e+7.5,t+13),K.lineTo(e+2,t+7.5),K.closePath(),K.stroke()}),t+=60,e(t,!1,(e,t)=>{K.beginPath(),K.moveTo(e-9,t-12),K.lineTo(e+3,t-12),K.lineTo(e+10,t-5),K.lineTo(e+10,t+12),K.lineTo(e-9,t+12),K.closePath(),K.stroke(),Sf(e+3,t-12,e+3,t-5,K.strokeStyle),Sf(e+3,t-5,e+10,t-5,K.strokeStyle),Sf(e-4,t+2,e+5,t+2,K.strokeStyle),Sf(e-4,t+7,e+3,t+7,K.strokeStyle)}),e(Gd-50,!1,(e,t)=>{K.beginPath(),K.arc(e,t,7,0,7),K.stroke();for(let n=0;n<8;n++){let r=n*Math.PI/4;Sf(e+Math.cos(r)*9,t+Math.sin(r)*9,e+Math.cos(r)*13,t+Math.sin(r)*13,K.strokeStyle,3)}})}var X={list:8,pad:16,gap:24,page:24},kf=46,Af=kf+X.list;function jf(e,t){Sf(e,t-4,e+7,t+3,q.ink),Sf(e+7,t+3,e+14,t-4,q.ink)}function Mf(e,t){Y(`Projects  /  Bryggen web`,e,98,18,400,q.muted),Y(`Backlog`,e,142,38,600,q.ink),Y(`QUICK FILTERS`,e,190,16,700,q.muted);let n=e+160;for(let e of[`Only my issues`,`Recently updated`,`Design system`])Ef(e,n,190,19),K.font=_f(19,500),n+=K.measureText(e).width+32;J(t-186,120,130,44,8,q.btn),Y(`Board  ▾`,t-121,143,19,500,q.ink,`center`),J(t-44,120,44,44,8,q.btn),Sf(t-30,152,t-14,134,q.ink),Sf(t-22,134,t-14,134,q.ink),Sf(t-14,134,t-14,142,q.ink),K.fillStyle=q.line,K.fillRect(xf,218,t-xf+X.page,2)}function Nf(e,t,n){J(e-42,t,34,130,6,q.btn),K.save(),K.translate(e-25,t+65),K.rotate(-Math.PI/2),Y(`VERSIONS`,0,0,14,700,q.muted,`center`),K.restore(),J(e,t,n,Gd-t-X.gap,10,q.panel);let r=e+X.pad,i=n-X.pad*2,a=r+X.pad;Y(`EPICS`,r,t+32,16,700,q.muted),Sf(e+n-30,t+26,e+n-18,t+38,q.muted),Sf(e+n-18,t+26,e+n-30,t+38,q.muted);let o=t+56;J(r,o,i,44,6,q.chip),Y(`All issues`,a,o+22,19,500,q.ink),o+=44+X.list,gf.forEach(([e,t,n],s)=>{let c=s===0,l=c?292:72;J(r,o,i,l,6,q.surface,q.line),Y(e,a,o+28,19,500,q.ink),J(r+i-X.pad-24,o+16,24,24,4,t),Sf(r+i-X.pad-17,o+26,r+i-X.pad-12,o+31,`#fff`),Sf(r+i-X.pad-12,o+31,r+i-X.pad-7,o+26,`#fff`),c&&(Ef(`BRY-120`,a,o+60,17),Y(`Design system`,a+78,o+60,17,400,q.muted),[[`Issues`,`7`],[`Completed`,`4`],[`Unestimated`,``],[`Estimate`,`18`]].forEach(([e,t],n)=>{let s=o+96+n*32;Y(e,a,s,17,400,q.ink),J(r+i-X.pad-34,s-12,34,24,12,q.chip),t&&Y(t,r+i-X.pad-17,s,15,600,q.ink,`center`)}),Ef(`Create issue in epic`,a,o+228,17),Ef(`Linked pages`,a,o+256,17)),J(a,o+l-X.pad-5,i-X.pad*2,5,3,q.chip),J(a,o+l-X.pad-5,(i-X.pad*2)*n,5,3,t),o+=l+X.list}),J(r,o,i,44,6,q.surface,q.line),Y(`Issues without epics`,a,o+22,18,400,q.ink)}function Pf(e,t,n,r,i){let[a,o,s,c,l,u,,d]=e;J(t,n,r,kf,6,i?q.selBg:q.surface,i?q.selLine:q.line),Cf(o,t+X.pad,n+11,24),wf(s,t+X.pad+34,n+16),Ef(a,t+X.pad+64,n+24,19),Y(c,t+X.pad+164,n+24,19,400,q.ink);let f=t+r-X.pad;K.font=_f(16,600);let p=Math.max(34,K.measureText(String(u)).width+20);if(f-=p,J(f,n+11,p,24,12,q.chip),Y(String(u),f+p/2,n+24,16,600,q.ink,`center`),f-=X.list+15,l&&yf(f,n+23,15,l),d){let e=gf.find(([e])=>e===d);K.font=_f(14,700);let t=K.measureText(d.toUpperCase()).width+16;f-=15+X.list+t,J(f,n+12,t,22,4,e[1]+(rf?`55`:`22`)),Y(d.toUpperCase(),f+8,n+24,14,700,sf(e[1]))}}function Ff(e,t,n,r,i,a,o){jf(e+X.pad,t+32),Y(r,e+X.pad+28,t+32,a,600,q.ink),K.font=_f(a,600);let s=e+X.pad+28+K.measureText(r).width+12;Y(i,s,t+33,19,400,q.muted),K.font=_f(19,400),K.font=_f(18,500);let c=K.measureText(o).width+32;return J(e+n-X.pad-c,t+12,c,40,8,q.chip),Y(o,e+n-X.pad-c/2,t+32,18,500,q.ink,`center`),K.font=_f(19,400),s+K.measureText(i).width}function If(e,t,n,r){let i=t+136,a=136+mf.length*Af-X.list+X.pad;J(e,t,n,a,10,q.panel),Tf(`ACTIVE`,Ff(e,t,n,`BRY Sprint 14`,`8 issues`,26,`Complete sprint`)+12,t+18,`#2e9e5b`,`#fff`,14),[`HØ`,`IV`,`TK`,`MA`,`RS`].forEach((n,r)=>{K.beginPath(),K.arc(e+X.pad+18+r*30,t+78,18,0,7),K.fillStyle=q.panel,K.fill(),yf(e+X.pad+18+r*30,t+78,16,n)}),Y(`10/Nov/26 09:00  –  21/Nov/26 17:00`,e+X.pad+180,t+78,18,400,q.muted),Y(`Ship ConfirmDialog everywhere and close the open checkout regressions.`,e+X.pad,t+112,18,400,q.ink);let o=e+X.pad,s=n-X.pad*2;mf.forEach((e,t)=>Pf(e,o,i+t*Af,s,!1));let c=i+r*Af;return K.save(),K.beginPath(),K.rect(o,c,s,kf),K.clip(),Pf(mf[Math.round(r)],o,i+Math.round(r)*Af,s,!0),K.restore(),J(o,c,s,kf,6,null,q.accent),t+a}function Lf(e,t,n){let r=t+64;J(e,t,n,64+hf.length*Af+44,10,q.panel),Ff(e,t,n,`Backlog`,hf.length+` issues`,24,`Create sprint`),hf.forEach((t,i)=>Pf([...t,`todo`,null],e+X.pad,r+i*Af,n-X.pad*2,!1)),Y(`+  Create issue`,e+X.pad+12,r+hf.length*Af+14,19,500,q.muted)}var Rf={"BRY-214":`Every destructive action still calls window.confirm. Swap each one for ConfirmDialog so focus returns to the trigger and the copy names the action.`,"BRY-226":`Archived blades show up in search results and in the quick-add combobox. Filter them at the query, not in the list.`,"BRY-203":`Focus rings disappear on the dark theme where the ring colour sits on a dark surface. Check every control against 3:1.`,"BRY-211":`When payment fails, the address form clears. Keep what the guest typed and move focus to the inline error.`,"BRY-207":`Totals in the invoice PDF do not line up. Use tabular figures in every money column.`,"BRY-228":`Changing the month in DatePicker moves focus to the body. It should stay on the month button.`,"BRY-236":`radius now accepts sharp, rounded and full-rounded. Write the before and after for teams on 0.8.`,"BRY-195":`Upgrade to 0.9.0, run the codemod for the Theme props and read the changelog for breaking changes.`};function zf(e,t){let[n,r,i,a,o,s,c,l,u,d,f,p,m,h]=t;K.fillStyle=q.surface,K.fillRect(e,bf,Wd-e,Gd),K.fillStyle=q.line,K.fillRect(e,bf,2,Gd);let g=e+32,_=g+200,v=Wd-g-32;Ef(`Bryggen web  /  `+n,g,98,19),Y(`···`,1966,94,22,700,q.muted,`center`),Sf(2004,92,2016,104,q.muted),Sf(2016,92,2004,104,q.muted);let y=146;for(let e of vf(a,v,30,600))Y(e,g,y,30,600,q.ink),y+=40;y+=4;{let[e,t,n]=df[c];K.font=_f(17,700);let r=K.measureText(e).width+56;J(g,y,r,40,8,t),Y(e,g+16,y+20,17,700,n),K.strokeStyle=n,K.lineWidth=2.4,K.beginPath(),K.moveTo(g+r-26,y+17),K.lineTo(g+r-21,y+22),K.lineTo(g+r-16,y+17),K.stroke();let i=g+r+X.list;for(let e of[`Assign`,`Link issue`]){K.font=_f(18,500);let t=K.measureText(e).width+32;J(i,y,t,40,8,q.btn),Y(e,i+t/2,y+20,18,500,q.ink,`center`),i+=t+X.list}}y+=20;let b=!1,x=e=>{y+=64,jf(g,y),Y(e,g+26,y,22,600,q.ink),b=!0},S=(e,t)=>{y+=b?40:44,b=!1,Y(e,g,y,19,400,q.muted),t(_,y)};x(`Details`),S(`Type:`,(e,t)=>{Cf(r,e,t-11,22),Y(r[0].toUpperCase()+r.slice(1),e+32,t,19,400,q.ink)}),S(`Priority:`,(e,t)=>{wf(i,e,t-8),Y(pf[i][0],e+24,t,19,400,q.ink)}),S(`Story points:`,(e,t)=>{J(e,t-12,34,24,12,q.chip),Y(String(s),e+17,t,15,600,q.ink,`center`)}),S(`Epic:`,(e,t)=>{let n=gf.find(([e])=>e===l);Tf(l.toUpperCase(),e,t-14,n[1]+(rf?`55`:`22`),sf(n[1]),14)}),S(`Fix version:`,(e,t)=>Y(d,e,t,19,400,q.ink)),S(`Labels:`,(e,t)=>{let n=e;for(let e of f)n+=Tf(e,n,t-14,q.btn,q.ink2,14)+X.list}),x(`People`),S(`Assignee:`,(e,t)=>{o?(yf(e+15,t,15,o),Y(uf[o],e+40,t,19,400,q.ink)):Y(`Unassigned`,e,t,19,400,q.ink)}),S(``,(e,t)=>Ef(`Assign to me`,e,t,19)),S(`Reporter:`,(e,t)=>{yf(e+15,t,15,u),Y(uf[u],e+40,t,19,400,q.ink)}),S(`Watchers:`,(e,t)=>{J(e,t-12,26,24,12,q.accent),Y(`2`,e+13,t,14,700,q.onAccent,`center`),Ef(`Stop watching`,e+38,t,19)}),x(`Dates`),S(`Created:`,(e,t)=>Y(p,e,t,19,400,q.ink)),S(`Updated:`,(e,t)=>Y(m,e,t,19,400,q.ink)),x(`Description`),y+=10;for(let e of Bf(Rf[n]||a,v,19))y+=30,Y(e,g,y,19,400,q.ink);y+=44,y<Gd-24&&Ef(h+` comments`,g,y,19)}function Bf(e,t,n){K.font=_f(n,400);let r=[],i=``;for(let n of e.split(` `)){let e=i?i+` `+n:n;K.measureText(e).width>t&&i?(r.push(i),i=n):i=e}return r.push(i),r}var Vf={sel:0,y:0};function Hf(e){let t=e||Vf;Vf=t,K.fillStyle=q.surface,K.fillRect(0,0,Wd,Gd),Df(),Of();let n=xf+X.page,r=1448,i=r-X.page;Mf(n,i);let a=218+X.gap;Nf(n+42,a,300);let o=n+42+300+X.gap,s=i-o;Lf(o,If(o,a,s,t.y)+X.gap,s),zf(r,mf[t.sel]),$f()}var Uf=null,Wf=null,Gf=new Path2D(`M15.5 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2s1.4-.6 2.6-.6 1.5.6 2.6.6c1.1 0 1.8-1 2.4-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.3zM13.6 6.6c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9.1 1.8-.4 2.4-1.1z`);function Kf(e){let t=document.createElement(`canvas`);t.width=Math.round(Bd*Kd),t.height=Math.round(Vd*Kd);let n=K,r=nf;return K=t.getContext(`2d`),K.setTransform(Kd,0,0,Kd,0,0),nf=1,e(),K=n,nf=r,t}function qf(){Uf=Kf(()=>{let e=(e,t,n,r=1)=>`hsla(${af+e},${t}%,${n}%,${r})`,t=K.createLinearGradient(0,0,0,Vd);t.addColorStop(0,e(2,90,30)),t.addColorStop(.28,e(10,73,49)),t.addColorStop(.46,e(5,60,58)),t.addColorStop(.62,e(-18,70,46)),t.addColorStop(1,e(-17,87,33)),K.fillStyle=t,K.fillRect(0,0,Bd,Vd),K.save(),K.filter=`blur(48px)`,K.fillStyle=e(-19,73,45),K.beginPath(),K.ellipse(Bd*.08,Vd*.62,Bd*.32,Vd*.14,-.1,0,7),K.fill(),K.fillStyle=e(-25,67,54),K.beginPath(),K.ellipse(Bd*.62,Vd*.5,Bd*.24,Vd*.16,0,0,7),K.fill(),K.restore();let n=new Path2D;n.moveTo(-40,Vd*.94),n.bezierCurveTo(Bd*.25,Vd*.84,Bd*.38,Vd*.48,Bd*.52,Vd*.3),n.bezierCurveTo(Bd*.62,Vd*.16,Bd*.72,Vd*.02,2088,Vd*.02),n.lineTo(2088,1370),n.lineTo(-40,1370),n.closePath();let r=K.createLinearGradient(Bd*.3,Vd*.2,Bd*.7,Vd);r.addColorStop(0,e(-19,74,57)),r.addColorStop(.4,e(-19,76,47)),r.addColorStop(.75,e(-19,88,38)),r.addColorStop(1,e(-18,87,31)),K.fillStyle=r,K.fill(n),K.save(),K.clip(n),K.filter=`blur(60px)`,K.fillStyle=e(-30,75,61,.55),K.beginPath(),K.ellipse(Bd*.66,Vd*.48,Bd*.17,Vd*.12,-.2,0,7),K.fill(),K.fillStyle=e(-14,83,24,.55),K.beginPath(),K.ellipse(Bd*.8,Vd*.3,Bd*.16,Vd*.07,-.15,0,7),K.fill(),K.fillStyle=e(-21,68,69,.45),K.beginPath(),K.ellipse(Bd*.2,Vd*.95,Bd*.2,Vd*.12,0,0,7),K.fill(),K.restore(),K.save(),K.strokeStyle=e(-28,100,79,.85),K.lineWidth=3,K.shadowColor=e(-28,100,73,.9),K.shadowBlur=14,K.beginPath(),K.moveTo(-40,Vd*.94),K.bezierCurveTo(Bd*.25,Vd*.84,Bd*.38,Vd*.48,Bd*.52,Vd*.3),K.bezierCurveTo(Bd*.62,Vd*.16,Bd*.72,Vd*.02,2088,Vd*.02),K.stroke(),K.restore();let i=K.createLinearGradient(Bd*.8,Vd*.6,Bd,Vd);i.addColorStop(0,e(-20,64,66)),i.addColorStop(1,e(-21,56,70)),K.fillStyle=i,K.beginPath(),K.moveTo(Bd*.74,1370),K.bezierCurveTo(Bd*.8,Vd*.8,Bd*.92,Vd*.55,2088,Vd*.46),K.lineTo(2088,1370),K.closePath(),K.fill()}),Wf=Kf(()=>{let e=.92,t=Hd/e;K.save(),K.scale(e,e),K.save(),K.translate(30,t/2-19),K.scale(1.55,1.55),K.fillStyle=`#ffffff`,K.fill(Gf),K.restore();let n=82;Y(`Smedja`,n,27.08695652173913,22,700,`#ffffff`),K.font=_f(22,700),n+=K.measureText(`Smedja`).width+34;for(let e of[`File`,`Edit`,`View`,`Board`,`Window`,`Help`])Y(e,n,27.08695652173913,22,500,`#ffffff`),K.font=_f(22,500),n+=K.measureText(e).width+32;let r=2196.086956521739,i=`Fri 14 Nov  10:42`;Y(i,r,27.08695652173913,22,500,`#ffffff`,`right`),K.font=_f(22,500),r-=K.measureText(i).width+38,K.strokeStyle=`#ffffff`,K.fillStyle=`#ffffff`,K.lineWidth=2.6,J(r-26,t/2-12,30,10,5,null,`#ffffff`),J(r-26,29.08695652173913,30,10,5,null,`#ffffff`),K.beginPath(),K.arc(r-19,t/2-7,3.5,0,7),K.arc(r-3,34.086956521739125,3.5,0,7),K.fill(),r-=66,K.beginPath(),K.arc(r-6,t/2-3,9,0,Math.PI*2),K.moveTo(r+1,30.08695652173913),K.lineTo(r+9,38.086956521739125),K.stroke(),r-=58;for(let e=0;e<3;e++)K.beginPath(),K.arc(r-10,36.086956521739125,8+e*8,Math.PI*1.23,Math.PI*1.77),K.stroke();K.beginPath(),K.arc(r-10,36.086956521739125,2.6,0,7),K.fill(),r-=64,J(r-44,t/2-10,44,20,6,null,`#ffffff`),J(r-40,t/2-6,30,12,3,`#ffffff`),J(r+2,t/2-4,4,8,2,`#ffffff`),K.restore();let a=[`finder`,`safari`,`messages`,`mail`,`calendar`,`notes`,`figma`,`smedja`,`settings`,`|`,`trash`],o=a.reduce((e,t)=>e+(t===`|`?22:104),0)-4+24,s=(Bd-o)/2,c=1206;K.save(),K.shadowColor=`rgba(10,20,60,0.3)`,K.shadowBlur=30,K.shadowOffsetY=8,J(s,c,o,112,28,`rgba(255,255,255,0.22)`),K.restore(),J(s,c,o,112,28,null,`rgba(255,255,255,0.4)`);let l=s+12;for(let e of a){if(e===`|`){K.fillStyle=`rgba(255,255,255,0.35)`,K.fillRect(l+9,1228,2,68),l+=22;continue}Qf(e,l,1212,100),(e===`finder`||e===`smedja`)&&(K.beginPath(),K.arc(l+50,1314,3.5,0,7),K.fillStyle=`rgba(255,255,255,0.85)`,K.fill()),l+=104}})}var Jf={},Yf=[`finder`,`safari`,`messages`,`mail`,`calendar`,`notes`,`figma`,`settings`,`trash`];function Xf(){return Promise.all(Yf.map(e=>new Promise(t=>{let n=new Image;n.onload=()=>{Jf[e]=n,t()},n.onerror=t,n.src=`dock/${e}.png`})))}function Zf(e,t,n){let r=n*.8,i=e+(n-r)/2,a=t+(n-r)/2-n*.01,o=r*.225;K.save(),K.shadowColor=`rgba(10,10,40,0.35)`,K.shadowBlur=n*.05,K.shadowOffsetY=n*.02;let s=K.createLinearGradient(i,a,i,a+r);s.addColorStop(0,`#7c78ff`),s.addColorStop(.55,`#4f46e5`),s.addColorStop(1,`#3529b8`),K.beginPath(),K.roundRect(i,a,r,r,o),K.fillStyle=s,K.fill(),K.restore(),K.save(),K.beginPath(),K.roundRect(i,a,r,r,o),K.clip();let c=K.createLinearGradient(i,a,i,a+r*.5);c.addColorStop(0,`rgba(255,255,255,0.28)`),c.addColorStop(1,`rgba(255,255,255,0)`),K.fillStyle=c,K.fillRect(i,a,r,r*.5);let l=(e,t)=>[i+e*r,a+t*r];K.beginPath(),K.moveTo(...l(.14,.4)),K.lineTo(...l(.84,.4)),K.lineTo(...l(.84,.51)),K.lineTo(...l(.66,.53)),K.lineTo(...l(.6,.63)),K.lineTo(...l(.7,.7)),K.lineTo(...l(.74,.77)),K.lineTo(...l(.26,.77)),K.lineTo(...l(.3,.7)),K.lineTo(...l(.4,.63)),K.lineTo(...l(.36,.53)),K.quadraticCurveTo(...l(.21,.52),...l(.14,.4)),K.closePath(),K.shadowColor=`rgba(20,10,80,0.35)`,K.shadowBlur=r*.04,K.shadowOffsetY=r*.02,K.fillStyle=`#fff`,K.fill(),K.shadowColor=`transparent`;let[u,d]=l(.68,.24),f=r*.09;K.beginPath(),K.moveTo(u,d-f),K.quadraticCurveTo(u,d,u+f,d),K.quadraticCurveTo(u,d,u,d+f),K.quadraticCurveTo(u,d,u-f,d),K.quadraticCurveTo(u,d,u,d-f),K.fillStyle=`#ffc44d`,K.fill(),K.restore()}function Qf(e,t,n,r){if(e===`smedja`)return Zf(t,n,r);if(!Jf[e])return;let i=e===`trash`?.12:0;K.drawImage(Jf[e],t+r*i,n+r*i,r*(1-2*i),r*(1-2*i))}function $f(){Uf||qf();let e=Jd,{x:t,y:n,w:r,h:i}=Ud;e.drawImage(Uf,0,0,Bd,Vd),e.save(),e.shadowColor=`rgba(10,20,45,0.3)`,e.shadowBlur=40,e.shadowOffsetY=14,e.beginPath(),e.roundRect(t,n,r,i,20),e.fillStyle=`#fff`,e.fill(),e.restore(),e.save(),e.beginPath(),e.roundRect(t,n,r,i,20),e.clip(),e.drawImage(Yd,t,n,r,i),e.restore(),e.beginPath(),e.roundRect(t-1.5,n-1.5,r+3,i+3,21.5),e.strokeStyle=`rgba(255,255,255,0.2)`,e.lineWidth=3,e.stroke(),e.beginPath(),e.roundRect(t+.5,n+.5,r-1,i-1,20),e.strokeStyle=`rgba(0,0,0,0.18)`,e.lineWidth=1,e.stroke(),e.drawImage(Wf,0,0,Bd,Vd)}var ep=null;function tp(e){Hf();let t=document.createElement(`div`);t.className=`flat`,t.appendChild(qd),zd.appendChild(t),zd.classList.add(`ready`),zd.querySelector(`.laptop-note`).textContent=e}var np=e=>new Lu().setMeshoptDecoder(Fd).loadAsync(e),rp=np(`macbook.glb`);rp.catch(()=>{}),Zd(1);async function ip(){let e=[500,600].map(e=>document.fonts.load(_f(23,e)).catch(()=>{}));await Promise.all([...e,Xf()]),Hf();let t;try{t=new Lc({antialias:!0,alpha:!0})}catch{return tp(`3D is not available in this browser, so here is the board on its own.`)}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.toneMapping=4,t.toneMappingExposure=1.05,t.outputColorSpace=Zt,zd.prepend(t.domElement);let n=new zc;n.environment=new ao(t).fromScene(new Id(t),.04).texture;let r=new xu(16777215,1.2);r.position.set(3,6,5),n.add(r);let i=new Sa(26,1,.1,1e3),a;try{a=await rp}catch{return t.dispose(),t.domElement.remove(),tp(`The 3D model did not load, so here is the board on its own.`)}let o=a.scene,s=new jc;n.add(s),s.add(o),o.updateMatrixWorld(!0);let c=new pr().setFromObject(o).getCenter(new U);o.position.sub(c),o.updateMatrixWorld(!0);let l=null;o.traverse(e=>{e.isMesh&&e.material&&e.material.name===`HlQwFCAPWzetDQy`&&(l=e)}),ep=new jl(qd),ep.flipY=!1,ep.colorSpace=Zt,ep.generateMipmaps=!1,ep.minFilter=kt,ep.magFilter=kt,l&&(l.material=new ji({map:ep,toneMapped:!1}));let u=new U(0,1,0),d=new U;function f(){let e=l.geometry.attributes.normal,t=new U;for(let n=0;n<e.count;n++)t.add(d.fromBufferAttribute(e,n));let n=t.normalize().transformDirection(l.matrixWorld),r=new pr().setFromObject(l).getCenter(new U);return n.dot(new U().sub(r))<0&&n.negate(),n}let p=new U(0,0,1),m=new U,h=30,g=20,_=0,v=o.getObjectByName(`RcexTyyhpuJYATQ_61`);if(l&&v){let e=f(),t=new U().crossVectors(u,new U(e.x,0,e.z).normalize()).normalize(),n=new pr().setFromObject(v),r=null,i=1/0;v.traverse(e=>{if(!e.isMesh)return;let t=e.geometry.attributes.position;for(let n=0;n<t.count;n+=3)d.fromBufferAttribute(t,n).applyMatrix4(e.matrixWorld),d.y<i&&(i=d.y,r=d.clone())}),r.x=(n.min.x+n.max.x)/2;let a=new di;a.position.copy(r),o.parent.add(a),a.updateMatrixWorld(!0),a.attach(v);let s=Math.asin(In.clamp(e.y,-1,1));a.rotateOnWorldAxis(t,s),a.updateMatrixWorld(!0),Math.abs(f().y)>Math.abs(e.y)&&(a.rotateOnWorldAxis(t,-2*s),a.updateMatrixWorld(!0))}if(l){p=f(),p.y=0,p.normalize();let e=new U().crossVectors(u,p).normalize(),t=l.geometry.attributes.position;new pr().setFromObject(l).getCenter(m);let n=1/0,r=-1/0,i=-1/0;_=1/0;for(let a=0;a<t.count;a++){d.fromBufferAttribute(t,a).applyMatrix4(l.matrixWorld);let o=d.clone().sub(m).dot(e);n=Math.min(n,o),r=Math.max(r,o),_=Math.min(_,d.y),i=Math.max(i,d.y)}h=r-n,g=i-_}i.fov=9;let y=Math.tan(In.degToRad(i.fov/2));function b(){let e=zd.clientWidth,n=zd.clientHeight;t.setSize(e,n,!1),i.aspect=e/n;let r=Math.max(h*.55/(y*i.aspect),g*.62/y),a=_+g*.015;i.position.set(m.x,a,m.z).addScaledVector(p,r),i.lookAt(m.x,a,m.z),i.far=r*3,i.near=r/10;let o=(_+g*.46-a)/(2*r*y)*n;i.setViewOffset(e,n,0,-o,e,n),i.updateProjectionMatrix()}let x=-1;function S(){let e=Math.min(3,Math.max(1.25,Math.round(zd.clientWidth*t.getPixelRatio()*1.2/Bd*4)/4));e!==Kd&&(Zd(e),Hf(),ep.dispose(),ep.image=qd,ep.needsUpdate=!0)}new ResizeObserver(()=>{b(),S(),x=-1}).observe(zd),b(),S(),await t.compileAsync(n,i).catch(()=>{}),t.render(n,i),x=ep.version,zd.classList.add(`ready`);let C=0,w=0,T=0,E=performance.now()+2600,D=!0;new IntersectionObserver(e=>{D=e[0].isIntersecting}).observe(zd),t.setAnimationLoop(e=>{if(D){if(!Rd){e>E&&(w=C,C=(C+1)%mf.length,T=e,E=e+2600);let t=Math.min(1,(e-T)/380);if(T&&t<=1){let e=1-(1-t)**3;Hf({sel:t<.5?w:C,y:w+(C-w)*e}),ep.needsUpdate=!0,t===1&&(T=0)}}ep.version!==x&&(t.render(n,i),x=ep.version)}})}var ap={blue:16777215,indigo:15985919,teal:16187389,rose:16773358,amber:16775142},op=[];window.tintClouds=e=>op.forEach(t=>t.color.setHex(ap[e]||16777215));async function sp(){let e=document.querySelector(`.clouds`),t=document.createElement(`canvas`);t.className=`cloud-gl`,e.appendChild(t);let n;try{n=new Lc({canvas:t,alpha:!0,antialias:!1})}catch{t.remove();return}n.setPixelRatio(.25),n.outputColorSpace=Zt;let r;try{r=await np(`cloud.glb`)}catch{n.dispose(),t.remove();return}r.scene.traverse(e=>{if(!e.isMesh)return;let t=new ji({map:e.material.map,color:ap[document.querySelector(`.hero`).dataset.sky]||16777215,transparent:!0,opacity:.07,depthWrite:!1,side:2});op.push(t),e.material=t}),r.scene.updateMatrixWorld(!0);let i=new pr().setFromObject(r.scene).getCenter(new U),a=new zc,o=new qa(0,1,0,-1,-4e3,4e3),s=(e=>()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296})(20261114),c=[[.9,70,600,5,-24,24,.03,.22],[0,330,480,5,-18,16,.032,.22],[.3,820,1300,8,-30,50,.035,.2]],l=op.slice();op=[];let u=c.map(([e,t,n,o,c,u,d,f],p)=>{let m=new jc,h=[],g=l.map(e=>{let t=e.clone();return t.opacity=d,op.push(t),t});for(let e=0;e<o;e++){let t=e/(o-1),a=n/o*(1.4+s()*.8),l=new jc,u=new jc,d=r.scene.clone();d.position.copy(i).negate(),u.add(d),l.add(u);let p=0;d.traverse(e=>{e.isMesh&&(e.material=g[p++%g.length])}),u.rotation.set(s()*6.28,s()*6.28,s()*6.28);let _=s()<.3?1.6+s()*.8:1;l.scale.set(a*(1.4+s()*.9),a*f*(.7+s()*1.6)*_,a),l.rotation.z=(s()-.5)*.06+c/n,l.position.set((t-.5)*n+(s()-.5)*n*.08,-c*(t-.5)+(s()-.5)*a*f*1.4,0),m.add(l),h.push([u,(s()-.5)*.03])}return a.add(m),{g:m,puffs:h,fx:e,y:t,sway:u,phase:p*2.1,x:0}}),d=1,f=1,p=()=>{d=e.clientWidth,f=Math.min(e.clientHeight,1e3),t.style.height=f+`px`,n.setSize(d,f,!1),o.right=d,o.bottom=-f,o.updateProjectionMatrix(),u.forEach(e=>{e.x=e.fx*d})};new ResizeObserver(p).observe(e),p();let m=!0;new IntersectionObserver(e=>{m=e[0].isIntersecting}).observe(e);let h=performance.now(),g=e=>{let t=Math.min(.1,(e-h)/1e3);h=e;for(let n of u){if(!Rd)for(let[e,r]of n.puffs)e.rotation.y+=r*t;let r=e/1e3;n.g.position.set(n.x+(Rd?0:Math.sin(r/9+n.phase)*n.sway),-n.y+(Rd?0:Math.sin(r/13+n.phase)*n.sway*.15),0)}n.render(a,o)};g(h),e.classList.add(`gl`);let _=0,v=0;addEventListener(`scroll`,()=>{v=performance.now()},{passive:!0}),n.setAnimationLoop(e=>{m&&!Rd&&e-_>33&&e-v>180&&(_=e,g(e))})}function cp(e,t,n){let r=document.getElementById(e);r.addEventListener(`click`,e=>{let i=e.target.closest(`button`);i&&(r.querySelectorAll(`button`).forEach(e=>e.setAttribute(`aria-pressed`,e===i)),tf[t]=i.dataset.v,of(),ff(),t===`accent`&&(document.querySelector(`.hero`).dataset.sky=i.dataset.v,window.paintClouds&&window.paintClouds(i.dataset.v),window.tintClouds(i.dataset.v),document.documentElement.style.setProperty(`--acc-h`,{indigo:280,blue:255,teal:185,rose:10,amber:70}[i.dataset.v]),document.documentElement.style.setProperty(`--acc-solid`,Qd[i.dataset.v].dark),window.dispatchEvent(new CustomEvent(`marram:accent`,{detail:i.dataset.v}))),n&&(Uf=null),Hf(),ep&&(ep.needsUpdate=!0))})}cp(`c-accent`,`accent`,!0),cp(`c-mode`,`mode`,!1),cp(`c-radius`,`radius`,!1),ip().finally(sp);var Z=Se(ft(),1),lp=Se(Ve(),1),up=ye(),dp={sharp:{"radius-factor":`0`,"radius-full":`0px`},rounded:{"radius-factor":`1`,"radius-full":`0px`},"full-rounded":{"radius-factor":`1.5`,"radius-full":`9999px`}};function fp({appearance:e=`inherit`,accentColor:t,grayColor:n,scaling:r,density:i,radius:a,tokens:o,render:s,className:c,style:l,...u}){let d={...a&&dp[a],...o};return M({render:s,defaultTagName:`div`,props:st({"data-accent":t,"data-gray":n,className:B(e!==`inherit`&&e,c),style:{...pp(d),...l}},u)})}function pp(e){if(e)return Object.fromEntries(Object.entries(e).map(([e,t])=>[e.startsWith(`--`)?e:`--${e}`,t]))}function mp(e){if(!e)return null;for(let t of e.elements){let e=t.tagName;if(e===`BUTTON`||e===`INPUT`){let e=t;if(e.type===`submit`)return e}}return null}var hp=`data-checked`,gp=`data-unchecked`;function _p(e){return{checked(t){return e.indeterminate?{}:t?{[hp]:``}:{[gp]:``}},...N}}var vp=Z.createContext(void 0);function yp(){return Z.useContext(vp)}var bp=Z.createContext(void 0);function xp(){let e=Z.useContext(bp);if(e===void 0)throw Error(Ye(14));return e}var Q=i(),Sp=`data-parent`,Cp=Z.forwardRef(function(e,n){let{checked:r,className:i,defaultChecked:a=!1,"aria-labelledby":s,disabled:c=!1,form:l,id:u,indeterminate:f=!1,inputRef:h,name:g,onCheckedChange:v,parent:y=!1,readOnly:b=!1,render:S,required:w=!1,uncheckedValue:T,value:D,nativeButton:k=!1,style:ee,...M}=e,{clearErrors:te}=m(),{disabled:N,name:P,setDirty:ne,setFilled:F,setFocused:re,setTouched:ie,state:I,validationMode:oe,validityData:se,validation:ce}=x(),le=dt(),{labelId:L,registerControlId:de,getDescriptionProps:R}=E(),z=yp(),B=z?.allValues===void 0?void 0:z.parent,V=B!==void 0,H=N||le.disabled||z?.disabled||c,fe=P??g,me=D??fe,he=A(),ge=z?.registerControlId!==de,_e=Le({id:u||void 0,enabled:ge}),ve=k?_e:he,ye={};V&&(y?ye=B.getParentProps():me!==void 0&&(ye=B.getChildProps(me)));let{checked:be=r,indeterminate:xe=f,onCheckedChange:Se,...Ce}=ye,we=z?.value,Te=Z.useRef(null),{getButtonProps:Ee,buttonRef:De}=ae({disabled:H,native:k}),Oe=z?.validation??ce,[ke,Ae]=pe({controlled:me!==void 0&&we!==void 0&&!y?we.includes(me):be,default:a,name:`Checkbox`,state:`checked`}),je=V?!!be:ke,Me=V&&xe||f;Ne(Te,he,ke,void 0,!z&&!H,g);let Fe=B?.registerChildId,Ie=Z.useRef(null),Re=Oe.registerInput,ze=z?me:void 0,Be=Z.useCallback(e=>Re(e,{controlRef:Te,value:ze}),[Re,ze]),Ve=Pe(h,Ie,y?void 0:Be),He=C(s,L,Ie,!k,_e);d(()=>{Ie.current&&(Ie.current.indeterminate=Me),z||F(ke)},[ke,Me,z,F]),nt(ke,()=>{z||(te(fe),ne(ke!==se.initialValue),Oe.change(ke))});let Ue=st({checked:ke,disabled:H,form:l,name:y?void 0:fe,id:k?void 0:_e,required:w,ref:Ve,style:fe?O:o,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;if(b){e.preventDefault();return}let t=e.currentTarget.checked,n=j(ue,e.nativeEvent);if(v?.(t,n),!n.isCanceled&&(Se?.(t,n),!n.isCanceled&&(Ae(t),me!==void 0&&z!==void 0&&!y&&!V))){let e=t?[...z.value,me]:z.value.filter(e=>e!==me);z.setValue(e,n)}},onClick(e){e.stopPropagation()},onFocus(){Te.current?.focus()}},D===void 0?Ge:{value:(z?ke&&D:D)||``},R,e=>Oe.getValidationProps(H,e));Z.useEffect(()=>{if(!B||me===void 0)return;let e=B.disabledStatesRef.current;return e.set(me,H),()=>{e.delete(me)}},[B,H,me]);let We=Z.useMemo(()=>({...I,checked:je,disabled:H,readOnly:b,required:w,indeterminate:Me}),[I,je,H,b,w,Me]),Ke=_p(We),qe=t(`span`,e,{state:We,ref:[De,Te,n],props:[{id:ve,role:`checkbox`,"aria-checked":Me?`mixed`:je,"aria-readonly":b||void 0,"aria-required":w||void 0,"aria-labelledby":He,[Sp]:y?``:void 0,onFocus(){H||re(!0)},onBlur(){let e=Ie.current;e&&(ie(!0),re(!1),oe===`onBlur`&&Oe.commit(z?we:e.checked))},onKeyDown(e){if(e.key!==`Enter`||(e.preventBaseUIHandler(),e.defaultPrevented))return;let t=Ie.current?.form??null,n=e.currentTarget,r=e.nativeEvent,i=e.preventDefault,a=r.preventDefault,o=!1;e.preventDefault=()=>{o=!0,i.call(e)},r.preventDefault=()=>{o=!0,a.call(r)},a.call(r),_(n).queueMicrotask(()=>{e.preventDefault=i,r.preventDefault=a,o||mp(t)?.click()})},onClick(e){if(b||H)return;e.preventDefault();let t=Ie.current;t&&p(t,e)}},M,Ce,Ee,R,e=>Oe.getValidationProps(H,e)],stateAttributesMapping:Ke}),Je=qe.props.id;return d(()=>{if(Fe&&!y&&me!==void 0&&Je!==void 0)return Fe(me,Je)},[Fe,y,me,Je]),(0,Q.jsxs)(bp.Provider,{value:We,children:[qe,!ke&&!z&&fe&&!y&&T!==void 0&&(0,Q.jsx)(`input`,{type:`hidden`,form:l,name:fe,value:T,disabled:H}),(0,Q.jsx)(`input`,{...Ue,suppressHydrationWarning:!0})]})}),wp=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,keepMounted:o=!1,...s}=e,c=xp(),l=c.checked||c.indeterminate,{mounted:u,transitionStatus:d,setMounted:f}=Je(l),p=Z.useRef(null),m={...c,transitionStatus:d};ot({batch:!0,enabled:!l,open:l,ref:p,onComplete(){l||f(!1)}});let h={..._p(c),...P},g=o||u,_=t(`span`,e,{ref:[n,p],state:m,stateAttributesMapping:h,props:s});return g?_:null}),Tp={field:`_field_nxy8a_3`,box:`_box_nxy8a_10`,primary:`_primary_nxy8a_27`,indicator:`_indicator_nxy8a_61`};function Ep({ref:e,autoFocus:t,label:n,helperText:r,name:i,variant:a=`neutral`,isIndeterminate:o,disabled:s,required:c,validationState:l,className:u,onCheckedChange:d,...f}){let p=(0,Z.useRef)(!1),m=(0,Z.useCallback)(n=>{n&&t&&!p.current&&(p.current=!0,n.focus()),typeof e==`function`?e(n):e&&(e.current=n)},[t,e]);return(0,Q.jsx)(_e,{label:n,helperText:r,validationState:l,required:c,disabled:s,name:i,className:B(Tp.field,u),children:(0,Q.jsx)(Cp,{...f,ref:m,indeterminate:o,required:c,onCheckedChange:d&&(e=>d(e)),className:B(Be.control,Tp.box,Tp[a]),children:(0,Q.jsx)(wp,{className:Tp.indicator,render:(e,t)=>(0,Q.jsx)(`span`,{...e,children:(0,Q.jsx)(_t,{name:t.indeterminate?`minus`:`check`})})})})})}var Dp={anchor:`_anchor_vf7w5_1`,badge:`_badge_vf7w5_11`,dot:`_dot_vf7w5_30`,sm:`_sm_vf7w5_38`,primary:`_primary_vf7w5_43`,accent:`_accent_vf7w5_50`,secondary:`_secondary_vf7w5_55`,destructive:`_destructive_vf7w5_66`,success:`_success_vf7w5_73`,warning:`_warning_vf7w5_78`,floating:`_floating_vf7w5_92`,"top-start":`_top-start_vf7w5_100`,"top-end":`_top-end_vf7w5_106`,"bottom-start":`_bottom-start_vf7w5_112`,"bottom-end":`_bottom-end_vf7w5_118`};function Op({count:e,variant:t=`primary`,size:n=`md`,isDot:r=!1,maxCount:i,isFloating:a=!1,floatingPlacement:o=`top-end`,children:s,className:c,...l}){let u=(r||e!==void 0)&&(0,Q.jsx)(`span`,{role:l[`aria-label`]?`img`:void 0,"aria-hidden":!l[`aria-label`]&&(r||a)?!0:void 0,className:B(Dp.badge,Dp[t],Dp[n],r&&Dp.dot,a&&[Dp.floating,Dp[o]],c),...l,children:r?null:i!==void 0&&e>i?`${i}+`:e});return s===void 0?u:(0,Q.jsxs)(`span`,{className:Dp.anchor,children:[s,u]})}var kp={avatar:`_avatar_frl9r_1`,xs:`_xs_frl9r_20`,sm:`_sm_frl9r_29`,md:`_md_frl9r_37`,lg:`_lg_frl9r_45`,xl:`_xl_frl9r_55`,xxl:`_xxl_frl9r_66`,image:`_image_frl9r_76`,initials:`_initials_frl9r_83`,subtle:`_subtle_frl9r_88`,solid:`_solid_frl9r_95`,silhouette:`_silhouette_frl9r_117`,hasStatus:`_hasStatus_frl9r_130`,status:`_status_frl9r_134`,group:`_group_frl9r_158`},Ap={online:{variant:`success`,label:`Online`},away:{variant:`warning`,label:`Away`},busy:{variant:`destructive`,label:`Busy`},offline:{variant:`secondary`,label:`Offline`}};function jp({size:e=`md`,imageSrc:t,imageAlt:n,initials:r,color:i,variant:a=`subtle`,status:o,statusLabel:s=o&&Ap[o].label,className:c,...l}){let[u,d]=(0,Z.useState)(),f=!!t&&u!==t,p=e===`xs`&&r&&!r.includes(`+`)?Array.from(r)[0]:r;return(0,Q.jsxs)(`span`,{role:n?`img`:void 0,"aria-label":n&&o?`${n}, ${s}`:n,"aria-hidden":!n||void 0,"data-accent":i,className:B(kp.avatar,kp[e===`2xl`?`xxl`:e],kp[a],o&&kp.hasStatus,c),...l,children:[f?(0,Q.jsx)(`img`,{src:t,alt:``,className:kp.image,onError:()=>d(t)}):p?(0,Q.jsx)(`span`,{className:kp.initials,children:p}):(0,Q.jsx)(_t,{name:`user`,className:kp.silhouette}),o&&(0,Q.jsx)(Op,{isDot:!0,variant:Ap[o].variant,size:`md`,className:kp.status})]})}function Mp({avatars:e,max:t,size:n=`md`,moreLabel:r=e=>`${e} more`,hasTooltips:i=!1,className:a,...o}){let s=t!==void 0&&e.length>t?e.slice(0,Math.max(t-1,0)):e,c=e.length-s.length,l=e.some(e=>e.imageAlt),u=i?e.slice(s.length).map(e=>e.imageAlt).filter(Boolean).join(`, `):``,d=c>0&&(0,Q.jsx)(jp,{size:n,initials:n===`xs`&&c>9?`9+`:`+${c}`,imageAlt:l?r(c):void 0,tabIndex:u?0:void 0}),f=(0,Q.jsxs)(`span`,{className:B(kp.group,a),...o,children:[s.map((e,t)=>{let r=(0,Q.jsx)(jp,{...e,size:n,style:{zIndex:s.length-t,...e.style}});return i&&e.imageAlt?(0,Q.jsx)(ct,{content:e.imageAlt,children:r},t):(0,Q.jsx)(jp,{...e,size:n,style:{zIndex:s.length-t,...e.style}},t)}),d&&u?(0,Q.jsx)(ct,{content:u,children:d}):d]});return i?(0,Q.jsx)(We,{children:f}):f}var Np={alert:`_alert_5v9g7_1`,info:`_info_5v9g7_20`,success:`_success_5v9g7_26`,warning:`_warning_5v9g7_32`,danger:`_danger_5v9g7_38`,subtle:`_subtle_5v9g7_48`,outlined:`_outlined_5v9g7_52`,icon:`_icon_5v9g7_57`,title:`_title_5v9g7_58`,close:`_close_5v9g7_59`,solid:`_solid_5v9g7_65`,body:`_body_5v9g7_78`,action:`_action_5v9g7_90`},Pp={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`};function Fp({variant:e=`info`,appearance:t=`subtle`,title:n,icon:r,action:i,onClose:a,closeLabel:o=`Dismiss`,isLive:s=!1,className:c,children:l,...u}){return(0,Q.jsxs)(`div`,{role:s?e===`danger`||e===`warning`?`alert`:`status`:void 0,className:B(Np.alert,Np[e],Np[t],c),...u,children:[r!==!1&&(0,Q.jsx)(`span`,{className:Np.icon,"aria-hidden":`true`,children:r??(0,Q.jsx)(_t,{name:Pp[e]})}),(0,Q.jsxs)(`div`,{className:Np.body,children:[n&&(0,Q.jsx)(`div`,{className:Np.title,children:n}),l&&(0,Q.jsx)(`div`,{className:Np.description,children:l}),i&&(0,Q.jsx)(`div`,{className:Np.action,children:i})]}),a&&(0,Q.jsx)(`button`,{type:`button`,"aria-label":o,className:Np.close,onClick:a,children:(0,Q.jsx)(_t,{name:`close`})})]})}var Ip=Z.createContext(void 0);function Lp(e){let t=Z.useContext(Ip);if(t===void 0&&!e)throw Error(Ye(33));return t}var Rp=Z.createContext(void 0);function zp(e){let t=Z.useContext(Rp);if(t===void 0&&!e)throw Error(Ye(36));return t}var Bp=Z.createContext(void 0);function Vp(e=!0){let t=Z.useContext(Bp);if(t===void 0&&!e)throw Error(Ye(25));return t}var Hp=Z.createContext(void 0);function Up(){let e=Z.useContext(Hp);if(e===void 0)throw Error(Ye(30));return e}function Wp(e){let{closeOnClick:t,highlighted:n,id:i,nodeId:a,store:o,typingRef:s,itemRef:c,itemMetadata:l}=e,{events:u}=o.useState(`floatingTreeRoot`),d=o.useState(`open`),f=Vp(!0),m=f!==void 0;return Z.useMemo(()=>({id:i,role:`menuitem`,tabIndex:d&&n?0:-1,onKeyDown(e){e.key===` `&&s?.current&&e.preventDefault()},onMouseMove(e){a&&u.emit(`itemhover`,{nodeId:a,target:e.currentTarget})},onClick(e){t&&u.emit(`close`,{domEvent:e,reason:et})},onMouseUp(e){if(f){let t=f.initialCursorPointRef.current;if(f.initialCursorPointRef.current=null,m&&t&&Math.abs(e.clientX-t.x)<=1&&Math.abs(e.clientY-t.y)<=1||m&&!r&&e.button===2)return}c.current&&o.context.allowMouseUpTriggerRef.current&&(!m||e.button===2)&&l.type===`regular-item`&&p(c.current,e,{detail:1})}}),[t,n,i,u,a,d,o,s,c,f,m,l])}var Gp={type:`regular-item`};function Kp(e){let{closeOnClick:t,disabled:n,highlighted:r,id:i,store:a,typingRef:o=a.context.typingRef,nativeButton:s,itemMetadata:c,nodeId:l}=e,u=Z.useRef(null),{getButtonProps:d,buttonRef:f}=ae({disabled:n,focusableWhenDisabled:!0,native:s,composite:!0}),p=Wp({closeOnClick:t,highlighted:r,id:i,nodeId:l,store:a,typingRef:o,itemRef:u,itemMetadata:c}),m=Z.useCallback(e=>st(p,{onMouseEnter(){c.type===`submenu-trigger`&&c.setActive()}},e,d),[p,d,c]),h=Pe(u,f);return Z.useMemo(()=>({getItemProps:m,itemRef:h}),[m,h])}var qp=`data-checked`,Jp=`data-unchecked`,Yp={checked(e){return e?{[qp]:``}:{[Jp]:``}},...P},Xp=Z.forwardRef(function(e,n){let{render:r,className:i,id:a,label:o,nativeButton:s=!1,disabled:c=!1,closeOnClick:l=!1,checked:u,defaultChecked:d,onCheckedChange:f,style:p,...m}=e,h=xe({guess:!0,label:o}),g=Lp(!0),_=A(a),{store:v}=zp(),y=v.useState(`disabled`),b=c||y,x=v.useState(`isActive`,h.index),S=v.useState(`itemProps`),[C,w]=pe({controlled:u,default:d??!1,name:`MenuCheckboxItem`,state:`checked`}),{getItemProps:T,itemRef:E}=Kp({closeOnClick:l,disabled:b,highlighted:x,id:_,store:v,nativeButton:s,nodeId:g?.context.nodeId,itemMetadata:Gp}),D=Z.useMemo(()=>({disabled:b,highlighted:x,checked:C}),[b,x,C]);function O(e){let t=j(et,e.nativeEvent,void 0,{preventUnmountOnClose:rt});f?.(!C,t),!t.isCanceled&&w(e=>!e)}let k=t(`div`,e,{state:D,stateAttributesMapping:Yp,props:[S,{role:`menuitemcheckbox`,"aria-checked":C,onClick:O},m,T],ref:[E,n,h.ref]});return(0,Q.jsx)(Hp.Provider,{value:D,children:k})}),Zp=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,keepMounted:o=!1,...s}=e,c=Up(),l=Z.useRef(null),{transitionStatus:u,mounted:d,setMounted:f}=Je(c.checked);ot({batch:!0,enabled:!c.checked,open:c.checked,ref:l,onComplete(){c.checked||f(!1)}});let p={checked:c.checked,disabled:c.disabled,highlighted:c.highlighted,transitionStatus:u};return t(`span`,e,{state:p,ref:[n,l],stateAttributesMapping:Yp,props:{"aria-hidden":!0,...s},enabled:o||d})}),Qp=Z.createContext(void 0);function $p(){let e=Z.useContext(Qp);if(e===void 0)throw Error(Ye(31));return e}var em=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,...o}=e,[s,c]=Z.useState(void 0),l=t(`div`,e,{ref:n,props:{role:`group`,"aria-labelledby":s,...o}});return(0,Q.jsx)(Qp.Provider,{value:c,children:l})}),tm=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,id:o,...s}=e,c=A(o),l=$p();return d(()=>(l(c),()=>{l(e=>e===c?void 0:e)}),[l,c]),t(`div`,e,{ref:n,props:{id:c,"aria-hidden":!0,...s}})}),nm=Z.forwardRef(function(e,n){let{render:r,className:i,id:a,label:o,nativeButton:s=!1,disabled:c=!1,closeOnClick:l=!0,style:u,...d}=e,f=xe({guess:!0,label:o}),p=Lp(!0),m=A(a),{store:h}=zp(),g=h.useState(`disabled`),_=c||g,v=h.useState(`isActive`,f.index),y=h.useState(`itemProps`),{getItemProps:b,itemRef:x}=Kp({closeOnClick:l,disabled:_,highlighted:v,id:m,store:h,nativeButton:s,nodeId:p?.context.nodeId,itemMetadata:Gp});return t(`div`,e,{state:{disabled:_,highlighted:v},props:[y,d,b],ref:[x,n,f.ref]})}),rm=Z.forwardRef(function(e,n){let{render:r,className:i,id:a,label:o,closeOnClick:s=!1,style:c,...l}=e,u=Z.useRef(null),d=xe({guess:!0,label:o}),f=Lp(!0)?.context.nodeId,p=A(a),{store:m}=zp(),h=m.useState(`isActive`,d.index),g=m.useState(`itemProps`),_=m.context.typingRef,{getButtonProps:v,buttonRef:y}=ae({native:!1,composite:!0}),b=Wp({closeOnClick:s,highlighted:h,id:p,nodeId:f,store:m,typingRef:_,itemRef:u,itemMetadata:Gp});function x(e){return st(b,e,v)}return t(`a`,e,{state:{highlighted:h},props:[g,l,x],ref:[u,y,n,d.ref]})}),im=Z.forwardRef(function(e,r){let{render:i,className:a,style:o,finalFocus:s,...c}=e,{store:l}=zp(),{side:u,align:d}=Lp(),f=ht(!0)!=null,p=l.useState(`open`),m=l.useState(`transitionStatus`),h=l.useState(`popupProps`),g=l.useState(`mounted`),_=l.useState(`instantType`),y=l.useState(`activeTriggerElement`),b=l.useState(`parent`),x=l.useState(`lastOpenChangeReason`),S=l.useState(`rootId`),C=l.useState(`floatingRootContext`),w=l.useState(`floatingTreeRoot`),T=l.useState(`closeDelay`),E=l.useState(`hoverEnabled`),D=l.useState(`disabled`),O=l.useState(`openMethod`),k=b.type===`context-menu`;ot({open:p,ref:l.context.popupRef,onComplete(){p&&l.context.onOpenChangeComplete?.(!0)}}),Z.useEffect(()=>{function e(e){l.setOpen(!1,j(e.reason,e.domEvent))}return w.events.on(`close`,e),()=>{w.events.off(`close`,e)}},[w.events,l]),v(C,{enabled:E&&!D&&!k&&b.type!==`menubar`,closeDelay:T});let A=l.useStateSetter(`popupElement`),ee={transitionStatus:m,side:u,align:d,open:p,nested:b.type===`menu`,instant:_},M=t(`div`,e,{state:ee,ref:[r,l.context.popupRef,A],stateAttributesMapping:Ae,props:[h,{onKeyDown(e){f&&F.has(e.key)&&e.stopPropagation()}},n(m),c,{"data-rootownerid":S}]}),te=b.type===void 0||k;return(y||b.type===`menubar`&&x!==`outside-press`)&&(te=!0),(0,Q.jsx)(je,{context:C,openInteractionType:O,modal:k,disabled:!g,returnFocus:s===void 0?te:s,initialFocus:b.type!==`menu`,restoreFocus:!0,externalTree:b.type===`menubar`?void 0:w,previousFocusableElement:y,nextFocusableElement:b.type===void 0?l.context.triggerFocusTargetRef:void 0,beforeContentFocusGuardRef:b.type===void 0?l.context.beforeContentFocusGuardRef:void 0,children:M})}),am=Z.createContext(void 0);function om(){let e=Z.useContext(am);if(e===void 0)throw Error(Ye(32));return e}var sm=Z.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i,parent:a}=zp();if(!(i.useState(`mounted`)||n))return null;let o=a.type===`menu`||a.type===`menubar`?`group`:void 0;return(0,Q.jsx)(am.Provider,{value:n,children:(0,Q.jsx)(ne,{ref:t,...r,portalOwnerRole:o})})}),cm=Z.forwardRef(function(e,t){let{anchor:n,positionMethod:r=`absolute`,className:i,render:o,side:s,align:c,sideOffset:l=0,alignOffset:u=0,collisionBoundary:f=`clipping-ancestors`,collisionPadding:p=5,arrowPadding:m=5,sticky:h=!1,disableAnchorTracking:g=!1,collisionAvoidance:_=gt,style:v,...y}=e,{store:b}=zp(),x=om(),C=Vp(!0),w=b.useState(`parent`),T=b.useState(`floatingRootContext`),E=b.useState(`floatingTreeRoot`),D=b.useState(`mounted`),O=b.useState(`open`),A=b.useState(`modal`),ee=b.useState(`openMethod`),M=b.useState(`activeTriggerElement`),N=b.useState(`transitionStatus`),P=b.useState(`positionerElement`),ne=b.useState(`instantType`),F=b.useState(`adaptiveOrigin`),ie=b.useState(`lastOpenChangeReason`),I=b.useState(`floatingNodeId`),ae=b.useState(`floatingParentNodeId`),oe=T.useState(`domReferenceElement`),se=Z.useRef(null),ce=ve(P),le=n,L=l,ue=u,de=c,R=_;w.type===`context-menu`&&(le=n??w.context?.anchor,de??=`start`,!s&&de!==`center`&&(ue=e.alignOffset??2,L=e.sideOffset??-5));let z=s,B=de;w.type===`menu`?(z??=`inline-end`,B??=`start`,R=e.collisionAvoidance??re):w.type===`menubar`&&(z??=w.context.orientation===`vertical`?`inline-end`:`bottom`,B??=`start`);let V=w.type===`context-menu`,H=S({anchor:le,floatingRootContext:T,positionMethod:C?`fixed`:r,mounted:D,side:z,sideOffset:L,align:B,alignOffset:ue,arrowPadding:V?0:m,collisionBoundary:f,collisionPadding:p,sticky:h,nodeId:I,keepMounted:x,disableAnchorTracking:g,collisionAvoidance:R,shift:V?{crossAxis:!(`side`in R&&R.side===`flip`),rootBoundary:`layoutViewport`}:void 0,externalTree:E,adaptiveOrigin:F});Z.useEffect(()=>{function e(e){e.open&&(e.parentNodeId===I&&b.set(`hoverEnabled`,!1),e.nodeId!==I&&e.parentNodeId===b.select(`floatingParentNodeId`)&&b.setOpen(!1,j(te)))}return E.events.on(`menuopenchange`,e),()=>{E.events.off(`menuopenchange`,e)}},[b,E.events,I]),Z.useEffect(()=>{if(b.select(`floatingParentNodeId`)==null)return;function e(e){if(e.open||e.nodeId!==b.select(`floatingParentNodeId`))return;let t=e.reason??`sibling-open`;b.setOpen(!1,j(t))}return E.events.on(`menuopenchange`,e),()=>{E.events.off(`menuopenchange`,e)}},[E.events,b]);let fe=Te();Z.useEffect(()=>{O||fe.clear()},[O,fe]),Z.useEffect(()=>{function e(e){if(O&&e.nodeId===b.select(`floatingParentNodeId`)){if(e.target&&M&&M!==e.target){let e=b.select(`closeDelay`);e>0?fe.isStarted()||fe.start(e,()=>{b.setOpen(!1,j(te))}):b.setOpen(!1,j(te))}else fe.clear()}}return E.events.on(`itemhover`,e),()=>{E.events.off(`itemhover`,e)}},[E.events,O,M,b,fe]),Z.useEffect(()=>{let e={open:O,nodeId:I,parentNodeId:ae,reason:b.select(`lastOpenChangeReason`)};E.events.emit(`menuopenchange`,e)},[E.events,O,b,I,ae]),d(()=>{let e=oe,t=se.current;if(e&&(se.current=e),t&&e&&e!==t){b.set(`instantType`,void 0);let e=new AbortController;return ce(()=>{b.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[oe,ce,b]);let pe={open:O,side:H.side,align:H.align,anchorHidden:H.anchorHidden,nested:w.type===`menu`,instant:ne},me=w.type===`menubar`&&w.context.modal;a(O&&(me||A&&ie!==`trigger-hover`),ee===`touch`,P,M);let he=ze(e,pe,{styles:H.positionerStyles,transitionStatus:N,props:y,refs:[t,b.useStateSetter(`positionerElement`)],hidden:!D,inert:!O}),ge=D&&w.type!==`menu`&&(w.type!==`menubar`&&A&&ie!==`trigger-hover`||w.type===`menubar`&&w.context.modal),_e=null;return w.type===`menubar`?_e=w.context.contentElement:w.type===void 0&&(_e=M),(0,Q.jsxs)(Ip.Provider,{value:H,children:[ge&&(0,Q.jsx)(Ie,{ref:w.type===`context-menu`||w.type===`nested-context-menu`?w.context.internalBackdropRef:null,inert:k(!O),cutout:_e}),(0,Q.jsx)(Oe,{id:I,children:(0,Q.jsx)(we,{elementsRef:b.context.itemDomElements,labelsRef:b.context.itemLabels,children:he})})]})}),lm=Z.createContext(void 0);function um(){let e=Z.useContext(lm);if(e===void 0)throw Error(Ye(34));return e}var dm=Z.memo(Z.forwardRef(function(e,n){let{render:r,className:i,value:a,defaultValue:o,onValueChange:s,disabled:c=!1,style:l,"aria-labelledby":u,...d}=e,[f,p]=Z.useState(void 0),[m,h]=pe({controlled:a,default:o,name:`MenuRadioGroup`}),g=y((e,t)=>{s?.(e,t),!t.isCanceled&&h(e)}),_=t(`div`,e,{state:{disabled:c},ref:n,props:{role:`group`,"aria-labelledby":u??f,"aria-disabled":c||void 0,...d}}),v=Z.useMemo(()=>({value:m,setValue:g,disabled:c}),[m,g,c]);return(0,Q.jsx)(Qp.Provider,{value:p,children:(0,Q.jsx)(lm.Provider,{value:v,children:_})})})),fm=Z.createContext(void 0);function pm(){let e=Z.useContext(fm);if(e===void 0)throw Error(Ye(35));return e}var mm=Z.forwardRef(function(e,n){let{render:r,className:i,id:a,label:o,nativeButton:s=!1,disabled:c=!1,closeOnClick:l=!1,value:u,style:d,...f}=e,p=xe({guess:!0,label:o}),m=Lp(!0),h=A(a),{store:g}=zp(),_=g.useState(`isActive`,p.index),v=g.useState(`itemProps`),{value:y,setValue:b,disabled:x}=um(),S=g.useState(`disabled`),C=c||x||S,w=y===u,{getItemProps:T,itemRef:E}=Kp({closeOnClick:l,disabled:C,highlighted:_,id:h,store:g,nativeButton:s,nodeId:m?.context.nodeId,itemMetadata:Gp}),D=Z.useMemo(()=>({disabled:C,highlighted:_,checked:w}),[C,_,w]);function O(e){let t=j(et,e.nativeEvent,void 0,{preventUnmountOnClose:rt});b(u,t)}let k=t(`div`,e,{state:D,stateAttributesMapping:Yp,props:[v,{role:`menuitemradio`,"aria-checked":w,onClick:O},f,T],ref:[E,n,p.ref]});return(0,Q.jsx)(fm.Provider,{value:D,children:k})}),hm=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,keepMounted:o=!1,...s}=e,c=pm(),l=Z.useRef(null),{transitionStatus:u,mounted:d,setMounted:f}=Je(c.checked);ot({batch:!0,enabled:!c.checked,open:c.checked,ref:l,onComplete(){c.checked||f(!1)}});let p={checked:c.checked,disabled:c.disabled,highlighted:c.highlighted,transitionStatus:u};return t(`span`,e,{state:p,stateAttributesMapping:Yp,ref:[n,l],props:{"aria-hidden":!0,...s},enabled:o||d})}),gm=Z.createContext(null);function _m(e){let t=Z.useContext(gm);if(t===null&&!e)throw Error(Ye(5));return t}var vm={...le,disabled:e=>e.parent.type===`menubar`&&e.parent.context.disabled||e.disabled,modal:e=>(e.parent.type===void 0||e.parent.type===`context-menu`)&&(e.modal??!0),openMethod:e=>e.openMethod,allowMouseEnter:e=>e.allowMouseEnter,highlightItemOnHover:e=>e.highlightItemOnHover,parent:e=>e.parent,rootId:e=>e.parent.type===`menu`?e.parent.store.select(`rootId`):e.parent.type===void 0?e.rootId:e.parent.context.rootId,activeIndex:e=>e.activeIndex,isActive:(e,t)=>e.activeIndex===t,hoverEnabled:e=>e.hoverEnabled,instantType:e=>e.instantType,lastOpenChangeReason:e=>e.openChangeReason,floatingTreeRoot:e=>e.parent.type===`menu`?e.parent.store.select(`floatingTreeRoot`):e.floatingTreeRoot,floatingNodeId:e=>e.floatingNodeId,floatingParentNodeId:e=>e.floatingParentNodeId,itemProps:e=>e.itemProps,closeDelay:e=>e.closeDelay,adaptiveOrigin:e=>e.adaptiveOrigin,keyboardEventRelay:e=>{if(e.keyboardEventRelay)return e.keyboardEventRelay;if(e.parent.type===`menu`)return e.parent.store.select(`keyboardEventRelay`)}},ym=class extends Ee{constructor(e,t,n=!1){let r=new z,i=xm(r,t,n,e);super(i,bm(r),vm),this.unsubscribeParentListener=this.observe(`parent`,e=>{if(this.unsubscribeParentListener?.(),e.type===`menu`){let t=e.store.select(`rootId`),n=e.store.select(`floatingTreeRoot`),r=e.store.select(`keyboardEventRelay`);this.unsubscribeParentListener=e.store.subscribe(()=>{let i=e.store.select(`rootId`),a=e.store.select(`floatingTreeRoot`),o=e.store.select(`keyboardEventRelay`);(t!==i||n!==a||r!==o)&&(t=i,n=a,r=o,this.notifyAll())}),this.context.allowMouseUpTriggerRef=e.store.context.allowMouseUpTriggerRef;return}e.type!==void 0&&(this.context.allowMouseUpTriggerRef=e.context.allowMouseUpTriggerRef),this.unsubscribeParentListener=null})}setOpen(e,t){this.state.floatingRootContext.context.events.emit(`setOpen`,{open:e,eventDetails:t})}unsubscribeParentListener=null};function bm(e){return{positionerRef:Z.createRef(),popupRef:Z.createRef(),typingRef:{current:!1},itemDomElements:{current:[]},itemLabels:{current:[]},allowMouseUpTriggerRef:{current:!1},triggerFocusTargetRef:Z.createRef(),beforeContentFocusGuardRef:Z.createRef(),onOpenChangeComplete:void 0,triggerElements:e}}function xm(e,t,n=!1,r){return{...de(e,t,n),disabled:!1,modal:!0,openMethod:null,allowMouseEnter:!1,highlightItemOnHover:!0,parent:{type:void 0},rootId:void 0,activeIndex:null,hoverEnabled:!0,instantType:void 0,openChangeReason:null,floatingTreeRoot:new vt,floatingNodeId:void 0,floatingParentNodeId:null,itemProps:Ge,keyboardEventRelay:void 0,closeDelay:0,adaptiveOrigin:void 0,...r}}var Sm=Z.createContext(void 0);function Cm(){return Z.useContext(Sm)}var wm=Re(function(t){let{children:n,open:r,onOpenChange:i,onOpenChangeComplete:a,defaultOpen:o=!1,disabled:s=!1,modal:c,loopFocus:u=!0,orientation:f=`vertical`,actionsRef:p,closeParentOnEsc:m=!1,handle:h,triggerId:g,defaultTriggerId:_=null,highlightItemOnHover:v=!0}=t,x=Vp(!0),S=zp(!0),C=_m(!0),w=Cm(),E=Z.useMemo(()=>w&&S?{type:`menu`,store:S.store}:C?{type:`menubar`,context:C}:x&&!S?{type:`context-menu`,context:x}:{type:void 0},[x,S,C,w]),D=l(),O=l(),k=yt(),A=E.type===`menu`?E.store:void 0,M=(r??o)&&A?.state.transitionStatus===`starting`,te=me(()=>M?A?.state.instantType:void 0).current,N=Tm({open:o,openProp:r,activeTriggerId:_,triggerIdProp:g,parent:E,disabled:s,highlightItemOnHover:v,modal:E.type===void 0?c:void 0,rootId:D,instantType:te},O,k!=null);N.useControlledProp(`openProp`,r),N.useControlledProp(`triggerIdProp`,g),N.useContextCallback(`onOpenChangeComplete`,a);let P=N.useState(`floatingTreeRoot`),ne=mt(P),F=N.useState(`open`),re=N.useState(`activeTriggerElement`),I=N.useState(`positionerElement`),ae=N.useState(`hoverEnabled`),ce=N.useState(`disabled`),le=N.useState(`lastOpenChangeReason`),L=N.useState(`parent`),ue=N.useState(`activeIndex`),de=N.useState(`payload`),R=N.useState(`floatingParentNodeId`),z=Z.useRef(null),B=Z.useRef(L.type!==`context-menu`),V=Te(),fe=Z.useRef(!0),pe=Te(),ge=R!=null,{openMethod:_e,triggerProps:ye}=b(F);N.useSyncedValues({disabled:s,highlightItemOnHover:v,modal:L.type===void 0?c:void 0,openMethod:_e,rootId:D}),it(N);let{forceUnmount:be,transitionStatus:xe}=Fe(F,N,()=>{N.set(`allowMouseEnter`,!1)},M),Se=ve(N.context.popupRef);Z.useEffect(()=>{if(te===void 0)return;let e=()=>{N.state.instantType===te&&N.set(`instantType`,void 0)};if(!F){e();return}if(xe!==void 0)return;if(N.context.popupRef.current==null){e();return}let t=new AbortController;return Se(e,t.signal),()=>{t.abort()}},[te,F,xe,Se,N]),d(()=>{x&&!S?N.update({parent:{type:`context-menu`,context:x},floatingNodeId:ne,floatingParentNodeId:k}):S&&N.update({floatingNodeId:ne,floatingParentNodeId:k})},[x,S,ne,k,N]),Z.useEffect(()=>{if(F||(z.current=null),L.type===`context-menu`){if(!F){V.clear(),B.current=!1;return}V.start(500,()=>{B.current=!0})}},[V,F,L.type]),d(()=>{!F&&!ae&&N.set(`hoverEnabled`,!0)},[F,ae,N]);let we=y((e,t)=>{let n=t.reason;if(!e&&!N.select(`open`)||F===e&&t.trigger===re&&le===n)return;let r=Ce(t);if(!e&&t.trigger==null&&(t.trigger=re??void 0),i?.(e,t),t.isCanceled)return;N.state.floatingRootContext.dispatchOpenChange(e,t);let a=t.event;if(e===!1&&a?.type===`click`&&a.pointerType===`touch`&&!fe.current)return;e&&n===`trigger-focus`?(fe.current=!1,pe.start(300,()=>{fe.current=!0})):(fe.current=!0,pe.clear());let o=(n===`trigger-press`||n===`item-press`)&&a.detail===0,s=!e&&(n===`escape-key`||n==null);z.current=t.event;let c=Ke(N.state,e,t.trigger,r());c.openChangeReason=n,c.instantType=L.type===`menubar`&&(n===`trigger-focus`||n===`focus-out`||n===`trigger-hover`||n===`list-navigation`||n===`sibling-open`)?`group`:o||s?o?`click`:`dismiss`:void 0,N.update(c)}),Ee=pt({popupStore:N,floatingRootContext:N.state.floatingRootContext,floatingId:O,nested:k!=null,onOpenChange:we}),De=Ee.context.events;d(()=>{let e=({open:e,eventDetails:t})=>we(e,t);return De.on(`setOpen`,e),()=>{De?.off(`setOpen`,e)}},[De,we]);let Oe=Z.useCallback(()=>{N.setOpen(!1,j(oe))},[N]);Z.useImperativeHandle(p,()=>({unmount:be,close:Oe}),[be,Oe]);let ke;L.type===`context-menu`&&(ke=L.context),Z.useImperativeHandle(ke?.positionerRef,()=>I,[I]),Z.useImperativeHandle(ke?.actionsRef,()=>({setOpen:we}),[we]);let Ae=Ze(Ee,{enabled:!ce,bubbles:{escapeKey:m&&L.type===`menu`},outsidePress(){return L.type!==`context-menu`||z.current?.type===`contextmenu`||B.current},externalTree:ge?P:void 0}),je=T(),Me=Z.useCallback(e=>{N.select(`activeIndex`)!==e&&N.set(`activeIndex`,e)},[N]),Ne=se(Ee,{enabled:!ce,listRef:N.context.itemDomElements,activeIndex:ue,nested:L.type!==void 0,loopFocus:u,orientation:f,parentOrientation:L.type===`menubar`?L.context.orientation:void 0,rtl:je===`rtl`,disabledIndices:lt,onNavigate:Me,openOnArrowKeyDown:L.type!==`context-menu`,externalTree:ge?P:void 0,focusItemOnHover:v}),Pe=Z.useCallback(e=>{N.context.typingRef.current=e},[N]),Ie=ie(Ee,{enabled:!ce,listRef:N.context.itemLabels,elementsRef:N.context.itemDomElements,activeIndex:ue,resetMs:500,onMatch:e=>{F&&e!==ue&&N.set(`activeIndex`,e)},onTyping:Pe}),Le=Z.useMemo(()=>{let e=st(Ie.reference,Ne.reference,Ae.reference,{onMouseMove(){N.set(`allowMouseEnter`,!0)}},ye);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=F,e},[N,Ie.reference,Ne.reference,Ae.reference,ye,F]),Re=Z.useMemo(()=>{let e=st(Ne.trigger,Ae.trigger,ye);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=!1,e},[Ne.trigger,Ae.trigger,ye]);me(()=>(N.update({inactiveTriggerProps:Re}),null));let ze=Z.useMemo(()=>st(ee,{id:O,role:`menu`,"aria-orientation":f===`horizontal`?`horizontal`:void 0,"aria-labelledby":re?.id,onMouseMove(){N.set(`allowMouseEnter`,!0),L.type===`menu`&&N.set(`hoverEnabled`,!1)},onClick(){N.select(`hoverEnabled`)&&N.set(`hoverEnabled`,!1)},onKeyDown(e){let t=N.select(`keyboardEventRelay`);t&&!e.isPropagationStopped()&&t(e)}},Ie.floating,Ne.floating,Ae.floating),[re,O,f,L.type,N,Ie.floating,Ne.floating,Ae.floating]),Be=Ne.item??Ge;he(N,{floatingRootContext:Ee,activeTriggerProps:Le,inactiveTriggerProps:Re,popupProps:ze,itemProps:Be});let Ve=Z.useMemo(()=>({store:N,parent:E}),[N,E]),He=(0,Q.jsxs)(Rp.Provider,{value:Ve,children:[h&&(0,Q.jsx)(e,{handle:h,store:N}),typeof n==`function`?n({payload:de}):n]});return L.type===void 0||L.type===`context-menu`?(0,Q.jsx)(H,{externalTree:P,children:He}):He});function Tm(e,t,n){return me(()=>new ym(e,t,n)).current}function Em(e){let t=zp().store,n=Z.useMemo(()=>({parentMenu:t}),[t]);return(0,Q.jsx)(Sm.Provider,{value:n,children:(0,Q.jsx)(wm,{...e})})}function Dm(e){if(R(e)&&e.hasAttribute(`data-rootownerid`))return e.getAttribute(`data-rootownerid`);if(!L(e))return Dm($e(e))}function Om(e){let{enabled:t=!0,mouseDownAction:n,open:r}=e,i=Z.useRef(!1);return Z.useMemo(()=>t?{onMouseDown:e=>{(n===`open`&&!r||n===`close`&&r)&&(i.current=!0,I(e.currentTarget).addEventListener(`click`,()=>{i.current=!1},{once:!0}))},onClick:e=>{i.current&&(i.current=!1,e.preventBaseUIHandler())}}:Ge,[t,n,r])}var km=w(function(e,n){let{render:r,className:i,style:a,disabled:o=!1,nativeButton:l=!0,id:d,openOnHover:p,delay:m=100,closeDelay:_=0,handle:v,payload:b,...x}=e,S=zp(!0),C=g(v)??S?.store;if(!C)throw Error(Ye(85));let w=A(d),T=C.useState(`isTriggerActive`,w),E=C.useState(`floatingRootContext`),D=C.useState(`isOpenedByTrigger`,w),O=C.useState(`triggerPopupId`,w),k=Z.useRef(null),j=jm(),ee=ce(!0),M=ge(),te=Z.useMemo(()=>M??new vt,[M]),N=mt(te),P=yt(),{registerTrigger:ne,isMountedByThisTrigger:F}=be(w,k,C,{payload:b,closeDelay:_,parent:j,floatingTreeRoot:te,floatingNodeId:N,floatingParentNodeId:P,keyboardEventRelay:ee?.relayKeyboardEvent}),re=j.type===`menubar`,ie=C.useState(`disabled`),oe=o||ie||re&&j.context.disabled,{getButtonProps:se,buttonRef:le}=ae({disabled:oe,native:l});Z.useEffect(()=>{!D&&j.type===void 0&&(C.context.allowMouseUpTriggerRef.current=!1)},[C,D,j.type]);let L=Z.useRef(null),ue=Te(),de=y(e=>{if(!L.current)return;ue.clear(),C.context.allowMouseUpTriggerRef.current=!1;let t=e.target;s(L.current,t)||s(C.select(`positionerElement`),t)||t===L.current||(t==null||Dm(t)!==C.select(`rootId`))&&(Xe(e,L.current)||te.events.emit(`close`,{domEvent:e,reason:h}))});Z.useEffect(()=>{D&&C.select(`lastOpenChangeReason`)===`trigger-hover`&&I(L.current).addEventListener(`mouseup`,de,{once:!0})},[D,de,C]);let R=re&&j.context.hasSubmenuOpen,z=u(E,{enabled:(p??R)&&!oe&&(!re||R&&!F),handleClose:f({blockPointerEvents:!re}),mouseOnly:!0,move:!1,restMs:j.type===void 0?m:void 0,delay:{close:_},triggerElementRef:k,externalTree:te,isActiveTrigger:T,isClosing:()=>C.select(`transitionStatus`)===`ending`}),B=Am(D,C.select(`lastOpenChangeReason`)),V=Ue(E,{enabled:!oe,event:D&&re?`click`:`mousedown`,toggle:!0,ignoreMouse:!1,stickIfOpen:j.type===void 0&&B}),H=Qe(E,{enabled:!oe&&R}),fe=Om({open:D,enabled:re,mouseDownAction:`open`}),pe=Z.useMemo(()=>st(H.reference,V.reference),[H.reference,V.reference]),me=C.useState(`triggerProps`,F),{preFocusGuardRef:he,handlePreFocusGuardFocus:_e,handleFocusTargetFocus:ve}=bt(C,k),ye={disabled:oe,open:D},xe=[L,n,le,ne,k],Se=[pe,z??Ge,me,{"aria-haspopup":`menu`,"aria-controls":O,id:w,onMouseDown:e=>{C.select(`open`)||(ue.start(200,()=>{C.context.allowMouseUpTriggerRef.current=!0}),I(e.currentTarget).addEventListener(`mouseup`,de,{once:!0}))}},re?{role:`menuitem`}:{},fe,x,se],Ce=t(`button`,e,{enabled:!re,stateAttributesMapping:De,state:ye,ref:xe,props:Se});return re?(0,Q.jsx)(qe,{tag:`button`,render:r,className:i,style:a,state:ye,refs:xe,props:Se,stateAttributesMapping:De}):D?(0,Q.jsxs)(Z.Fragment,{children:[(0,Q.jsx)(c,{ref:he,onFocus:_e},`${w}-pre-focus-guard`),(0,Q.jsx)(Z.Fragment,{children:Ce},w),(0,Q.jsx)(c,{ref:C.context.triggerFocusTargetRef,onFocus:ve},`${w}-post-focus-guard`)]}):(0,Q.jsx)(Z.Fragment,{children:Ce},w)});function Am(e,t){let n=Te(),[r,i]=Z.useState(!1);return d(()=>{e&&t===`trigger-hover`?(i(!0),n.start(500,()=>{i(!1)})):e||(n.clear(),i(!1))},[e,t,n]),r}function jm(){let e=_m(!0);return Z.useMemo(()=>e?{type:`menubar`,context:e}:{type:void 0},[e])}var Mm=Z.forwardRef(function(e,n){let{className:r,render:i,orientation:a=`horizontal`,style:o,...s}=e;return t(`div`,e,{state:{orientation:a},ref:n,props:[{role:`separator`,"aria-orientation":a},s]})}),Nm={"aria-expanded":void 0},Pm=Z.forwardRef(function(e,n){let{render:r,className:i,style:a,label:o,id:s,nativeButton:c=!1,openOnHover:l=!0,delay:p=100,closeDelay:m=0,disabled:h=!1,...g}=e,_=Cm();if(!_?.parentMenu)throw Error(Ye(37));let v=xe({guess:!0,label:o}),b=Lp(),{store:x}=zp(),S=A(s),C=x.useState(`open`),w=x.useState(`floatingRootContext`),T=x.useState(`floatingTreeRoot`),E=x.useState(`triggerPopupId`,S),O=He(S,x),k=y(e=>{O(e),e!==null&&x.select(`open`)&&x.select(`activeTriggerId`)==null&&x.update({activeTriggerId:S??null,activeTriggerElement:e,closeDelay:m})}),j=Z.useRef(null),ee=Z.useCallback(e=>{j.current=e,x.set(`activeTriggerElement`,e)},[x]);d(()=>(k(j.current),()=>k(null)),[k,S,x]),x.useSyncedValue(`closeDelay`,m);let M=_.parentMenu,te=x.useState(`disabled`),N=M.useState(`disabled`),P=h||te||N,ne=M.useState(`itemProps`),F=M.useState(`isActive`,v.index),re=Z.useMemo(()=>({type:`submenu-trigger`,setActive(){M.select(`highlightItemOnHover`)&&M.set(`activeIndex`,v.index)}}),[M,v.index]),{getItemProps:ie,itemRef:I}=Kp({closeOnClick:!1,disabled:P,highlighted:F,id:S,store:x,typingRef:M.context.typingRef,nativeButton:c,itemMetadata:re,nodeId:b?.context.nodeId}),ae=x.useState(`hoverEnabled`),oe=u(w,{enabled:ae&&l&&!P,handleClose:f({blockPointerEvents:!0}),mouseOnly:!0,move:!0,restMs:p,delay:{open:p,close:m},shouldOpen:p>0?()=>M.select(`allowMouseEnter`):void 0,triggerElementRef:j,externalTree:T,isClosing:()=>x.select(`transitionStatus`)===`ending`,guardStaleOpen:!0}),se=Ue(w,{enabled:!P,event:`mousedown`,toggle:!l,ignoreMouse:l,stickIfOpen:!1}).reference??Ge,ce=x.useState(`triggerProps`,!0);delete ce.id;let le={disabled:P,highlighted:F,open:C},L=x.useState(`openMethod`),ue=x.useState(`lastOpenChangeReason`)===`list-navigation`||L===`keyboard`;return t(`div`,e,{state:le,stateAttributesMapping:V,props:[se,oe,ce,ne,C&&ue&&D?Nm:void 0,{"aria-controls":E,tabIndex:C||F?0:-1,onBlur(){F&&M.set(`activeIndex`,null)}},g,ie],ref:[n,v.ref,I,k,ee]})}),Fm={positioner:`_positioner_1rypz_2`,popup:`_popup_1rypz_9`,group:`_group_1rypz_37`,item:`_item_1rypz_46`,destructive:`_destructive_1rypz_75`,label:`_label_1rypz_85`,icon:`_icon_1rypz_90`,indicator:`_indicator_1rypz_91`,chevron:`_chevron_1rypz_92`,shortcut:`_shortcut_1rypz_113`,separator:`_separator_1rypz_124`,groupLabel:`_groupLabel_1rypz_134`},Im=(e,t)=>t??(typeof e==`string`?e:void 0);function Lm({items:e}){return e.map((e,t)=>{switch(e.type){case`separator`:return(0,Q.jsx)(Mm,{className:Fm.separator},t);case`group`:return(0,Q.jsxs)(em,{className:Fm.group,children:[(0,Q.jsx)(tm,{className:Fm.groupLabel,children:e.label}),(0,Q.jsx)(Lm,{items:e.items})]},t);case`checkbox`:return(0,Q.jsxs)(Xp,{label:Im(e.label,e.textValue),checked:e.checked,defaultChecked:e.defaultChecked,onCheckedChange:e.onCheckedChange&&(t=>e.onCheckedChange(t)),disabled:e.disabled,closeOnClick:!1,className:Fm.item,children:[(0,Q.jsx)(`span`,{className:Fm.indicator,children:(0,Q.jsx)(Zp,{children:(0,Q.jsx)(_t,{name:`check`})})}),(0,Q.jsx)(`span`,{className:Fm.label,children:e.label})]},t);case`radio`:return(0,Q.jsxs)(em,{className:Fm.group,children:[e.label&&(0,Q.jsx)(tm,{className:Fm.groupLabel,children:e.label}),(0,Q.jsx)(dm,{value:e.value,defaultValue:e.defaultValue,onValueChange:e.onValueChange&&(t=>e.onValueChange(t)),children:e.options.map(e=>(0,Q.jsxs)(mm,{value:e.value,label:Im(e.label),disabled:e.disabled,closeOnClick:!1,className:Fm.item,children:[(0,Q.jsx)(`span`,{className:Fm.indicator,children:(0,Q.jsx)(hm,{children:(0,Q.jsx)(_t,{name:`check`})})}),(0,Q.jsx)(`span`,{className:Fm.label,children:e.label})]},e.value))})]},t);default:{let n=(0,Q.jsxs)(Q.Fragment,{children:[e.icon&&(0,Q.jsx)(`span`,{className:Fm.icon,"aria-hidden":`true`,children:e.icon}),(0,Q.jsx)(`span`,{className:Fm.label,children:e.label}),e.shortcut&&(0,Q.jsx)(`kbd`,{className:Fm.shortcut,"aria-hidden":`true`,children:e.shortcut})]}),r=B(Fm.item,e.isDestructive&&Fm.destructive);return e.items?(0,Q.jsxs)(Em,{children:[(0,Q.jsxs)(Pm,{label:Im(e.label,e.textValue),disabled:e.disabled,className:r,children:[n,(0,Q.jsx)(`span`,{className:Fm.chevron,"aria-hidden":`true`,children:(0,Q.jsx)(_t,{name:`chevron-right`})})]}),(0,Q.jsx)(Rm,{side:`right`,align:`start`,children:(0,Q.jsx)(Lm,{items:e.items})})]},t):e.href!==void 0&&!e.disabled?(0,Q.jsx)(rm,{href:e.href,label:Im(e.label,e.textValue),className:r,children:n},t):(0,Q.jsx)(nm,{label:Im(e.label,e.textValue),disabled:e.disabled,onClick:e.onSelect&&(()=>e.onSelect()),className:r,children:n},t)}}})}function Rm({side:e,align:t,sideOffset:n=4,container:r,className:i,children:a}){return(0,Q.jsx)(sm,{container:r,children:(0,Q.jsx)(cm,{className:Fm.positioner,side:e,align:t,sideOffset:n,children:(0,Q.jsx)(im,{className:B(Fm.popup,i),children:a})})})}function zm({trigger:e,items:t,side:n=`bottom`,align:r=`start`,open:i,defaultOpen:a,onOpenChange:o,isModal:s=!0,container:c,className:l}){return(0,Q.jsxs)(wm,{open:i,defaultOpen:a,onOpenChange:o&&(e=>o(e)),modal:s,children:[(0,Q.jsx)(km,{render:e}),(0,Q.jsx)(Rm,{side:n,align:r,container:c,className:l,children:(0,Q.jsx)(Lm,{items:t})})]})}var Bm={container:`_container_ewdm4_2`,sticky:`_sticky_ewdm4_6`,table:`_table_ewdm4_16`,hasRows:`_hasRows_ewdm4_33`,caption:`_caption_ewdm4_38`,th:`_th_ewdm4_45`,td:`_td_ewdm4_46`,select:`_select_ewdm4_47`,expand:`_expand_ewdm4_48`,actions:`_actions_ewdm4_49`,rowHeader:`_rowHeader_ewdm4_81`,center:`_center_ewdm4_85`,end:`_end_ewdm4_88`,sortButton:`_sortButton_ewdm4_93`,sortIcon:`_sortIcon_ewdm4_146`,sortActive:`_sortActive_ewdm4_151`,selected:`_selected_ewdm4_160`,expandIcon:`_expandIcon_ewdm4_192`,expandedContent:`_expandedContent_ewdm4_222`,expandedRow:`_expandedRow_ewdm4_226`,expanded:`_expanded_ewdm4_222`,empty:`_empty_ewdm4_244`,srOnly:`_srOnly_ewdm4_248`,resizable:`_resizable_ewdm4_260`,resizeHandle:`_resizeHandle_ewdm4_274`},Vm=48,Hm=1200,Um=16,Wm=e=>Math.round(Math.min(Hm,Math.max(Vm,e))),Gm=`a[href], button, input, select, textarea, [tabindex], [contenteditable]`,Km=e=>[...e.querySelectorAll(Gm)].some(e=>e.tabIndex>=0&&!e.matches(`:disabled`)&&!e.closest(`[inert]`));function qm({label:e,width:t,onResize:n}){let r=(0,Z.useRef)(null),[i,a]=(0,Z.useState)(Vm),o=(0,Z.useRef)(null),s=()=>r.current.parentElement,c=()=>Wm(s().getBoundingClientRect().width);(0,Z.useLayoutEffect)(()=>{t===void 0&&a(c())}),(0,Z.useEffect)(()=>()=>o.current?.(),[]);let l=t??i,u=()=>getComputedStyle(r.current).direction===`rtl`?-1:1;return(0,Q.jsx)(`div`,{ref:r,role:`separator`,"aria-orientation":`vertical`,"aria-label":e,"aria-valuenow":l,"aria-valuemin":Vm,"aria-valuemax":Hm,tabIndex:0,className:Bm.resizeHandle,onPointerDown:e=>{if(e.button!==0)return;e.preventDefault();let t=e.clientX,r=s().getBoundingClientRect().width,i=u(),a=e=>n(Wm(r+i*(e.clientX-t))),c=()=>{window.removeEventListener(`pointermove`,a),window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),o.current=null};o.current=c,window.addEventListener(`pointermove`,a),window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c)},onKeyDown:e=>{let r={ArrowRight:Um,ArrowLeft:-16}[e.key],i=r===void 0?e.key===`Home`?Vm:e.key===`End`?Hm:void 0:(t??c())+u()*r;i!==void 0&&(e.preventDefault(),n(Wm(i)))}})}var Jm=(e,t)=>e==null?t==null?0:1:t==null?-1:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():typeof e==`number`&&typeof t==`number`?e-t:String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:`base`});function Ym(e,t,n){let r=n&&t.find(e=>e.key===n.key);if(!n||!r)return e;let i=r.sortValue??(e=>e[r.key]),a=n.direction===`descending`?-1:1;return[...e].sort((e,t)=>{let n=i(e),r=i(t);return n==null||r==null?Jm(n,r):a*Jm(n,r)})}function Xm({columns:e,rows:t,getRowId:n=(e,t)=>String(t),caption:r,showCaption:i=!1,sort:a,defaultSort:o=null,onSortChange:s,isSelectable:c=!1,selectedIds:l,defaultSelectedIds:u=[],onSelectionChange:d,expandedContent:f,expandedIds:p,defaultExpandedIds:m=[],onExpandedChange:h,rowActions:g,size:_,density:v,hasStickyHeader:y=!1,emptyState:b,isResizable:x=!1,columnWidths:S,onColumnWidthsChange:C,className:w}){let[T,E]=(0,Z.useState)(o),[D,O]=(0,Z.useState)(u),k=a===void 0?T:a,A=new Set(l??D),[j,ee]=(0,Z.useState)(m),M=new Set(p??j),[te,N]=(0,Z.useState)({}),P=S??te,ne=(0,Z.useId)(),F=(0,Z.useRef)(null),[re,ie]=(0,Z.useState)(!1),I=()=>{let e=F.current;if(!e)return;let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;ie((t||document.activeElement===e)&&!Km(e))};(0,Z.useLayoutEffect)(I),(0,Z.useEffect)(()=>{let e=F.current,t=new ResizeObserver(I);return t.observe(e),t.observe(e.firstElementChild),()=>t.disconnect()},[]);let ae=(0,Z.useMemo)(()=>a===void 0?Ym(t,e,k):t,[t,e,k,a]),oe=e=>{let t=k?.key===e?k.direction===`ascending`?{key:e,direction:`descending`}:null:{key:e,direction:`ascending`};E(t),s?.(t)},se=e=>{O(e),d?.(e)},ce=e=>{ee(e),h?.(e)},le=(e,t)=>{let n={...P,[e]:t};N(n),C?.(n)},L=f!==void 0,ue=e.length+ +!!c+ +!!L+ +!!g,de=ae.length>0&&e.some(e=>e.footer!==void 0),R=new Map(t.map((e,t)=>[e,t])),z=ae.map((e,t)=>n(e,R.get(e)??t)),V=e.find(e=>e.isRowHeader),H=e=>{let t=V&&(V.cell?V.cell(e):e[V.key]);return typeof t==`string`||typeof t==`number`?String(t):`row ${(R.get(e)??0)+1}`},fe=(e,t)=>t?(0,Q.jsx)(zm,{align:`end`,items:t,trigger:(0,Q.jsx)(xt,{variant:`secondary`,appearance:`ghost`,size:`sm`,isIconOnly:!0,"aria-label":`Actions for ${H(e)}`,children:(0,Q.jsx)(_t,{name:`more`})})}):null,pe=z.length>0&&z.every(e=>A.has(e)),me=!pe&&z.some(e=>A.has(e));return(0,Q.jsx)(`div`,{ref:F,className:B(Bm.container,y&&Bm.sticky,w),...re&&{tabIndex:0,role:`region`,"aria-labelledby":`${ne}-caption`},onBlur:I,children:(0,Q.jsxs)(`table`,{className:B(Bm.table,ae.length>0&&Bm.hasRows,x&&Bm.resizable),children:[(0,Q.jsx)(`caption`,{id:`${ne}-caption`,className:i?Bm.caption:Bm.srOnly,children:r}),(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[c&&(0,Q.jsx)(`th`,{scope:`col`,className:Bm.select,children:(0,Q.jsx)(Ep,{"aria-label":`Select all rows`,checked:pe,isIndeterminate:me,onCheckedChange:e=>se(e?[...new Set([...A,...z])]:[...A].filter(e=>!z.includes(e)))})}),L&&(0,Q.jsx)(`th`,{scope:`col`,className:Bm.expand,children:(0,Q.jsx)(`span`,{className:Bm.srOnly,children:`Details`})}),e.map(e=>{let t=k?.key===e.key;return(0,Q.jsxs)(`th`,{scope:`col`,style:{inlineSize:P[e.key]??e.width,textAlign:e.align},"aria-sort":e.sortable?t?k.direction:`none`:void 0,className:B(Bm.th,Bm[e.align??`start`]),children:[e.sortable?(0,Q.jsxs)(`button`,{type:`button`,className:Bm.sortButton,onClick:()=>oe(e.key),children:[e.header,(0,Q.jsx)(`span`,{className:B(Bm.sortIcon,t&&Bm.sortActive),"aria-hidden":`true`,children:(0,Q.jsx)(_t,{name:t?k.direction===`ascending`?`chevron-up`:`chevron-down`:`chevrons-up-down`})})]}):e.header,x&&(0,Q.jsx)(qm,{label:`Resize ${typeof e.header==`string`?e.header:e.key}`,width:P[e.key],onResize:t=>le(e.key,t)})]},e.key)}),g&&(0,Q.jsx)(`th`,{scope:`col`,className:Bm.actions,children:(0,Q.jsx)(`span`,{className:Bm.srOnly,children:`Actions`})})]})}),(0,Q.jsx)(`tbody`,{children:ae.length===0&&b?(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{colSpan:ue,className:Bm.empty,children:b})}):ae.map((t,n)=>{let r=z[n],i=A.has(r),a=f?.(t),o=a!=null&&a!==!1,s=o&&M.has(r),l=`${ne}-expanded-${R.get(t)??n}`,u=g?.(t),d=u?.length?u:null,p=(0,Q.jsxs)(`tr`,{"aria-selected":c?i:void 0,className:B(i&&Bm.selected,s&&Bm.expanded),children:[c&&(0,Q.jsx)(`td`,{className:Bm.select,children:(0,Q.jsx)(Ep,{"aria-label":`Select ${H(t)}`,checked:i,onCheckedChange:e=>se(e?[...A,r]:[...A].filter(e=>e!==r))})}),L&&(0,Q.jsx)(`td`,{className:Bm.expand,children:o&&(0,Q.jsx)(xt,{variant:`secondary`,appearance:`ghost`,size:`sm`,isIconOnly:!0,"aria-label":`Expand ${H(t)}`,"aria-expanded":s,"aria-controls":s?l:void 0,onClick:()=>ce(s?[...M].filter(e=>e!==r):[...M,r]),children:(0,Q.jsx)(`span`,{className:Bm.expandIcon,"aria-hidden":`true`,children:(0,Q.jsx)(_t,{name:`chevron-right`})})})}),e.map(e=>{let n=e.cell?e.cell(t):t[e.key],r=e.isRowHeader?`th`:`td`;return(0,Q.jsx)(r,{scope:e.isRowHeader?`row`:void 0,style:{textAlign:e.align},className:B(Bm.td,e.isRowHeader&&Bm.rowHeader),children:n},e.key)}),g&&(0,Q.jsx)(`td`,{className:Bm.actions,children:fe(t,d)})]});return(0,Q.jsxs)(Z.Fragment,{children:[p,s&&(0,Q.jsx)(`tr`,{className:Bm.expandedRow,children:(0,Q.jsx)(`td`,{id:l,colSpan:ue,className:Bm.expandedContent,children:a})})]},r)})}),de&&(0,Q.jsx)(`tfoot`,{children:(0,Q.jsxs)(`tr`,{children:[c&&(0,Q.jsx)(`td`,{className:Bm.select}),L&&(0,Q.jsx)(`td`,{className:Bm.expand}),e.map(e=>{let t=e.isRowHeader?`th`:`td`;return(0,Q.jsx)(t,{scope:e.isRowHeader?`row`:void 0,style:{textAlign:e.align},className:Bm.td,children:e.footer},e.key)}),g&&(0,Q.jsx)(`td`,{className:Bm.actions})]})})]})})}var Zm={calendar:`_calendar_rpqvo_1`,header:`_header_rpqvo_20`,title:`_title_rpqvo_30`,nav:`_nav_rpqvo_39`,grid:`_grid_rpqvo_65`,weekday:`_weekday_rpqvo_72`,cell:`_cell_rpqvo_84`,day:`_day_rpqvo_92`,selected:`_selected_rpqvo_109`,outside:`_outside_rpqvo_109`,today:`_today_rpqvo_126`,inRange:`_inRange_rpqvo_170`,rangeStart:`_rangeStart_rpqvo_179`,rangeEnd:`_rangeEnd_rpqvo_182`,bandStart:`_bandStart_rpqvo_185`,bandEnd:`_bandEnd_rpqvo_189`,between:`_between_rpqvo_193`,dirIcon:`_dirIcon_rpqvo_234`},Qm=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),$m=(e,t)=>!!e&&!!t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),eh=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),th=(e,t)=>{let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},nh=e=>new Date(e.getFullYear(),e.getMonth(),1),rh=(e,t,n)=>t&&e<Qm(t)?Qm(t):n&&e>Qm(n)?Qm(n):e;function ih(e){try{let t=new Intl.Locale(e??navigator.language),n=t.getWeekInfo?.()??t.weekInfo;if(n)return n.firstDay%7}catch{}return 1}function ah({value:e,defaultValue:t=null,onValueChange:n,month:r,defaultMonth:i,onMonthChange:a,min:o,max:s,isDateDisabled:c,range:l,locale:u,weekStartsOn:d,autoFocus:f=!1,className:p}){let m=Qm(new Date),[h,g]=(0,Z.useState)(t),_=l?l.start:e===void 0?h:e,v=l?.end??null,[y,b]=(0,Z.useState)(()=>nh(i??_??m)),x=r?nh(r):y,[S,C]=(0,Z.useState)(()=>rh(_??(oh(m,x)?m:x),o,s)),w=(0,Z.useRef)(null),T=(0,Z.useRef)(f),E=d??ih(u),D=(0,Z.useMemo)(()=>({title:new Intl.DateTimeFormat(u,{month:`long`,year:`numeric`,calendar:`gregory`}),weekday:new Intl.DateTimeFormat(u,{weekday:`short`,calendar:`gregory`}),weekdayNarrow:new Intl.DateTimeFormat(u,{weekday:`narrow`,calendar:`gregory`}),weekdayLong:new Intl.DateTimeFormat(u,{weekday:`long`,calendar:`gregory`}),day:new Intl.DateTimeFormat(u,{day:`numeric`,calendar:`gregory`}),full:new Intl.DateTimeFormat(u,{dateStyle:`full`,calendar:`gregory`})}),[u]),O=e=>!!o&&e<Qm(o)||!!s&&e>Qm(s)||(c?.(e)??!1),k=e=>{let t=nh(e);b(t),a?.(t)},A=e=>{let t=rh(e,o,s);C(t),oh(t,x)||k(t),T.current=!0};(0,Z.useEffect)(()=>{T.current&&(T.current=!1,w.current?.querySelector(`[tabindex="0"]`)?.focus())}),(0,Z.useEffect)(()=>{oh(S,x)||C(rh(_&&oh(_,x)?_:x,o,s))},[x.getTime()]);let j=e=>{O(e)||(g(e),n?.(e),C(e))},ee=e=>{let t=(S.getDay()-E+7)%7,n=getComputedStyle(e.currentTarget).direction===`rtl`?-1:1,r={ArrowLeft:()=>eh(S,-n),ArrowRight:()=>eh(S,n),ArrowUp:()=>eh(S,-7),ArrowDown:()=>eh(S,7),Home:()=>eh(S,-t),End:()=>eh(S,6-t),PageUp:()=>th(S,e.shiftKey?-12:-1),PageDown:()=>th(S,e.shiftKey?12:1)};r[e.key]?(e.preventDefault(),A(r[e.key]())):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),j(S))},M=eh(x,-((x.getDay()-E+7)%7)),te=Array.from({length:6},(e,t)=>Array.from({length:7},(e,n)=>eh(M,t*7+n))),N=te[0],P=e=>{let t=D.weekday.format(e);return N.every(e=>D.weekday.format(e).length<=4)?t.slice(0,2):D.weekdayNarrow.format(e)},ne=o?nh(o):null,F=s?nh(s):null,re=(e,t)=>{let n=t<0;return(0,Q.jsx)(`button`,{type:`button`,className:Zm.nav,"aria-label":e,disabled:n?!!ne&&ne>=x:!!F&&F<=x,onClick:()=>k(rh(th(x,t),ne,F)),children:(0,Q.jsx)(_t,{name:n?`chevron-left`:`chevron-right`,className:Zm.dirIcon})})};return(0,Q.jsxs)(`div`,{className:B(Zm.calendar,p),children:[(0,Q.jsxs)(`div`,{className:Zm.header,children:[re(`Previous month`,-1),(0,Q.jsx)(`div`,{className:Zm.title,"aria-live":`polite`,children:D.title.format(x)}),re(`Next month`,1)]}),(0,Q.jsxs)(`table`,{ref:w,role:`grid`,"aria-label":D.title.format(x),className:Zm.grid,onKeyDown:ee,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsx)(`tr`,{children:N.map(e=>(0,Q.jsx)(`th`,{scope:`col`,abbr:D.weekdayLong.format(e),className:Zm.weekday,children:P(e)},e.getDay()))})}),(0,Q.jsx)(`tbody`,{children:te.map((e,t)=>(0,Q.jsx)(`tr`,{children:e.map((e,t)=>{let n=!oh(e,x),r=!n&&($m(e,_)||$m(e,v)),i=!n&&!!_&&!!v&&e>_&&e<v,a=!!v&&!$m(_,v)&&(r||i),o=O(e);return(0,Q.jsx)(`td`,{role:`gridcell`,"aria-selected":r||i||void 0,className:B(Zm.cell,a&&Zm.inRange,a&&$m(e,_)&&Zm.rangeStart,a&&$m(e,v)&&Zm.rangeEnd,a&&(t===0||e.getDate()===1)&&Zm.bandStart,a&&(t===6||eh(e,1).getDate()===1)&&Zm.bandEnd),children:n?(0,Q.jsx)(`span`,{"aria-hidden":`true`,"data-outside":``,className:B(Zm.day,Zm.outside),children:D.day.format(e)}):(0,Q.jsx)(`button`,{type:`button`,tabIndex:$m(e,S)?0:-1,"aria-label":D.full.format(e),"aria-current":$m(e,m)?`date`:void 0,"aria-disabled":o||void 0,className:B(Zm.day,r&&Zm.selected,i&&Zm.between,$m(e,m)&&Zm.today),onClick:()=>j(e),onFocus:()=>C(e),children:D.day.format(e)})},e.getTime())})},t))})]})]})}function oh(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function sh(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function ch(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function lh(e){let t,n,r;e.length===2?(t=e===sh||e===ch?e:uh,n=e,r=e):(t=sh,n=(t,n)=>sh(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function uh(){return 0}function dh(e){return e===null?NaN:+e}var fh=lh(sh),ph=fh.right;fh.left,lh(dh).center;var mh=class extends Map{constructor(e,t=vh){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(hh(this,e))}has(e){return super.has(hh(this,e))}set(e,t){return super.set(gh(this,e),t)}delete(e){return super.delete(_h(this,e))}};function hh({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function gh({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function _h({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function vh(e){return typeof e==`object`&&e?e.valueOf():e}var yh=Math.sqrt(50),bh=Math.sqrt(10),xh=Math.sqrt(2);function Sh(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=yh?10:a>=bh?5:a>=xh?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?Sh(e,t,n*2):[s,c,l]}function Ch(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?Sh(t,e,n):Sh(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r){if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o}else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function wh(e,t,n){return t=+t,e=+e,n=+n,Sh(e,t,n)[2]}function Th(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?wh(t,e,n):wh(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Eh(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=Array(i);++r<i;)a[r]=e+r*n;return a}function Dh(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}var Oh=Symbol(`implicit`);function kh(){var e=new mh,t=[],n=[],r=Oh;function i(i){let a=e.get(i);if(a===void 0){if(r!==Oh)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new mh;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return kh(t,n).unknown(r)},Dh.apply(i,arguments),i}function Ah(){var e=kh().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,o,s=!1,c=0,l=0,u=.5;delete e.unknown;function d(){var e=t().length,d=i<r,f=d?i:r,p=d?r:i;a=(p-f)/Math.max(1,e-c+l*2),s&&(a=Math.floor(a)),f+=(p-f-a*(e-c))*u,o=a*(1-c),s&&(f=Math.round(f),o=Math.round(o));var m=Eh(e).map(function(e){return f+a*e});return n(d?m.reverse():m)}return e.domain=function(e){return arguments.length?(t(e),d()):t()},e.range=function(e){return arguments.length?([r,i]=e,r=+r,i=+i,d()):[r,i]},e.rangeRound=function(e){return[r,i]=e,r=+r,i=+i,s=!0,d()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(e){return arguments.length?(s=!!e,d()):s},e.padding=function(e){return arguments.length?(c=Math.min(1,l=+e),d()):c},e.paddingInner=function(e){return arguments.length?(c=Math.min(1,e),d()):c},e.paddingOuter=function(e){return arguments.length?(l=+e,d()):l},e.align=function(e){return arguments.length?(u=Math.max(0,Math.min(1,e)),d()):u},e.copy=function(){return Ah(t(),[r,i]).round(s).paddingInner(c).paddingOuter(l).align(u)},Dh.apply(d(),arguments)}function jh(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Mh(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Nh(){}var Ph=.7,Fh=1/Ph,Ih=`\\s*([+-]?\\d+)\\s*`,Lh=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,Rh=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,zh=/^#([0-9a-f]{3,8})$/,Bh=RegExp(`^rgb\\(${Ih},${Ih},${Ih}\\)$`),Vh=RegExp(`^rgb\\(${Rh},${Rh},${Rh}\\)$`),Hh=RegExp(`^rgba\\(${Ih},${Ih},${Ih},${Lh}\\)$`),Uh=RegExp(`^rgba\\(${Rh},${Rh},${Rh},${Lh}\\)$`),Wh=RegExp(`^hsl\\(${Lh},${Rh},${Rh}\\)$`),Gh=RegExp(`^hsla\\(${Lh},${Rh},${Rh},${Lh}\\)$`),Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};jh(Nh,Zh,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:qh,formatHex:qh,formatHex8:Jh,formatHsl:Yh,formatRgb:Xh,toString:Xh});function qh(){return this.rgb().formatHex()}function Jh(){return this.rgb().formatHex8()}function Yh(){return ug(this).formatHsl()}function Xh(){return this.rgb().formatRgb()}function Zh(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=zh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Qh(t):n===3?new ng(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?$h(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?$h(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Bh.exec(e))?new ng(t[1],t[2],t[3],1):(t=Vh.exec(e))?new ng(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Hh.exec(e))?$h(t[1],t[2],t[3],t[4]):(t=Uh.exec(e))?$h(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Wh.exec(e))?lg(t[1],t[2]/100,t[3]/100,1):(t=Gh.exec(e))?lg(t[1],t[2]/100,t[3]/100,t[4]):Kh.hasOwnProperty(e)?Qh(Kh[e]):e===`transparent`?new ng(NaN,NaN,NaN,0):null}function Qh(e){return new ng(e>>16&255,e>>8&255,e&255,1)}function $h(e,t,n,r){return r<=0&&(e=t=n=NaN),new ng(e,t,n,r)}function eg(e){return e instanceof Nh||(e=Zh(e)),e?(e=e.rgb(),new ng(e.r,e.g,e.b,e.opacity)):new ng}function tg(e,t,n,r){return arguments.length===1?eg(e):new ng(e,t,n,r??1)}function ng(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}jh(ng,tg,Mh(Nh,{brighter(e){return e=e==null?Fh:Fh**+e,new ng(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ph:Ph**+e,new ng(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ng(sg(this.r),sg(this.g),sg(this.b),og(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rg,formatHex:rg,formatHex8:ig,formatRgb:ag,toString:ag}));function rg(){return`#${cg(this.r)}${cg(this.g)}${cg(this.b)}`}function ig(){return`#${cg(this.r)}${cg(this.g)}${cg(this.b)}${cg((isNaN(this.opacity)?1:this.opacity)*255)}`}function ag(){let e=og(this.opacity);return`${e===1?`rgb(`:`rgba(`}${sg(this.r)}, ${sg(this.g)}, ${sg(this.b)}${e===1?`)`:`, ${e})`}`}function og(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function sg(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function cg(e){return e=sg(e),(e<16?`0`:``)+e.toString(16)}function lg(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new fg(e,t,n,r)}function ug(e){if(e instanceof fg)return new fg(e.h,e.s,e.l,e.opacity);if(e instanceof Nh||(e=Zh(e)),!e)return new fg;if(e instanceof fg)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new fg(o,s,c,e.opacity)}function dg(e,t,n,r){return arguments.length===1?ug(e):new fg(e,t,n,r??1)}function fg(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}jh(fg,dg,Mh(Nh,{brighter(e){return e=e==null?Fh:Fh**+e,new fg(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ph:Ph**+e,new fg(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new ng(hg(e>=240?e-240:e+120,i,r),hg(e,i,r),hg(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new fg(pg(this.h),mg(this.s),mg(this.l),og(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=og(this.opacity);return`${e===1?`hsl(`:`hsla(`}${pg(this.h)}, ${mg(this.s)*100}%, ${mg(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function pg(e){return e=(e||0)%360,e<0?e+360:e}function mg(e){return Math.max(0,Math.min(1,e||0))}function hg(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var gg=e=>()=>e;function _g(e,t){return function(n){return e+n*t}}function vg(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function yg(e){return(e=+e)==1?bg:function(t,n){return n-t?vg(t,n,e):gg(isNaN(t)?n:t)}}function bg(e,t){var n=t-e;return n?_g(e,n):gg(isNaN(e)?t:e)}var xg=(function e(t){var n=yg(t);function r(e,t){var r=n((e=tg(e)).r,(t=tg(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=bg(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function Sg(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function Cg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wg(e,t){for(var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o=0;o<r;++o)i[o]=Ng(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function Tg(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Eg(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Dg(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=Ng(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var Og=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,kg=new RegExp(Og.source,`g`);function Ag(e){return function(){return e}}function jg(e){return function(t){return e(t)+``}}function Mg(e,t){var n=Og.lastIndex=kg.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Og.exec(e))&&(i=kg.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Eg(r,i)})),n=kg.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?jg(c[0].x):Ag(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function Ng(e,t){var n=typeof t,r;return t==null||n===`boolean`?gg(t):(n===`number`?Eg:n===`string`?(r=Zh(t))?(t=r,xg):Mg:t instanceof Zh?xg:t instanceof Date?Tg:Cg(t)?Sg:Array.isArray(t)?wg:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?Dg:Eg)(e,t)}function Pg(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function Fg(e){return function(){return e}}function Ig(e){return+e}var Lg=[0,1];function Rg(e){return e}function zg(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Fg(isNaN(t)?NaN:.5)}function Bg(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function Vg(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=zg(i,r),a=n(o,a)):(r=zg(r,i),a=n(a,o)),function(e){return a(r(e))}}function Hg(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=zg(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=ph(e,t,1,r)-1;return a[n](i[n](t))}}function Ug(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Wg(){var e=Lg,t=Lg,n=Ng,r,i,a,o=Rg,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==Rg&&(o=Bg(e[0],e[n-1])),s=n>2?Hg:Vg,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),Eg))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,Ig),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=Pg,u()},d.clamp=function(e){return arguments.length?(o=e?!0:Rg,u()):o!==Rg},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function Gg(){return Wg()(Rg,Rg)}function Kg(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function qg(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Jg(e){return e=qg(Math.abs(e)),e?e[1]:NaN}function Yg(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function Xg(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var Zg=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Qg(e){if(!(t=Zg.exec(e)))throw Error(`invalid format: `+e);var t;return new $g({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Qg.prototype=$g.prototype;function $g(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}$g.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function e_(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(i+1):e}var t_;function n_(e,t){var n=qg(e,t);if(!n)return t_=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(t_=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+qg(e,Math.max(0,t+a-1))[0]}function r_(e,t){var n=qg(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var i_={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:Kg,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>r_(e*100,t),r:r_,s:n_,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function a_(e){return e}var o_=Array.prototype.map,s_=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function c_(e){var t=e.grouping===void 0||e.thousands===void 0?a_:Yg(o_.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?a_:Xg(o_.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=Qg(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):i_[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),S=i_[y],C=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function w(e){var n=b,r=x,o,l,p;if(y===`c`)r=S(e)+r,e=``;else{e=+e;var w=e<0||1/e<0;if(e=isNaN(e)?c:S(Math.abs(e),_),v&&(e=e_(e)),w&&+e==0&&f!==`+`&&(w=!1),n=(w?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&t_!==void 0?s_[8+t_/3]:``)+r+(w&&f===`(`?`)`:``),C){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var T=n.length+e.length+r.length,E=T<h?Array(h-T+1).join(u):``;switch(g&&m&&(e=t(E+e,E.length?h-r.length:1/0),E=``),d){case`<`:e=n+e+r+E;break;case`=`:e=n+E+e+r;break;case`^`:e=E.slice(0,T=E.length>>1)+n+e+r+E.slice(T);break;default:e=E+n+e+r}return a(e)}return w.toString=function(){return e+``},w}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(Jg(t)/3)))*3,r=10**-n,i=l((e=Qg(e),e.type=`f`,e),{suffix:s_[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var l_,u_,d_;f_({thousands:`,`,grouping:[3],currency:[`$`,``]});function f_(e){return l_=c_(e),u_=l_.format,d_=l_.formatPrefix,l_}function p_(e){return Math.max(0,-Jg(Math.abs(e)))}function m_(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Jg(t)/3)))*3-Jg(Math.abs(e)))}function h_(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Jg(t)-Jg(e))+1}function g_(e,t,n,r){var i=Th(e,t,n),a;switch(r=Qg(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=m_(i,o))&&(r.precision=a),d_(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=h_(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=p_(i))&&(r.precision=a-(r.type===`%`)*2)}return u_(r)}function __(e){var t=e.domain;return e.ticks=function(e){var n=t();return Ch(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return g_(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-->0;){if(l=wh(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function v_(){var e=Gg();return e.copy=function(){return Ug(e,v_())},Dh.apply(e,arguments),__(e)}function y_(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}var b_=new Date,x_=new Date;function S_(e,t,n,r){function i(t){return e(t=arguments.length===0?new Date:new Date(+t)),t}return i.floor=t=>(e(t=new Date(+t)),t),i.ceil=n=>(e(n=new Date(n-1)),t(n,1),e(n),n),i.round=e=>{let t=i(e),n=i.ceil(e);return e-t<n-e?t:n},i.offset=(e,n)=>(t(e=new Date(+e),n==null?1:Math.floor(n)),e),i.range=(n,r,a)=>{let o=[];if(n=i.ceil(n),a=a==null?1:Math.floor(a),!(n<r)||!(a>0))return o;let s;do o.push(s=new Date(+n)),t(n,a),e(n);while(s<n&&n<r);return o},i.filter=n=>S_(t=>{if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)},(e,r)=>{if(e>=e){if(r<0)for(;++r<=0;)for(;t(e,-1),!n(e););else for(;--r>=0;)for(;t(e,1),!n(e););}}),n&&(i.count=(t,r)=>(b_.setTime(+t),x_.setTime(+r),e(b_),e(x_),Math.floor(n(b_,x_))),i.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?i.filter(r?t=>r(t)%e===0:t=>i.count(0,t)%e===0):i)),i}var C_=S_(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);C_.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?S_(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):C_),C_.range;var w_=1e3,T_=w_*60,E_=T_*60,D_=E_*24,O_=D_*7,k_=D_*30,A_=D_*365,j_=S_(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*w_)},(e,t)=>(t-e)/w_,e=>e.getUTCSeconds());j_.range;var M_=S_(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*w_)},(e,t)=>{e.setTime(+e+t*T_)},(e,t)=>(t-e)/T_,e=>e.getMinutes());M_.range;var N_=S_(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*T_)},(e,t)=>(t-e)/T_,e=>e.getUTCMinutes());N_.range;var P_=S_(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*w_-e.getMinutes()*T_)},(e,t)=>{e.setTime(+e+t*E_)},(e,t)=>(t-e)/E_,e=>e.getHours());P_.range;var F_=S_(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*E_)},(e,t)=>(t-e)/E_,e=>e.getUTCHours());F_.range;var I_=S_(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*T_)/D_,e=>e.getDate()-1);I_.range;var L_=S_(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/D_,e=>e.getUTCDate()-1);L_.range;var R_=S_(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/D_,e=>Math.floor(e/D_));R_.range;function z_(e){return S_(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(e,t)=>{e.setDate(e.getDate()+t*7)},(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*T_)/O_)}var B_=z_(0),V_=z_(1),H_=z_(2),U_=z_(3),W_=z_(4),G_=z_(5),K_=z_(6);B_.range,V_.range,H_.range,U_.range,W_.range,G_.range,K_.range;function q_(e){return S_(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t*7)},(e,t)=>(t-e)/O_)}var J_=q_(0),Y_=q_(1),X_=q_(2),Z_=q_(3),Q_=q_(4),$_=q_(5),ev=q_(6);J_.range,Y_.range,X_.range,Z_.range,Q_.range,$_.range,ev.range;var tv=S_(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());tv.range;var nv=S_(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());nv.range;var rv=S_(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());rv.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:S_(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)}),rv.range;var iv=S_(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());iv.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:S_(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)}),iv.range;function av(e,t,n,r,i,a){let o=[[j_,1,w_],[j_,5,5*w_],[j_,15,15*w_],[j_,30,30*w_],[a,1,T_],[a,5,5*T_],[a,15,15*T_],[a,30,30*T_],[i,1,E_],[i,3,3*E_],[i,6,6*E_],[i,12,12*E_],[r,1,D_],[r,2,2*D_],[n,1,O_],[t,1,k_],[t,3,3*k_],[e,1,A_]];function s(e,t,n){let r=t<e;r&&([e,t]=[t,e]);let i=n&&typeof n.range==`function`?n:c(e,t,n),a=i?i.range(e,+t+1):[];return r?a.reverse():a}function c(t,n,r){let i=Math.abs(n-t)/r,a=lh(([,,e])=>e).right(o,i);if(a===o.length)return e.every(Th(t/A_,n/A_,r));if(a===0)return C_.every(Math.max(Th(t,n,r),1));let[s,c]=o[i/o[a-1][2]<o[a][2]/i?a-1:a];return s.every(c)}return[s,c]}var[ov,sv]=av(iv,nv,J_,R_,F_,N_),[cv,lv]=av(rv,tv,B_,I_,P_,M_);function uv(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function dv(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function fv(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function pv(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,s=e.months,c=e.shortMonths,l=bv(i),u=xv(i),d=bv(a),f=xv(a),p=bv(o),m=xv(o),h=bv(s),g=xv(s),_=bv(c),v=xv(c),y={a:M,A:te,b:N,B:P,c:null,d:Hv,e:Hv,f:qv,g:iy,G:oy,H:Uv,I:Wv,j:Gv,L:Kv,m:Jv,M:Yv,p:ne,q:F,Q:ky,s:Ay,S:Xv,u:Zv,U:Qv,V:ey,w:ty,W:ny,x:null,X:null,y:ry,Y:ay,Z:sy,"%":Oy},b={a:re,A:ie,b:I,B:ae,c:null,d:cy,e:cy,f:py,g:wy,G:Ey,H:ly,I:uy,j:dy,L:fy,m:my,M:hy,p:oe,q:se,Q:ky,s:Ay,S:gy,u:_y,U:vy,V:by,w:xy,W:Sy,x:null,X:null,y:Cy,Y:Ty,Z:Dy,"%":Oy},x={a:E,A:D,b:O,B:k,c:A,d:Mv,e:Mv,f:Rv,g:Ov,G:Dv,H:Pv,I:Pv,j:Nv,L:Lv,m:jv,M:Fv,p:T,q:Av,Q:Bv,s:Vv,S:Iv,u:Cv,U:wv,V:Tv,w:Sv,W:Ev,x:j,X:ee,y:Ov,Y:Dv,Z:kv,"%":zv};y.x=S(n,y),y.X=S(r,y),y.c=S(t,y),b.x=S(n,b),b.X=S(r,b),b.c=S(t,b);function S(e,t){return function(n){var r=[],i=-1,a=0,o=e.length,s,c,l;for(n instanceof Date||(n=new Date(+n));++i<o;)e.charCodeAt(i)===37&&(r.push(e.slice(a,i)),(c=mv[s=e.charAt(++i)])==null?c=s===`e`?` `:`0`:s=e.charAt(++i),(l=t[s])&&(s=l(n,c)),r.push(s),a=i+1);return r.push(e.slice(a,i)),r.join(``)}}function C(e,t){return function(n){var r=fv(1900,void 0,1),i=w(r,e,n+=``,0),a,o;if(i!=n.length)return null;if(`Q`in r)return new Date(r.Q);if(`s`in r)return new Date(r.s*1e3+(`L`in r?r.L:0));if(t&&!(`Z`in r)&&(r.Z=0),`p`in r&&(r.H=r.H%12+r.p*12),r.m===void 0&&(r.m=`q`in r?r.q:0),`V`in r){if(r.V<1||r.V>53)return null;`w`in r||(r.w=1),`Z`in r?(a=dv(fv(r.y,0,1)),o=a.getUTCDay(),a=o>4||o===0?Y_.ceil(a):Y_(a),a=L_.offset(a,(r.V-1)*7),r.y=a.getUTCFullYear(),r.m=a.getUTCMonth(),r.d=a.getUTCDate()+(r.w+6)%7):(a=uv(fv(r.y,0,1)),o=a.getDay(),a=o>4||o===0?V_.ceil(a):V_(a),a=I_.offset(a,(r.V-1)*7),r.y=a.getFullYear(),r.m=a.getMonth(),r.d=a.getDate()+(r.w+6)%7)}else(`W`in r||`U`in r)&&(`w`in r||(r.w=`u`in r?r.u%7:+(`W`in r)),o=`Z`in r?dv(fv(r.y,0,1)).getUTCDay():uv(fv(r.y,0,1)).getDay(),r.m=0,r.d=`W`in r?(r.w+6)%7+r.W*7-(o+5)%7:r.w+r.U*7-(o+6)%7);return`Z`in r?(r.H+=r.Z/100|0,r.M+=r.Z%100,dv(r)):uv(r)}}function w(e,t,n,r){for(var i=0,a=t.length,o=n.length,s,c;i<a;){if(r>=o)return-1;if(s=t.charCodeAt(i++),s===37){if(s=t.charAt(i++),c=x[s in mv?t.charAt(i++):s],!c||(r=c(e,n,r))<0)return-1}else if(s!=n.charCodeAt(r++))return-1}return r}function T(e,t,n){var r=l.exec(t.slice(n));return r?(e.p=u.get(r[0].toLowerCase()),n+r[0].length):-1}function E(e,t,n){var r=p.exec(t.slice(n));return r?(e.w=m.get(r[0].toLowerCase()),n+r[0].length):-1}function D(e,t,n){var r=d.exec(t.slice(n));return r?(e.w=f.get(r[0].toLowerCase()),n+r[0].length):-1}function O(e,t,n){var r=_.exec(t.slice(n));return r?(e.m=v.get(r[0].toLowerCase()),n+r[0].length):-1}function k(e,t,n){var r=h.exec(t.slice(n));return r?(e.m=g.get(r[0].toLowerCase()),n+r[0].length):-1}function A(e,n,r){return w(e,t,n,r)}function j(e,t,r){return w(e,n,t,r)}function ee(e,t,n){return w(e,r,t,n)}function M(e){return o[e.getDay()]}function te(e){return a[e.getDay()]}function N(e){return c[e.getMonth()]}function P(e){return s[e.getMonth()]}function ne(e){return i[+(e.getHours()>=12)]}function F(e){return 1+~~(e.getMonth()/3)}function re(e){return o[e.getUTCDay()]}function ie(e){return a[e.getUTCDay()]}function I(e){return c[e.getUTCMonth()]}function ae(e){return s[e.getUTCMonth()]}function oe(e){return i[+(e.getUTCHours()>=12)]}function se(e){return 1+~~(e.getUTCMonth()/3)}return{format:function(e){var t=S(e+=``,y);return t.toString=function(){return e},t},parse:function(e){var t=C(e+=``,!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=S(e+=``,b);return t.toString=function(){return e},t},utcParse:function(e){var t=C(e+=``,!0);return t.toString=function(){return e},t}}}var mv={"-":``,_:` `,0:`0`},hv=/^\s*\d+/,gv=/^%/,_v=/[\\^$*+?|[\]().{}]/g;function vv(e,t,n){var r=e<0?`-`:``,i=(r?-e:e)+``,a=i.length;return r+(a<n?Array(n-a+1).join(t)+i:i)}function yv(e){return e.replace(_v,`\\$&`)}function bv(e){return RegExp(`^(?:`+e.map(yv).join(`|`)+`)`,`i`)}function xv(e){return new Map(e.map((e,t)=>[e.toLowerCase(),t]))}function Sv(e,t,n){var r=hv.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function Cv(e,t,n){var r=hv.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function wv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function Tv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function Ev(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Dv(e,t,n){var r=hv.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Ov(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function kv(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||`00`)),n+r[0].length):-1}function Av(e,t,n){var r=hv.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function jv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Mv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function Nv(e,t,n){var r=hv.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Pv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function Fv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Iv(e,t,n){var r=hv.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Lv(e,t,n){var r=hv.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function Rv(e,t,n){var r=hv.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function zv(e,t,n){var r=gv.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function Bv(e,t,n){var r=hv.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function Vv(e,t,n){var r=hv.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Hv(e,t){return vv(e.getDate(),t,2)}function Uv(e,t){return vv(e.getHours(),t,2)}function Wv(e,t){return vv(e.getHours()%12||12,t,2)}function Gv(e,t){return vv(1+I_.count(rv(e),e),t,3)}function Kv(e,t){return vv(e.getMilliseconds(),t,3)}function qv(e,t){return Kv(e,t)+`000`}function Jv(e,t){return vv(e.getMonth()+1,t,2)}function Yv(e,t){return vv(e.getMinutes(),t,2)}function Xv(e,t){return vv(e.getSeconds(),t,2)}function Zv(e){var t=e.getDay();return t===0?7:t}function Qv(e,t){return vv(B_.count(rv(e)-1,e),t,2)}function $v(e){var t=e.getDay();return t>=4||t===0?W_(e):W_.ceil(e)}function ey(e,t){return e=$v(e),vv(W_.count(rv(e),e)+(rv(e).getDay()===4),t,2)}function ty(e){return e.getDay()}function ny(e,t){return vv(V_.count(rv(e)-1,e),t,2)}function ry(e,t){return vv(e.getFullYear()%100,t,2)}function iy(e,t){return e=$v(e),vv(e.getFullYear()%100,t,2)}function ay(e,t){return vv(e.getFullYear()%1e4,t,4)}function oy(e,t){var n=e.getDay();return e=n>=4||n===0?W_(e):W_.ceil(e),vv(e.getFullYear()%1e4,t,4)}function sy(e){var t=e.getTimezoneOffset();return(t>0?`-`:(t*=-1,`+`))+vv(t/60|0,`0`,2)+vv(t%60,`0`,2)}function cy(e,t){return vv(e.getUTCDate(),t,2)}function ly(e,t){return vv(e.getUTCHours(),t,2)}function uy(e,t){return vv(e.getUTCHours()%12||12,t,2)}function dy(e,t){return vv(1+L_.count(iv(e),e),t,3)}function fy(e,t){return vv(e.getUTCMilliseconds(),t,3)}function py(e,t){return fy(e,t)+`000`}function my(e,t){return vv(e.getUTCMonth()+1,t,2)}function hy(e,t){return vv(e.getUTCMinutes(),t,2)}function gy(e,t){return vv(e.getUTCSeconds(),t,2)}function _y(e){var t=e.getUTCDay();return t===0?7:t}function vy(e,t){return vv(J_.count(iv(e)-1,e),t,2)}function yy(e){var t=e.getUTCDay();return t>=4||t===0?Q_(e):Q_.ceil(e)}function by(e,t){return e=yy(e),vv(Q_.count(iv(e),e)+(iv(e).getUTCDay()===4),t,2)}function xy(e){return e.getUTCDay()}function Sy(e,t){return vv(Y_.count(iv(e)-1,e),t,2)}function Cy(e,t){return vv(e.getUTCFullYear()%100,t,2)}function wy(e,t){return e=yy(e),vv(e.getUTCFullYear()%100,t,2)}function Ty(e,t){return vv(e.getUTCFullYear()%1e4,t,4)}function Ey(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Q_(e):Q_.ceil(e),vv(e.getUTCFullYear()%1e4,t,4)}function Dy(){return`+0000`}function Oy(){return`%`}function ky(e){return+e}function Ay(e){return Math.floor(e/1e3)}var jy,My,Ny;Py({dateTime:`%x, %X`,date:`%-m/%-d/%Y`,time:`%-I:%M:%S %p`,periods:[`AM`,`PM`],days:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],shortDays:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],months:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],shortMonths:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]});function Py(e){return jy=pv(e),My=jy.format,jy.parse,Ny=jy.utcFormat,jy.utcParse,jy}function Fy(e){return new Date(e)}function Iy(e){return e instanceof Date?+e:+new Date(+e)}function Ly(e,t,n,r,i,a,o,s,c,l){var u=Gg(),d=u.invert,f=u.domain,p=l(`.%L`),m=l(`:%S`),h=l(`%I:%M`),g=l(`%I %p`),_=l(`%a %d`),v=l(`%b %d`),y=l(`%B`),b=l(`%Y`);function x(e){return(c(e)<e?p:s(e)<e?m:o(e)<e?h:a(e)<e?g:r(e)<e?i(e)<e?_:v:n(e)<e?y:b)(e)}return u.invert=function(e){return new Date(d(e))},u.domain=function(e){return arguments.length?f(Array.from(e,Iy)):f().map(Fy)},u.ticks=function(t){var n=f();return e(n[0],n[n.length-1],t??10)},u.tickFormat=function(e,t){return t==null?x:l(t)},u.nice=function(e){var n=f();return(!e||typeof e.range!=`function`)&&(e=t(n[0],n[n.length-1],e??10)),e?f(y_(n,e)):u},u.copy=function(){return Ug(u,Ly(e,t,n,r,i,a,o,s,c,l))},u}function Ry(){return Dh.apply(Ly(cv,lv,rv,tv,B_,I_,P_,M_,j_,My).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function zy(){return Dh.apply(Ly(ov,sv,iv,nv,J_,L_,F_,N_,j_,Ny).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function By(e){return function(){return e}}var Vy=Math.PI,Hy=2*Vy,Uy=1e-6,Wy=Hy-Uy;function Gy(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Ky(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return Gy;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var qy=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?Gy:Ky(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>Uy){if(!(Math.abs(u*s-c*l)>Uy)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((Vy-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>Uy&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>Uy||Math.abs(this._y1-l)>Uy)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%Hy+Hy),d>Wy?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>Uy&&this._append`A${n},${n},0,${+(d>=Vy)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};qy.prototype;function Jy(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new qy(t)}Array.prototype.slice;function Yy(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Xy(e){this._context=e}Xy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t)}}};function Zy(e){return new Xy(e)}function Qy(e){return e[0]}function $y(e){return e[1]}function eb(e,t){var n=By(!0),r=null,i=Zy,a=null,o=Jy(s);e=typeof e==`function`?e:e===void 0?Qy:By(e),t=typeof t==`function`?t:t===void 0?$y:By(t);function s(s){var c,l=(s=Yy(s)).length,u,d=!1,f;for(r??(a=i(f=o())),c=0;c<=l;++c)!(c<l&&n(u=s[c],c,s))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+e(u,c,s),+t(u,c,s));if(f)return a=null,f+``||null}return s.x=function(t){return arguments.length?(e=typeof t==`function`?t:By(+t),s):e},s.y=function(e){return arguments.length?(t=typeof e==`function`?e:By(+e),s):t},s.defined=function(e){return arguments.length?(n=typeof e==`function`?e:By(!!e),s):n},s.curve=function(e){return arguments.length?(i=e,r!=null&&(a=i(r)),s):i},s.context=function(e){return arguments.length?(e==null?r=a=null:a=i(r=e),s):r},s}function tb(e,t,n){var r=null,i=By(!0),a=null,o=Zy,s=null,c=Jy(l);e=typeof e==`function`?e:e===void 0?Qy:By(+e),t=typeof t==`function`?t:By(t===void 0?0:+t),n=typeof n==`function`?n:n===void 0?$y:By(+n);function l(l){var u,d,f,p=(l=Yy(l)).length,m,h=!1,g,_=Array(p),v=Array(p);for(a??(s=o(g=c())),u=0;u<=p;++u){if(!(u<p&&i(m=l[u],u,l))===h){if(h=!h)d=u,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),f=u-1;f>=d;--f)s.point(_[f],v[f]);s.lineEnd(),s.areaEnd()}}h&&(_[u]=+e(m,u,l),v[u]=+t(m,u,l),s.point(r?+r(m,u,l):_[u],n?+n(m,u,l):v[u]))}if(g)return s=null,g+``||null}function u(){return eb().defined(i).curve(o).context(a)}return l.x=function(t){return arguments.length?(e=typeof t==`function`?t:By(+t),r=null,l):e},l.x0=function(t){return arguments.length?(e=typeof t==`function`?t:By(+t),l):e},l.x1=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:By(+e),l):r},l.y=function(e){return arguments.length?(t=typeof e==`function`?e:By(+e),n=null,l):t},l.y0=function(e){return arguments.length?(t=typeof e==`function`?e:By(+e),l):t},l.y1=function(e){return arguments.length?(n=e==null?null:typeof e==`function`?e:By(+e),l):n},l.lineX0=l.lineY0=function(){return u().x(e).y(t)},l.lineY1=function(){return u().x(e).y(n)},l.lineX1=function(){return u().x(r).y(t)},l.defined=function(e){return arguments.length?(i=typeof e==`function`?e:By(!!e),l):i},l.curve=function(e){return arguments.length?(o=e,a!=null&&(s=o(a)),l):o},l.context=function(e){return arguments.length?(e==null?a=s=null:s=o(a=e),l):a},l}function nb(e,t){if((o=e.length)>1)for(var n=1,r,i,a=e[t[0]],o,s=a.length;n<o;++n)for(i=a,a=e[t[n]],r=0;r<s;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function rb(e){for(var t=e.length,n=Array(t);--t>=0;)n[t]=t;return n}function ib(e,t){return e[t]}function ab(e){let t=[];return t.key=e,t}function ob(){var e=By([]),t=rb,n=nb,r=ib;function i(i){var a=Array.from(e.apply(this,arguments),ab),o,s=a.length,c=-1,l;for(let e of i)for(o=0,++c;o<s;++o)(a[o][c]=[0,+r(e,a[o].key,c,i)]).data=e;for(o=0,l=Yy(t(a));o<s;++o)a[l[o]].index=o;return n(a,l),a}return i.keys=function(t){return arguments.length?(e=typeof t==`function`?t:By(Array.from(t)),i):e},i.value=function(e){return arguments.length?(r=typeof e==`function`?e:By(+e),i):r},i.order=function(e){return arguments.length?(t=e==null?rb:typeof e==`function`?e:By(Array.from(e)),i):t},i.offset=function(e){return arguments.length?(n=e??nb,i):n},i}var sb={bone:`_bone_1gxge_4`,square:`_square_1gxge_10`,rounded:`_rounded_1gxge_13`,circle:`_circle_1gxge_16`,rows:`_rows_1gxge_23`,line:`_line_1gxge_29`,animated:`_animated_1gxge_33`,pulse:`_pulse_1gxge_1`},cb=e=>typeof e==`number`?`${e}px`:e;function lb({width:e,height:t,appearance:n=`square`,rows:r,isFullWidth:i=!1,hasAnimation:a=!1,className:o,style:s,...c}){let l=i?`100%`:cb(e);if(r&&r>1){let e=B(sb.bone,sb[n===`circle`?`rounded`:n],sb.line,a&&sb.animated);return(0,Q.jsx)(`div`,{"aria-hidden":`true`,className:B(sb.rows,o),style:{inlineSize:l,...s},...c,children:Array.from({length:r},(n,r)=>(0,Q.jsx)(`div`,{className:e,style:{blockSize:cb(t)}},r))})}let u=n===`circle`?void 0:cb(t);return(0,Q.jsx)(`div`,{"aria-hidden":`true`,className:B(sb.bone,sb[n],a&&sb.animated,o),style:{inlineSize:l,blockSize:u,...s},...c})}var $={chart:`_chart_fgqn8_5`,header:`_header_fgqn8_14`,title:`_title_fgqn8_21`,legend:`_legend_fgqn8_28`,legendItem:`_legendItem_fgqn8_38`,legendLabel:`_legendLabel_fgqn8_85`,swatch:`_swatch_fgqn8_89`,swatchLine:`_swatchLine_fgqn8_89`,legendValue:`_legendValue_fgqn8_105`,plot:`_plot_fgqn8_128`,axis:`_axis_fgqn8_138`,grid:`_grid_fgqn8_144`,tick:`_tick_fgqn8_149`,series:`_series_fgqn8_153`,dim:`_dim_fgqn8_157`,line:`_line_fgqn8_161`,lineDashed:`_lineDashed_fgqn8_162`,area:`_area_fgqn8_173`,barStacked:`_barStacked_fgqn8_180`,partial:`_partial_fgqn8_185`,cursor:`_cursor_fgqn8_189`,cursorBand:`_cursorBand_fgqn8_193`,dot:`_dot_fgqn8_197`,slice:`_slice_fgqn8_202`,pieBody:`_pieBody_fgqn8_209`,centerTotal:`_centerTotal_fgqn8_215`,centerLabel:`_centerLabel_fgqn8_221`,tooltip:`_tooltip_fgqn8_227`,tooltipFlip:`_tooltipFlip_fgqn8_245`,tooltipHead:`_tooltipHead_fgqn8_249`,tooltipRow:`_tooltipRow_fgqn8_253`,tooltipTotal:`_tooltipTotal_fgqn8_266`,tableWrap:`_tableWrap_fgqn8_271`,badge:`_badge_fgqn8_277`,spark:`_spark_fgqn8_298`,sparkLine:`_sparkLine_fgqn8_310`,sparkEmpty:`_sparkEmpty_fgqn8_311`,sparkArea:`_sparkArea_fgqn8_318`,srOnly:`_srOnly_fgqn8_327`,entering:`_entering_fgqn8_339`,draw:`_draw_fgqn8_1`,fade:`_fade_fgqn8_1`,bar:`_bar_fgqn8_180`,grow:`_grow_fgqn8_1`,sweep:`_sweep_fgqn8_358`};function ub(e){let[t,n]=(0,Z.useState)(!0);return(0,Z.useEffect)(()=>{if(!e||!t)return;let r=setTimeout(()=>n(!1),1e3);return()=>clearTimeout(r)},[e,t]),t}function db({title:e,isLoading:t,loading:n,hasData:r,emptyHeight:i,table:a,className:o,children:s}){let c=(0,Z.useId)(),[l,u]=(0,Z.useState)(!1),d=r&&!t;return(0,Q.jsxs)(`figure`,{className:B($.chart,o),"aria-labelledby":`${c}-title`,"aria-busy":t||void 0,children:[(0,Q.jsxs)(`div`,{className:$.header,children:[(0,Q.jsx)(`div`,{id:`${c}-title`,className:$.title,children:e}),d&&(0,Q.jsx)(xt,{appearance:`ghost`,variant:`secondary`,size:`sm`,"aria-expanded":l,"aria-controls":`${c}-table`,onClick:()=>u(e=>!e),children:l?`View as chart`:`View as table`})]}),t?n:r?l?(0,Q.jsx)(`div`,{id:`${c}-table`,className:$.tableWrap,role:`region`,"aria-labelledby":`${c}-title`,tabIndex:0,children:a()}):s(`${c}-title`):(0,Q.jsx)(`div`,{className:$.plot,style:{blockSize:i},children:(0,Q.jsx)(`span`,{className:$.badge,children:`No data`})})]})}function fb({items:e,hiddenKeys:t=[],onToggle:n,onFocusChange:r,marker:i=`dot`,className:a}){let o=e.length-t.length;return(0,Q.jsx)(`ul`,{className:B($.legend,a),"aria-label":`Legend`,onPointerLeave:()=>r?.(null),children:e.map(e=>{let a=t.includes(e.key),s=(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:B($.swatch,i===`line`&&$.swatchLine),style:{"--swatch":e.color},"aria-hidden":`true`}),(0,Q.jsx)(`span`,{className:$.legendLabel,children:e.label}),e.value!==void 0&&(0,Q.jsx)(`span`,{className:$.legendValue,children:e.value})]}),c=()=>r?.(a?null:e.key);return(0,Q.jsx)(`li`,{onPointerEnter:c,children:n?(0,Q.jsx)(`button`,{type:`button`,className:$.legendItem,"aria-pressed":!a,"aria-disabled":!a&&o===1||void 0,onClick:()=>!a&&o===1?void 0:n(e.key),onFocus:c,onBlur:()=>r?.(null),children:s}):(0,Q.jsx)(`span`,{className:$.legendItem,children:s})},e.key)})})}var pb=e=>e===`warning`?`var(--color-icon-warning)`:e===`neutral`?`var(--color-text-subtlest)`:e.startsWith(`chart-`)?`var(--color-${e})`:`var(--color-background-${e}-bold)`,mb=e=>`chart-${e%8+1}`,hb=new Intl.NumberFormat(void 0,{notation:`compact`,maximumFractionDigits:2});new Intl.NumberFormat(void 0,{style:`percent`,maximumFractionDigits:1});var gb=new Map,_b=e=>hb.format(e);function vb(e,t){let n=gb.get(t);return n||(n=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`,timeZone:t}),gb.set(t,n)),n.format(e)}var yb={top:8,right:8,bottom:24},bb=`–`;function xb(e,t,n,r){let i=Math.max(0,Math.min(2,n/2,r));return`M${e},${t+r}V${t+i}Q${e},${t} ${e+i},${t}H${e+n-i}Q${e+n},${t} ${e+n},${t+i}V${t+r}Z`}function Sb(){let[e,t]=(0,Z.useState)(0);return[(0,Z.useCallback)(e=>{if(!e)return;t(Math.round(e.getBoundingClientRect().width));let n=new ResizeObserver(([e])=>t(Math.round(e.contentRect.width)));return n.observe(e),()=>n.disconnect()},[]),e]}function Cb(e,t){let n=e[t];return n==null||n===``||Number.isNaN(Number(n))?null:Number(n)}function wb({type:e,isGrouped:t=!1,isAutoDomain:n=!1,title:r,data:i,series:a,x:o,height:s=240,format:c=_b,timeZone:l,isIncomplete:u=!1,legendValue:d=`total`,isLoading:f=!1,className:p}){let m=(0,Z.useId)(),[h,g]=Sb(),[_,v]=(0,Z.useState)([]),[y,b]=(0,Z.useState)(null),[x,S]=(0,Z.useState)(null),C=ub(g>0&&!f&&i.length>0),w=a.map((e,t)=>({...e,fill:pb(e.color??mb(t))})),T=_.filter(e=>a.some(t=>t.key===e)),E=T.length===a.length?w:w.filter(e=>!T.includes(e.key)),D=E.map(e=>e.key),O=y&&D.includes(y)?y:null,k=(e,t)=>Cb(e,t)??0,A=(e,t)=>{let n=Cb(e,t);return n===null?bb:c(n)},j=i.length-1,ee=i.length>1&&i[0][o]instanceof Date&&i[1][o]instanceof Date&&+i[1][o]>+i[0][o],M=e=>ee?vb(e[o],l):String(e[o]),te=e===`bar`&&!t,N=i.map(e=>te?D.reduce((t,n)=>t+k(e,n),0):Math.max(0,...D.map(t=>k(e,t)))),P=w.map(e=>{let t=i.map(t=>Cb(t,e.key)).filter(e=>e!==null),n=d===`latest`?t.at(-1):t.reduce((e,t)=>e+t,0);return{key:e.key,label:e.label,color:e.fill,value:d===`none`?void 0:n===void 0?bb:c(n)}}),ne=t=>{if(g===0)return null;let r=i.flatMap(e=>D.map(t=>Cb(e,t))).filter(e=>e!==null),a=n&&r.length?Math.min(...r):0,d=Math.max(3,Math.round((s-40)/50)),f=v_().domain([a,Math.max(...N,a+1)]).nice(d),p=f.ticks(d),h=Math.max(...p.map(e=>c(e).length))*7+12,_=Math.max(1,g-h-yb.right),v=s-yb.top-yb.bottom;f.range([yb.top+v,yb.top]);let y=f(f.domain()[0]),b,C,w,T;if(ee){let t=+i[0][o],n=+i[1][o]-t,r=(l===`UTC`?zy:Ry)().domain([new Date(t),new Date(+i[j][o]+(e===`bar`?n:0))]).range([h,h+_]);C=e===`bar`?r(new Date(t+n))-r(new Date(t)):0,b=e=>r(i[e][o]),w=r.ticks(Math.max(2,Math.floor(_/130))).map(e=>({pos:r(e),label:vb(e,l)})).filter(e=>e.pos-45>=0&&e.pos+45<=g),T=i=>{let a=(+r.invert(i)-t)/n;return e===`bar`?Math.floor(a):Math.round(a)}}else{let t=Ah().domain(i.map((e,t)=>String(t))).range([h,h+_]).paddingInner(e===`bar`?.3:0).paddingOuter(e===`bar`?.15:0);C=t.bandwidth(),b=e=>t(String(e))??0;let n=Math.ceil(i.length/Math.max(1,Math.floor(_/70)));w=i.flatMap((e,t)=>t%n?[]:[{pos:b(t)+C/2,label:String(e[o])}]),T=e=>Math.floor((e-h)/(_/i.length))}let P=e=>b(e)+C/2,ne=ee?Math.max(1,C*.25):0,F=e=>B($.series,O&&O!==e&&$.dim),re;if(te){let e=ob().keys(D).value((e,t)=>k(e,t))(i),t=e=>f(e[0])-f(e[1])>=.5,n=i.map((n,r)=>e.findLastIndex(e=>t(e[r])));re=e.map((e,r)=>(0,Q.jsx)(`g`,{className:F(e.key),fill:E[r].fill,children:e.map((e,i)=>{if(!t(e))return null;let[a,o]=e,s=b(i)+ne/2,c=Math.max(1,C-ne),l=f(a)-f(o);return(0,Q.jsx)(`path`,{className:B($.bar,$.barStacked,u&&i===j&&$.partial),style:{"--i":i},d:n[i]===r?xb(s,f(o),c,l):`M${s},${f(o)}h${c}v${l}h${-c}Z`},i)})},e.key))}else if(e===`bar`){let e=Ah().domain(D).range([ne/2,C-ne/2]).padding(.12);re=E.map(t=>(0,Q.jsx)(`g`,{className:F(t.key),fill:t.fill,children:i.map((n,r)=>(0,Q.jsx)(`path`,{className:B($.bar,u&&r===j&&$.partial),style:{"--i":r},d:xb(b(r)+(e(t.key)??0),f(k(n,t.key)),e.bandwidth(),y-f(k(n,t.key)))},r))},t.key))}else re=E.map(t=>{let n=e=>Cb(e,t.key)!==null,r=e=>eb().defined(n).x((t,n)=>P(n+e)).y(e=>f(k(e,t.key))),a=u?i.slice(0,j):i;return(0,Q.jsxs)(`g`,{className:F(t.key),children:[e===`area`&&(0,Q.jsx)(`path`,{className:$.area,fill:t.fill,d:tb().defined(n).x((e,t)=>P(t)).y0(y).y1(e=>f(k(e,t.key)))(i)??``}),(0,Q.jsx)(`path`,{className:$.line,pathLength:1,stroke:t.fill,d:r(0)(a)??``}),u&&(0,Q.jsx)(`path`,{className:$.lineDashed,stroke:t.fill,d:r(j-1)(i.slice(j-1))??``})]},t.key)});let ie=x!==null&&Number.isFinite(x)?Math.min(j,Math.max(0,x)):null,I=ee?C:_/i.length;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`svg`,{role:`img`,"aria-labelledby":`${t} ${m}-range`,width:g,height:s,viewBox:`0 0 ${g} ${s}`,onPointerMove:e=>{let t=e.clientX-e.currentTarget.getBoundingClientRect().left;S(t<h||t>h+_?null:T(t))},onPointerLeave:()=>S(null),children:[p.map(e=>(0,Q.jsxs)(`g`,{children:[(0,Q.jsx)(`line`,{className:$.grid,x1:h,x2:h+_,y1:f(e),y2:f(e)}),(0,Q.jsx)(`text`,{className:$.axis,x:h-8,y:f(e),dy:`0.32em`,textAnchor:`end`,children:c(e)})]},e)),w.map((e,t)=>(0,Q.jsxs)(`g`,{children:[(0,Q.jsx)(`line`,{className:$.tick,x1:e.pos,x2:e.pos,y1:yb.top+v,y2:yb.top+v+4}),(0,Q.jsx)(`text`,{className:$.axis,x:e.pos,y:s-6,textAnchor:`middle`,children:e.label})]},t)),ie!==null&&e===`bar`&&(0,Q.jsx)(`rect`,{className:$.cursorBand,x:P(ie)-I/2,y:yb.top,width:I,height:v}),re,ie!==null&&e!==`bar`&&(0,Q.jsxs)(`g`,{children:[(0,Q.jsx)(`line`,{className:$.cursor,x1:P(ie),x2:P(ie),y1:yb.top,y2:yb.top+v}),E.map(e=>Cb(i[ie],e.key)===null?null:(0,Q.jsx)(`circle`,{className:$.dot,cx:P(ie),cy:f(k(i[ie],e.key)),r:3.5,fill:e.fill},e.key))]})]}),(0,Q.jsxs)(`span`,{id:`${m}-range`,className:$.srOnly,children:[M(i[0]),` to `,M(i[j]),`. Use View as table to read the values.`]}),ie!==null&&(0,Q.jsxs)(`div`,{className:B($.tooltip,P(ie)>g/2&&$.tooltipFlip),style:{insetInlineStart:P(ie),insetBlockStart:yb.top},"aria-hidden":`true`,children:[(0,Q.jsxs)(`div`,{className:$.tooltipHead,children:[M(i[ie]),u&&ie===j&&` · partial`]}),(te?[...E].reverse():E).map(e=>(0,Q.jsxs)(`div`,{className:$.tooltipRow,children:[(0,Q.jsx)(`span`,{className:$.swatch,style:{"--swatch":e.fill}}),e.label,(0,Q.jsx)(`b`,{children:A(i[ie],e.key)})]},e.key)),te&&E.length>1&&(0,Q.jsxs)(`div`,{className:B($.tooltipRow,$.tooltipTotal),children:[`Total`,(0,Q.jsx)(`b`,{children:c(N[ie])})]})]})]})};return(0,Q.jsx)(db,{title:r,isLoading:f,loading:(0,Q.jsx)(lb,{isFullWidth:!0,height:s}),hasData:i.length>0,emptyHeight:s,className:p,table:()=>(0,Q.jsx)(Xm,{caption:r,hasStickyHeader:!0,rows:i,getRowId:(e,t)=>String(t),columns:[{key:`__x`,header:ee?`Time`:`Category`,cell:M,isRowHeader:!0},...a.map(e=>({key:e.key,header:e.label,align:`end`,cell:t=>A(t,e.key)}))]}),children:t=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{ref:h,className:B($.plot,C&&$.entering),style:{blockSize:s},children:ne(t)}),(0,Q.jsx)(fb,{items:P,marker:e===`bar`?`dot`:`line`,hiddenKeys:T.length===a.length?[]:T,onToggle:e=>{b(null),v(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},onFocusChange:b})]})})}function Tb({appearance:e=`line`,isAutoDomain:t=!1,...n}){return(0,Q.jsx)(wb,{...n,type:e,isAutoDomain:e===`line`&&t})}var Eb={display:`flex`,gap:8,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`},Db={display:`grid`,gap:12,width:`100%`},Ob=[{id:`1`,smith:`Halvard Østby`,blade:`Marram`,status:[`Quenched`,`success`]},{id:`2`,smith:`Ilse Vandermeer`,blade:`Messer`,status:[`Tempering`,`warning`]},{id:`3`,smith:`Tomasz Kowalczyk`,blade:`Longsword`,status:[`Grinding`,`neutral`]},{id:`4`,smith:`Mirela Ambroz`,blade:`Seax`,status:[`Quenched`,`success`]},{id:`5`,smith:`Ravi Sundaram`,blade:`Falchion`,status:[`Rejected`,`danger`]}],kb=e=>`./avatars/${e}.webp`,Ab=[12,18,16,27,25,34,32].map((e,t)=>({day:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`][t],value:e})),jb={button:(0,Q.jsxs)(`div`,{style:Eb,children:[(0,Q.jsx)(xt,{variant:`primary`,children:`Save changes`}),(0,Q.jsx)(xt,{variant:`secondary`,appearance:`outlined`,children:`Cancel`}),(0,Q.jsx)(xt,{variant:`secondary`,appearance:`ghost`,children:`More`})]}),input:(0,Q.jsx)(ke,{label:`Email`,defaultValue:`halvard@bryggen.no`,helperText:`We only use this for receipts.`,isFullWidth:!0}),select:(0,Q.jsx)(`div`,{style:Db,children:(0,Q.jsx)(ut,{label:`Workshop`,options:[`Oslo`,`Bergen`,`Trondheim`],defaultValue:`Bergen`,helperText:`Where the blade is forged.`,isFullWidth:!0})}),controls:(0,Q.jsxs)(`div`,{style:Db,children:[(0,Q.jsx)(at,{label:`Notify on quench`,defaultChecked:!0}),(0,Q.jsx)(Ep,{label:`Sign every blade`,variant:`primary`,defaultChecked:!0}),(0,Q.jsx)(fe,{label:`Shipping`,variant:`primary`,options:[{value:`sea`,label:`Ship by sea`},{value:`road`,label:`Ship by road`}],defaultValue:`sea`})]}),tabs:(0,Q.jsx)(Me,{defaultValue:`overview`,items:[{value:`overview`,label:`Overview`},{value:`activity`,label:`Activity`},{value:`settings`,label:`Settings`}]}),tags:(0,Q.jsxs)(`div`,{style:Eb,children:[(0,Q.jsx)(tt,{text:`Design`,variant:`blue`}),(0,Q.jsx)(tt,{text:`Shipped`,variant:`success`}),(0,Q.jsx)(tt,{text:`Review`,variant:`warning`}),(0,Q.jsx)(tt,{text:`Blocked`,variant:`danger`}),(0,Q.jsx)(Op,{count:12,variant:`destructive`})]}),avatars:(0,Q.jsx)(Mp,{size:`lg`,max:5,avatars:[{imageSrc:kb(`ingrid`),imageAlt:`Ingrid Halvorsen`},{imageSrc:kb(`tomasz`),imageAlt:`Tomasz Kowalczyk`},{imageSrc:kb(`amara`),imageAlt:`Amara Okafor`},{imageSrc:kb(`halvard`),imageAlt:`Halvard Østby`},{imageSrc:kb(`ilse`),imageAlt:`Ilse Vandermeer`},{initials:`RS`,color:`teal`,imageAlt:`Ravi Sundaram`}]}),alert:(0,Q.jsx)(Fp,{variant:`success`,title:`Blade saved`,style:{width:`100%`},children:`Order 0417 moved to tempering.`}),table:(0,Q.jsx)(`div`,{style:{width:`100%`},children:(0,Q.jsx)(Xm,{caption:`Blades in the workshop`,rows:[...Ob],getRowId:e=>e.id,columns:[{key:`smith`,header:`Smith`,cell:e=>e.smith,isRowHeader:!0,sortable:!0},{key:`blade`,header:`Blade`,cell:e=>e.blade},{key:`status`,header:`Status`,cell:e=>(0,Q.jsx)(tt,{text:e.status[0],variant:e.status[1],size:`sm`})}]})}),calendar:(0,Q.jsx)(ah,{defaultValue:new Date(2026,10,14),defaultMonth:new Date(2026,10,1),locale:`en-GB`}),chart:(0,Q.jsx)(`div`,{style:{width:`100%`},children:(0,Q.jsx)(Tb,{title:`Blades sold`,data:Ab,x:`day`,series:[{key:`value`,label:`Blades`}],appearance:`area`,height:150,legendValue:`none`})})};function Mb(){let[e,t]=(0,Z.useState)(`blue`);return(0,Z.useEffect)(()=>{let e=e=>t(e.detail);return window.addEventListener(`marram:accent`,e),()=>window.removeEventListener(`marram:accent`,e)},[]),e}var Nb={"font-sans":getComputedStyle(document.documentElement).getPropertyValue(`--sans`)};function Pb({slots:e}){let t=Mb();return e.map(e=>(0,lp.createPortal)((0,Q.jsx)(fp,{appearance:`light`,accentColor:t,radius:`rounded`,tokens:Nb,style:{width:`100%`,display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,placeItems:`center`},children:jb[e.dataset.demo]}),e,e.dataset.demo))}var Fb=[...document.querySelectorAll(`.prev[data-demo]`)],Ib=document.createElement(`div`);document.body.append(Ib),(0,up.createRoot)(Ib).render((0,Q.jsx)(Z.StrictMode,{children:(0,Q.jsx)(Pb,{slots:Fb})}));