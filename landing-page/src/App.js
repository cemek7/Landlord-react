import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Your landing page component
import ExplorePage from './components/ExplorePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


import './index.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      </Routes>
  </Router>
  );
}

export default App;
