(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3454:function(n,r,t){"use strict";var e,i;n.exports=(null==(e=t.g.process)?void 0:e.env)&&"object"===typeof(null==(i=t.g.process)?void 0:i.env)?t.g.process:t(7663)},1943:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm",function(){return t(9151)}])},3521:function(n,r,t){"use strict";var e=t(7297),i=t(5893),o=t(7294),c=t(3043),u=t.n(c),s=t(6158),f=t.n(s);function a(){var n=(0,e.Z)(["\n  flex-1\n  h-1/2\n"]);return a=function(){return n},n}f().accessToken="pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ";r.Z=function(n){console.log(n),(0,o.useEffect)((function(){var t=new(f().Map)({container:"map",style:"mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",center:[-99.29811,39.39172],zoom:3});n.pickupCoordinates&&r(t,n.pickupCoordinates),n.dropOffCoordinates&&(r(t,n.dropOffCoordinates),n.pickupCoordinates&&n.dropOffCoordinates&&t.fitBounds([n.dropOffCoordinates,n.pickupCoordinates],{padding:60}))}),[n.pickupCoordinates,n.dropOffCoordinates]);var r=function(n,r){(new(f().Marker)).setLngLat(r).addTo(n)};return(0,i.jsx)(l,{id:"map"})};var l=u().div(a())},9151:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return W}});var e=t(7297),i=t(5893),o=(t(6158),t(7294)),c=t(3043),u=t.n(c),s=t(3521),f=t(1163),a=[{imgUrl:"https://i.ibb.co/cyvcpfF/uberx.png",service:"Birim Basic",multiplier:1},{imgUrl:"https://i.ibb.co/YDYMKny/uberxl.png",service:"Birim Big",multiplier:1.5},{imgUrl:"https://i.ibb.co/Xx4G91m/uberblack.png",service:"Birim Premium",multiplier:2},{imgUrl:"https://i.ibb.co/cyvcpfF/uberx.png",service:"Bedaw (Run!)",multiplier:1.2},{imgUrl:" https://i.ibb.co/1nStPWT/uberblacksuv.png",service:"Birim VIP",multiplier:4}];function l(){var n=(0,e.Z)(["\n    flex-1 overflow-y-scroll flex flex-col\n"]);return l=function(){return n},n}function p(){var n=(0,e.Z)(["\n    text-gray-500 text-center text-xs py-2 border-b\n"]);return p=function(){return n},n}function d(){var n=(0,e.Z)(["\n    overflow-y-scroll\n"]);return d=function(){return n},n}function h(){var n=(0,e.Z)(["\n    flex p-4 items-center\n"]);return h=function(){return n},n}function v(){var n=(0,e.Z)(["\n    h-14 mr-4\n"]);return v=function(){return n},n}function m(){var n=(0,e.Z)(["\n    flex-1\n"]);return m=function(){return n},n}function x(){var n=(0,e.Z)(["\n    font-medium\n"]);return x=function(){return n},n}function b(){var n=(0,e.Z)(["\n    text-xs text-blue-500\n"]);return b=function(){return n},n}function g(){var n=(0,e.Z)(["\n    text-sm\n"]);return g=function(){return n},n}var w=function(n){var r=n.pickupCoordinates,t=n.dropOffCoordinates,e=(0,o.useState)(1),c=e[0],u=e[1];return(0,o.useEffect)((function(){fetch("https://api.mapbox.com/directions/v5/mapbox/driving/".concat(r[0],", ").concat(r[1],";").concat(t[0],", ").concat(t[1],"?access_token=pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA")).then((function(n){return n.json()})).then((function(n){n.routes&&u(n.routes[0].duration/100)})).catch((function(n){return console.log(n)}))}),[r,t]),(0,i.jsxs)(y,{children:[(0,i.jsx)(k,{children:"Choose a ride, or swipe up for more"}),(0,i.jsx)(j,{children:a.map((function(n,r){return(0,i.jsxs)(T,{children:[(0,i.jsx)(C,{src:n.imgUrl}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(_,{children:n.service}),(0,i.jsx)(I,{children:"5 min away"})]}),(0,i.jsxs)(N,{children:["$",(c*n.multiplier).toFixed(2)]})]},r)}))})]})},y=u().div(l()),k=u().div(p()),j=u().div(d()),T=u().div(h()),C=u().img(v()),Z=u().div(m()),_=u().div(x()),I=u().div(b()),N=u().div(g()),G=t(1664),E=t.n(G);function R(){var n=(0,e.Z)(["\nflex\nflex-col\nh-screen"]);return R=function(){return n},n}function Y(){var n=(0,e.Z)(["\nflex\nflex-col\nflex-1\nh-1/2"]);return Y=function(){return n},n}function J(){var n=(0,e.Z)(["\nborder-t-2"]);return J=function(){return n},n}function U(){var n=(0,e.Z)(["\nflex\nbg-white\nm-4\nh-30\npx-4\nitems-center\nflex-col\ntransform hover:scale-105\ntransition\ntext-lg\ntext-black\nrounded-full\ncursor-pointer\n"]);return U=function(){return n},n}function B(){var n=(0,e.Z)(["\nh-full\nobject-contain"]);return B=function(){return n},n}function O(){var n=(0,e.Z)(["\nbg-white\npx-4\nrounded-full\nabsolute\ntop-4\nleft-4\nz-10\nbg-white\nshadow-md\ncursor-pointer\n"]);return O=function(){return n},n}var W=function(){var n=(0,f.useRouter)().query,r=n.pickup,t=n.dropoff,e=(0,o.useState)([0,0]),c=e[0],u=e[1],a=(0,o.useState)([0,0]),l=a[0],p=a[1];return(0,o.useEffect)((function(){!function(n){fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(n,".json?")+new URLSearchParams({access_token:"pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ",limit:1})).then((function(n){return n.json()})).then((function(n){u(n.features[0].center)}))}(r),function(n){fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(n,".json?")+new URLSearchParams({access_token:"pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ",limit:1})).then((function(n){return n.json()})).then((function(n){p(n.features[0].center)}))}(t)}),[r,t]),(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(E(),{href:"search",children:(0,i.jsx)(A,{src:"http://img.icons8.com/ios-filled/50/000000/left.png"})})}),(0,i.jsx)(s.Z,{pickupCoordinates:c,dropOffCoordinates:l}),(0,i.jsxs)(S,{children:[(0,i.jsx)(w,{pickupCoordinates:c,dropOffCoordinates:l}),(0,i.jsx)(M,{children:(0,i.jsx)(X,{children:"Confirm"})})]})]})},L=u().div(R()),S=u().div(Y()),M=u().div(J()),X=u().div(U()),A=u().img(B()),P=u().div(O())},7663:function(n){!function(){var r={308:function(n){var r,t,e=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(n){if(r===setTimeout)return setTimeout(n,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(n,0);try{return r(n,0)}catch(e){try{return r.call(null,n,0)}catch(e){return r.call(this,n,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(n){r=i}try{t="function"===typeof clearTimeout?clearTimeout:o}catch(n){t=o}}();var u,s=[],f=!1,a=-1;function l(){f&&u&&(f=!1,u.length?s=u.concat(s):a=-1,s.length&&p())}function p(){if(!f){var n=c(l);f=!0;for(var r=s.length;r;){for(u=s,s=[];++a<r;)u&&u[a].run();a=-1,r=s.length}u=null,f=!1,function(n){if(t===clearTimeout)return clearTimeout(n);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(n);try{t(n)}catch(r){try{return t.call(null,n)}catch(r){return t.call(this,n)}}}(n)}}function d(n,r){this.fun=n,this.array=r}function h(){}e.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new d(n,r)),1!==s.length||f||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.prependListener=h,e.prependOnceListener=h,e.listeners=function(n){return[]},e.binding=function(n){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(n){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}},c=!0;try{r[n](o,o.exports,e),c=!1}finally{c&&delete t[n]}return o.exports}e.ab="//";var i=e(308);n.exports=i}()},1163:function(n,r,t){n.exports=t(387)}},function(n){n.O(0,[634,920,774,888,179],(function(){return r=1943,n(n.s=r);var r}));var r=n.O();_N_E=r}]);