import './App.css';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardMain from './Pages/DashboardMain/DashboardMain';
import EastAssets from './Pages/EastAssets/EastAssets';
import SPlantFacilities from './Pages/SPlantFacilities/SPlantFacilities';
import SPlantSatComCompresssion from './Pages/SPlantSatComCompresssion/SPlantSatComCompresssion';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      {/* <Sidebar/>
      <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardMain" element={<DashboardMain />} />
        <Route path="/east-assets" element={<EastAssets />} />
        <Route path="/s-plant-facilities-assets" element={<SPlantFacilities />} />
        <Route path="/s-plant-sat-com-compression" element={<SPlantSatComCompresssion />} />
      </Routes>
    </Router>
  );
}

export default App;
