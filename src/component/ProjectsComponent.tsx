import { FolderGit, GitBranch, GitCommitHorizontal } from 'lucide-react';
import { Typography } from './typography';

interface ProjectsComponentProps {
  name: string;
  description: string;
  languageUsed: string;
}

export const ProjectsComponent = ({
  name,
  description,
  languageUsed,
}: ProjectsComponentProps) => {
  return (
    <div className="flex flex-col border justify-between w-80 h-56 border-primary rounded-md p-4">
      <div className="flex gap-2">
        <FolderGit className="text-primary size-5" />
        <GitBranch className="text-primary size-5" />
        <GitCommitHorizontal className="text-primary size-5" />
      </div>
      <Typography elementType="h1" className="text-muted text-lg font-semibold">
        {name}
      </Typography>
      <Typography elementType="p" className="text-muted text-md font-normal">
        {description}
      </Typography>
      <Typography
        elementType="p"
        className="text-neutral-400 text-sm font-semibold"
      >
        {languageUsed}
      </Typography>
    </div>
  );
};
