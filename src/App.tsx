import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import GeneratorDashboard from './pages/generator/Dashboard'
import GeneratorNewCollection from './pages/generator/NewCollection'
import GeneratorCollections from './pages/generator/Collections'
import GeneratorTracking from './pages/generator/Tracking'
import GeneratorReports from './pages/generator/Reports'
import GeneratorImpact from './pages/generator/Impact'
import GeneratorPayments from './pages/generator/Payments'
import OperatorDashboard from './pages/operator/Dashboard'
import OperatorOrders from './pages/operator/Orders'
import OperatorVehicles from './pages/operator/Vehicles'
import RecyclerDashboard from './pages/recycler/Dashboard'
import RecyclerMarketplace from './pages/recycler/Marketplace'
import AdminDashboard from './pages/admin/Dashboard'
import AdminVerify from './pages/admin/Verify'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/generator" element={<Navigate to="/generator/dashboard" replace />} />
        <Route path="/generator/dashboard" element={<GeneratorDashboard />} />
        <Route path="/generator/collections" element={<GeneratorCollections />} />
        <Route path="/generator/new-collection" element={<GeneratorNewCollection />} />
        <Route path="/generator/tracking" element={<GeneratorTracking />} />
        <Route path="/generator/reports" element={<GeneratorReports />} />
        <Route path="/generator/impact" element={<GeneratorImpact />} />
        <Route path="/generator/payments" element={<GeneratorPayments />} />
        <Route path="/operator" element={<Navigate to="/operator/dashboard" replace />} />
        <Route path="/operator/dashboard" element={<OperatorDashboard />} />
        <Route path="/operator/orders" element={<OperatorOrders />} />
        <Route path="/operator/vehicles" element={<OperatorVehicles />} />
        <Route path="/recycler" element={<Navigate to="/recycler/dashboard" replace />} />
        <Route path="/recycler/dashboard" element={<RecyclerDashboard />} />
        <Route path="/recycler/marketplace" element={<RecyclerMarketplace />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/verify" element={<AdminVerify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
