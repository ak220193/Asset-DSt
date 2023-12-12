import './App.css';
import Login from './Pages/Login';
import Mainpage from './Pages/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import New from './Pages/Newpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/New" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
