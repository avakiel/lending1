import { Button } from '../../Button/Button';
import './ProjectMain.scss';

interface ProjectSummary {
  title: string;
  category: string;
}

interface ProjectMainProps {
  currentPage: number;
  totalPage: number;
  projects: ProjectSummary[];
  handleChangePage: (num: number) => void;
}

export const ProjectMain: React.FC<ProjectMainProps> = ({
  projects,
  currentPage,
  totalPage,
  handleChangePage,
}) => {
  const currentProject = projects[currentPage - 1];

  return (
    <div className="projectMain">
      <div className="projectMain__title">
        <p className="projectMain__title-main">Featured</p>
        <span className="projectMain__title-text">{currentProject.title}</span>
        <p className="projectMain__title-label">{currentProject.category}</p>
      </div>
      <div className="projectMain__controlls">
        <button
          type="button"
          className="projectMain__controlls-trigger"
          onClick={() => handleChangePage(-1)}
          aria-label="Show previous project"
        >
          <Button arrowSide="left" containerClass="projectMain__controlls-button" />
        </button>
        <button
          type="button"
          className="projectMain__controlls-trigger line"
          onClick={() => handleChangePage(1)}
          aria-label="Show next project"
        >
          <Button arrowSide="right" containerClass="projectMain__controlls-button" />
        </button>
      </div>
      <div className="projectMain__pages">
        <span className="projectMain__pages-current">
          {currentPage < 10 ? `0${currentPage}` : currentPage}
        </span>
        <span className="projectMain__pages-divide"></span>
        <span className="projectMain__pages-total">
          {totalPage < 10 ? `0${totalPage}` : totalPage}
        </span>
      </div>
    </div>
  );
};
