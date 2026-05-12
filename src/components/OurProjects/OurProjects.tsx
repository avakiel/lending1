import React from 'react';
import './OurProjects.scss';
import { Button } from '../Button/Button';

const featuredProjects = [
  {
    className: 'ourProjects__gallery__top-pic1',
    sizeClass: 'pic__content-big',
    category: 'Hospitality',
    title: 'Riverside Lounge',
  },
  {
    className: 'ourProjects__gallery__top-pic2',
    sizeClass: 'pic__content-big',
    category: 'Workplace',
    title: 'Apex Office Hub',
  },
  {
    className: 'ourProjects__gallery__bottom-pic1',
    sizeClass: 'pic__content-small',
    category: 'Retail',
    title: 'Forma Concept Store',
  },
  {
    className: 'ourProjects__gallery__bottom-pic2',
    sizeClass: 'pic__content-small',
    category: 'Residential',
    title: 'Harbor View Loft',
  },
  {
    className: 'ourProjects__gallery__bottom-pic3',
    sizeClass: 'pic__content-small',
    category: 'Public Space',
    title: 'Northline Pavilion',
  },
];

export default function OurProjects() {
  return (
    <section className="ourProjects" id="projects">
      <div className="ourProjects__title">Selected Projects</div>
      <div className="ourProjects__gallery">
        <div className="ourProjects__gallery__top">
          {featuredProjects.slice(0, 2).map((project) => (
            <div key={project.title} className={`${project.className} pic__content`}>
              <div className={`pic__content__main ${project.sizeClass}`}>
                <span>{project.category}</span>
                <div>{project.title}</div>
                <Button containerClass="pic__content__main-button" arrowSide="right" content="View Details" />
              </div>
            </div>
          ))}
        </div>
        <div className="ourProjects__gallery__bottom">
          {featuredProjects.slice(2).map((project) => (
            <div key={project.title} className={`${project.className} pic__content`}>
              <div className={`pic__content__main ${project.sizeClass}`}>
                <span>{project.category}</span>
                <div>{project.title}</div>
                <Button containerClass="pic__content__main-button" arrowSide="right" content="View Details" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button containerClass="ourProjects__button" content="View All Projects" arrowSide="right" />
    </section>
  );
}
