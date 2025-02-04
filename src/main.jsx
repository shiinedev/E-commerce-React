import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routerProvider = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/about",
      element:<About />,
      },
      {
        path:"/cart",
      element:<Cart />,
      },
      {
        path:"/contact",
      element:<Contact />,
      },
      {
        path:"/products",
      element:<Products />,
      },
      {
        path:"/product-details/:id",
      element:<Product />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={routerProvider}/>
  </StrictMode>,
)
