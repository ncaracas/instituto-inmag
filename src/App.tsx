import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ParceriasProjetos from './pages/ParceriasProjetos';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcerias-projetos" element={<ParceriasProjetos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
