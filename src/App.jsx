import { Routes, Route } from 'react-router-dom'
import PortfolioLayout from './components/PortfolioLayout'
import HomePage from './pages/HomePage'
import SellerPlatformPage from './pages/SellerPlatformPage'
import RepSalesAppPage from './pages/RepSalesAppPage'
import ConverterPage from './pages/ConverterPage'
import InvDsPage from './pages/InvDsPage'
import SignUpPage from './pages/SignUpPage'
import RestfulApiGoPage from './pages/RestfulApiGoPage'
import DietPage from './pages/DietPage'
import DietMealPage from './pages/DietMealPage'

export default function App() {
  return (
    <>
      <Routes>
      {/* Portfolio pages with home layout */}
      <Route element={<PortfolioLayout variant="home" />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Portfolio pages with inner layout */}
      <Route element={<PortfolioLayout variant="inner" />}>
        <Route path="/projects/seller-platform" element={<SellerPlatformPage />} />
        <Route path="/projects/rep-sales-app" element={<RepSalesAppPage />} />
        <Route path="/projects/converter" element={<ConverterPage />} />
        <Route path="/projects/inv-ds" element={<InvDsPage />} />
        <Route path="/writing/sign-up" element={<SignUpPage />} />
        <Route path="/writing/restful-api-go" element={<RestfulApiGoPage />} />
      </Route>

      {/* Diet pages (standalone, no portfolio layout) */}
      <Route path="/diet" element={<DietPage />} />
      <Route path="/diet/:mealId" element={<DietMealPage />} />
      </Routes>
    </>
  )
}
