import React from 'react';
import NavLinks, { NavLinkType } from 'asafarim-navlinks';
import './index.css';

const App: React.FC = () => {
  // Navigation with your logo and comprehensive dropdown menus
  const mainNavigation: NavLinkType[] = [
    {
      label: 'ASafariM',
      href: '/',
      svgLogoIcon: {
        src: '/assets/logoT.svg',
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
      subNav: [
        {
          label: 'Web Development',
          href: '/web-dev',
          emoji: '🌐',
          subNav: [
            { label: 'React Apps', href: '/react-apps', iconLeft: 'fab fa-react' },
            { label: 'Vue Apps', href: '/vue-apps', iconLeft: 'fab fa-vuejs' },
            { label: 'Angular Apps', href: '/angular-apps', iconLeft: 'fab fa-angular' },
            {
              label: 'Full Stack',
              href: '/fullstack',
              iconLeft: 'fas fa-layer-group',
              subNav: [
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
            { label: 'Flutter', href: '/flutter', iconLeft: 'fas fa-mobile-alt' },
            { label: 'Ionic', href: '/ionic', iconLeft: 'fas fa-bolt' }
          ]
        },
        {
          label: 'Desktop Applications',
          href: '/desktop',
          emoji: '🖥️',
          subNav: [
            { label: 'Electron Apps', href: '/electron', iconLeft: 'fas fa-desktop' },
            { label: 'Tauri Apps', href: '/tauri', iconLeft: 'fas fa-window-maximize' }
          ]
        }
      ]
    },
    {
      label: 'Services',
      href: '/services',
      iconLeft: 'fas fa-concierge-bell',
      subNav: [
        {
          label: 'Development Services',
          href: '/dev-services',
          iconLeft: 'fas fa-code',
          subNav: [
            { label: 'Custom Software', href: '/custom-software', emoji: '⚙️' },
            { label: 'API Development', href: '/api-dev', emoji: '🔌' },
            { label: 'Database Design', href: '/database', emoji: '🗄️' }
          ]
        },
        {
          label: 'Consulting',
          href: '/consulting',
          iconLeft: 'fas fa-lightbulb',
          subNav: [
            { label: 'Architecture Review', href: '/architecture', emoji: '🏗️' },
            { label: 'Performance Optimization', href: '/performance', emoji: '⚡' },
            { label: 'Security Audit', href: '/security', emoji: '🔒' }
          ]
        },
        {
          label: 'Support & Maintenance',
          href: '/support',
          iconLeft: 'fas fa-life-ring',
          subNav: [
            { label: '24/7 Support', href: '/support-24-7', emoji: '🕐' },
            { label: 'Bug Fixes', href: '/bug-fixes', emoji: '🐛' },
            { label: 'Feature Updates', href: '/feature-updates', emoji: '🚀' },
            {
              label: 'Training & Documentation',
              href: '/training',
              iconLeft: 'fas fa-graduation-cap',
              subNav: [
                { label: 'Code Reviews', href: '/code-reviews', emoji: '👨‍💻' },
                { label: 'Best Practices', href: '/best-practices', emoji: '📚' },
                { label: 'Team Training', href: '/team-training', emoji: '👥' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
      iconLeft: 'fas fa-briefcase',
      subNav: [
        {
          label: 'Recent Projects',
          href: '/recent-projects',
          emoji: '🆕',
          subNav: [
            { label: 'E-commerce Platform', href: '/ecommerce', emoji: '🛒' },
            { label: 'Healthcare App', href: '/healthcare', emoji: '🏥' },
            { label: 'Finance Dashboard', href: '/finance', emoji: '💹' }
          ]
        },
        { label: 'Case Studies', href: '/case-studies', emoji: '📊' },
        { label: 'Client Testimonials', href: '/testimonials', emoji: '💬' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      iconLeft: 'fas fa-book',
      subNav: [
        {
          label: 'Documentation',
          href: '/docs',
          iconLeft: 'fas fa-file-alt',
          subNav: [
            { label: 'Getting Started', href: '/getting-started', emoji: '🚀' },
            { label: 'API Reference', href: '/api-reference', emoji: '📖' },
            { label: 'Examples', href: '/examples', emoji: '💡' },
            { label: 'FAQ', href: '/faq', emoji: '❓' }
          ]
        },
        {
          label: 'Tools & Utilities',
          href: '/tools',
          iconLeft: 'fas fa-tools',
          subNav: [
            { label: 'Code Generators', href: '/generators', emoji: '⚡' },
            { label: 'Testing Tools', href: '/testing', emoji: '🧪' },
            { label: 'Deployment Scripts', href: '/deployment', emoji: '🚀' }
          ]
        },
        { label: 'Blog', href: '/blog', iconLeft: 'fas fa-rss' },
        { label: 'Newsletter', href: '/newsletter', iconLeft: 'fas fa-envelope' }
      ]
    },
    {
      label: 'Advanced Demos',
      href: '/advanced',
      iconLeft: 'fas fa-flask',
      subNav: [
        {
          label: 'Deep Nesting',
          href: '/deep-nesting',
          iconLeft: 'fas fa-sitemap',
          subNav: [
            {
              label: 'Level 2 Menu',
              href: '/level-2',
              iconLeft: 'fas fa-layer-group',
              subNav: [
                {
                  label: 'Level 3 Menu',
                  href: '/level-3',
                  iconLeft: 'fas fa-code-branch',
                  subNav: [
                    {
                      label: 'Level 4 Menu',
                      href: '/level-4',
                      iconLeft: 'fas fa-project-diagram',
                      subNav: [
                        { label: 'Level 5 Item A', href: '/level-5-a', emoji: '🔹' },
                        { label: 'Level 5 Item B', href: '/level-5-b', emoji: '🔸' }
                      ]
                    },
                    { label: 'Another Level 4 Item', href: '/another-level-4', emoji: '🔄' }
                  ]
                },
                { label: 'Another Level 3 Item', href: '/another-level-3', emoji: '📊' }
              ]
            },
            { label: 'Another Level 2 Item', href: '/another-level-2', emoji: '📝' }
          ]
        },
        {
          label: 'Mixed Content',
          href: '/mixed-content',
          emoji: '🔀',
          subNav: [
            {
              label: 'With Image',
              href: '/with-image',
              svgLogoIcon: {
                src: '/assets/logoT.svg',
                alt: 'Small Logo',
                width: 20, 
                height: 20,
                caption: 'Logo Item'
              },
              subNav: [
                { label: 'Sub Image Item 1', href: '/sub-image-1', emoji: '🖼️' },
                { label: 'Sub Image Item 2', href: '/sub-image-2', emoji: '📷' }
              ]
            },
            {
              label: 'With Icon',
              href: '/with-icon',
              iconLeft: 'fas fa-star',
              subNav: [
                { label: 'Sub Icon Item 1', href: '/sub-icon-1', iconLeft: 'fas fa-award' },
                { label: 'Sub Icon Item 2', href: '/sub-icon-2', iconLeft: 'fas fa-trophy' }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Sample navigation data with different features
  const basicNavLinks: NavLinkType[] = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Services',
      href: '#services'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ];

  const iconsNavLinks: NavLinkType[] = [
    {
      label: 'Home',
      href: '#home',
      iconLeft: 'fas fa-home'
    },
    {
      label: 'Profile',
      href: '#profile',
      iconLeft: 'fas fa-user'
    },
    {
      label: 'Settings',
      href: '#settings',
      iconRight: 'fas fa-cog'
    },
    {
      label: 'Logout',
      href: '#logout',
      iconRight: 'fas fa-sign-out-alt'
    }
  ];

  const emojiNavLinks: NavLinkType[] = [
    {
      label: 'Home',
      href: '#home',
      emoji: '🏠'
    },
    {
      label: 'About',
      href: '#about',
      emoji: '📖'
    },
    {
      label: 'Services',
      href: '#services',
      emoji: '🛠️'
    },
    {
      label: 'Contact',
      href: '#contact',
      emoji: '📞'
    }
  ];

  const dropdownNavLinks: NavLinkType[] = [
    {
      label: 'Home',
      href: '#home',
      iconLeft: 'fas fa-home'
    },
    {
      label: 'Products',
      href: '#products',
      iconLeft: 'fas fa-box',
      subNav: [
        {
          label: 'Web Development',
          href: '#web-dev'
        },
        {
          label: 'Mobile Apps',
          href: '#mobile-apps'
        },
        {
          label: 'Desktop Software',
          href: '#desktop-software'
        }
      ]
    },
    {
      label: 'Services',
      href: '#services',
      iconLeft: 'fas fa-concierge-bell',
      subNav: [
        {
          label: 'Consulting',
          href: '#consulting'
        },
        {
          label: 'Support',
          href: '#support',
          subNav: [
            {
              label: '24/7 Support',
              href: '#support-24-7'
            },
            {
              label: 'Documentation',
              href: '#documentation'
            },
            {
              label: 'Community',
              href: '#community'
            }
          ]
        },
        {
          label: 'Training',
          href: '#training'
        }
      ]
    },
    {
      label: 'About',
      href: '#about',
      iconLeft: 'fas fa-info-circle'
    },
    {
      label: 'Contact',
      href: '#contact',
      iconLeft: 'fas fa-envelope'
    }
  ];

  const logoNavLinks: NavLinkType[] = [
    {
      label: 'Brand',
      href: '#brand',
      svgLogoIcon: {
        src: '/assets/logoT.svg',
        alt: 'Brand Logo',
        width: 40,
        height: 40,
        caption: 'Brand'
      }
    },
    {
      label: 'Products',
      href: '#products',
      iconLeft: 'fas fa-cube'
    },
    {
      label: 'Solutions',
      href: '#solutions',
      iconLeft: 'fas fa-lightbulb'
    }
  ];

  return (
    <div className="demo-container">
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px' }}>
        🚀 ASafariM NavLinks Demo
      </h1>
      
      <div className="demo-section">
        <h2 className="demo-title">📋 Package Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-title">🎯 Basic Navigation</div>
            <div className="feature-description">
              Simple navigation links with labels and href attributes
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">🎨 Icon Support</div>
            <div className="feature-description">
              Font Awesome icons on left or right side of labels
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">😊 Emoji Support</div>
            <div className="feature-description">
              Use emojis as visual indicators for navigation items
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">📁 Dropdown Menus</div>
            <div className="feature-description">
              Multi-level nested navigation with dropdown support
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">🖼️ SVG/Logo Support</div>
            <div className="feature-description">
              Custom SVG icons or logos with captions
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">⚙️ Customizable Styling</div>
            <div className="feature-description">
              Custom CSS classes and inline styles support
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🎯 Basic Navigation</h2>
        <p className="demo-description">
          Simple navigation links with clean styling:
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={basicNavLinks}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0
            }}
          />
        </div>
        <div className="code-block">
{`const basicNavLinks: NavLinkType[] = [
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
/>`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🎨 Navigation with Icons</h2>
        <p className="demo-description">
          Navigation links with Font Awesome icons on left and right sides:
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={iconsNavLinks}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0
            }}
          />
        </div>
        <div className="code-block">
{`const iconsNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', iconLeft: 'fas fa-home' },
  { label: 'Profile', href: '#profile', iconLeft: 'fas fa-user' },
  { label: 'Settings', href: '#settings', iconRight: 'fas fa-cog' },
  { label: 'Logout', href: '#logout', iconRight: 'fas fa-sign-out-alt' }
];`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">😊 Navigation with Emojis</h2>
        <p className="demo-description">
          Fun navigation using emojis as visual indicators:
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={emojiNavLinks}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0
            }}
          />
        </div>
        <div className="code-block">
{`const emojiNavLinks: NavLinkType[] = [
  { label: 'Home', href: '#home', emoji: '🏠' },
  { label: 'About', href: '#about', emoji: '📖' },
  { label: 'Services', href: '#services', emoji: '🛠️' },
  { label: 'Contact', href: '#contact', emoji: '📞' }
];`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">📁 Dropdown Navigation</h2>
        <p className="demo-description">
          Multi-level navigation with dropdown menus and nested submenus:
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={dropdownNavLinks}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0
            }}
            subLinkStyle={{
              backgroundColor: '#34495e',
              padding: '10px',
              borderRadius: '4px',
              minWidth: '200px',
              zIndex: 1000
            }}
          />
        </div>
        <div className="code-block">
{`const dropdownNavLinks: NavLinkType[] = [
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
];`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🖼️ Navigation with Logo/SVG</h2>
        <p className="demo-description">
          Navigation with custom SVG icons and logos:
        </p>
        <div className="nav-demo-light">
          <NavLinks 
            links={logoNavLinks}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
              alignItems: 'center'
            }}
          />
        </div>
        <div className="code-block">
{`const logoNavLinks: NavLinkType[] = [
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
];`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">⚙️ Alignment Options</h2>
        <p className="demo-description">
          Different alignment options for navigation:
        </p>
        
        <h3 style={{ color: '#34495e', marginTop: '30px', marginBottom: '15px' }}>
          Right Aligned Navigation
        </h3>
        <div className="nav-demo">
          <NavLinks 
            links={basicNavLinks}
            isRightAligned={true}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
              justifyContent: 'flex-end'
            }}
          />
        </div>

        <h3 style={{ color: '#34495e', marginTop: '30px', marginBottom: '15px' }}>
          Bottom Aligned Navigation
        </h3>
        <div className="nav-demo">
          <NavLinks 
            links={basicNavLinks}
            isBottomAligned={true}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0
            }}
          />
        </div>
        
        <div className="code-block">
{`// Right aligned
<NavLinks 
  links={basicNavLinks}
  isRightAligned={true}
  baseLinkStyle={{ justifyContent: 'flex-end' }}
/>

// Bottom aligned
<NavLinks 
  links={basicNavLinks}
  isBottomAligned={true}
/>`}
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">🚀 Getting Started</h2>
        <p className="demo-description">
          To use the asafarim-navlinks package in your project:
        </p>
        <div className="code-block">
{`# Install the package
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
<NavLinks links={navData} />`}
        </div>
      </div>

      <div className="demo-section" style={{ backgroundColor: '#f8f9fa', border: '2px solid #28a745', borderRadius: '8px' }}>
        <h2 className="demo-title" style={{ color: '#28a745' }}>🌟 Comprehensive Navigation with Your Assets</h2>
        <p className="demo-description">
          <strong>Real-world example using your logoT.svg with complex multi-level dropdown menus:</strong>
        </p>
        <div className="nav-demo" style={{ backgroundColor: '#2c3e50', padding: '15px', borderRadius: '8px' }}>
          <NavLinks 
            links={mainNavigation}
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '25px',
              margin: 0,
              padding: 0,
              alignItems: 'center'
            }}
            subLinkStyle={{
              backgroundColor: '#34495e',
              padding: '12px',
              borderRadius: '6px',
              minWidth: '220px',
              zIndex: 1000,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              border: '1px solid #495057',
              overflow: 'visible',
              position: 'absolute'
            }}
          />
        </div>
        <div className="code-block">
{`// Using your logoT.svg with comprehensive dropdown menus
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
/>`}
        </div>
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb', 
          borderRadius: '6px',
          color: '#155724'
        }}>
          <strong>🎯 Features Demonstrated:</strong>
          <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
            <li>✅ Your actual <code>logoT.svg</code> integrated as navigation brand</li>
            <li>✅ 3+ levels of dropdown menus (unlimited nesting)</li>
            <li>✅ Mixed content: icons, emojis, and text labels</li>
            <li>✅ Professional styling with shadows and borders</li>
            <li>✅ Real-world navigation structure for a development agency</li>
          </ul>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">📚 Professional Documentation Navigation</h2>
        <p className="demo-description">
          Example of a multi-level menu for a documentation site:
        </p>
        <div className="nav-demo">
          <NavLinks 
            links={
              [
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
              ]
            }
            baseLinkStyle={{ 
              listStyle: 'none',
              display: 'flex',
              gap: '25px',
              margin: 0,
              padding: 0,
              alignItems: 'center'
            }}
            subLinkStyle={{
              backgroundColor: '#34495e',
              padding: '12px',
              borderRadius: '6px',
              minWidth: '220px',
              zIndex: 1000,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              border: '1px solid #495057'
            }}
          />
        </div>
        <div className="code-block">
{`// Professional multi-level menu example for documentation site
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
/>`}
        </div>
      </div>

      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 0', 
        color: '#7f8c8d',
        borderTop: '1px solid #ecf0f1',
        marginTop: '40px'
      }}>
        <p>
          📦 <strong>asafarim-navlinks</strong> v2.2.0 - Built with ❤️ by Ali Safari
        </p>
        <p>
          <a 
            href="https://github.com/AliSafari-IT/asafarim-navlinks" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#3498db', textDecoration: 'none' }}
          >
            📚 View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
