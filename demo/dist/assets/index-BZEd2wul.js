import{r as L,a as y,R as k}from"./react-nf7bT_Uh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function h(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=h(o);fetch(o.href,i)}})();var v={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=L,w=Symbol.for("react.element"),A=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,R=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function x(c,s,h){var l,o={},i=null,f=null;h!==void 0&&(i=""+h),s.key!==void 0&&(i=""+s.key),s.ref!==void 0&&(f=s.ref);for(l in s)I.call(s,l)&&!C.hasOwnProperty(l)&&(o[l]=s[l]);if(c&&c.defaultProps)for(l in s=c.defaultProps,s)o[l]===void 0&&(o[l]=s[l]);return{$$typeof:w,type:c,key:i,ref:f,props:o,_owner:R.current}}b.Fragment=A;b.jsx=x;b.jsxs=x;v.exports=b;var e=v.exports,p={},g=y;p.createRoot=g.createRoot,p.hydrateRoot=g.hydrateRoot;const T="_baseLinks_12sr0_3",D="_hasChildren_12sr0_29",_="_dropdownIndicator_12sr0_37",P="_dropdown_12sr0_37",B="_rightAligned_12sr0_267",M="_bottomAligned_12sr0_293",E="_emoji_12sr0_553",t={baseLinks:T,hasChildren:D,dropdownIndicator:_,dropdown:P,rightAligned:B,bottomAligned:M,emoji:E},d=({links:c,className:s,baseLinkStyle:h,subLinkStyle:l,isRightAligned:o=!1,isBottomAligned:i=!1})=>{const f=(a,n=1)=>a?e.jsx("ul",{className:`${s} ${t.dropdown} depth-${n}`,style:{...l,zIndex:1e3+n},"data-depth":n,children:a.map((r,j)=>{const m=!!r.subNav&&r.subNav.length>0;return e.jsxs("li",{className:`${m?t.hasChildren:""} ${o?t.rightAligned:i?t.bottomAligned:""} dropdown-item-${n}`,"data-has-children":m?"true":"false",children:[e.jsxs("a",{href:r.href,onClick:N=>{m&&r.href==="#"&&N.preventDefault()},title:r.label||r.title,className:m?"has-submenu":"","data-depth":n,children:[u(r),m&&e.jsx("span",{className:t.dropdownIndicator,style:{color:"white",fontWeight:"bold"},children:n===1?" ▼":" ▶"})]}),m&&f(r.subNav,n+1)]},`sublevel-${n}-${j}`)})}):null,u=a=>a?a.svgLogoIcon?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a.svgLogoIcon.src,alt:a.svgLogoIcon.alt,width:a.svgLogoIcon.width??40,height:a.svgLogoIcon.height??"auto",style:a.svgLogoIcon.style??{width:"20px",height:"20px"}}),a.svgLogoIcon.caption&&e.jsx("span",{children:a.svgLogoIcon.caption})]}):a.emoji?e.jsxs("span",{className:t.emoji,children:[a.emoji," ",a.label]}):a.iconLeft?e.jsxs("span",{children:[e.jsx("i",{className:a.iconLeft})," ",a.label]}):a.iconRight?e.jsxs("span",{children:[a.label," ",e.jsx("i",{className:a.iconRight})]}):a.label:null;return e.jsx("ul",{className:`${t.baseLinks} ${s||""}`,style:h,children:c.map((a,n)=>e.jsxs("li",{className:`${a.subNav?t.hasChildren:""} ${o?t.rightAligned:i?t.bottomAligned:""}`,children:[e.jsxs("a",{href:a.href,onClick:r=>{a.subNav&&a.href==="#"&&r.preventDefault()},title:a.label||a.title,children:[u(a),a.subNav&&e.jsx("span",{className:t.dropdownIndicator,children:" ▼"})]}),a.subNav&&f(a.subNav,1)]},`level-0-${n}`))})},F=()=>{const c=[{label:"ASafariM",href:"/",svgLogoIcon:{src:"./assets/logoT.svg",alt:"ASafariM Logo",width:35,height:35,caption:"ASafariM",style:{marginRight:"8px"}}},{label:"Products",href:"/products",iconLeft:"fas fa-cube",subNav:[{label:"Web Development",href:"/web-dev",emoji:"🌐",subNav:[{label:"React Apps",href:"/react-apps",iconLeft:"fab fa-react"},{label:"Vue Apps",href:"/vue-apps",iconLeft:"fab fa-vuejs"},{label:"Angular Apps",href:"/angular-apps",iconLeft:"fab fa-angular"},{label:"Full Stack",href:"/fullstack",iconLeft:"fas fa-layer-group",subNav:[{label:"MERN Stack",href:"/mern",emoji:"⚛️"},{label:"MEAN Stack",href:"/mean",emoji:"🅰️"},{label:"Django + React",href:"/django-react",emoji:"🐍"}]}]},{label:"Mobile Development",href:"/mobile-dev",emoji:"📱",subNav:[{label:"React Native",href:"/react-native",iconLeft:"fab fa-react"},{label:"Flutter",href:"/flutter",iconLeft:"fas fa-mobile-alt"},{label:"Ionic",href:"/ionic",iconLeft:"fas fa-bolt"}]},{label:"Desktop Applications",href:"/desktop",emoji:"🖥️",subNav:[{label:"Electron Apps",href:"/electron",iconLeft:"fas fa-desktop"},{label:"Tauri Apps",href:"/tauri",iconLeft:"fas fa-window-maximize"}]}]},{label:"Services",href:"/services",iconLeft:"fas fa-concierge-bell",subNav:[{label:"Development Services",href:"/dev-services",iconLeft:"fas fa-code",subNav:[{label:"Custom Software",href:"/custom-software",emoji:"⚙️"},{label:"API Development",href:"/api-dev",emoji:"🔌"},{label:"Database Design",href:"/database",emoji:"🗄️"}]},{label:"Consulting",href:"/consulting",iconLeft:"fas fa-lightbulb",subNav:[{label:"Architecture Review",href:"/architecture",emoji:"🏗️"},{label:"Performance Optimization",href:"/performance",emoji:"⚡"},{label:"Security Audit",href:"/security",emoji:"🔒"}]},{label:"Support & Maintenance",href:"/support",iconLeft:"fas fa-life-ring",subNav:[{label:"24/7 Support",href:"/support-24-7",emoji:"🕐"},{label:"Bug Fixes",href:"/bug-fixes",emoji:"🐛"},{label:"Feature Updates",href:"/feature-updates",emoji:"🚀"},{label:"Training & Documentation",href:"/training",iconLeft:"fas fa-graduation-cap",subNav:[{label:"Code Reviews",href:"/code-reviews",emoji:"👨‍💻"},{label:"Best Practices",href:"/best-practices",emoji:"📚"},{label:"Team Training",href:"/team-training",emoji:"👥"}]}]}]},{label:"Portfolio",href:"/portfolio",iconLeft:"fas fa-briefcase",subNav:[{label:"Recent Projects",href:"/recent-projects",emoji:"🆕",subNav:[{label:"E-commerce Platform",href:"/ecommerce",emoji:"🛒"},{label:"Healthcare App",href:"/healthcare",emoji:"🏥"},{label:"Finance Dashboard",href:"/finance",emoji:"💹"}]},{label:"Case Studies",href:"/case-studies",emoji:"📊"},{label:"Client Testimonials",href:"/testimonials",emoji:"💬"}]},{label:"Resources",href:"/resources",iconLeft:"fas fa-book",subNav:[{label:"Documentation",href:"/docs",iconLeft:"fas fa-file-alt",subNav:[{label:"Getting Started",href:"/getting-started",emoji:"🚀"},{label:"API Reference",href:"/api-reference",emoji:"📖"},{label:"Examples",href:"/examples",emoji:"💡"},{label:"FAQ",href:"/faq",emoji:"❓"}]},{label:"Tools & Utilities",href:"/tools",iconLeft:"fas fa-tools",subNav:[{label:"Code Generators",href:"/generators",emoji:"⚡"},{label:"Testing Tools",href:"/testing",emoji:"🧪"},{label:"Deployment Scripts",href:"/deployment",emoji:"🚀"}]},{label:"Blog",href:"/blog",iconLeft:"fas fa-rss"},{label:"Newsletter",href:"/newsletter",iconLeft:"fas fa-envelope"}]},{label:"Advanced Demos",href:"/advanced",iconLeft:"fas fa-flask",subNav:[{label:"Deep Nesting",href:"/deep-nesting",iconLeft:"fas fa-sitemap",subNav:[{label:"Level 2 Menu",href:"/level-2",iconLeft:"fas fa-layer-group",subNav:[{label:"Level 3 Menu",href:"/level-3",iconLeft:"fas fa-code-branch",subNav:[{label:"Level 4 Menu",href:"/level-4",iconLeft:"fas fa-project-diagram",subNav:[{label:"Level 5 Item A",href:"/level-5-a",emoji:"🔹"},{label:"Level 5 Item B",href:"/level-5-b",emoji:"🔸"}]},{label:"Another Level 4 Item",href:"/another-level-4",emoji:"🔄"}]},{label:"Another Level 3 Item",href:"/another-level-3",emoji:"📊"}]},{label:"Another Level 2 Item",href:"/another-level-2",emoji:"📝"}]},{label:"Mixed Content",href:"/mixed-content",emoji:"🔀",subNav:[{label:"With Image",href:"/with-image",svgLogoIcon:{src:"/assets/logoT.svg",alt:"Small Logo",width:20,height:20,caption:"Logo Item"},subNav:[{label:"Sub Image Item 1",href:"/sub-image-1",emoji:"🖼️"},{label:"Sub Image Item 2",href:"/sub-image-2",emoji:"📷"}]},{label:"With Icon",href:"/with-icon",iconLeft:"fas fa-star",subNav:[{label:"Sub Icon Item 1",href:"/sub-icon-1",iconLeft:"fas fa-award"},{label:"Sub Icon Item 2",href:"/sub-icon-2",iconLeft:"fas fa-trophy"}]}]}]}],s=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}],h=[{label:"Home",href:"#home",iconLeft:"fas fa-home"},{label:"Profile",href:"#profile",iconLeft:"fas fa-user"},{label:"Settings",href:"#settings",iconRight:"fas fa-cog"},{label:"Logout",href:"#logout",iconRight:"fas fa-sign-out-alt"}],l=[{label:"Home",href:"#home",emoji:"🏠"},{label:"About",href:"#about",emoji:"📖"},{label:"Services",href:"#services",emoji:"🛠️"},{label:"Contact",href:"#contact",emoji:"📞"}],o=[{label:"Home",href:"#home",iconLeft:"fas fa-home"},{label:"Products",href:"#products",iconLeft:"fas fa-box",subNav:[{label:"Web Development",href:"#web-dev"},{label:"Mobile Apps",href:"#mobile-apps"},{label:"Desktop Software",href:"#desktop-software"}]},{label:"Services",href:"#services",iconLeft:"fas fa-concierge-bell",subNav:[{label:"Consulting",href:"#consulting"},{label:"Support",href:"#support",subNav:[{label:"24/7 Support",href:"#support-24-7"},{label:"Documentation",href:"#documentation"},{label:"Community",href:"#community"}]},{label:"Training",href:"#training"}]},{label:"About",href:"#about",iconLeft:"fas fa-info-circle"},{label:"Contact",href:"#contact",iconLeft:"fas fa-envelope"}],i=[{label:"Brand",href:"#brand",svgLogoIcon:{src:"./assets/logoT.svg",alt:"Brand Logo",width:40,height:40,caption:"Brand"}},{label:"Products",href:"#products",iconLeft:"fas fa-cube"},{label:"Solutions",href:"#solutions",iconLeft:"fas fa-lightbulb"}];return e.jsxs("div",{className:"demo-container",children:[e.jsx("h1",{style:{textAlign:"center",color:"#2c3e50",marginBottom:"40px"},children:"🚀 ASafariM NavLinks Demo"}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📋 Package Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🎯 Basic Navigation"}),e.jsx("div",{className:"feature-description",children:"Simple navigation links with labels and href attributes"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🎨 Icon Support"}),e.jsx("div",{className:"feature-description",children:"Font Awesome icons on left or right side of labels"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"😊 Emoji Support"}),e.jsx("div",{className:"feature-description",children:"Use emojis as visual indicators for navigation items"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"📁 Dropdown Menus"}),e.jsx("div",{className:"feature-description",children:"Multi-level nested navigation with dropdown support"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🖼️ SVG/Logo Support"}),e.jsx("div",{className:"feature-description",children:"Custom SVG icons or logos with captions"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"⚙️ Customizable Styling"}),e.jsx("div",{className:"feature-description",children:"Custom CSS classes and inline styles support"})]})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🎯 Basic Navigation"}),e.jsx("p",{className:"demo-description",children:"Simple navigation links with clean styling:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:s,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{className:"code-block",children:`const basicNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

<NavLinks 
  links={basicNavLinks}
  baseLinkStyle={{ 
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
  }}
/>`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🎨 Navigation with Icons"}),e.jsx("p",{className:"demo-description",children:"Navigation links with Font Awesome icons on left and right sides:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:h,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{className:"code-block",children:`const iconsNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', iconLeft: 'fas fa-home' },
  { label: 'Profile', href: '#profile', iconLeft: 'fas fa-user' },
  { label: 'Settings', href: '#settings', iconRight: 'fas fa-cog' },
  { label: 'Logout', href: '#logout', iconRight: 'fas fa-sign-out-alt' }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"😊 Navigation with Emojis"}),e.jsx("p",{className:"demo-description",children:"Fun navigation using emojis as visual indicators:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:l,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{className:"code-block",children:`const emojiNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', emoji: '🏠' },
  { label: 'About', href: '#about', emoji: '📖' },
  { label: 'Services', href: '#services', emoji: '🛠️' },
  { label: 'Contact', href: '#contact', emoji: '📞' }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📁 Dropdown Navigation"}),e.jsx("p",{className:"demo-description",children:"Multi-level navigation with dropdown menus and nested submenus:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:o,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0},subLinkStyle:{backgroundColor:"#34495e",padding:"10px",borderRadius:"4px",minWidth:"200px",zIndex:1e3}})}),e.jsx("div",{className:"code-block",children:`const dropdownNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', iconLeft: 'fas fa-home' },
  {
    label: 'Products',
    href: '#products',
    iconLeft: 'fas fa-box',
    subNav: [
      { label: 'Web Development', href: '#web-dev' },
      { label: 'Mobile Apps', href: '#mobile-apps' },
      { label: 'Desktop Software', href: '#desktop-software' }
    ]
  },
  {
    label: 'Services',
    href: '#services',
    iconLeft: 'fas fa-concierge-bell',
    subNav: [
      { label: 'Consulting', href: '#consulting' },
      {
        label: 'Support',
        href: '#support',
        subNav: [
          { label: '24/7 Support', href: '#support-24-7' },
          { label: 'Documentation', href: '#documentation' },
          { label: 'Community', href: '#community' }
        ]
      },
      { label: 'Training', href: '#training' }
    ]
  }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🖼️ Navigation with Logo/SVG"}),e.jsx("p",{className:"demo-description",children:"Navigation with custom SVG icons and logos:"}),e.jsx("div",{className:"nav-demo-light",children:e.jsx(d,{links:i,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0,alignItems:"center"}})}),e.jsx("div",{className:"code-block",children:`const logoNavLinks: NavLinkType[] = [
  {
    label: 'Brand',
    href: '#brand',
    svgLogoIcon: {
      src: 'https://via.placeholder.com/40x40/007bff/ffffff?text=B',
      alt: 'Brand Logo',
      width: 40,
      height: 40,
      caption: 'Brand'
    }
  },
  { label: 'Products', href: '#products', iconLeft: 'fas fa-cube' },
  { label: 'Solutions', href: '#solutions', iconLeft: 'fas fa-lightbulb' }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"⚙️ Alignment Options"}),e.jsx("p",{className:"demo-description",children:"Different alignment options for navigation:"}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Right Aligned Navigation"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:s,isRightAligned:!0,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0,justifyContent:"flex-end"}})}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Bottom Aligned Navigation"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:s,isBottomAligned:!0,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{className:"code-block",children:`// Right aligned
<NavLinks 
  links={basicNavLinks}
  isRightAligned={true}
  baseLinkStyle={{ justifyContent: 'flex-end' }}
/>

// Bottom aligned
<NavLinks 
  links={basicNavLinks}
  isBottomAligned={true}
/>`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🚀 Getting Started"}),e.jsx("p",{className:"demo-description",children:"To use the asafarim-navlinks package in your project:"}),e.jsx("div",{className:"code-block",children:`# Install the package
npm install asafarim-navlinks
# or
pnpm add asafarim-navlinks

# Import in your React component
import NavLinks, { NavLinkType } from 'asafarim-navlinks';

# Define your navigation data
const navData: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' }
];

# Use the component
<NavLinks links={navData} />`})]}),e.jsxs("div",{className:"demo-section",style:{backgroundColor:"#f8f9fa",border:"2px solid #28a745",borderRadius:"8px"},children:[e.jsx("h2",{className:"demo-title",style:{color:"#28a745"},children:"🌟 Comprehensive Navigation with Your Assets"}),e.jsx("p",{className:"demo-description",children:e.jsx("strong",{children:"Real-world example using your logoT.svg with complex multi-level dropdown menus:"})}),e.jsx("div",{className:"nav-demo",style:{backgroundColor:"#2c3e50",padding:"15px",borderRadius:"8px"},children:e.jsx(d,{links:c,baseLinkStyle:{listStyle:"none",display:"flex",gap:"25px",margin:0,padding:0,alignItems:"center"},subLinkStyle:{backgroundColor:"#34495e",padding:"12px",borderRadius:"6px",minWidth:"220px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #495057",overflow:"visible",position:"absolute"}})}),e.jsx("div",{className:"code-block",children:`// Using your logoT.svg with comprehensive dropdown menus
const mainNavigation: NavLinkType[] = [
  {
    label: 'ASafariM',
    href: '/',
    svgLogoIcon: {
      src: '/assets/logoT.svg',        // Your actual logo!
      alt: 'ASafariM Logo',
      width: 35,
      height: 35,
      caption: 'ASafariM',
      style: { marginRight: '8px' }
    }
  },
  {
    label: 'Products',
    href: '/products',
    iconLeft: 'fas fa-cube',
    subNav: [                          // Level 1 dropdown
      {
        label: 'Web Development',
        href: '/web-dev',
        emoji: '🌐',
        subNav: [                      // Level 2 dropdown
          { label: 'React Apps', href: '/react-apps', iconLeft: 'fab fa-react' },
          { label: 'Vue Apps', href: '/vue-apps', iconLeft: 'fab fa-vuejs' },
          {
            label: 'Full Stack',
            href: '/fullstack',
            iconLeft: 'fas fa-layer-group',
            subNav: [                  // Level 3 dropdown
              { label: 'MERN Stack', href: '/mern', emoji: '⚛️' },
              { label: 'MEAN Stack', href: '/mean', emoji: '🅰️' },
              { label: 'Django + React', href: '/django-react', emoji: '🐍' }
            ]
          }
        ]
      },
      {
        label: 'Mobile Development',
        href: '/mobile-dev',
        emoji: '📱',
        subNav: [
          { label: 'React Native', href: '/react-native', iconLeft: 'fab fa-react' },
          { label: 'Flutter', href: '/flutter', iconLeft: 'fas fa-mobile-alt' }
        ]
      }
    ]
  },
  // ... more navigation items with deep nesting
];

<NavLinks 
  links={mainNavigation}
  baseLinkStyle={{ 
    display: 'flex',
    gap: '25px',
    alignItems: 'center'
  }}
  subLinkStyle={{
    backgroundColor: '#34495e',
    padding: '12px',
    borderRadius: '6px',
    minWidth: '220px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }}
/>`}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#d4edda",border:"1px solid #c3e6cb",borderRadius:"6px",color:"#155724"},children:[e.jsx("strong",{children:"🎯 Features Demonstrated:"}),e.jsxs("ul",{style:{marginBottom:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:["✅ Your actual ",e.jsx("code",{children:"logoT.svg"})," integrated as navigation brand"]}),e.jsx("li",{children:"✅ 3+ levels of dropdown menus (unlimited nesting)"}),e.jsx("li",{children:"✅ Mixed content: icons, emojis, and text labels"}),e.jsx("li",{children:"✅ Professional styling with shadows and borders"}),e.jsx("li",{children:"✅ Real-world navigation structure for a development agency"})]})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📚 Professional Documentation Navigation"}),e.jsx("p",{className:"demo-description",children:"Example of a multi-level menu for a documentation site:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(d,{links:[{label:"Documentation",href:"/docs",iconLeft:"fas fa-book",subNav:[{label:"Getting Started",href:"/docs/getting-started",iconLeft:"fas fa-rocket",subNav:[{label:"Installation",href:"/docs/installation",iconLeft:"fas fa-download"},{label:"Quick Start",href:"/docs/quick-start",iconLeft:"fas fa-bolt"},{label:"Configuration",href:"/docs/configuration",iconLeft:"fas fa-cog",subNav:[{label:"Basic Setup",href:"/docs/config/basic",iconLeft:"fas fa-wrench"},{label:"Advanced Options",href:"/docs/config/advanced",iconLeft:"fas fa-sliders-h"},{label:"Theming",href:"/docs/config/theming",iconLeft:"fas fa-paint-brush",subNav:[{label:"Light Theme",href:"/docs/themes/light",emoji:"☀️"},{label:"Dark Theme",href:"/docs/themes/dark",emoji:"🌙"},{label:"Custom Themes",href:"/docs/themes/custom",emoji:"🎨"}]}]}]},{label:"Components",href:"/docs/components",iconLeft:"fas fa-puzzle-piece",subNav:[{label:"Navigation",href:"/docs/components/navigation",iconLeft:"fas fa-compass",subNav:[{label:"NavLinks",href:"/docs/components/navlinks",iconLeft:"fas fa-link"},{label:"Dropdowns",href:"/docs/components/dropdowns",iconLeft:"fas fa-caret-down"},{label:"Breadcrumbs",href:"/docs/components/breadcrumbs",iconLeft:"fas fa-route"}]},{label:"Layout",href:"/docs/components/layout",iconLeft:"fas fa-columns"},{label:"Forms",href:"/docs/components/forms",iconLeft:"fas fa-edit"}]},{label:"API Reference",href:"/docs/api",iconLeft:"fas fa-code",subNav:[{label:"NavLinkType",href:"/docs/api/navlinktype",iconLeft:"fas fa-file-code"},{label:"SvgLinkType",href:"/docs/api/svglinktype",iconLeft:"fas fa-file-image"},{label:"Props",href:"/docs/api/props",iconLeft:"fas fa-list-ul"}]}]}],baseLinkStyle:{listStyle:"none",display:"flex",gap:"25px",margin:0,padding:0,alignItems:"center"},subLinkStyle:{backgroundColor:"#34495e",padding:"12px",borderRadius:"6px",minWidth:"220px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #495057"}})}),e.jsx("div",{className:"code-block",children:`// Professional multi-level menu example for documentation site
const documentationNav: NavLinkType[] = [
  {
    label: 'Documentation',
    href: '/docs',
    iconLeft: 'fas fa-book',
    subNav: [
      {
        label: 'Getting Started',
        href: '/docs/getting-started',
        iconLeft: 'fas fa-rocket',
        subNav: [
          { label: 'Installation', href: '/docs/installation', iconLeft: 'fas fa-download' },
          { label: 'Quick Start', href: '/docs/quick-start', iconLeft: 'fas fa-bolt' },
          { 
            label: 'Configuration', 
            href: '/docs/configuration', 
            iconLeft: 'fas fa-cog',
            subNav: [
              { label: 'Basic Setup', href: '/docs/config/basic', iconLeft: 'fas fa-wrench' },
              { label: 'Advanced Options', href: '/docs/config/advanced', iconLeft: 'fas fa-sliders-h' },
              { 
                label: 'Theming', 
                href: '/docs/config/theming', 
                iconLeft: 'fas fa-paint-brush',
                subNav: [
                  { label: 'Light Theme', href: '/docs/themes/light', emoji: '☀️' },
                  { label: 'Dark Theme', href: '/docs/themes/dark', emoji: '🌙' },
                  { label: 'Custom Themes', href: '/docs/themes/custom', emoji: '🎨' }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Components',
        href: '/docs/components',
        iconLeft: 'fas fa-puzzle-piece',
        subNav: [
          { 
            label: 'Navigation', 
            href: '/docs/components/navigation', 
            iconLeft: 'fas fa-compass',
            subNav: [
              { label: 'NavLinks', href: '/docs/components/navlinks', iconLeft: 'fas fa-link' },
              { label: 'Dropdowns', href: '/docs/components/dropdowns', iconLeft: 'fas fa-caret-down' },
              { label: 'Breadcrumbs', href: '/docs/components/breadcrumbs', iconLeft: 'fas fa-route' }
            ]
          },
          { label: 'Layout', href: '/docs/components/layout', iconLeft: 'fas fa-columns' },
          { label: 'Forms', href: '/docs/components/forms', iconLeft: 'fas fa-edit' }
        ]
      },
      {
        label: 'API Reference',
        href: '/docs/api',
        iconLeft: 'fas fa-code',
        subNav: [
          { label: 'NavLinkType', href: '/docs/api/navlinktype', iconLeft: 'fas fa-file-code' },
          { label: 'SvgLinkType', href: '/docs/api/svglinktype', iconLeft: 'fas fa-file-image' },
          { label: 'Props', href: '/docs/api/props', iconLeft: 'fas fa-list-ul' }
        ]
      }
    ]
  }
];

<NavLinks 
  links={documentationNav}
  baseLinkStyle={{ 
    display: 'flex',
    gap: '25px',
    alignItems: 'center'
  }}
  subLinkStyle={{
    backgroundColor: '#34495e',
    padding: '12px',
    borderRadius: '6px',
    minWidth: '220px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }}
/>`})]}),e.jsxs("footer",{style:{textAlign:"center",padding:"40px 0",color:"#7f8c8d",borderTop:"1px solid #ecf0f1",marginTop:"40px"},children:[e.jsxs("p",{children:["📦 ",e.jsx("strong",{children:"asafarim-navlinks"})," v2.2.0 - Built with ❤️ by Ali Safari"]}),e.jsx("p",{children:e.jsx("a",{href:"https://github.com/AliSafari-IT/asafarim-navlinks",target:"_blank",rel:"noopener noreferrer",style:{color:"#3498db",textDecoration:"none"},children:"📚 View on GitHub"})})]})]})};p.createRoot(document.getElementById("root")).render(e.jsx(k.StrictMode,{children:e.jsx(F,{})}));
//# sourceMappingURL=index-BZEd2wul.js.map
