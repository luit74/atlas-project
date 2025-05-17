import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// app layout import
import { AppLayout } from './components/layouts/AppLayout'

// pages import
import { Home } from './pages/home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Country } from './pages/Country'
import { ErrorPage } from './pages/ErrorPage'
import { CountryDetails } from './components/layouts/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
  
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
