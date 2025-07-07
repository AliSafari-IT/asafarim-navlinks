import React, { useState } from 'react';
import NavLinks from 'asafarim-navlinks';
import { NavLinkType } from 'asafarim-navlinks';

interface MobileFrameProps {
  links: NavLinkType[];
  baseLinkStyle?: React.CSSProperties;
}

const MobileFrame: React.FC<MobileFrameProps> = ({ links, baseLinkStyle }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobile-frame">
      {/* X button that toggles the menu */}
      <button 
        className="mobile-close-btn"
        onClick={() => setShowMenu(!showMenu)}
        aria-label={showMenu ? "Close menu" : "Open menu"}
      >
        ✕
      </button>

      {/* The navigation component with mobile mode and collapsing enabled */}
      <NavLinks
        links={links}
        enableMobileCollapse={true}
        baseLinkStyle={{
          ...baseLinkStyle,
          display: showMenu ? 'block' : 'none',
        }}
      />
    </div>
  );
};

export default MobileFrame;
