import './App.css';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      </Routes>
    </Router>
  );
}

export default App;
