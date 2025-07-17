import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from './pages/HomePage.jsx';
import RateWisePage from './pages/RateWisePage.jsx';
import PlantKeeperPage from './pages/PlantKeeperPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: '/RateWise',
    element:<RateWisePage></RateWisePage>
  },
  {
    path: '/PlateKeeper',
    element:<PlantKeeperPage></PlantKeeperPage>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
