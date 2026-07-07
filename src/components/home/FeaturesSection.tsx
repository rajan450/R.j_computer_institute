import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { features } from '../../data/mockData';
import * as Icons from 'lucide-react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export function FeaturesSection() {
  return (
    <>
      <Section bg="white" id="why-us" className="pb-12">
        <SectionHeader title="Why Students Choose RJ" centered />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[feature.icon] || Icons.CheckCircle;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-primary mb-4 border border-brand-border group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-brand-text mb-2 text-sm md:text-base">{feature.title}</h4>
                <p className="text-brand-muted text-xs md:text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Stats Strip */}
      <section className="bg-brand-dark py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="px-8 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest font-medium">Students Trained</div>
            </div>
            
            <div className="px-8 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest font-medium">Courses</div>
            </div>
            
            <div className="px-8 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest font-medium">Expert Teachers</div>
            </div>
            
            <div className="px-8 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest font-medium">Practical Learning</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
