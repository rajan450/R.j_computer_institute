import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';

export function LocationSection() {
  return (
    <Section bg="white" id="location">
      <SectionHeader 
        title="Visit Us" 
        subtitle="OUR LOCATION" 
        centered={false} 
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left - Address */}
        <div className="lg:col-span-4 bg-brand-light p-8 rounded-[40px] h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-brand-text mb-4">R.J Computer Institute</h3>
            <div className="flex items-start gap-3 text-brand-muted mb-8">
              <MapPin className="w-5 h-5 shrink-0 mt-1 text-brand-primary" />
              <p className="leading-relaxed">
                Tarna Bazar, Shivpur,<br />
                Varanasi, Uttar Pradesh 221003
              </p>
            </div>
            
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 bg-white">
                <Navigation className="w-4 h-4" /> Get Directions
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border">
            <h4 className="font-semibold text-brand-text mb-4 uppercase tracking-wider text-sm">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-brand-text">Monday - Saturday</span>
                <span className="text-brand-muted">7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-brand-text">Sunday</span>
                <span className="text-red-500 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="lg:col-span-8 h-[400px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden border border-gray-100 bg-gray-100 relative shadow-sm">
          {/* We are using an iframe map embed. For real app, use Google Maps API or a valid embed URL. */}
          <iframe 
            src="https://maps.google.com/maps?q=R.J%20Computer%20Institute,%20Tarna%20Bazar,%20Shivpur,%20Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          
          {/* Custom Overlay Card to match mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-sm w-11/12">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
               <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-brand-text text-sm mb-1">R.J Computer Institute</h5>
              <p className="text-xs text-brand-muted">Tarna Bazar, Shivpur, Varanasi, Uttar Pradesh 221033</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-300 ml-auto shrink-0" />
          </div>
        </div>
      </div>
    </Section>
  );
}
