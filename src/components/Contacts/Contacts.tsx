import React from 'react';
import './Contacts.scss';
import { Button } from '../Button/Button';

export const Contacts = () => {
  return (
    <section className="contacts" id="contact">
      <div className="contacts_title">Let&apos;s Build Something Great</div>
      <p className="contacts_description">
        Share your idea, timeline, and goals — we&apos;ll come back with a focused proposal and the right next steps.
      </p>
      <div className="contacts_content">
        <form className="contacts_content-form">
          <input aria-label="Full name" placeholder="Full name" type="text" name="name" />
          <input type="tel" aria-label="Phone number" placeholder="Phone number" name="phone" required />
          <input type="email" aria-label="Email address" placeholder="Email address" name="email" required />
          <input
            type="text"
            aria-label="Project type"
            placeholder="Project type or service"
            name="service"
          />
          <textarea aria-label="Project details" placeholder="Tell us about your project" required />
        </form>
        <div className="contacts_content-gallery"></div>
      </div>
      <div className="contacts_content-check">
        <label className="contacts_agr">
          <input type="checkbox" />
          <span>I agree to the processing of my personal data and the privacy policy.</span>
        </label>
      </div>
      <Button containerClass="contacts_button" content="Send Request" arrowSide="right" />
    </section>
  );
};
