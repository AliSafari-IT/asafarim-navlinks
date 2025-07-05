# 🚀 ASafariM NavLinks

> **Dynamic Navigation Links with Dropdowns and Icons for React Apps**

[![npm version](https://badge.fury.io/js/asafarim-navlinks.svg)](https://badge.fury.io/js/asafarim-navlinks)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A versatile and feature-rich React component for creating dynamic navigation bars with multi-level dropdown menus, icons, emojis, and flexible styling options.

## 🎯 Features

- ✅ **Multi-level Dropdown Menus** - Unlimited nesting levels
- ✅ **Icon Support** - Font Awesome icons on left/right sides
- ✅ **Emoji Support** - Modern emoji indicators
- ✅ **SVG/Logo Integration** - Custom logos and SVG icons
- ✅ **Flexible Alignment** - Left, right, and bottom alignment options
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Customizable Styling** - CSS classes and inline styles
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Zero Dependencies** - Lightweight and efficient

## 🚀 Live Demo

**[🎮 Interactive Demo](./demo)** - Experience all features in action!

```bash
# Run the demo locally
pnpm run demo
```

![ASafariM NavLinks Demo](./img/asafarim-navlinks-1.png)

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

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `NavLinkType[]` | **Required** | Array of navigation items |
| `className` | `string` | `undefined` | Custom CSS class |
| `baseLinkStyle` | `React.CSSProperties` | `undefined` | Inline styles for base links |
| `subLinkStyle` | `React.CSSProperties` | `undefined` | Inline styles for dropdown links |
| `isRightAligned` | `boolean` | `false` | Right-align navigation items |
| `isBottomAligned` | `boolean` | `false` | Bottom-align navigation items |

## 🔧 NavLinkType Interface

```typescript
interface NavLinkType {
  label: string;           // Link text
  href: string;            // Link URL
  title?: string;          // HTML title attribute
  iconLeft?: string;       // Font Awesome class for left icon
  iconRight?: string;      // Font Awesome class for right icon
  emoji?: string;          // Emoji character
  svgLogoIcon?: SvgLinkType; // Custom SVG/logo configuration
  subNav?: NavLinkType[];  // Nested navigation items
}

interface SvgLinkType {
  src: string;                    // Image/SVG source URL
  alt: string;                    // Alt text
  caption?: string;               // Caption text
  width?: number;                 // Image width
  height?: number;                // Image height
  style?: React.CSSProperties;    // Custom styles
}
```

## 🎨 Styling

### Custom CSS Classes
```tsx
<NavLinks 
  links={navData}
  className="my-custom-nav"
  baseLinkStyle={{
    display: 'flex',
    gap: '20px',
    listStyle: 'none'
  }}
  subLinkStyle={{
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '4px'
  }}
/>
```

### CSS Module Integration
```css
.navContainer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #2c3e50;
}

.navContainer a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navContainer a:hover {
  background-color: #34495e;
}
```

## 🌟 Advanced Usage

### Right-Aligned Navigation
```tsx
<NavLinks 
  links={navData}
  isRightAligned={true}
  baseLinkStyle={{ justifyContent: 'flex-end' }}
/>
```

### Bottom-Aligned Navigation
```tsx
<NavLinks 
  links={navData}
  isBottomAligned={true}
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

## 📄 License

[MIT License](./MIT_License) - feel free to use this package in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/AliSafari-IT/asafarim-navlinks/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/AliSafari-IT/asafarim-navlinks/discussions)

## 🌟 Show Your Support

If you find this package helpful, please consider giving it a ⭐ on [GitHub](https://github.com/AliSafari-IT/asafarim-navlinks)!

---

**Built with ❤️ by [Ali Safari](https://github.com/AliSafari-IT)**
