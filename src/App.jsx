import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Temp from './components/Temp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tmp" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
