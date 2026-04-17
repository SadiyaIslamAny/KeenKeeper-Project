import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';
import Home from './Pages/HomePage/Home';
import Timeline from './Pages/TimelinePage/Timeline';
import Stats from './Pages/StatsPage/Stats';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import FriendDetails from './Pages/FriendDetails/FriendDetails';
import TimeLineProvider from './Context/TimeLineProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/:id",
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path:"/stats",
        Component: Stats,
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router} />
    </TimeLineProvider>
      
  </StrictMode>,
)
