import { Navigate, Route, Routes } from "react-router-dom"
import { ClientDetails } from "../pages/ClientDetails"
import { Dashboard } from "../pages/Dashboard"
import { ServiceDetails } from "../pages/ServiceDetails"
import { ListService } from "../pages/ListService"
import { ListClient } from "../pages/ListClient"

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/services" element={<ListService />} />
      <Route path="/services/details" element={<ServiceDetails />} />
      
      <Route path="/clients" element={<ListClient />} />
      <Route path="/clients/details" element={<ClientDetails />} />

      <Route path="*" element={<Navigate to="/home"/>} />
    </Routes>
  )
}