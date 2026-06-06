import { Outlet } from 'react-router';
import { LinkMenu } from './LinkMenu';

export function DefaultLayout() {
  return (
    <main className="flex min-h-screen">
      <nav className="w-40 border-r border-primary/40 p-4">
        <div className="flex flex-col gap-2">
          <LinkMenu to="/projects" label="Projetos" icon="projects" />
          <LinkMenu
            to="/certificates"
            label="Certificados"
            icon="certificate"
          />
        </div>
      </nav>

      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </main>
  );
}
