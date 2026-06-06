import { ProjectsComponent } from '../component/ProjectsComponent';
import { projects } from '../constants/projects';

export const Projects = () => {
  return (
    <section className="grid grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <ProjectsComponent
          key={`${project.projectName}_${index}`}
          name={project.projectName}
          description={project.description}
          languageUsed={project.language}
        />
      ))}
    </section>
  );
};
