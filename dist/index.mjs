// src/NavLinks.tsx
import React from "react";
var NavLinks = function(param) {
    var links = param.links;
    return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, links.map(function(link, index) {
        return /* @__PURE__ */ React.createElement("li", {
            key: index
        }, /* @__PURE__ */ React.createElement("a", {
            href: link.href
        }, link.label));
    })));
};
var NavLinks_default = NavLinks;
// src/index.tsx
var src_default = NavLinks_default;
export { src_default as default };
