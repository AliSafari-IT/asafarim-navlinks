// src/NavLinks.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React, { useState } from "react";
// src/NavbarLinks.module.css
var NavbarLinks_default = {};
// src/NavLinks.tsx
var NavLinks = function(param) {
    var links = param.links, className = param.className, style = param.style, baseLinkStyle = param.baseLinkStyle, subLinkStyle = param.subLinkStyle;
    var _useState = _sliced_to_array(useState({}), 2), openDropdown = _useState[0], setOpenDropdown = _useState[1];
    var handleToggle = function(key) {
        setOpenDropdown(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, key, !prev[key]));
        });
    };
    var renderSubNav = function(subNav, parentIndex) {
        if (!subNav) return null;
        return /* @__PURE__ */ React.createElement("ul", {
            style: _object_spread_props(_object_spread({}, subLinkStyle), {
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "10px",
                zIndex: 100
            })
        }, subNav.map(function(subLink, subIndex) {
            var key = "".concat(parentIndex, "-").concat(subIndex);
            return /* @__PURE__ */ React.createElement("li", {
                key: key,
                style: {
                    position: "relative"
                }
            }, /* @__PURE__ */ React.createElement("a", {
                href: subLink.href,
                onClick: function(e) {
                    if (subLink.subNav) {
                        e.preventDefault();
                        handleToggle(key);
                    }
                }
            }, subLink.label), openDropdown[key] && renderSubNav(subLink.subNav, key));
        }));
    };
    return /* @__PURE__ */ React.createElement("nav", {
        className: className !== null && className !== void 0 ? className : NavbarLinks_default.navContainer,
        style: _object_spread({}, style)
    }, /* @__PURE__ */ React.createElement("ul", {
        className: NavbarLinks_default.baseLinks,
        style: _object_spread({}, baseLinkStyle)
    }, links.map(function(link, index) {
        var key = index.toString();
        return /* @__PURE__ */ React.createElement("li", {
            key: key,
            style: {
                position: "relative"
            }
        }, /* @__PURE__ */ React.createElement("a", {
            href: link.href,
            onClick: function(e) {
                if (link.subNav) {
                    e.preventDefault();
                    handleToggle(key);
                }
            }
        }, link.label), openDropdown[key] && renderSubNav(link.subNav, key));
    })));
};
var NavLinks_default = NavLinks;
// src/index.tsx
var src_default = NavLinks_default;
export { src_default as default };
