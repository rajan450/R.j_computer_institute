import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import WhyUs from './pages/WhyUs';
import { AdmissionModal } from './components/ui/AdmissionModal';

// Placeholders for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
    <h1 className="text-3xl font-bold">{title} Page Coming Soon</h1>
  </div>
);

export default function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsAdmissionModalOpen(true);
    window.addEventListener('openAdmissionModal', handleOpenModal);
    return () => window.removeEventListener('openAdmissionModal', handleOpenModal);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<Placeholder title="Course Details" />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AdmissionModal 
          isOpen={isAdmissionModalOpen} 
          onClose={() => setIsAdmissionModalOpen(false)} 
        />
      </div>
    </Router>
  );
}
