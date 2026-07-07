import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { openAdmissionModal } from '../../events';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white border-b border-gray-200 h-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-[40px] font-extrabold tracking-tight text-[#164bd8]">
              R.J
            </span>
            <div className="flex flex-col leading-tight text-[#0a1b4d] font-bold text-[15px] tracking-wide">
              <span>COMPUTER</span>
              <span>INSTITUTE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const currentPath = location.pathname + location.hash;
              const isActive = link.path === '/' 
                ? currentPath === '/' 
                : currentPath === link.path || (link.path !== '/' && !link.path.startsWith('/#') && location.pathname.startsWith(link.path));
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-[15px] font-bold transition-colors relative py-1 hover:text-[#164bd8]',
                    isActive ? 'text-[#164bd8]' : 'text-[#162145]'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1.5 h-[3px] bg-[#164bd8]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Button 
              onClick={openAdmissionModal}
              className="rounded-none px-6 py-2.5 bg-[#0e4ee4] hover:bg-[#0c40bd] flex items-center gap-2 text-sm text-white"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex xl:hidden p-2 text-white bg-[#0e4ee4] hover:bg-[#0c40bd] rounded-md shadow-md z-50 relative"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[80vw] bg-white z-50 xl:hidden shadow-2xl flex flex-col"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
                <span className="text-xl font-bold text-[#0a1b4d]">Menu</span>
                <button
                  className="p-2 text-[#162145] hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col px-6 py-8 gap-6 overflow-y-auto flex-grow">
                {NAV_LINKS.map((link) => {
                  const currentPath = location.pathname + location.hash;
                  const isActive = link.path === '/' 
                    ? currentPath === '/' 
                    : currentPath === link.path || (link.path !== '/' && !link.path.startsWith('/#') && location.pathname.startsWith(link.path));
                  
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'text-lg font-bold transition-colors flex items-center justify-between',
                        isActive ? 'text-[#164bd8]' : 'text-[#162145]'
                      )}
                    >
                      {link.name}
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#164bd8]" />}
                    </Link>
                  );
                })}
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openAdmissionModal();
                    }}
                    className="w-full rounded-none py-3.5 bg-[#0e4ee4] hover:bg-[#0c40bd] flex items-center justify-center gap-2 text-white font-semibold"
                  >
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
