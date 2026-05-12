import React from 'react';
import './MainTasks.scss';

const priorities = [
  'Create thoughtful spaces that feel intuitive, welcoming, and easy to use from day one.',
  'Raise project value through disciplined planning, close collaboration, and detail-led execution.',
];

export const MainTasks = () => {
  return (
    <section className="mainTasks" id="services">
      <div className="mainTasks__title">Core Priorities</div>
      <div className="mainTasks__option">
        {priorities.map((text, index) => (
          <div key={text} className={`mainTasks__option__${index === 0 ? 'one' : 'two'}`}>
            <div className={`mainTasks__option__${index === 0 ? 'one' : 'two'}-num`}>{index + 1}</div>
            <div className={`mainTasks__option__${index === 0 ? 'one' : 'two'}-text`}>{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
