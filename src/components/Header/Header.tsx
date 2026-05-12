import React, { useEffect, useState } from 'react';
import './Header.scss';
import { NavMenu } from '../Nav/NavMenu';
import { Burger } from '../BurgerMenu/Burger';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <a href="#home" className="header__content-logo" aria-label="Digital Project home"></a>
        {isMobile ? (
          <Burger />
        ) : (
          <NavMenu containerClass="header__nav" itemsClass="header__nav__item" />
        )}
      </div>
    </header>
  );
};
