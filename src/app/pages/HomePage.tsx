import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Contact } from '../components/Contact';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, Home as HomeIcon, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useInView } from '../components/hooks/useInView';
import { useEffect } from 'react';

export function HomePage() {
  const { ref: servicesRef, isInView: isServicesInView } = useInView();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      id: 'supported-accommodation',
      title: 'Supported Accommodation',
      description: 'Providing support-only accommodation to young people looked after by local authorities. Operating across the United Kingdom with quality 16+ and 18+ accommodation options.',
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1760067538068-03d10481bacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFjY29tbW9kYXRpb24lMjBob3VzZSUyMGJlZHJvb218ZW58MXx8fHwxNzcyMDU5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#6B2D8B',
      path: '/supported-accommodation'
    },
    {
      id: 'childrens-home',
      title: "Children's Home",
      description: 'Delivering exceptional care and support for children aged 11-18 in safe, nurturing home environments. Our dedicated team ensures every child thrives.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#E91E63',
      path: '/childrens-home'
    },
    {
      id: 'care-genius',
      title: 'Care Genius',
      description: 'Expert domiciliary care services across Essex for adults 18-65, seniors 65+, and specialized dementia care. Supporting independence and dignity at home.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1765896387403-3e6e0e44d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwc2VuaW9yJTIwY2l0aXplbnxlbnwxfHx8fDE3NzIwNTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#2E8B57',
      path: '/care-genius'
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 40%, #8B3DAB 70%, #6B2D8B 100%)',
        }}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#F5A623]/10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/3 -left-16 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/5"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, 30, 0],
              x: [0, -10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#F5A623]/5"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-xs md:text-sm mb-6 border border-white/20">
                Supporting Families into a Better Future
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight px-4"
              style={{ fontWeight: 700 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Welcome to{' '}
              <motion.span
                className="text-[#F5A623] inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Caccou Family Services
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl mb-10 text-purple-100 leading-relaxed max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              Providing comprehensive care and support services across the United Kingdom.
              From supported accommodation for young people to specialized care for children
              and elderly adults, we're here for you every step of the way.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F5A623] hover:bg-[#E09000] text-[#2D1B4E] rounded-full transition-all shadow-lg hover:shadow-xl"
                style={{ fontWeight: 600 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/60 text-white hover:bg-white hover:text-[#6B2D8B] rounded-full transition-all"
                style={{ fontWeight: 600 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-purple-100 text-[#6B2D8B] rounded-full text-sm mb-4"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isServicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              What We Offer
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 px-4" style={{ fontWeight: 700, color: '#4A1D6B' }}>
              Our Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our range of specialized care and support services designed to meet diverse needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isServicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={service.path}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#6B2D8B]/30 h-full"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to bottom, transparent, ${service.color})` }}
                      aria-hidden="true"
                    />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: service.color }}
                      aria-hidden="true"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl mb-3" style={{ fontWeight: 600, color: service.color }}>
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: service.color, fontWeight: 600 }}>
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
      <ScrollToTop />
    </div>
  );
}