import { Outlet } from 'react-router';
import { LinkMenu } from './LinkMenu';

export function DefaultLayout() {
  return (
    <section className="flex min-h-screen">
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

      <main className="flex-1 mt-16 p-6 mx-auto overflow-x-hidden">
        <Outlet />
      </main>
    </section>
  );
}
