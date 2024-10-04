import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import { AuthPage } from './pages/auth/index.jsx'
import AuthProvider from './context/auth-context/Index.jsx'






// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contactUs',
//         element: <Contact />
//       }
//     ]
//   }
// ])



// another method of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element = {<Layout/>}>
      <Route path="/auth-page" element={<AuthPage/>} />
    </Route>
   )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router ={router}/>
    </AuthProvider>
  </React.StrictMode>
  
  
)

// How to create router, there are two methods
// 

