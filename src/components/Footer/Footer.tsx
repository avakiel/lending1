import React from 'react';
import './Footer.scss';
import { NavMenu } from '../Nav/NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faPinterest,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { icon: faFacebookF, href: 'https://www.facebook.com', label: 'Facebook' },
  { icon: faTwitter, href: 'https://www.twitter.com', label: 'Twitter' },
  { icon: faLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: faPinterest, href: 'https://www.pinterest.com', label: 'Pinterest' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__main-logo"></div>
        <div className="footer__main-menu">
          <p>Navigation</p>
          <NavMenu
            containerClass="footer__main-menu-nav"
            itemsClass="footer__main-menu-item"
          />
        </div>
        <div className="footer__main-contacts">
          <p>Contact</p>
          <div className="footer__main-contacts-adress contacts__content">
            <div className="logo"></div>
            <a
              href="https://www.google.com/maps?q=220+West+19th+Street,+New+York,+NY+10011"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                220 West 19th Street, <br /> New York, NY 10011
              </p>
            </a>
          </div>
          <div className="footer__main-contacts-tel contacts__content">
            <div className="logo"></div>
            <a href="tel:+12125550184">+1 (212) 555-0184</a>
          </div>
          <div className="footer__main-contacts-email contacts__content">
            <div className="logo"></div>
            <a href="mailto:hello@digitalproject.studio">hello@digitalproject.studio</a>
          </div>
        </div>
        <div className="footer__main-media">
          <p>Follow Us</p>
          <div>
            {socialLinks.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <FontAwesomeIcon icon={icon} style={{ color: 'white', height: '20px', cursor: 'pointer' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__add">
        <div className="footer__add-text">© 2026 Digital Project Studio. All rights reserved.</div>
      </div>
    </footer>
  );
};
