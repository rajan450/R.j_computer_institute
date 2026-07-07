import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { GallerySection } from '../components/home/GallerySection';
import { AdmissionSection } from '../components/home/AdmissionSection';
import { LocationSection } from '../components/home/LocationSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // slight delay to allow rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FeaturesSection />
      <ReviewsSection />
      <GallerySection />
      <AdmissionSection />
      <LocationSection />
    </div>
  );
}

