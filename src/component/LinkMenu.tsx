import { BadgeCheck, FolderKanban } from 'lucide-react';
import { Link, type LinkProps } from 'react-router';

const iconsMenu = {
  projects: FolderKanban,
  certificate: BadgeCheck,
};

type IconsMenu = keyof typeof iconsMenu;

interface LinkMenuProps extends LinkProps {
  icon: IconsMenu;
  label: string;
}

export const LinkMenu = ({ icon, label, ...props }: LinkMenuProps) => {
  const IconTag = iconsMenu[icon];

  return (
    <div className="flex gap-2">
      <IconTag className="text-primary" />
      <Link {...props} className="text-primary">
        {label}
      </Link>
    </div>
  );
};
