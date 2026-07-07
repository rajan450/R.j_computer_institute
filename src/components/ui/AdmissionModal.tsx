import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface AdmissionFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  course: string;
  message: string;
}

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AdmissionFormData>();

  const onSubmit = (data: AdmissionFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for your application. We will contact you soon.');
    reset();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] shadow-xl w-full max-w-2xl overflow-hidden pointer-events-auto my-8 relative"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-[#f8fafc]">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F172A]">Admission Application</h2>
                  <p className="text-sm text-gray-500 mt-1">Fill out the form below to apply for a course.</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="modal-fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <input
                        id="modal-fullName"
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName", { required: "Name is required" })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                      {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
                    </div>
                    
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        id="modal-email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>

                    <div>
                      <label htmlFor="modal-phoneNumber" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        id="modal-phoneNumber"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phoneNumber", { required: "Phone number is required" })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                      {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
                    </div>

                    <div>
                      <label htmlFor="modal-dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth</label>
                      <input
                        id="modal-dateOfBirth"
                        type="date"
                        {...register("dateOfBirth", { required: "Date of birth is required" })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                      />
                      {errors.dateOfBirth && <span className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-address" className="block text-sm font-semibold text-gray-700 mb-1.5">Address</label>
                    <input
                      id="modal-address"
                      type="text"
                      placeholder="Enter your full address"
                      {...register("address", { required: "Address is required" })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                    {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="modal-course" className="block text-sm font-semibold text-gray-700 mb-1.5">Course of Interest</label>
                    <select
                      id="modal-course"
                      {...register("course", { required: "Please select a course" })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a course</option>
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
                    <label htmlFor="modal-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message (Optional)</label>
                    <textarea
                      id="modal-message"
                      rows={3}
                      placeholder="Any specific questions or requirements..."
                      {...register("message")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full gap-2 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl">
                      Submit Application <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
