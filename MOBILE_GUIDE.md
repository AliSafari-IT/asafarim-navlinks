# Mobile Responsive Guide for ASafariM NavLinks

This guide explains how to implement mobile-responsive navigation using the ASafariM NavLinks component.

## Overview

The ASafariM NavLinks component now includes comprehensive mobile responsiveness features:

- **Automatic Mobile Detection**: Detects screen sizes below 768px and automatically shows hamburger menu
- **Smart Hamburger Menu**: Appears automatically on mobile devices with professional animation
- **Animated Cross Icon**: Hamburger transforms into a cross icon when menu opens
- **Touch-Friendly Design**: Larger touch targets and proper spacing
- **Responsive Dropdowns**: Dropdowns adapt to mobile layout
- **Flexible Styling**: CSS that works across all device sizes

## Basic Mobile Responsive Usage

### Automatic Responsive Behavior (Recommended)

The component automatically becomes mobile-friendly and shows a hamburger menu on mobile devices:

```tsx
import NavLinks, { NavLinkType } from 'asafarim-navlinks';

const mobileNavLinks: NavLinkType[] = [
  { label: 'Home', href: '/', iconLeft: 'fas fa-home' },
  { label: 'About', href: '/about', iconLeft: 'fas fa-info' },
  { 
    label: 'Services', 
    href: '/services',
    subNav: [
      { label: 'Web Design', href: '/web-design' },
      { label: 'App Development', href: '/app-dev' }
    ]
  }
];

// This will automatically show hamburger menu on mobile
<NavLinks links={mobileNavLinks} />
```

### Manual Mobile Control

You can override the automatic behavior if needed:

```tsx
// Force mobile behavior for testing
<NavLinks 
  links={mobileNavLinks}
  isMobile={true}
  enableMobileCollapse={true}
/>

// Disable automatic hamburger menu (not recommended)
<NavLinks 
  links={mobileNavLinks}
  enableMobileCollapse={false}
/>

// Enable collapsible menu explicitly (redundant on mobile)
<NavLinks 
  links={mobileNavLinks}
  enableMobileCollapse={true}
  baseLinkStyle={{
    display: 'flex',
    flexWrap: 'wrap'
  }}
/>
```

## Mobile-Specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isMobile` | `boolean` | `false` | Force mobile behavior regardless of screen size |
| `enableMobileCollapse` | `boolean` | `false` | Enable collapsible hamburger menu on mobile |

## Mobile Breakpoints

- **Mobile**: ≤ 768px - Navigation stacks vertically, dropdowns appear below
- **Tablet**: 769px - 1024px - Compact horizontal layout
- **Desktop**: > 1024px - Full horizontal layout with side dropdowns

## Mobile Behavior Changes

### Navigation Layout
- **Desktop**: Horizontal menu with side-sliding dropdowns
- **Mobile**: Vertical stack with dropdowns appearing below parent items

### Touch Targets
- **Desktop**: Standard 10px padding
- **Mobile**: Larger 15px-20px padding for better touch interaction

### Dropdown Positioning
- **Desktop**: Dropdowns slide to the left/right of parent items
- **Mobile**: All dropdowns appear below parent items for better usability

## Styling for Mobile

### Responsive Base Styles

```tsx
<NavLinks 
  links={navLinks}
  baseLinkStyle={{
    display: 'flex',
    flexWrap: 'wrap', // Important for mobile wrapping
    gap: '10px'
  }}
  enableMobileCollapse={true}
/>
```

### Custom Mobile CSS

You can add your own responsive styles:

```css
/* Your custom mobile styles */
@media (max-width: 768px) {
  .my-nav ul {
    padding: 0;
    margin: 0;
  }
  
  .my-nav ul li a {
    padding: 16px 20px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }
}
```

## Advanced Mobile Features

### Force Mobile Mode

For testing or specific use cases, you can force mobile behavior:

```tsx
<NavLinks 
  links={navLinks}
  isMobile={true}
  enableMobileCollapse={true}
/>
```

### Combining with Alignment Options

Mobile behavior overrides alignment options for better UX:

```tsx
// On desktop: right-aligned dropdowns
// On mobile: all dropdowns appear below (responsive override)
<NavLinks 
  links={navLinks}
  isRightAligned={true}
  enableMobileCollapse={true}
/>
```

## Hamburger Menu Features

### Automatic Hamburger Menu
The component automatically displays a hamburger menu on mobile devices (≤768px) without requiring `enableMobileCollapse={true}`. This provides a seamless mobile experience out of the box.

### Professional Animation
The hamburger menu includes a smooth, professional animation:
- **Closed State**: Three horizontal lines (≡)
- **Open State**: Cross icon (✕) with smooth rotation animation
- **Animation Duration**: 0.3 seconds with easing
- **Visual Feedback**: Button background changes color when opened

### Animation Details
```css
/* The hamburger transforms into a cross */
Hamburger (≡) → Cross (✕)
- Top line: Rotates 45° and moves to center
- Middle line: Fades out completely  
- Bottom line: Rotates -45° and moves to center
- Smooth 0.3s transition between states
```

### Usage Examples
```tsx
// Automatic hamburger menu (recommended)
<NavLinks links={navLinks} />

// Manual control (if needed)
<NavLinks 
  links={navLinks} 
  enableMobileCollapse={false} // Disables automatic hamburger
/

// Force mobile for testing
<NavLinks 
  links={navLinks} 
  isMobile={true}
/>
```

## Best Practices

### 1. Use Appropriate Icons
```tsx
const mobileNavLinks = [
  { label: 'Home', href: '/', iconLeft: 'fas fa-home' },
  { label: 'Menu', href: '/menu', iconLeft: 'fas fa-bars' }
];
```

### 2. Keep Labels Concise
- Use shorter labels on mobile
- Consider icon-only navigation for very small screens

### 3. Test on Real Devices
- Test touch interactions on actual mobile devices
- Verify dropdown behavior works with touch

### 4. Consider Performance
- The component uses CSS for responsiveness (no JavaScript overhead)
- Minimal bundle size impact

## Troubleshooting

### Menu Not Collapsing
Make sure you've enabled the collapsible feature:
```tsx
<NavLinks enableMobileCollapse={true} />
```

### Dropdowns Not Working on Touch
Ensure you're testing on actual mobile devices, not just browser dev tools.

### Layout Issues
Add proper flex styles to your base component:
```tsx
baseLinkStyle={{
  display: 'flex',
  flexWrap: 'wrap'
}}
```

## Migration Guide

If you're upgrading from a previous version:

1. **No Breaking Changes**: Existing code will work as before
2. **Enhanced Mobile Support**: Your navigation will automatically be more mobile-friendly
3. **Optional Features**: New mobile features are opt-in via props

## Examples

See the [interactive demo](https://alisafari-it.github.io/asafarim-navlinks/) for live examples of mobile responsive navigation in action.
