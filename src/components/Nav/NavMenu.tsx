import React from 'react';
import './NavMenu.scss';

interface NavMenuProps {
  containerClass?: string;
  itemsClass?: string;
  onItemClick?: () => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const NavMenu: React.FC<NavMenuProps> = ({
  containerClass,
  itemsClass,
  onItemClick,
}) => {
  return (
    <nav className={`nav ${containerClass || ''}`.trim()} aria-label="Primary navigation">
      {navItems.map(({ label, href }) => (
        <a
          key={href}
          className={`nav__item ${itemsClass || ''}`.trim()}
          href={href}
          onClick={onItemClick}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};
