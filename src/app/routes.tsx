import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { SupportedAccommodation } from './pages/SupportedAccommodation';
import { ChildrensHome } from './pages/ChildrensHome';
import { CareGenius } from './pages/CareGenius';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/supported-accommodation',
    Component: SupportedAccommodation,
  },
  {
    path: '/childrens-home',
    Component: ChildrensHome,
  },
  {
    path: '/care-genius',
    Component: CareGenius,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
