# ASafariM NavLinks Demo

This is a comprehensive demo application showcasing all the features of the `asafarim-navlinks` package.

## Features Demonstrated

- ✅ **Basic Navigation**: Simple navigation links
- ✅ **Icon Support**: Font Awesome icons on left/right sides
- ✅ **Emoji Support**: Using emojis as visual indicators
- ✅ **Dropdown Menus**: Multi-level nested navigation
- ✅ **SVG/Logo Support**: Custom SVG icons and logos
- ✅ **Alignment Options**: Right and bottom aligned navigation
- ✅ **Custom Styling**: CSS classes and inline styles

## Running the Demo

1. **Install dependencies**:
   ```bash
   cd demo
   pnpm install
   ```

2. **Build the main package** (if not already built):
   ```bash
   cd ..
   pnpm run build
   ```

3. **Start the demo**:
   ```bash
   cd demo
   pnpm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the demo.

## What You'll See

The demo includes multiple sections showing:

- **Basic Navigation**: Clean, simple navigation links
- **Icons**: Integration with Font Awesome icons
- **Emojis**: Fun navigation using emoji indicators
- **Dropdowns**: Multi-level nested navigation menus
- **Logos**: Custom SVG/image integration
- **Alignment**: Different positioning options
- **Code Examples**: Implementation details for each feature

## Using in Your Project

```typescript
import NavLinks, { NavLinkType } from 'asafarim-navlinks';

const navData: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' }
];

<NavLinks links={navData} />
```

## Package Features

- 🎯 TypeScript support
- 📱 Responsive design
- 🎨 Customizable styling
- 📁 Nested navigation
- 🖼️ SVG/Logo support
- 😊 Emoji support
- ⚙️ Flexible configuration
