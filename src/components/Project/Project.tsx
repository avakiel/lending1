import { useState } from 'react';
import './Project.scss';
import { ProjectGallery } from './ProjectGallery/ProjectGallery';
import { ProjectMain } from './ProjectMain/ProjectMain';
import img1 from '../../img/pr_1.png';
import img2 from '../../img/pr_2.png';
import img3 from '../../img/pr_3.jpg';

const projects = [
  {
    title: 'Skyline Residence',
    category: 'Featured project',
    image: img1,
    alt: 'Bright modern living area with refined finishes',
  },
  {
    title: 'Atelier Workspace',
    category: 'Design strategy',
    image: img2,
    alt: 'Minimal office interior with layered lighting',
  },
  {
    title: 'Harbor Loft',
    category: 'Interior concept',
    image: img3,
    alt: 'Contemporary loft interior with sculptural furniture',
  },
];

export const Project = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (num: number) => {
    if (num > 0) {
      if (page < projects.length) {
        setPage((curr) => curr + 1);
      } else {
        setPage(1);
      }
    } else if (num < 0) {
      if (page > 1) {
        setPage((curr) => curr - 1);
      } else {
        setPage(projects.length);
      }
    }
  };

  return (
    <section className="project" id="home">
      <div className="project_main">
        <ProjectMain
          projects={projects}
          currentPage={page}
          totalPage={projects.length}
          handleChangePage={handleChangePage}
        />
      </div>
      <div className="project_gallery">
        <ProjectGallery project={projects[page - 1]} />
      </div>
    </section>
  );
};
