import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import WatchesPage from './pages/WatchesPage';
import NoviSatPage from './pages/NoviSatPage';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registracija" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/novi-sat" element={<NoviSatPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;