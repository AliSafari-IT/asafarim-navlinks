import{r as b,a as M,R as B}from"./react-nf7bT_Uh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function d(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=d(o);fetch(o.href,i)}})();var k={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=b,E=Symbol.for("react.element"),W=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,$=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function A(n,s,d){var l,o={},i=null,p=null;d!==void 0&&(i=""+d),s.key!==void 0&&(i=""+s.key),s.ref!==void 0&&(p=s.ref);for(l in s)z.call(s,l)&&!O.hasOwnProperty(l)&&(o[l]=s[l]);if(n&&n.defaultProps)for(l in s=n.defaultProps,s)o[l]===void 0&&(o[l]=s[l]);return{$$typeof:E,type:n,key:i,ref:p,props:o,_owner:$.current}}x.Fragment=W;x.jsx=A;x.jsxs=A;k.exports=x;var e=k.exports,N={},S=M;N.createRoot=S.createRoot,N.hydrateRoot=S.hydrateRoot;const F="_baseLinks_7ndzd_3",H="_hasChildren_7ndzd_29",G="_dropdownIndicator_7ndzd_37",U="_dropdown_7ndzd_37",V="_rightAligned_7ndzd_267",q="_leftAligned_7ndzd_293",Y="_bottomAligned_7ndzd_319",Q="_topAligned_7ndzd_341",J="_mobileMenuButton_7ndzd_727",K="_hamburger_7ndzd_759",t={baseLinks:F,hasChildren:H,dropdownIndicator:G,dropdown:U,rightAligned:V,leftAligned:q,bottomAligned:Y,topAligned:Q,mobileMenuButton:J,hamburger:K},r=({links:n,className:s,baseLinkStyle:d,subLinkStyle:l,isRightAligned:o=!1,isBottomAligned:i=!1,isLeftAligned:p=!1,isTopAligned:L=!1,isMobile:j=!1,enableMobileCollapse:C=!1})=>{const[m,T]=b.useState(j),[g,D]=b.useState(!1);b.useEffect(()=>{const a=()=>{const c=window.innerWidth<=768;T(c)};if(!j)return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[j]);const v=C||m,I=()=>{v&&m&&D(!g)},y=(a,c=1)=>a?e.jsx("ul",{className:`${s} ${t.dropdown} depth-${c}`,style:{...l,zIndex:1e3+c},"data-depth":c,children:a.map((f,R)=>{const u=!!f.subNav&&f.subNav.length>0;return e.jsxs("li",{className:`${u?t.hasChildren:""} ${o?t.rightAligned:i?t.bottomAligned:p?t.leftAligned:L?t.topAligned:""} dropdown-item-${c}`,"data-has-children":u?"true":"false",children:[e.jsxs("a",{href:f.href,onClick:_=>{u&&f.href==="#"&&_.preventDefault()},title:f.label||f.title,className:u?"has-submenu":"","data-depth":c,children:[w(f),u&&e.jsx("span",{className:t.dropdownIndicator,style:{color:"white",fontWeight:"bold"},children:c===1?" ▼":" ▶"})]}),u&&y(f.subNav,c+1)]},`sublevel-${c}-${R}`)})}):null,w=a=>a?a.svgLogoIcon?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a.svgLogoIcon.src,alt:a.svgLogoIcon.alt,width:a.svgLogoIcon.width??40,height:a.svgLogoIcon.height??"auto",style:a.svgLogoIcon.style??{width:"20px",height:"20px"}}),a.svgLogoIcon.caption&&e.jsx("span",{children:a.svgLogoIcon.caption})]}):a.emoji?e.jsxs("span",{className:t.emoji,children:[a.emoji," ",a.label]}):a.iconLeft?e.jsxs("span",{children:[e.jsx("i",{className:a.iconLeft})," ",a.label]}):a.iconRight?e.jsxs("span",{children:[a.label," ",e.jsx("i",{className:a.iconRight})]}):a.label:null;return e.jsxs("div",{className:`${m?"mobile-nav-container":""} ${v&&m?g?"menu-open":"menu-closed":""}`,children:[v&&m&&e.jsx("button",{className:`${t.mobileMenuButton} mobile-menu-toggle`,onClick:I,"aria-label":"Toggle navigation menu","data-menu-open":g,children:e.jsxs("span",{className:t.hamburger,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}),e.jsx("ul",{className:`${t.baseLinks} ${s||""} ${m?"mobile-nav":""}`,style:{...d,...m&&v&&!g?{display:"none"}:{}},children:n.map((a,c)=>e.jsxs("li",{className:`${a.subNav?t.hasChildren:""} ${o?t.rightAligned:i?t.bottomAligned:p?t.leftAligned:L?t.topAligned:""}`,children:[e.jsxs("a",{href:a.href,onClick:f=>{a.subNav&&a.href==="#"&&f.preventDefault()},title:a.label||a.title,children:[w(a),a.subNav&&e.jsx("span",{className:t.dropdownIndicator,children:" ▼"})]}),a.subNav&&y(a.subNav,1)]},`level-0-${c}`))})]})},h=({code:n,language:s="tsx"})=>{const[d,l]=b.useState(!1),o=b.useRef(null);b.useEffect(()=>{o.current&&window.hljs&&window.hljs.highlightElement(o.current)},[n]);const i=()=>{navigator.clipboard.writeText(n),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs("div",{className:"code-highlight-container",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"language-badge",children:s}),e.jsxs("button",{className:"copy-button",onClick:i,"aria-label":"Copy code to clipboard",children:[e.jsx("i",{className:`fas ${d?"fa-check":"fa-copy"}`})," ",d?"Copied!":"Copy"]})]}),e.jsx("pre",{children:e.jsx("code",{ref:o,className:`language-${s}`,children:n})})]})},X=()=>{const n=[{label:"ASafariM",href:"/",svgLogoIcon:{src:"./assets/logoT.svg",alt:"ASafariM Logo",width:35,height:35,caption:"ASafariM",style:{marginRight:"8px"}}},{label:"Products",href:"/products",iconLeft:"fas fa-cube",subNav:[{label:"Web Development",href:"/web-dev",emoji:"🌐",subNav:[{label:"React Apps",href:"/react-apps",iconLeft:"fab fa-react"},{label:"Vue Apps",href:"/vue-apps",iconLeft:"fab fa-vuejs"},{label:"Angular Apps",href:"/angular-apps",iconLeft:"fab fa-angular"},{label:"Full Stack",href:"/fullstack",iconLeft:"fas fa-layer-group",subNav:[{label:"MERN Stack",href:"/mern",emoji:"⚛️"},{label:"MEAN Stack",href:"/mean",emoji:"🅰️"},{label:"Django + React",href:"/django-react",emoji:"🐍"}]}]},{label:"Mobile Development",href:"/mobile-dev",emoji:"📱",subNav:[{label:"React Native",href:"/react-native",iconLeft:"fab fa-react"},{label:"Flutter",href:"/flutter",iconLeft:"fas fa-mobile-alt"},{label:"Ionic",href:"/ionic",iconLeft:"fas fa-bolt"}]},{label:"Desktop Applications",href:"/desktop",emoji:"🖥️",subNav:[{label:"Electron Apps",href:"/electron",iconLeft:"fas fa-desktop"},{label:"Tauri Apps",href:"/tauri",iconLeft:"fas fa-window-maximize"}]}]},{label:"Services",href:"/services",iconLeft:"fas fa-concierge-bell",subNav:[{label:"Development Services",href:"/dev-services",iconLeft:"fas fa-code",subNav:[{label:"Custom Software",href:"/custom-software",emoji:"⚙️"},{label:"API Development",href:"/api-dev",emoji:"🔌"},{label:"Database Design",href:"/database",emoji:"🗄️"}]},{label:"Consulting",href:"/consulting",iconLeft:"fas fa-lightbulb",subNav:[{label:"Architecture Review",href:"/architecture",emoji:"🏗️"},{label:"Performance Optimization",href:"/performance",emoji:"⚡"},{label:"Security Audit",href:"/security",emoji:"🔒"}]},{label:"Support & Maintenance",href:"/support",iconLeft:"fas fa-life-ring",subNav:[{label:"24/7 Support",href:"/support-24-7",emoji:"🕐"},{label:"Bug Fixes",href:"/bug-fixes",emoji:"🐛"},{label:"Feature Updates",href:"/feature-updates",emoji:"🚀"},{label:"Training & Documentation",href:"/training",iconLeft:"fas fa-graduation-cap",subNav:[{label:"Code Reviews",href:"/code-reviews",emoji:"👨‍💻"},{label:"Best Practices",href:"/best-practices",emoji:"📚"},{label:"Team Training",href:"/team-training",emoji:"👥"}]}]}]},{label:"Portfolio",href:"/portfolio",iconLeft:"fas fa-briefcase",subNav:[{label:"Recent Projects",href:"/recent-projects",emoji:"🆕",subNav:[{label:"E-commerce Platform",href:"/ecommerce",emoji:"🛒"},{label:"Healthcare App",href:"/healthcare",emoji:"🏥"},{label:"Finance Dashboard",href:"/finance",emoji:"💹"}]},{label:"Case Studies",href:"/case-studies",emoji:"📊"},{label:"Client Testimonials",href:"/testimonials",emoji:"💬"}]},{label:"Resources",href:"/resources",iconLeft:"fas fa-book",subNav:[{label:"Documentation",href:"/docs",iconLeft:"fas fa-file-alt",subNav:[{label:"Getting Started",href:"/getting-started",emoji:"🚀"},{label:"API Reference",href:"/api-reference",emoji:"📖"},{label:"Examples",href:"/examples",emoji:"💡"},{label:"FAQ",href:"/faq",emoji:"❓"}]},{label:"Tools & Utilities",href:"/tools",iconLeft:"fas fa-tools",subNav:[{label:"Code Generators",href:"/generators",emoji:"⚡"},{label:"Testing Tools",href:"/testing",emoji:"🧪"},{label:"Deployment Scripts",href:"/deployment",emoji:"🚀"}]},{label:"Blog",href:"/blog",iconLeft:"fas fa-rss"},{label:"Newsletter",href:"/newsletter",iconLeft:"fas fa-envelope"}]},{label:"Advanced Demos",href:"/advanced",iconLeft:"fas fa-flask",subNav:[{label:"Deep Nesting",href:"/deep-nesting",iconLeft:"fas fa-sitemap",subNav:[{label:"Level 2 Menu",href:"/level-2",iconLeft:"fas fa-layer-group",subNav:[{label:"Level 3 Menu",href:"/level-3",iconLeft:"fas fa-code-branch",subNav:[{label:"Level 4 Menu",href:"/level-4",iconLeft:"fas fa-project-diagram",subNav:[{label:"Level 5 Item A",href:"/level-5-a",emoji:"🔹"},{label:"Level 5 Item B",href:"/level-5-b",emoji:"🔸"}]},{label:"Another Level 4 Item",href:"/another-level-4",emoji:"🔄"}]},{label:"Another Level 3 Item",href:"/another-level-3",emoji:"📊"}]},{label:"Another Level 2 Item",href:"/another-level-2",emoji:"📝"}]},{label:"Mixed Content",href:"/mixed-content",emoji:"🔀",subNav:[{label:"With Image",href:"/with-image",svgLogoIcon:{src:"/assets/logoT.svg",alt:"Small Logo",width:20,height:20,caption:"Logo Item"},subNav:[{label:"Sub Image Item 1",href:"/sub-image-1",emoji:"🖼️"},{label:"Sub Image Item 2",href:"/sub-image-2",emoji:"📷"}]},{label:"With Icon",href:"/with-icon",iconLeft:"fas fa-star",subNav:[{label:"Sub Icon Item 1",href:"/sub-icon-1",iconLeft:"fas fa-award"},{label:"Sub Icon Item 2",href:"/sub-icon-2",iconLeft:"fas fa-trophy"}]}]}]}],s=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}],d=[{label:"Home",href:"#home",iconLeft:"fas fa-home"},{label:"Profile",href:"#profile",iconLeft:"fas fa-user"},{label:"Settings",href:"#settings",iconRight:"fas fa-cog"},{label:"Logout",href:"#logout",iconRight:"fas fa-sign-out-alt"}],l=[{label:"Home",href:"#home",emoji:"🏠"},{label:"About",href:"#about",emoji:"📖"},{label:"Services",href:"#services",emoji:"🛠️"},{label:"Contact",href:"#contact",emoji:"📞"}],o=[{label:"Home",href:"#home",iconLeft:"fas fa-home"},{label:"Products",href:"#products",iconLeft:"fas fa-box",subNav:[{label:"Web Development",href:"#web-dev"},{label:"Mobile Apps",href:"#mobile-apps"},{label:"Desktop Software",href:"#desktop-software"}]},{label:"Services",href:"#services",iconLeft:"fas fa-concierge-bell",subNav:[{label:"Consulting",href:"#consulting"},{label:"Support",href:"#support",subNav:[{label:"24/7 Support",href:"#support-24-7"},{label:"Documentation",href:"#documentation"},{label:"Community",href:"#community"}]},{label:"Training",href:"#training"}]},{label:"About",href:"#about",iconLeft:"fas fa-info-circle"},{label:"Contact",href:"#contact",iconLeft:"fas fa-envelope"}],i=[{label:"Brand",href:"#brand",svgLogoIcon:{src:"./assets/logoT.svg",alt:"Brand Logo",width:40,height:40,caption:"Brand"}},{label:"Products",href:"#products",iconLeft:"fas fa-cube"},{label:"Solutions",href:"#solutions",iconLeft:"fas fa-lightbulb"}];return e.jsxs("div",{className:"demo-container",children:[e.jsx("h1",{style:{textAlign:"center",color:"#2c3e50",marginBottom:"40px"},children:"🚀 ASafariM NavLinks Demo"}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📋 Package Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🎯 Basic Navigation"}),e.jsx("div",{className:"feature-description",children:"Simple navigation links with labels and href attributes"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🎨 Icon Support"}),e.jsx("div",{className:"feature-description",children:"Font Awesome icons on left or right side of labels"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"😊 Emoji Support"}),e.jsx("div",{className:"feature-description",children:"Use emojis as visual indicators for navigation items"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"📁 Dropdown Menus"}),e.jsx("div",{className:"feature-description",children:"Multi-level nested navigation with dropdown support"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"🖼️ SVG/Logo Support"}),e.jsx("div",{className:"feature-description",children:"Custom SVG icons or logos with captions"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-title",children:"⚙️ Customizable Styling"}),e.jsx("div",{className:"feature-description",children:"Custom CSS classes and inline styles support"})]})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🎯 Basic Navigation"}),e.jsx("p",{className:"demo-description",children:"Simple navigation links with clean styling:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:s,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx(h,{code:`const basicNavLinks: NavLinkType[] = [
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
/>`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🎨 Navigation with Icons"}),e.jsx("p",{className:"demo-description",children:"Navigation links with Font Awesome icons on left and right sides:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:d,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx(h,{code:`const iconsNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', iconLeft: 'fas fa-home' },
  { label: 'Profile', href: '#profile', iconLeft: 'fas fa-user' },
  { label: 'Settings', href: '#settings', iconRight: 'fas fa-cog' },
  { label: 'Logout', href: '#logout', iconRight: 'fas fa-sign-out-alt' }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"😊 Navigation with Emojis"}),e.jsx("p",{className:"demo-description",children:"Fun navigation using emojis as visual indicators:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:l,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx(h,{code:`const emojiNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', emoji: '🏠' },
  { label: 'About', href: '#about', emoji: '📖' },
  { label: 'Services', href: '#services', emoji: '🛠️' },
  { label: 'Contact', href: '#contact', emoji: '📞' }
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📁 Dropdown Navigation"}),e.jsx("p",{className:"demo-description",children:"Multi-level navigation with dropdown menus and nested submenus:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:o,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0},subLinkStyle:{backgroundColor:"#34495e",padding:"10px",borderRadius:"4px",minWidth:"200px",zIndex:1e3}})}),e.jsx(h,{code:`const dropdownNavLinks: NavLinkType[] = [
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
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🖼️ Navigation with Logo/SVG"}),e.jsx("p",{className:"demo-description",children:"Navigation with custom SVG icons and logos:"}),e.jsx("div",{className:"nav-demo-light",children:e.jsx(r,{links:i,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0,alignItems:"center"}})}),e.jsx(h,{code:`const logoNavLinks: NavLinkType[] = [
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
];`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"⚙️ Alignment Options"}),e.jsx("p",{className:"demo-description",children:"ASafariM NavLinks supports different alignment options for dropdowns. These examples demonstrate how the dropdown menus can be positioned relative to their parent items:"}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Left Aligned Navigation (Default)"}),e.jsx("p",{className:"demo-description",children:"Dropdown menus aligned to the left of their parent item (default behavior):"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services",subNav:[{label:"Web Design",href:"#web-design"},{label:"App Development",href:"#app-dev"}]},{label:"Contact",href:"#contact"}],baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0},isLeftAligned:!0})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:'Hover over "Services" to see dropdown aligned to the left'})}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Right Aligned Navigation"}),e.jsx("p",{className:"demo-description",children:"Dropdown menus aligned to the right of their parent item:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services",subNav:[{label:"Web Design",href:"#web-design"},{label:"App Development",href:"#app-dev"}]},{label:"Contact",href:"#contact"}],isRightAligned:!0,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0,justifyContent:"flex-end"}})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:'Hover over "Services" to see dropdown aligned to the right'})}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Top Aligned Navigation"}),e.jsx("p",{className:"demo-description",children:"Dropdown menus appear above their parent item:"}),e.jsx("div",{className:"nav-demo",style:{marginTop:"100px"},children:e.jsx(r,{isTopAligned:!0,links:[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services",subNav:[{label:"Web Design",href:"#web-design"},{label:"App Development",href:"#app-dev"}]},{label:"Contact",href:"#contact"}],baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:'Hover over "Services" to see dropdown appear above'})}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Bottom Aligned Navigation (Default)"}),e.jsx("p",{className:"demo-description",children:"Dropdown menus appear below their parent item (default behavior):"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services",subNav:[{label:"Web Design",href:"#web-design"},{label:"App Development",href:"#app-dev"}]},{label:"Contact",href:"#contact"}],isBottomAligned:!0,baseLinkStyle:{listStyle:"none",display:"flex",gap:"20px",margin:0,padding:0}})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:'Hover over "Services" to see dropdown appear below'})}),e.jsx(h,{code:`// Left aligned (dropdowns open to the left - default)
<NavLinks 
  links={navLinksWithDropdowns}
  isLeftAligned={true}
/>

// Right aligned (dropdowns open to the right)
<NavLinks 
  links={navLinksWithDropdowns}
  isRightAligned={true}
  baseLinkStyle={{ justifyContent: 'flex-end' }}
/>

// Top aligned (dropdowns appear above parent items)
<NavLinks 
  links={navLinksWithDropdowns}
  isTopAligned={true}
/>

// Bottom aligned (dropdowns appear below parent items - default)
<NavLinks 
  links={navLinksWithDropdowns}
  isBottomAligned={true}
/>`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"🚀 Getting Started"}),e.jsx("p",{className:"demo-description",children:"To use the asafarim-navlinks package in your project:"}),e.jsx(h,{code:`# Install the package
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
<NavLinks links={navData} />`})]}),e.jsxs("div",{className:"demo-section",style:{backgroundColor:"#f8f9fa",border:"2px solid #28a745",borderRadius:"8px"},children:[e.jsx("h2",{className:"demo-title",style:{color:"#28a745"},children:"🌟 Comprehensive Navigation with Your Assets"}),e.jsx("p",{className:"demo-description",children:e.jsx("strong",{children:"Real-world example using your logoT.svg with complex multi-level dropdown menus:"})}),e.jsx("div",{className:"nav-demo",style:{backgroundColor:"#2c3e50",padding:"15px",borderRadius:"8px"},children:e.jsx(r,{links:n,baseLinkStyle:{listStyle:"none",display:"flex",gap:"25px",margin:0,padding:0,alignItems:"center"},subLinkStyle:{backgroundColor:"#34495e",padding:"12px",borderRadius:"6px",minWidth:"220px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #495057",overflow:"visible",position:"absolute"}})}),e.jsx(h,{code:`// Using your logoT.svg with comprehensive dropdown menus
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
/>`}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#d4edda",border:"1px solid #c3e6cb",borderRadius:"6px",color:"#155724"},children:[e.jsx("strong",{children:"🎯 Features Demonstrated:"}),e.jsxs("ul",{style:{marginBottom:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:["✅ Your actual ",e.jsx("code",{children:"logoT.svg"})," integrated as navigation brand"]}),e.jsx("li",{children:"✅ 3+ levels of dropdown menus (unlimited nesting)"}),e.jsx("li",{children:"✅ Mixed content: icons, emojis, and text labels"}),e.jsx("li",{children:"✅ Professional styling with shadows and borders"}),e.jsx("li",{children:"✅ Real-world navigation structure for a development agency"})]})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📚 Professional Documentation Navigation"}),e.jsx("p",{className:"demo-description",children:"Example of a multi-level menu for a documentation site:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Documentation",href:"/docs",iconLeft:"fas fa-book",subNav:[{label:"Getting Started",href:"/docs/getting-started",iconLeft:"fas fa-rocket",subNav:[{label:"Installation",href:"/docs/installation",iconLeft:"fas fa-download"},{label:"Quick Start",href:"/docs/quick-start",iconLeft:"fas fa-bolt"},{label:"Configuration",href:"/docs/configuration",iconLeft:"fas fa-cog",subNav:[{label:"Basic Setup",href:"/docs/config/basic",iconLeft:"fas fa-wrench"},{label:"Advanced Options",href:"/docs/config/advanced",iconLeft:"fas fa-sliders-h"},{label:"Theming",href:"/docs/config/theming",iconLeft:"fas fa-paint-brush",subNav:[{label:"Light Theme",href:"/docs/themes/light",emoji:"☀️"},{label:"Dark Theme",href:"/docs/themes/dark",emoji:"🌙"},{label:"Custom Themes",href:"/docs/themes/custom",emoji:"🎨"}]}]}]},{label:"Components",href:"/docs/components",iconLeft:"fas fa-puzzle-piece",subNav:[{label:"Navigation",href:"/docs/components/navigation",iconLeft:"fas fa-compass",subNav:[{label:"NavLinks",href:"/docs/components/navlinks",iconLeft:"fas fa-link"},{label:"Dropdowns",href:"/docs/components/dropdowns",iconLeft:"fas fa-caret-down"},{label:"Breadcrumbs",href:"/docs/components/breadcrumbs",iconLeft:"fas fa-route"}]},{label:"Layout",href:"/docs/components/layout",iconLeft:"fas fa-columns"},{label:"Forms",href:"/docs/components/forms",iconLeft:"fas fa-edit"}]},{label:"API Reference",href:"/docs/api",iconLeft:"fas fa-code",subNav:[{label:"NavLinkType",href:"/docs/api/navlinktype",iconLeft:"fas fa-file-code"},{label:"SvgLinkType",href:"/docs/api/svglinktype",iconLeft:"fas fa-file-image"},{label:"Props",href:"/docs/api/props",iconLeft:"fas fa-list-ul"}]}]}],baseLinkStyle:{listStyle:"none",display:"flex",gap:"25px",margin:0,padding:0,alignItems:"center"},subLinkStyle:{backgroundColor:"#34495e",padding:"12px",borderRadius:"6px",minWidth:"220px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #495057"}})}),e.jsx(h,{code:`// Professional multi-level menu example for documentation site
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
/>`})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("h2",{className:"demo-title",children:"📱 Mobile Responsive Navigation"}),e.jsx("p",{className:"demo-description",children:"ASafariM NavLinks automatically adapts to mobile devices with responsive CSS and optional collapsible menu functionality:"}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Automatic Mobile Detection"}),e.jsx("p",{className:"demo-description",children:"The navigation automatically stacks vertically on screens smaller than 768px:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Home",href:"#home",iconLeft:"fas fa-home"},{label:"About",href:"#about",iconLeft:"fas fa-info-circle"},{label:"Services",href:"#services",iconLeft:"fas fa-cogs",subNav:[{label:"Web Design",href:"#web-design"},{label:"App Development",href:"#app-dev"}]},{label:"Contact",href:"#contact",iconLeft:"fas fa-envelope"}],baseLinkStyle:{listStyle:"none",display:"flex",gap:"10px",margin:0,padding:0,flexWrap:"wrap"}})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:"Resize your browser window to see mobile responsive behavior"})}),e.jsx("h3",{style:{color:"#34495e",marginTop:"30px",marginBottom:"15px"},children:"Collapsible Mobile Menu"}),e.jsx("p",{className:"demo-description",children:"Enable a collapsible hamburger menu for better mobile UX:"}),e.jsx("div",{className:"nav-demo",children:e.jsx(r,{links:[{label:"Dashboard",href:"#dashboard",iconLeft:"fas fa-tachometer-alt"},{label:"Products",href:"#products",iconLeft:"fas fa-box"},{label:"Account",href:"#account",iconLeft:"fas fa-user",subNav:[{label:"Profile",href:"#profile"},{label:"Settings",href:"#settings"},{label:"Logout",href:"#logout"}]}],enableMobileCollapse:!0,baseLinkStyle:{listStyle:"none",display:"flex",gap:"10px",margin:0,padding:0}})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",color:"#666"},children:e.jsx("em",{children:"On mobile devices, a hamburger menu will appear to toggle navigation"})}),e.jsx(h,{code:`// Automatic mobile responsive
<NavLinks 
  links={mobileNavLinks}
  baseLinkStyle={{ 
    display: 'flex',
    flexWrap: 'wrap' // Allows wrapping on smaller screens
  }}
/>

// With collapsible mobile menu
<NavLinks 
  links={mobileNavLinks}
  enableMobileCollapse={true}
/>

// Force mobile behavior
<NavLinks 
  links={mobileNavLinks}
  isMobile={true}
  enableMobileCollapse={true}
/>`})]}),e.jsxs("footer",{style:{textAlign:"center",padding:"40px 0",color:"#7f8c8d",borderTop:"1px solid #ecf0f1",marginTop:"40px"},children:[e.jsxs("p",{children:["📦 ",e.jsx("strong",{children:"asafarim-navlinks"})," v3.2.0 - Built with ❤️ by Ali Safari"]}),e.jsx("p",{children:e.jsx("a",{href:"https://github.com/AliSafari-IT/asafarim-navlinks",target:"_blank",rel:"noopener noreferrer",style:{color:"#3498db",textDecoration:"none"},children:"📚 View on GitHub"})})]})]})};N.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(X,{})}));
//# sourceMappingURL=index-C_lctJfs.js.map
