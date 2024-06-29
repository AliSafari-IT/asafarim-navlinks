# React component asafarim-navlinks

`asafarim-navlinks` is a simple React component for rendering navigation link items. It takes an array of link objects and returns a rendered navigation menu.

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

Create an array of link objects that you want to render.

```tsx
const links = [
  { label: 'Home', href: '/' },
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

Here's a full example of how to integrate `asafarim-navlinks` into a React TypeScript project.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from 'asafarim-navlinks';

const links = [
  { label: 'Home', href: '/' },
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

The `NavLinks` component renders a navigation menu.

#### Props

- `links` (required): An array of link objects. Each link object should have the following shape:
  - `label` (string): The text to display for the link.
  - `href` (string): The URL the link points to.

Example:

```tsx
const links = [
  { label: 'Home', href: '/' },
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

MIT License
