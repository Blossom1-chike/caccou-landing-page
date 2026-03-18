import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Home,
  Users,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useInView } from "../components/hooks/useInView";

export function SupportedAccommodation() {
  const { ref: contentRef, isInView: isContentInView } = useInView();

  const features = [
    "Support-only accommodation model",
    "Dedicated support workers available 24/7",
    "Individual care plans tailored to each resident",
    "Safe, comfortable living environments",
    "Life skills development programs",
    "Educational and employment support",
    "Independent living preparation",
    "Regular reviews and assessments",
  ];

  const accommodationTypes = [
    {
      title: "16+ Accommodation",
      description:
        "Specialized support for young people aged 16-18 transitioning to independent living",
      age: "16-18 years",
      image:
        "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGJlZHJvb20lMjBhY2NvbW1vZGF0aW9ufGVufDF8fHx8MTc3MjA1OTE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "18+ Accommodation",
      description:
        "Continued support for young adults preparing for complete independence",
      age: "18+ years",
      image:
        "https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1760067538068-03d10481bacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFjY29tbW9kYXRpb24lMjBob3VzZSUyMGJlZHJvb218ZW58MXx8fHwxNzcyMDU5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern bedroom accommodation",
    },
    {
      url: "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGJlZHJvb20lMjBhY2NvbW1vZGF0aW9ufGVufDF8fHx8MTc3MjA1OTE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Comfortable living space",
    },
    {
      url: "https://images.unsplash.com/photo-1628744876490-19b035ecf9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNTkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Shared living room area",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{ backgroundColor: "#6B2D8B" }}
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
                <Home className="h-5 w-5 text-[#F5A623]" />
                <span className="text-sm">Supported Accommodation</span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ fontWeight: 700 }}
              >
                Safe Homes for{" "}
                <span className="text-[#F5A623]">Young People</span>
              </h1>
              <p className="text-lg text-purple-100 leading-relaxed">
                Supporting young people looked after by local authorities across
                the United Kingdom with quality accommodation and dedicated
                care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760067538068-03d10481bacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFjY29tbW9kYXRpb24lMjBob3VzZSUyMGJlZHJvb218ZW58MXx8fHwxNzcyMDU5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young people accommodation"
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
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontWeight: 700, color: "#4A1D6B" }}
              >
                About Our Supported Accommodation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Caccou Family Services provides high-quality supported
                accommodation for young people who are looked after by local
                authorities. We operate across the United Kingdom, offering
                safe, nurturing environments where young people can develop the
                skills they need for independent living.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our support-only model ensures that each young person receives
                personalized care and guidance while maintaining their
                independence and dignity. We work closely with local authorities
                to provide comprehensive support tailored to individual needs.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h3
                className="text-2xl md:text-3xl mb-6"
                style={{ fontWeight: 600, color: "#6B2D8B" }}
              >
                What We Offer
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg"
                  >
                    <CheckCircle
                      className="h-6 w-6 text-[#6B2D8B] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontWeight: 700, color: "#4A1D6B" }}
            >
              Accommodation Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored accommodation for different age groups and support needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {accommodationTypes.map((type, index) => (
              <motion.article
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-56">
                  <ImageWithFallback
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div
                    className="inline-block px-3 py-1 bg-purple-100 text-[#6B2D8B] rounded-full text-sm mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {type.age}
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontWeight: 600, color: "#6B2D8B" }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
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
                <MapPin className="h-6 w-6 text-[#6B2D8B]" />
                <h2
                  className="text-3xl md:text-4xl"
                  style={{ fontWeight: 700, color: "#4A1D6B" }}
                >
                  Operating Locations
                </h2>
              </div>
              <p className="text-lg text-gray-700">
                Our supported accommodation facilities are located throughout
                the United Kingdom, working in partnership with local
                authorities to provide accessible support where it's needed
                most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                className="text-2xl mb-6"
                style={{ fontWeight: 600, color: "#6B2D8B" }}
              >
                Our Facilities
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
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#6B2D8B" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Users className="h-16 w-16 text-[#F5A623] mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontWeight: 700 }}
            >
              Get in Touch About Our Supported Accommodation
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Contact us to learn more about our supported accommodation
              services or to discuss placement options
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
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#6B2D8B] rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
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
