import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    main: '07459 530293',
    sub: 'Mon–Fri: 8am – 6pm\nWeekend: On-call support',
    href: 'tel:+447459530293',
    color: '#6B2D8B',
  },
  {
    icon: Mail,
    title: 'Email',
    main: 'info@caccou.co.uk',
    sub: "We'll respond within 24 hours",
    href: 'mailto:info@caccou.co.uk',
    color: '#E91E63',
  },
  {
    icon: MapPin,
    title: 'Location',
    main: 'Harlow, Essex',
    sub: 'Serving Harlow and surrounding areas',
    href: undefined,
    color: '#2E8B57',
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    main: '24/7 Support',
    sub: 'For urgent care needs, contact us anytime',
    href: 'tel:+447459530293',
    color: '#F5A623',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const { ref, isInView } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAFAFE]">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#F3E8F9] text-[#6B2D8B] rounded-full text-xs md:text-sm mb-4"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2D1B4E] mb-4 px-4"
            style={{ fontWeight: 700 }}
          >
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about our care services? We're here to help. Contact us
            today for a free, no-obligation consultation.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-14">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl p-5 md:p-6 h-full shadow-sm border border-purple-50 hover:shadow-lg transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${card.color}15` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-6 w-6" style={{ color: card.color }} />
                  </motion.div>
                  <h4 className="text-[#2D1B4E] mb-2 text-base md:text-lg" style={{ fontWeight: 600 }}>
                    {card.title}
                  </h4>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-[#6B2D8B] hover:underline block mb-1 text-sm md:text-base"
                      style={{ fontWeight: 500 }}
                    >
                      {card.main}
                    </a>
                  ) : (
                    <p className="text-[#2D1B4E] mb-1 text-sm md:text-base" style={{ fontWeight: 500 }}>
                      {card.main}
                    </p>
                  )}
                  <p className="text-xs md:text-sm text-gray-500 whitespace-pre-line">{card.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-purple-50">
            <div className="grid md:grid-cols-5">
              {/* Left decoration */}
              <motion.div
                className="md:col-span-2 p-6 md:p-8 lg:p-10 text-white flex flex-col justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 50%, #8B3DAB 100%)',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageSquare className="h-10 w-10 md:h-12 md:w-12 text-[#F5A623] mb-6" />
                </motion.div>
                <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{ fontWeight: 700 }}>
                  Send Us a Message
                </h3>
                <p className="text-purple-200 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  Fill out the form and our team will get back to you as soon as
                  possible. We're here to answer any questions you may have.
                </p>
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#F5A623] flex-shrink-0" />
                    <span>07459 530293</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#F5A623] flex-shrink-0" />
                    <span>info@caccou.co.uk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#F5A623] flex-shrink-0" />
                    <span>Harlow, Essex, UK</span>
                  </div>
                </div>
              </motion.div>

              {/* Right form */}
              <motion.div
                className="md:col-span-3 p-6 md:p-8 lg:p-10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07123 456789"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@example.com"
                      className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-xl border border-gray-200 bg-[#F9F5FC] text-sm focus:border-[#6B2D8B] focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="home-care">Home Care</option>
                      <option value="companionship">Companionship</option>
                      <option value="live-in-care">24/7 Live-in Care</option>
                      <option value="dementia-care">Dementia Care</option>
                      <option value="respite-care">Respite Care</option>
                      <option value="other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us about your care needs or any questions you have..."
                      rows={5}
                      className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#6B2D8B] hover:bg-[#4A1D6B] text-white rounded-full shadow-md hover:shadow-lg transition-all py-3 md:py-6"
                      style={{ fontWeight: 600 }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 md:mt-14"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-purple-50">
            <motion.div
              className="p-5 md:p-6 lg:p-8 bg-gradient-to-r from-[#6B2D8B] to-[#8B3DAB]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#F5A623]" />
                <h3 className="text-lg md:text-xl lg:text-2xl text-white" style={{ fontWeight: 700 }}>
                  Find Us in Harlow
                </h3>
              </div>
              <p className="text-purple-200 mt-2 text-sm md:text-base">
                Serving Harlow, Essex and surrounding areas
              </p>
            </motion.div>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
              <iframe
                title="Caccou Limited Location - Harlow, Essex"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39585.64288472573!2d0.07824!3d51.77288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9c3f0f0f0f1%3A0x3b0c3c3c3c3c3c3c!2sHarlow%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center text-white max-w-4xl mx-auto"
          style={{
            background:
              'linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 50%, #8B3DAB 100%)',
          }}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 px-4" style={{ fontWeight: 700 }}>
            Ready to Discuss Your Care Needs?
          </h3>
          <p className="text-sm md:text-base text-purple-200 mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            Our friendly team is available to answer your questions and arrange a
            free, no-obligation assessment. We'll work with you to create a
            personalised care plan that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#F5A623] hover:bg-[#E09000] text-[#2D1B4E] px-6 md:px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                style={{ fontWeight: 600 }}
                onClick={() => (window.location.href = 'tel:+447459530293')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white hover:text-[#6B2D8B] px-6 md:px-8 py-3 rounded-full transition-all w-full sm:w-auto"
                style={{ fontWeight: 600 }}
                onClick={() =>
                  (window.location.href = 'mailto:info@caccou.co.uk')
                }
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
