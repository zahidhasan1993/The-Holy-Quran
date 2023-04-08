import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import ErrorPage from './components/error/ErrorPage';
import Home from './components/Home/Home';
import Quran from './components/Quran/Quran';
import FullSurah from './components/FullSurah/FullSurah';

const router =createBrowserRouter([
  {
    path : "/",
    element : <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "quran",
        element : <Quran></Quran>,
        loader : () => fetch('http://api.alquran.cloud/v1/quran/en.asad')
      },
      {
        path : "quran/:surahNo",
        element : <FullSurah></FullSurah>,
        loader : ({params}) => fetch(`http://api.alquran.cloud/v1/surah/${params.surahNo}/en.asad`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
