# React Component `asafarim-navlinks`

`asafarim-navlinks` is a simple React component for rendering navigation link items, including support for multi-level dropdown menus. It takes an array of link objects and returns a rendered navigation menu.

## Installation

You can install this package via npm:

```sh
npm install asafarim-navlinks
```

## Usage

Here's how you can use the `asafarim-navlinks` component in your React TypeScript application:

### Step 1: Import the Component

Import the `NavLinks` component into your React application.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from 'asafarim-navlinks';
```

### Step 2: Prepare the Links Data

Create an array of link objects that you want to render. Each link can optionally contain sub-navigation items, which can also have their own sub-navigation items (multi-level dropdowns).

```tsx
const links = [
  { 
    label: 'Home', 
    href: '/', 
    subNav: [
      { label: 'Sub Home 1', href: '/sub-home-1' },
      { label: 'Sub Home 2', href: '/sub-home-2' },
      { 
        label: 'Sub Sub Home', 
        href: '/sub-sub-home',
        subNav: [
          { label: 'Sub Sub Home 1', href: '/sub-sub-home-1' },
          { label: 'Sub Sub Home 2', href: '/sub-sub-home-2' }
        ]
      }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
```

### Step 3: Render the Component

Use the `NavLinks` component in your JSX and pass the links array as a prop.

```tsx
ReactDOM.render(<NavLinks links={links} />, document.getElementById('root'));
```

### Full Example

Here's a full example of how to integrate `asafarim-navlinks` into a React TypeScript project, including multi-level dropdown menus.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from 'asafarim-navlinks';

const links = [
  { 
    label: 'Home', 
    href: '/', 
    subNav: [
      { label: 'Sub Home 1', href: '/sub-home-1' },
      { label: 'Sub Home 2', href: '/sub-home-2' },
      { 
        label: 'Sub Sub Home', 
        href: '/sub-sub-home',
        subNav: [
          { label: 'Sub Sub Home 1', href: '/sub-sub-home-1' },
          { label: 'Sub Sub Home 2', href: '/sub-sub-home-2' }
        ]
      }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

const App: React.FC = () => {
  return (
    <div>
      <h1>My Website</h1>
      <NavLinks links={links} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## API

### `NavLinks`

The `NavLinks` component renders a navigation menu, with optional support for multi-level dropdown menus.

#### Props

- `links` (required): An array of link objects. Each link object should have the following shape:
  - `label` (string): The text to display for the link.
  - `href` (string): The URL the link points to.
  - `subNav` (optional): An array of link objects for the dropdown menu.

- `className` (optional): A string to apply custom CSS class.
- `style` (optional): A `React.CSSProperties` object to apply inline styles.
- `baseLinkStyle` (optional): A `React.CSSProperties` object to apply inline styles to base links.
- `subLinkStyle` (optional): A `React.CSSProperties` object to apply inline styles to sub-navigation links.

Example:

```tsx
const links = [
  { 
    label: 'Home', 
    href: '/', 
    subNav: [
      { label: 'Sub Home 1', href: '/sub-home-1' },
      { label: 'Sub Home 2', href: '/sub-home-2' },
      { 
        label: 'Sub Sub Home', 
        href: '/sub-sub-home',
        subNav: [
          { label: 'Sub Sub Home 1', href: '/sub-sub-home-1' },
          { label: 'Sub Sub Home 2', href: '/sub-sub-home-2' }
        ]
      }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
```

## Development

To contribute to this package, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Make your changes.
4. Build the package:
   ```sh
   npm run build
   ```
5. Publish the package:
   ```sh
   npm publish
   ```

## License

[MIT License](/MIT_License)
