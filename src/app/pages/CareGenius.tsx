import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Heart, Clock, Home, MapPin, CheckCircle, Phone, Mail, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useInView } from '../components/hooks/useInView';

export function CareGenius() {
  const { ref: contentRef, isInView: isContentInView } = useInView();

  const features = [
    'Personal care and hygiene support',
    'Medication management',
    'Meal preparation and nutrition',
    'Domestic assistance',
    'Companionship and emotional support',
    'Shopping and errands',
    'Appointments and transport',
    'Respite care for family carers',
    'Complex care needs',
    'End of life care',
    '24/7 care available',
    'CQC registered and regulated'
  ];

  const careServices = [
    {
      title: 'Adults 18-65',
      description: 'Supporting working-age adults with physical disabilities, learning disabilities, or long-term health conditions to live independently',
      age: '18-65 years',
      icon: Users,
      color: '#2E8B57'
    },
    {
      title: 'Seniors 65+',
      description: 'Compassionate care for older adults, helping them maintain independence, dignity, and quality of life in their own homes',
      age: '65+ years',
      icon: Heart,
      color: '#6B2D8B'
    },
    {
      title: 'Dementia Care',
      description: 'Specialist dementia care from trained professionals who understand the unique challenges and provide person-centred support',
      age: 'All ages',
      icon: Home,
      color: '#E91E63'
    }
  ];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1765896387403-3e6e0e44d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwc2VuaW9yJTIwY2l0aXplbnxlbnwxfHx8fDE3NzIwNTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Caregiver assisting elderly person'
    },
    {
      url: 'https://images.unsplash.com/photo-1603129473525-4cd6f36fe057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1lbnRpYSUyMGNhcmUlMjBlbGRlcmx5JTIwc3VwcG9ydHxlbnwxfHx8fDE3NzIwNTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Elderly care and support'
    },
    {
      url: 'https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Home care environment'
    }
  ];

  const locations = [
    'Harlow',
    'Chelmsford',
    'Colchester',
    'Basildon',
    'Southend-on-Sea',
    'Braintree',
    'Brentwood',
    'Castle Point'
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{ backgroundColor: '#2E8B57' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="h-5 w-5 text-[#F5A623]" />
                <span className="text-sm">Care Genius</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontWeight: 700 }}>
                Expert{' '}
                <span className="text-[#F5A623]">Domiciliary Care</span>{' '}
                Across Essex
              </h1>
              <p className="text-lg text-green-100 leading-relaxed">
                Professional home care services supporting independence and dignity for adults, 
                seniors, and those living with dementia across Essex.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765896387403-3e6e0e44d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwc2VuaW9yJTIwY2l0aXplbnxlbnwxfHx8fDE3NzIwNTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Caregiver providing domiciliary care"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20" ref={contentRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700, color: '#4A1D6B' }}>
                About Care Genius
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Care Genius is Caccou Family Services' domiciliary care division, providing high-quality 
                home care services across Essex. We believe that everyone deserves to live with dignity 
                and independence in the comfort of their own home, regardless of age or health condition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our team of experienced, compassionate caregivers delivers person-centred care that's 
                tailored to each individual's unique needs and preferences. Whether you need support 
                for a few hours a week or around-the-clock care, we're here to help.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are registered with the Care Quality Commission (CQC) and all our care staff are 
                fully trained, DBS checked, and committed to providing the highest standards of care.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl mb-6" style={{ fontWeight: 600, color: '#2E8B57' }}>
                Our Care Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.04 }}
                    className="flex items-start gap-3 bg-green-50 p-4 rounded-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-[#2E8B57] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Care Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700, color: '#4A1D6B' }}>
              Who We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized care for different age groups and care needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-sm mb-4" style={{ backgroundColor: `${service.color}15`, color: service.color, fontWeight: 600 }}>
                  {service.age}
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-[#2E8B57]" />
                <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 700, color: '#4A1D6B' }}>
                  Service Locations in Essex
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Care Genius provides domiciliary care services across Essex, bringing professional 
                care and support directly to your home. We currently serve the following areas:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {locations.map((location, index) => (
                  <motion.div
                    key={location}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="bg-green-50 border border-green-100 rounded-lg p-4 text-center"
                  >
                    <MapPin className="h-5 w-5 text-[#2E8B57] mx-auto mb-2" aria-hidden="true" />
                    <span className="text-gray-800 font-medium">{location}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-green-50 border-l-4 border-[#2E8B57] p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flexible Care Available 24/7</h4>
                    <p className="text-gray-700">
                      We offer flexible care packages from a few hours per week to live-in care. 
                      Our 24/7 support means help is always available when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl mb-6" style={{ fontWeight: 600, color: '#2E8B57' }}>
                Our Care in Action
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg aspect-square"
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#2E8B57' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Heart className="h-16 w-16 text-[#F5A623] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
              Start Your Care Journey with Care Genius
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Contact us for a free, no-obligation assessment and discover how our domiciliary care 
              services can support you or your loved ones to live independently at home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447459530293"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#F5A623] hover:bg-[#E09000] text-[#2D1B4E] rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-[#F5A623]/50"
                style={{ fontWeight: 600 }}
              >
                <Phone className="h-5 w-5" />
                07459 530293
              </a>
              <a
                href="mailto:info@caccou.co.uk"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#2E8B57] rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
                style={{ fontWeight: 600 }}
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}