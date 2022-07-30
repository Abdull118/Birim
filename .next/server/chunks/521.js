"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 3521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6933);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);





(mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().accessToken) = "pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ";
const Map = (props)=>{
    console.log(props);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Map)({
            container: "map",
            style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
            center: [
                -99.29811,
                39.39172
            ],
            zoom: 3
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates);
        }
        if (props.dropOffCoordinates) {
            addToMap(map, props.dropOffCoordinates);
            if (props.pickupCoordinates && props.dropOffCoordinates) {
                map.fitBounds([
                    props.dropOffCoordinates,
                    props.pickupCoordinates
                ], {
                    padding: 60
                });
            }
        }
    }, [
        props.pickupCoordinates,
        props.dropOffCoordinates
    ]);
    const addToMap = (map, coordinates)=>{
        new (mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Marker)().setLngLat(coordinates).addTo(map);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        id: "map"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);
const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex-1
  h-1/2
`;


/***/ })

};
;