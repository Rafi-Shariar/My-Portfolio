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
import 'aos/dist/aos.css';
import Aos from 'aos';
import WedlynPage from './pages/WedlynPage.jsx';
import ShareGearPage from './pages/ShareGearPage.jsx';

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
  },
  {
    path:'/Wedlyn',
    element:<WedlynPage></WedlynPage>
  },
  {
    path:'/ShareGear',
    element:<ShareGearPage></ShareGearPage>
  },
]);

 Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
