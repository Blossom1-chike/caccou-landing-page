import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router';
import caccouLogo from 'figma:asset/a6e0109a659701037fd4498c796361385adccd80.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    if (sectionId === 'home') {
      if (!isHomePage) {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#4A1D6B] text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-0">
          <div className="flex items-center gap-3 md:gap-4">
            <a href="tel:+447459530293" className="flex items-center gap-1.5 hover:text-[#F5A623] transition-colors">
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="whitespace-nowrap">07459 530293</span>
            </a>
            <a href="mailto:info@caccou.co.uk" className="flex items-center gap-1.5 hover:text-[#F5A623] transition-colors">
              <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden md:inline">info@caccou.co.uk</span>
              <span className="md:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-purple-200">
            <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="whitespace-nowrap">Harlow, Essex</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-2.5 md:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavigation('home')}
              className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B2D8B] rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={caccouLogo}
                alt="Caccou Family Services"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavigation(item.id)}
                  className="relative text-gray-700 hover:text-[#6B2D8B] transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-[#6B2D8B] rounded px-2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6B2D8B] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleNavigation('contact')}
                  className="bg-[#6B2D8B] hover:bg-[#4A1D6B] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#6B2D8B] hover:bg-purple-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B2D8B]"
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-purple-100 bg-white"
            >
              <div className="container mx-auto px-4 py-5">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavigation(item.id)}
                      className="text-left text-gray-700 hover:text-[#6B2D8B] hover:bg-purple-50 active:bg-purple-100 transition-colors px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2D8B]"
                      style={{ fontWeight: 500 }}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.3,
                        ease: 'easeOut'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: navItems.length * 0.08, duration: 0.3 }}
                  >
                    <Button
                      onClick={() => handleNavigation('contact')}
                      className="bg-[#6B2D8B] hover:bg-[#4A1D6B] active:bg-[#3A0D5B] text-white w-full mt-3 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
                      style={{ fontWeight: 600 }}
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}