import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Users, Heart, MapPin, CheckCircle, Phone, Mail, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useInView } from '../components/hooks/useInView';

export function ChildrensHome() {
  const { ref: contentRef, isInView: isContentInView } = useInView();

  const features = [
    'Experienced and trained care staff',
    'Safe, homely environments',
    'Individual care and support plans',
    'Educational support and advocacy',
    'Therapeutic activities and programs',
    'Health and wellbeing monitoring',
    'Social skills development',
    'Family contact facilitation',
    'Recreation and leisure activities',
    '24/7 supervision and support',
    'Safeguarding procedures',
    'Regular inspections and reviews'
  ];

  const ageGroups = [
    {
      title: 'Ages 11-14',
      description: 'Specialized care for early adolescents with focus on education, emotional development, and building healthy relationships',
      icon: Heart
    },
    {
      title: 'Ages 15-18',
      description: 'Preparing older teenagers for independence with life skills training, educational support, and transition planning',
      icon: Users
    }
  ];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Comfortable home living area'
    },
    {
      url: 'https://images.unsplash.com/photo-1770866942411-3a64ce41a609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlJTIwaG9tZSUyMGRpbmluZyUyMHJvb218ZW58MXx8fHwxNzcyMDU5MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Shared dining area'
    },
    {
      url: 'https://images.unsplash.com/photo-1760540167216-00b806b5aeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNhcmUlMjBob21lJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyMDU5MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Residential care home exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGJlZHJvb20lMjBhY2NvbW1vZGF0aW9ufGVufDF8fHx8MTc3MjA1OTE4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Bedroom facility'
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{ backgroundColor: '#E91E63' }}
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
                <Users className="h-5 w-5 text-[#F5A623]" />
                <span className="text-sm">Children's Home</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontWeight: 700 }}>
                Nurturing{' '}
                <span className="text-[#F5A623]">Every Child's</span>{' '}
                Future
              </h1>
              <p className="text-lg text-pink-100 leading-relaxed">
                Providing exceptional care and support for children aged 11-18 in safe, 
                nurturing home environments where they can thrive and grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children's home living area"
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
                About Our Children's Home
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Caccou Family Services operates registered children's homes providing care and support 
                for children aged 11-18 years. Our homes offer a safe, stable, and nurturing environment 
                where children can develop, learn, and prepare for their future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We understand that every child is unique, with their own needs, experiences, and aspirations. 
                Our dedicated team works tirelessly to provide person-centred care that promotes wellbeing, 
                education, and positive development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                All our homes are registered with Ofsted and meet the highest standards of care. We work 
                in partnership with local authorities, families, and other professionals to ensure the best 
                outcomes for the children in our care.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl mb-6" style={{ fontWeight: 600, color: '#E91E63' }}>
                Our Comprehensive Care Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.04 }}
                    className="flex items-start gap-3 bg-pink-50 p-4 rounded-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-[#E91E63] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
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
              Age-Appropriate Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored support programs designed for different developmental stages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ageGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <group.icon className="h-8 w-8 text-[#E91E63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, color: '#E91E63' }}>
                  {group.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Gallery */}
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
                <MapPin className="h-6 w-6 text-[#E91E63]" />
                <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 700, color: '#4A1D6B' }}>
                  Our Homes & Locations
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our children's homes are located in carefully selected residential areas that provide 
                safe, peaceful environments conducive to children's development and wellbeing. Each home 
                is designed to feel warm and welcoming, with comfortable spaces for living, learning, and playing.
              </p>
              <div className="bg-purple-50 border-l-4 border-[#E91E63] p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-[#E91E63] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ofsted Registered & Regulated</h4>
                    <p className="text-gray-700">
                      All our children's homes are registered with and regularly inspected by Ofsted 
                      to ensure we maintain the highest standards of care and safeguarding.
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
              <h3 className="text-2xl mb-6" style={{ fontWeight: 600, color: '#E91E63' }}>
                Our Facilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg aspect-video"
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
      <section className="py-16 md:py-20" style={{ backgroundColor: '#E91E63' }}>
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
              Learn More About Our Children's Home
            </h2>
            <p className="text-lg text-pink-100 mb-8">
              Contact us to discuss how we can support children in your care or to arrange a visit to one of our homes
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
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#E91E63] rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
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