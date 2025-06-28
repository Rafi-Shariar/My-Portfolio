import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import RateWise from './Components/Projects/RateWise.jsx';
import PlantKeeper from './Components/Projects/PlantKeeper.jsx';
import JobNest from './Components/Projects/JobNest.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      { index:true, element:<HomePage></HomePage>},
      { path:'projects/ratewise', element:<RateWise></RateWise>},
      { path:'projects/plantKeeper', element:<PlantKeeper></PlantKeeper>},
      { path:'projects/JobNest', element:<JobNest></JobNest>}
    ]
  },
]);

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
