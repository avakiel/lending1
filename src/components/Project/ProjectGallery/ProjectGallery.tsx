import React from 'react';
import './ProjectGallery.scss';
import { Button } from '../../Button/Button';

interface ProjectGalleryProps {
  project: {
    image: string;
    alt: string;
  };
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  return (
    <div className="projectGallery">
      <img className="projectGallery-img" src={project.image} alt={project.alt} />
      <Button arrowSide="right" containerClass="projectGallery-button" content="View Case Study" />
    </div>
  );
};
