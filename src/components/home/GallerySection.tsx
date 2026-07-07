import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { gallery } from '../../data/mockData';

export function GallerySection() {
  return (
    <Section bg="white" id="gallery">
      <SectionHeader 
        title="Our Gallery" 
        subtitle="OUR GALLERY" 
        centered={false} 
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {gallery.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm cursor-pointer"
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-white font-semibold text-lg">{image.title}</h4>
              <span className="text-white/80 text-sm font-medium">{image.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
