import { useEffect, useState } from 'react';
import '../BurgerMenu/Burger.scss';
import { NavMenu } from '../Nav/NavMenu';

export const Burger = () => {
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = useState('burger__menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = (nextState = !isMenuClicked) => {
    setBurgerClass(nextState ? 'burger-bar clicked' : 'burger-bar unclicked');
    setMenuClass(nextState ? 'burger__menu visible' : 'burger__menu hidden');
    document.body.style.overflow = nextState ? 'hidden' : 'auto';
    setIsMenuClicked(nextState);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="burger__container">
      <nav className="burger__container-burger" aria-label="Mobile navigation toggle">
        <button type="button" className="burger" onClick={() => updateMenu()} aria-expanded={isMenuClicked} aria-label="Toggle menu">
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </button>
      </nav>
      <div className={menuClass}>
        <NavMenu containerClass="burger__nav" onItemClick={() => updateMenu(false)} />
      </div>
    </div>
  );
};
