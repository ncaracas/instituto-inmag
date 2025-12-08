import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import Footer from './components/Footer';
import ParceriasProjetos from './components/ParceriasProjetos';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/parcerias-projetos" element={<ParceriasProjetos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
