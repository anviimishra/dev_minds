import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import MedicalTranscriptUpload from './pages/Upload';
import Modules from './pages/Modules'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure you have a Home component */}
        <Route path="/upload" element={<MedicalTranscriptUpload />} />
        <Route path="/my-modules" element={<Modules />} />
      </Routes>
    </Router>
  );
};

export default App;
