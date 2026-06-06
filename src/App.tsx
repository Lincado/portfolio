import { createBrowserRouter, RouterProvider } from 'react-router';
import { Projects } from './pages/Projects';
import { DefaultLayout } from './component/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
