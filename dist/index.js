"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var asafarim_navlinks_exports = {};
__export(asafarim_navlinks_exports, {
  default: () => NavLinks_default
});
module.exports = __toCommonJS(asafarim_navlinks_exports);

// src/NavLinks.tsx
var import_react = require("react");

// src/NavbarLinks.module.css
var NavbarLinks_default = {};

// src/NavLinks.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NavLinks = ({
  links,
  className,
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isBottomAligned = false
}) => {
  const [openDropdown, setOpenDropdown] = (0, import_react.useState)(
    {}
  );
  const handleToggle = (key) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const renderSubNav = (subNav, parentIndex) => {
    if (!subNav) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "ul",
      {
        className,
        style: { ...subLinkStyle, position: "absolute" },
        children: subNav.map((subLink, subIndex) => {
          const key = `${parentIndex}-${subIndex}`;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "li",
            {
              style: { position: "relative" },
              className: isRightAligned ? NavbarLinks_default.rightAligned : isBottomAligned ? NavbarLinks_default.bottomAligned : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "a",
                  {
                    href: subLink.href,
                    onClick: (e) => {
                      if (subLink.subNav) {
                        e.preventDefault();
                        handleToggle(key);
                      }
                    },
                    title: subLink.label,
                    children: getLinkContent(subLink)
                  }
                ),
                openDropdown[key] && renderSubNav(subLink.subNav, key)
              ]
            },
            key
          );
        })
      }
    );
  };
  const getLinkContent = (link) => {
    if (!link) return null;
    if (link.svgLogoIcon) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "img",
          {
            src: link.svgLogoIcon.src,
            alt: link.svgLogoIcon.alt,
            width: link.svgLogoIcon.width ?? 40,
            height: link.svgLogoIcon.height ?? "auto",
            style: link.svgLogoIcon.style ?? { width: "20px", height: "20px" }
          }
        ),
        link.svgLogoIcon.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.svgLogoIcon.caption })
      ] });
    }
    if (link.emoji) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.emoji });
    }
    if (link.iconLeft) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: link.iconLeft }),
        " ",
        link.label
      ] });
    }
    if (link.iconRight) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        link.label,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: link.iconRight })
      ] });
    }
    return link.label;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "ul",
    {
      className: `${NavbarLinks_default.baseLinks} ${className}`,
      style: baseLinkStyle,
      children: links.map((link, index) => {
        const key = index.toString();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "li",
          {
            className: isRightAligned ? NavbarLinks_default.rightAligned : isBottomAligned ? NavbarLinks_default.bottomAligned : void 0,
            style: { position: "relative" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "a",
                {
                  href: link.href,
                  onClick: (e) => {
                    if (link.subNav) {
                      e.preventDefault();
                      handleToggle(key);
                    }
                  },
                  title: link.label,
                  children: getLinkContent(link)
                }
              ),
              openDropdown[key] && renderSubNav(link.subNav, key)
            ]
          },
          key
        );
      })
    }
  );
};
var NavLinks_default = NavLinks;
