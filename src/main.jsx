import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './components/Home/HomePage.jsx'
import AboutPageLayout from './components/About/AboutPage.jsx'
import ProductIdPageLayout from './components/ProductID/ProductId.jsx'
import NotFoundComponent from './components/PageNotFound/NotFound.jsx'
import ComingSoonPageLayout from './components/ComingSoonPage/ComingSoon.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/about',
    element: <AboutPageLayout />
  },
  {
    path: '/product/:id',
    element: <ProductIdPageLayout />
  },
  {
    path: '*',
    element: <ComingSoonPageLayout />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
