import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import FarmerDashboard from "../modules/farmer/FarmerDashboard";
import BuyerDashboard from "../modules/buyer/BuyerDashboard";
import TransportDashboard from "../modules/transport/TransportDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<FarmerDashboard />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route path="/transport" element={<TransportDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
