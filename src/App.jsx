import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Correct import paths for components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Correct import paths for screens
import HomePage from './screens/HomePage';
// import AboutPage from './screens/AboutPage';
// import ServicesPage from './screens/ServicesPage';
// import TeamPage from './screens/TeamPage';
// import ContactPage from './screens/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;