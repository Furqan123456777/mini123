import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// import Public_Routes from './Public_Routes'
// import Private_Routes from './Private_Routes'
import Dashboard from './Screens/Dashboard'
import Signup from './Screens/Signup'
import Private_Routes from './Private_Routes'
import Public_Routes from './Screens/Config/Public_Routes'
import Login from './Screens/Login'
import Home from './Screens/Home'
// import Hotel from './Screens/Hotel'






const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Public_Routes />}>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
     
        </Route>
        <Route element={<Private_Routes />}>
        <Route path='/Dashboard' element={<Dashboard />}>




        </Route>
        </Route>
      </Route>
    )
  )


  const AppRouter = () => {
    return <RouterProvider router={router} />
  }
  
  export default AppRouter