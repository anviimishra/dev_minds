import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import MedicalTranscriptUpload from './pages/Upload';
import Modules from './pages/Modules'
import Rules from "./pages/EmotionCopyModule"
import EmotionsGame from "./pages/EmotionRecogModules"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure you have a Home component */}
        <Route path="/upload" element={<MedicalTranscriptUpload />} />
        <Route path="/my-modules" element={<Modules />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/emotionrecognition" element={<EmotionsGame />} />
      </Routes>
    </Router>
  );
};

export default App;
