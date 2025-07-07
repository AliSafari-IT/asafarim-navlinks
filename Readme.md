# 🚀 ASafariM NavLinks

> **Dynamic Navigation Links with Multi-Level Dropdowns and Icons for React Apps**

[![npm version](https://badge.fury.io/js/asafarim-navlinks.svg)](https://badge.fury.io/js/asafarim-navlinks)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made for React](https://img.shields.io/badge/Made_for-React-blue?logo=react)](https://reactjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AliSafari-IT/asafarim-navlinks/pulls)

A versatile and feature-rich React component for creating dynamic navigation bars with unlimited multi-level dropdown menus, icons, emojis, and flexible styling options. Perfect for modern web applications that require sophisticated navigation structures.

## 🎯 Features

- ✅ **Unlimited Multi-level Dropdown Menus** - Create deeply nested navigation structures with unlimited submenus that open on hover
- ✅ **Four Alignment Options** - Left, right, top, and bottom positioning for flexible dropdown placement
- ✅ **Icon Support** - Font Awesome icons on left/right sides of menu items
- ✅ **Emoji Support** - Modern emoji indicators for visually engaging navigation
- ✅ **SVG/Logo Integration** - Custom logos and SVG icons for brand identity
- ✅ **TypeScript Support** - Full type definitions included for developer productivity
- ✅ **Customizable Styling** - Extensive CSS classes and inline style options for perfect UI integration
- ✅ **Mobile Responsive Design** - Automatic mobile detection with hamburger menu, animated cross icon, and touch-friendly navigation
- ✅ **Zero Dependencies** - Lightweight and efficient, no external dependencies
- ✅ **Accessible** - Built with accessibility in mind for all users

## 🚀 Live Demo

**[🎮 Interactive Online Demo](https://alisafari-it.github.io/asafarim-navlinks/)** - Experience all features in action directly in your browser!

```bash
# Run the demo locally
pnpm run demo
```

![Simple Navigation with Basic Links](./img/simple-navigation-with-basic-links.png)

### 🔍 Demo Highlights

- **Deep Nesting**: See multi-level dropdown menus in action (5+ levels deep)
- **Four Alignment Options**: Left, right, top, and bottom dropdown positioning
- **Interactive Examples**: Try different navigation styles and configurations
- **Code Samples**: Ready-to-use code snippets for each feature
- **Visual Guide**: Clear visualization of all component capabilities

![Complex Navigation Structure with Multiple Levels](./img/complex-navigation-structure-with-multiple-levels.png)

*Multi-level dropdown menus with unlimited nesting support*

![Different Alignment Options for Dropdown Positioning](./img/different-alignment-options-for-dropdown-positioning.png)

*Four different alignment options for dropdown positioning*

## 📦 Installation

```bash
# npm
npm install asafarim-navlinks

# yarn
yarn add asafarim-navlinks

# pnpm
pnpm add asafarim-navlinks
```

## 🎪 Quick Start

```tsx
import React from 'react';
import NavLinks, { NavLinkType } from 'asafarim-navlinks';

const navData: NavLinkType[] = [
  {
    label: 'Home',
    href: '/',
    iconLeft: 'fas fa-home'
  },
  {
    label: 'Products',
    href: '/products',
    iconLeft: 'fas fa-box',
    subNav: [
      { label: 'Web Apps', href: '/web-apps' },
      { label: 'Mobile Apps', href: '/mobile-apps' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    emoji: '📖'
  }
];

function App() {
  return (
    <nav>
      <NavLinks links={navData} />
    </nav>
  );
}
```

## 🎨 Examples

### Basic Navigation
```tsx
const basicLinks: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

<NavLinks links={basicLinks} />
```

### Multi-level Dropdown Menus
```tsx
const nestedLinks: NavLinkType[] = [
  { 
    label: 'Products', 
    href: '/products',
    subNav: [
      { label: 'Software', href: '/software' },
      { 
        label: 'Services', 
        href: '/services',
        subNav: [
          { 
            label: 'Consulting', 
            href: '/consulting',
            subNav: [
              { label: 'Technical', href: '/technical' },
              { label: 'Business', href: '/business' }
            ]
          },
          { label: 'Training', href: '/training' }
        ]
      }
    ]
  }
];

<NavLinks links={nestedLinks} />
```

### With Icons
```tsx
const iconLinks: NavLinkType[] = [
  { label: 'Dashboard', href: '/dashboard', iconLeft: 'fas fa-tachometer-alt' },
  { label: 'Settings', href: '/settings', iconRight: 'fas fa-cog' },
  { label: 'Profile', href: '/profile', iconLeft: 'fas fa-user' }
];

<NavLinks links={iconLinks} />
```

### With Emojis
```tsx
const emojiLinks: NavLinkType[] = [
  { label: 'Home', href: '/', emoji: '🏠' },
  { label: 'Products', href: '/products', emoji: '📦' },
  { label: 'Support', href: '/support', emoji: '🎧' }
];

<NavLinks links={emojiLinks} />
```

### Multi-level Dropdowns
```tsx
const dropdownLinks: NavLinkType[] = [
  {
    label: 'Services',
    href: '/services',
    iconLeft: 'fas fa-concierge-bell',
    subNav: [
      { label: 'Web Development', href: '/web-dev' },
      {
        label: 'Support',
        href: '/support',
        subNav: [
          { label: '24/7 Support', href: '/support-24-7' },
          { label: 'Documentation', href: '/docs' },
          { label: 'Community', href: '/community' }
        ]
      },
      { label: 'Consulting', href: '/consulting' }
    ]
  }
];

<NavLinks links={dropdownLinks} />
```

### With Custom Logo
```tsx
const logoLinks: NavLinkType[] = [
  {
    label: 'Brand',
    href: '/',
    svgLogoIcon: {
      src: '/logo.svg',
      alt: 'Company Logo',
      width: 40,
      height: 40,
      caption: 'MyBrand'
    }
  },
  { label: 'Products', href: '/products' }
];

<NavLinks links={logoLinks} />
```

### Mobile Responsive Navigation

```tsx
// Automatic mobile detection and responsive behavior
<NavLinks 
  links={mobileNavLinks}
  baseLinkStyle={{ 
    display: 'flex',
    flexWrap: 'wrap' // Allows wrapping on smaller screens
  }}
/>

// With collapsible mobile menu (hamburger menu)
<NavLinks 
  links={mobileNavLinks}
  enableMobileCollapse={true}
/>

// Force mobile behavior for testing
<NavLinks 
  links={mobileNavLinks}
  isMobile={true}
  enableMobileCollapse={true}
/>
```

#### Mobile Features:
- **Automatic Detection**: Responsive breakpoint at 768px with automatic hamburger menu
- **Smart Behavior**: Hamburger menu appears automatically on mobile devices
- **Animated Cross Icon**: Professional hamburger-to-cross animation when menu opens
- **Touch-Friendly**: Larger touch targets and proper spacing
- **Collapsible Menu**: Hamburger menu automatically enabled on mobile screens
- **Vertical Stacking**: Navigation items stack vertically on mobile
- **Simplified Dropdowns**: Dropdowns appear below instead of to the side

### Mobile Responsive Examples

#### Automatic Mobile Detection (Recommended)
```tsx
// Automatically shows hamburger menu on mobile devices
<NavLinks 
  links={mobileNavLinks}
  baseLinkStyle={{ 
    display: 'flex',
    gap: '20px' // Adjusts automatically for mobile
  }}
/>
```

#### Manual Mobile Control
```tsx
// Force mobile behavior for testing
<NavLinks 
  links={mobileNavLinks}
  isMobile={true}
  enableMobileCollapse={true}
/>

// Disable mobile collapse even on mobile
<NavLinks 
  links={mobileNavLinks}
  enableMobileCollapse={false}
/>
```

## 📝 Component Props

### NavLinks Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `NavLinkType[]` | Required | Array of navigation link objects |
| `className` | `string` | `undefined` | Custom CSS class for the navigation container |
| `baseLinkStyle` | `React.CSSProperties` | `undefined` | Inline styles for top-level links |
| `subLinkStyle` | `React.CSSProperties` | `undefined` | Inline styles for dropdown links |
| `isRightAligned` | `boolean` | `false` | Right-align the dropdown menus |
| `isLeftAligned` | `boolean` | `false` | Left-align the dropdown menus (nested dropdowns appear to the left) |
| `isBottomAligned` | `boolean` | `false` | Position dropdowns below their parent items (default behavior) |
| `isTopAligned` | `boolean` | `false` | Position dropdowns above their parent items |
| `isMobile` | `boolean` | `false` | Force mobile behavior regardless of screen size |
| `enableMobileCollapse` | `boolean` | `false` | Enable collapsible hamburger menu on mobile. **Note:** Hamburger menu automatically appears on mobile devices (≤768px) regardless of this setting |

### NavLinkType Interface

```typescript
interface NavLinkType {
  label?: string;          // Text label for the link
  title?: string;          // Title attribute (tooltip)
  href: string;            // URL for the link
  iconLeft?: string;       // Font Awesome class for left icon
  iconRight?: string;      // Font Awesome class for right icon
  emoji?: string;          // Emoji character
  subNav?: NavLinkType[];  // Array of sub-navigation items
  svgLogoIcon?: {          // Custom SVG/logo configuration
    src: string;
    alt: string;
    width?: number;
    height?: number | string;
    caption?: string;
    style?: React.CSSProperties;
  };
}
```

## 🎨 Styling and Customization

### CSS Customization

The component uses CSS modules with default styling that can be easily overridden:

```css
/* In your CSS file */
.custom-nav ul li a {
  color: #3498db !important;
  font-weight: bold;
}

.custom-nav ul ul {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
}
```

```tsx
<NavLinks 
  links={links} 
  className="custom-nav"
/>
```

### Inline Styling

You can apply inline styles directly to the component:

```tsx
<NavLinks 
  links={links}
  baseLinkStyle={{ 
    fontSize: '16px', 
    fontWeight: 'bold',
    padding: '12px 16px'
  }}
  subLinkStyle={{
    backgroundColor: '#2c3e50',
    minWidth: '220px'
  }}
/>
```

### Responsive Design

The component is built with responsive design in mind. You can further enhance responsiveness with your own CSS:

```css
@media (max-width: 768px) {
  .custom-nav ul li {
    display: block;
    width: 100%;
  }
  
  .custom-nav ul ul {
    position: static;
    display: none;
  }
}
```

## 🌟 Advanced Usage

### Dropdown Behavior

All dropdowns are hidden by default and only appear when hovering over their parent item. This behavior works consistently across all nesting levels:

```tsx
const advancedNav: NavLinkType[] = [
  {
    label: 'Resources',
    href: '#',
    subNav: [
      {
        label: 'Documentation',
        href: '/docs',
        subNav: [
          {
            label: 'Components',
            href: '/docs/components',
            subNav: [
              // This will appear when hovering on "Components"
              { label: 'Navigation', href: '/docs/components/navigation' }
            ]
          }
        ]
      }
    ]
  }
];
```

### Alignment Options

The component supports four different alignment options for dropdown positioning:

#### Left-Aligned Navigation (Default)
```tsx
<NavLinks 
  links={navData}
  isLeftAligned={true}
/>
```

#### Right-Aligned Navigation
```tsx
<NavLinks 
  links={navData}
  isRightAligned={true}
  baseLinkStyle={{ justifyContent: 'flex-end' }}
/>
```

#### Top-Aligned Navigation
```tsx
<NavLinks 
  links={navData}
  isTopAligned={true}
/>
```

#### Bottom-Aligned Navigation (Default)
```tsx
<NavLinks 
  links={navData}
  isBottomAligned={true}
/>
```

### Combined Alignment Options
You can combine horizontal and vertical alignment for custom positioning:

```tsx
// Dropdowns appear above and slide to the right
<NavLinks 
  links={navLinks} 
  isTopAligned={true} 
  isRightAligned={true} 
/>

// Dropdowns appear below and slide to the left  
<NavLinks 
  links={navLinks} 
  isBottomAligned={true} 
  isLeftAligned={true} 
/>
```

### Complex Navigation Layout
```tsx
function Navigation() {
  const leftLinks = [
    { label: 'Home', href: '/', iconLeft: 'fas fa-home' }
  ];
  
  const rightLinks = [
    { label: 'Login', href: '/login', iconRight: 'fas fa-sign-in-alt' }
  ];

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLinks links={leftLinks} />
      <NavLinks links={rightLinks} isRightAligned={true} />
    </nav>
  );
}
```

### All Alignment Options

```tsx
const alignmentLinks: NavLinkType[] = [
  {
    label: 'Services',
    href: '#services',
    subNav: [
      { label: 'Web Design', href: '#web-design' },
      { label: 'Development', href: '#development' }
    ]
  }
];

// Left aligned - nested dropdowns appear to the left (default)
<NavLinks links={alignmentLinks} isLeftAligned={true} />

// Right aligned - nested dropdowns appear to the right
<NavLinks links={alignmentLinks} isRightAligned={true} />

// Top aligned - dropdowns appear above parent items
<NavLinks links={alignmentLinks} isTopAligned={true} />

// Bottom aligned - dropdowns appear below parent items (default)
<NavLinks links={alignmentLinks} isBottomAligned={true} />
```

### Dropdown Behavior

All dropdowns are hidden by default and only appear when hovering over their parent item. This behavior works consistently across all nesting levels:

```tsx
const advancedNav: NavLinkType[] = [
  {
    label: 'Resources',
    href: '#',
    subNav: [
      {
        label: 'Documentation',
        href: '/docs',
        subNav: [
          {
            label: 'Components',
            href: '/docs/components',
            subNav: [
              // This will appear when hovering on "Components"
              { label: 'Navigation', href: '/docs/components/navigation' }
            ]
          }
        ]
      }
    ]
  }
];
```

## 📖 Full Example

```tsx
import React from 'react';
import NavLinks, { NavLinkType } from 'asafarim-navlinks';

const navigationData: NavLinkType[] = [
  {
    label: 'Home',
    href: '/',
    svgLogoIcon: {
      src: '/logo.svg',
      alt: 'Company Logo',
      width: 30,
      height: 30,
      caption: 'MyApp'
    }
  },
  {
    label: 'Products',
    href: '/products',
    iconLeft: 'fas fa-cube',
    subNav: [
      { label: 'Web Applications', href: '/web-apps', emoji: '🌐' },
      { label: 'Mobile Apps', href: '/mobile-apps', emoji: '📱' },
      {
        label: 'Enterprise Solutions',
        href: '/enterprise',
        emoji: '🏢',
        subNav: [
          { label: 'CRM Systems', href: '/crm' },
          { label: 'ERP Solutions', href: '/erp' },
          { label: 'Custom Development', href: '/custom' }
        ]
      }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    iconLeft: 'fas fa-concierge-bell',
    subNav: [
      { label: 'Consulting', href: '/consulting' },
      { label: 'Support', href: '/support' },
      { label: 'Training', href: '/training' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    iconLeft: 'fas fa-info-circle'
  },
  {
    label: 'Contact',
    href: '/contact',
    iconLeft: 'fas fa-envelope'
  }
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="navigation">
          <NavLinks 
            links={navigationData}
            baseLinkStyle={{
              display: 'flex',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
            subLinkStyle={{
              backgroundColor: '#2c3e50',
              padding: '0.5rem',
              borderRadius: '4px',
              minWidth: '200px'
            }}
          />
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to My App</h1>
      </main>
    </div>
  );
}

export default App;
```

## 🛠️ Development

### Setup
```bash
# Clone the repository
git clone https://github.com/AliSafari-IT/asafarim-navlinks.git

# Install dependencies
pnpm install

# Build the package
pnpm run build

# Run the demo
pnpm run demo
```

### Scripts
```bash
pnpm run build          # Build the package
pnpm run demo           # Run the demo
pnpm run demo:install   # Install demo dependencies
pnpm run demo:build     # Build the demo
pnpm run publishPublicly # Publish to npm
```

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the MIT License - see the [MIT_License](./MIT_License) file for details.

## 👨‍💻 Author

**Ali Safari** - [@AliSafari-IT](https://github.com/AliSafari-IT)

---

Made with ❤️ for the React community

## ⚠️ Troubleshooting

### Dropdowns Not Opening on Hover

If your dropdowns aren't opening on hover, check:

1. Make sure there are no CSS conflicts in your project overriding the hover behavior
2. Verify that your navigation data structure is correct with properly nested `subNav` arrays
3. Try increasing the CSS specificity in your custom styles with `!important` flags

### Dropdown Positioning Issues

If your dropdowns are not positioned correctly:

1. Check if alignment props (`isLeftAligned`, `isRightAligned`, `isTopAligned`, `isBottomAligned`) need to be adjusted
2. Ensure the parent container has `position: relative`
3. Add higher `z-index` values if dropdowns are appearing behind other elements
4. For edge cases, consider combining alignment options (e.g., `isTopAligned={true}` with `isRightAligned={true}`)

### SVG/Logo Image Loading

If SVG or logo images aren't loading:

1. Verify the image path is correct and accessible
2. Check that the SVG file is properly formatted
3. Try using an absolute URL path if using a relative path doesn't work

### Mobile Support

For better mobile support:

1. Implement a responsive design with CSS media queries
2. Consider adding touch support for mobile devices with additional CSS/JS
3. Test on various device sizes and orientations
