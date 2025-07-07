import React, { useState } from 'react';
import './index.css';
import NavLinks from 'asafarim-navlinks';
import { NavLinkType } from 'asafarim-navlinks';
import CodeBlock from './CodeBlock';
import MobileFrame from './MobileFrame';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  // Sample navigation data
  const basicLinks: NavLinkType[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const linksWithIcons: NavLinkType[] = [
    { label: 'Dashboard', href: '#dashboard', emoji: '🏠' },
    { label: 'Profile', href: '#profile', emoji: '👤' },
    { label: 'Settings', href: '#settings', emoji: '⚙️' },
    { label: 'Logout', href: '#logout', emoji: '🚪' },
  ];

  const nestedLinks: NavLinkType[] = [
    { label: 'Home', href: '#home' },
    {
      label: 'Products', // No href - this is a dropdown parent
      subNav: [
        { label: 'Electronics', href: '#electronics' },
        { label: 'Clothing', href: '#clothing' },
        {
          label: 'Books', // No href - this is a dropdown parent
          subNav: [
            { label: 'Fiction', href: '#fiction' },
            { label: 'Non-Fiction', href: '#non-fiction' },
            {
              label: 'Technical', // No href - this is a dropdown parent
              subNav: [
                { label: 'Programming', href: '#programming' },
                { label: 'Design', href: '#design' },
                { label: 'Mathematics', href: '#mathematics' },
              ],
            },
          ],
        },
      ],
    },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const comprehensiveLinks: NavLinkType[] = [
    { 
      label: 'ASafariM', 
      href: '#home', 
      emoji: '🏠',
      svgLogoIcon: { src: '/assets/logoT.svg', alt: 'ASafariM Logo' }
    },
    {
      label: 'Products',
      emoji: '🛍️',
      subNav: [
        { label: 'Web Development', href: '#web-dev', emoji: '🌐' },
        { label: 'Mobile Apps', href: '#mobile', emoji: '📱' },
        {
          label: 'Enterprise Solutions',
          emoji: '🏢',
          subNav: [
            { label: 'ERP Systems', href: '#erp', emoji: '📊' },
            { label: 'CRM Solutions', href: '#crm', emoji: '👥' },
            {
              label: 'Analytics',
              emoji: '📈',
              subNav: [
                { label: 'Business Intelligence', href: '#bi', emoji: '🧠' },
                { label: 'Data Visualization', href: '#dataviz', emoji: '📊' },
                { label: 'Machine Learning', href: '#ml', emoji: '🤖' },
                {
                  label: 'AI Tools',
                  emoji: '🎯',
                  subNav: [
                    { label: 'Natural Language Processing', href: '#nlp', emoji: '💬' },
                    { label: 'Computer Vision', href: '#cv', emoji: '👁️' },
                    { label: 'Recommendation Systems', href: '#recsys', emoji: '🎯' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Services',
      emoji: '🛠️',
      subNav: [
        { label: 'Consulting', href: '#consulting', emoji: '💡' },
        { label: 'Support', href: '#support', emoji: '🎧' },
        { label: 'Training', href: '#training', emoji: '🎓' },
      ],
    },
    {
      label: 'Resources',
      emoji: '📚',
      subNav: [
        { label: 'Documentation', href: '#docs', emoji: '📖' },
        { label: 'Tutorials', href: '#tutorials', emoji: '🎥' },
        { label: 'Blog', href: '#blog', emoji: '✍️' },
        { label: 'Community', href: '#community', emoji: '👥' },
      ],
    },
    { label: 'About', href: '#about', emoji: 'ℹ️' },
    { label: 'Contact', href: '#contact', emoji: '📞' },
  ];

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1 className="demo-main-title">ASafariM NavLinks</h1>
        <p className="demo-subtitle">
          A modern, accessible, and feature-rich navigation component for React applications
        </p>
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'light' ? '🌙' : theme === 'dark' ? '☀️' : '🌓'} {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">📋 Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Theme Support</h3>
            <p className="feature-description">Built-in light, dark, and auto themes with system preference detection</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Mobile Responsive</h3>
            <p className="feature-description">Automatically adapts to mobile screens with touch-friendly hamburger menu</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌳</div>
            <h3 className="feature-title">Nested Menus</h3>
            <p className="feature-description">Unlimited nesting levels with smooth animations and positioning</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3 className="feature-title">Accessibility</h3>
            <p className="feature-description">WCAG compliant with keyboard navigation and screen reader support</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Flexible Alignment</h3>
            <p className="feature-description">Left, right, top, bottom alignment options for dropdowns</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">TypeScript Ready</h3>
            <p className="feature-description">Full TypeScript support with comprehensive type definitions</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🔧 Basic Usage</h2>
        <p className="demo-description">
          Simple navigation with basic links
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={basicLinks} 
            theme={theme}
            enableMobileCollapse={true}
            isDemoContext={true}
          />
        </div>
        <CodeBlock 
          code={`import NavLinks from 'asafarim-navlinks';

const basicLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

<NavLinks links={basicLinks} theme="auto" />`}
          language="tsx"
        />
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🎨 With Icons & Emojis</h2>
        <p className="demo-description">
          Navigation with icons and emojis for better visual appeal
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={linksWithIcons} 
            theme={theme}
            enableMobileCollapse={true}
            isDemoContext={true}
          />
        </div>
        <CodeBlock 
          code={`const linksWithIcons = [
  { label: 'Dashboard', href: '#dashboard', emoji: '🏠' },
  { label: 'Profile', href: '#profile', emoji: '👤' },
  { label: 'Settings', href: '#settings', emoji: '⚙️' },
  { label: 'Logout', href: '#logout', emoji: '🚪' },
];

<NavLinks links={linksWithIcons} theme="auto" />`}
          language="tsx"
        />
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🌳 Nested Dropdowns</h2>
        <p className="demo-description">
          Multi-level navigation with nested dropdowns
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={nestedLinks} 
            theme={theme}
            enableMobileCollapse={true}
            isDemoContext={true}
          />
        </div>
        <CodeBlock 
          code={`const nestedLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Products', // No href - dropdown parent
    subNav: [
      { label: 'Electronics', href: '#electronics' },
      { label: 'Clothing', href: '#clothing' },
      {
        label: 'Books', // No href - dropdown parent
        subNav: [
          { label: 'Fiction', href: '#fiction' },
          { label: 'Non-Fiction', href: '#non-fiction' },
          {
            label: 'Technical', // No href - dropdown parent
            subNav: [
              { label: 'Programming', href: '#programming' },
              { label: 'Design', href: '#design' },
            ],
          },
        ],
      },
    ],
  },
];

<NavLinks links={nestedLinks} theme="auto" />`}
          language="tsx"
        />
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🚀 Comprehensive Example</h2>
        <p className="demo-description">
          Full-featured navigation with icons, SVG logos, and deep nesting
        </p>
        <div className="nav-demo comprehensive">
          <NavLinks 
            links={comprehensiveLinks} 
            theme={theme}
            enableMobileCollapse={true}
            isDemoContext={true}
          />
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🎯 Alignment Options</h2>
        <p className="demo-description">
          Different alignment options for dropdown positioning
        </p>
        <div className="alignment-demos">
          <div className="alignment-demo">
            <h3>Left Aligned</h3>
            <div className="nav-demo">
              <NavLinks 
                links={nestedLinks} 
                theme={theme}
                isLeftAligned={true}
                enableMobileCollapse={true}
                isDemoContext={true}
              />
            </div>
          </div>
          <div className="alignment-demo">
            <h3>Right Aligned</h3>
            <div className="nav-demo">
              <NavLinks 
                links={nestedLinks} 
                theme={theme}
                isRightAligned={true}
                enableMobileCollapse={true}
                isDemoContext={true}
              />
            </div>
          </div>
          <div className="alignment-demo">
            <h3>Top Aligned</h3>
            <div className="nav-demo">
              <NavLinks 
                links={nestedLinks} 
                theme={theme}
                isTopAligned={true}
                enableMobileCollapse={true}
                isDemoContext={true}
              />
            </div>
          </div>
          <div className="alignment-demo">
            <h3>Bottom Aligned (Default)</h3>
            <div className="nav-demo">
              <NavLinks 
                links={nestedLinks} 
                theme={theme}
                isBottomAligned={true}
                enableMobileCollapse={true}
                isDemoContext={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">📱 Mobile Preview</h2>
        <p className="demo-description">
          Mobile-responsive navigation with hamburger menu
        </p>
        <div className="mobile-demo">
          <MobileFrame 
            links={comprehensiveLinks}
            baseLinkStyle={{
              backgroundColor: '#2c3e50',
              color: 'white',
              padding: '10px',
            }}
          />
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">📚 API Reference</h2>
        <div className="api-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>links</code></td>
                <td><code>NavLinkType[]</code></td>
                <td>-</td>
                <td>Array of navigation links</td>
              </tr>
              <tr>
                <td><code>theme</code></td>
                <td><code>'light' | 'dark' | 'auto'</code></td>
                <td><code>'auto'</code></td>
                <td>Theme mode</td>
              </tr>
              <tr>
                <td><code>enableMobileCollapse</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>Enable mobile hamburger menu</td>
              </tr>
              <tr>
                <td><code>isRightAligned</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Right-align dropdowns</td>
              </tr>
              <tr>
                <td><code>isLeftAligned</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Left-align dropdowns</td>
              </tr>
              <tr>
                <td><code>isTopAligned</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Top-align dropdowns</td>
              </tr>
              <tr>
                <td><code>isBottomAligned</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Bottom-align dropdowns</td>
              </tr>
              <tr>
                <td><code>baseLinkStyle</code></td>
                <td><code>React.CSSProperties</code></td>
                <td><code>undefined</code></td>
                <td>Custom styles for base links</td>
              </tr>
              <tr>
                <td><code>subLinkStyle</code></td>
                <td><code>React.CSSProperties</code></td>
                <td><code>undefined</code></td>
                <td>Custom styles for sub links</td>
              </tr>
              <tr>
                <td><code>className</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Additional CSS classes</td>
              </tr>
              <tr>
                <td><code>showSkipNav</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Show skip navigation link</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="demo-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>ASafariM NavLinks</h3>
            <p>A modern, accessible navigation component for React</p>
          </div>
          <div className="footer-links">
            <a href="https://alisafari-it.github.io/asafarim-navlinks/" target='_blank'>Documentation</a>
            <a href="https://github.com/AliSafari-IT/asafarim-navlinks" target='_blank'>GitHub</a>
            <a href="https://www.npmjs.com/package/asafarim-navlinks" target='_blank'>NPM</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
