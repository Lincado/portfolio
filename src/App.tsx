import { createBrowserRouter, RouterProvider } from 'react-router';
import { Projects } from './pages/Projects';
import { DefaultLayout } from './component/DefaultLayout';
import { CertificadoPages } from './pages/CertificadosPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/certificates',
        element: <CertificadoPages />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
