import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';

interface AdmissionFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  course: string;
  message: string;
}

export function AdmissionSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<AdmissionFormData>();

  const onSubmit = (data: AdmissionFormData) => {
    // In a real app, this would send an API request
    console.log('Form submitted:', data);
    alert('Thank you for your application. We will contact you soon.');
  };

  return (
    <Section bg="light" id="admission">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-brand-primary rounded-[40px] p-8 lg:p-12 text-white flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-md text-sm font-semibold mb-6 w-max">
            <MessageSquare className="w-4 h-4" /> ADMISSION APPLICATION
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey<br />
            With Us Today!
          </h2>
          
          <p className="text-white/80 mb-10 text-lg">
            Fill the application form and our admission team will contact you shortly to guide you through the process.
          </p>

          <div className="space-y-4">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors border border-white/20"
            >
              <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L1.92 22.062l5.242-1.374a9.964 9.964 0 004.85 1.258h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.92-7.065A9.945 9.945 0 0012.012 2zm0 18.006h-.003a8.272 8.272 0 01-4.218-1.144l-.302-.18-3.136.822.84-3.056-.197-.314A8.254 8.254 0 013.684 11.984C3.685 7.42 7.4 3.704 11.968 3.704c2.213.001 4.29.863 5.854 2.427a8.242 8.242 0 012.428 5.854c-.001 4.564-3.715 8.281-8.282 8.281z" fillRule="evenodd" clipRule="evenodd" />
                <path d="M16.592 14.195c-.25-.125-1.486-.734-1.716-.818-.23-.083-.398-.125-.565.125-.167.25-.65.818-.797.985-.148.167-.297.188-.547.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.252-1.487-1.4-1.737-.148-.25-.015-.386.11-.51.112-.112.25-.292.375-.438.125-.147.167-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.565-1.363-.775-1.867-.204-.492-.412-.425-.565-.433-.147-.008-.315-.008-.482-.008-.167 0-.44.063-.67.313-.23.25-.882.862-.882 2.1 0 1.238.903 2.436 1.028 2.604.125.167 1.775 2.71 4.3 3.797.6.258 1.068.412 1.433.527.604.192 1.154.165 1.587.1.483-.073 1.486-.607 1.696-1.194.21-.587.21-1.09.148-1.194-.063-.105-.23-.167-.482-.292z" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-lg">Chat on WhatsApp</span>
            </a>
            
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors border border-white/20"
            >
              <PhoneCall className="w-6 h-6" />
              <span className="font-medium text-lg">Call Us Now</span>
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-brand-text mb-2">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  {...register("fullName", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                />
                {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-brand-text mb-2">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                />
                {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-brand-text mb-2">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  type="date"
                  {...register("dateOfBirth", { required: "Date of birth is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
                />
                {errors.dateOfBirth && <span className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-text mb-2">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Enter your full address"
                {...register("address", { required: "Address is required" })}
                className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
              />
              {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-brand-text mb-2">Course of Interest</label>
              <select
                id="course"
                {...register("course", { required: "Please select a course" })}
                className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
              >
                <option value="">Select course</option>
                <option value="Basic Computer">Basic Computer</option>
                <option value="DCA">DCA</option>
                <option value="ADCA">ADCA</option>
                <option value="DFA">DFA</option>
                <option value="Tally">Tally</option>
                <option value="Web Development">Web Development</option>
              </select>
              {errors.course && <span className="text-red-500 text-xs mt-1">{errors.course.message}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <Button type="submit" className="w-full gap-2 text-lg py-4" size="lg">
              Submit Application <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
