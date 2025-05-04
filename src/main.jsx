import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import FarmerInformation from './Pages/FarmerInformation.jsx'
import Signup from './Pages/Signup.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SelectUserType from './Pages/SelectUserType.jsx'
import FarmerDashboard from './Pages/FarmerDashboard.jsx'
import AddProductForm from './Pages/AddProductForm.jsx'
import ShopkeeperPage from './Pages/ShopkeeperPage.jsx'
import FarmerGraphPage from './Pages/FarmerGraphpage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <SelectUserType /> },
      {path:'/login',element : <Signup />},
      {path : '/farmerDashboard', element : <FarmerDashboard />},
      {path : '/addProduct',element : <AddProductForm />},
      { path: '/FarmerInformation', element: <FarmerInformation /> },
      { path: '/Home', element: <Home /> },
      {path : '/shopkeeper' , element : <ShopkeeperPage />},
      {path : '/farmerGraph',element : <FarmerGraphPage />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
