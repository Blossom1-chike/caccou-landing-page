import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { motion } from "motion/react";
import { toast } from "sonner";
import {
  Home,
  Users,
  Heart,
  Briefcase,
  Send,
  Phone,
  Mail,
} from "lucide-react";
import { useInView } from "../components/hooks/useInView";
import { usePageMeta } from "../components/hooks/usePageMeta";
import { submitForm } from "../lib/submitForm";

const jobs = [
  {
    id: "support-worker",
    title: "Support Worker",
    department: "Supported Accommodation",
    type: "Full-time / Part-time",
    icon: Home,
    color: "#6B2D8B",
    description:
      "Support young people aged 16+ in our supported accommodation services, helping them build the skills and confidence they need for independent living.",
  },
  {
    id: "residential-support-worker",
    title: "Residential Support Worker",
    department: "Children's Home",
    type: "Full-time / Part-time",
    icon: Users,
    color: "#E91E63",
    description:
      "Provide safe, nurturing care for children aged 11-18 in our residential children's home, helping every child thrive.",
  },
  {
    id: "care-assistant",
    title: "Domiciliary Care Assistant",
    department: "Care Genius",
    type: "Full-time / Part-time",
    icon: Heart,
    color: "#2E8B57",
    description:
      "Deliver compassionate personal and home care to adults, seniors, and those living with dementia in their own homes across Essex.",
  },
  {
    id: "other",
    title: "Speculative Application",
    department: "Any Department",
    type: "Flexible",
    icon: Briefcase,
    color: "#F5A623",
    description:
      "Don't see the right role listed? We're always keen to hear from compassionate, dedicated people — tell us about yourself.",
  },
];

export function Careers() {
  usePageMeta({
    title: "Careers",
    description:
      "Join Caccou Family Services. We're always looking for compassionate support workers and care staff in Harlow, Essex and across the UK — apply even if you don't see your role listed.",
  });

  const { ref: jobsRef, isInView: isJobsInView } = useInView();
  const { ref: formRef, isInView: isFormInView } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    cvLink: "",
    message: "",
  });

  const handleApply = (jobId: string) => {
    setFormData((prev) => ({ ...prev, role: jobId }));
    const element = document.getElementById("application-form");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const roleTitle =
        jobs.find((job) => job.id === formData.role)?.title || "General Application";

      await submitForm({
        subject: `New Job Application: ${roleTitle} - ${formData.name}`,
        fromName: formData.name,
        replyTo: formData.email,
        fields: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: roleTitle,
          experience: formData.experience,
          cvLink: formData.cvLink,
          message: formData.message,
        },
      });

      toast.success("Thank you for applying! We will be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        cvLink: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 40%, #8B3DAB 70%, #6B2D8B 100%)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-xs md:text-sm mb-6 border border-white/20">
              Join Our Team
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Build a Career That{" "}
              <span className="text-[#F5A623]">Makes a Difference</span>
            </h1>
            <p className="text-base md:text-lg text-purple-100 leading-relaxed">
              We're always looking for compassionate, dedicated people to join
              Caccou Family Services — even if you don't see a role advertised,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 md:py-20 bg-[#FAFAFE]" ref={jobsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontWeight: 700, color: "#4A1D6B" }}
            >
              Current Opportunities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore roles across our services, or submit a speculative
              application if nothing here fits just yet.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {jobs.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow border border-purple-50"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${job.color}15` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: job.color }} />
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                    style={{ backgroundColor: `${job.color}15`, color: job.color, fontWeight: 600 }}
                  >
                    {job.department} · {job.type}
                  </div>
                  <h3
                    className="text-xl text-[#2D1B4E] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {job.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {job.description}
                  </p>
                  <Button
                    onClick={() => handleApply(job.id)}
                    className="rounded-full text-white"
                    style={{ backgroundColor: job.color }}
                  >
                    Apply for this role
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 md:py-20" ref={formRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-purple-50">
              <div className="grid md:grid-cols-5">
                <div
                  className="md:col-span-2 p-6 md:p-8 lg:p-10 text-white flex flex-col justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 50%, #8B3DAB 100%)",
                  }}
                >
                  <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-[#F5A623] mb-6" />
                  <h3
                    className="text-xl md:text-2xl mb-3 md:mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    Apply Now
                  </h3>
                  <p className="text-purple-200 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    Fill out the form and our team will review your
                    application. We look forward to hearing from you.
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
                  </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
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
                          placeholder="Jane Doe"
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
                        placeholder="jane.doe@example.com"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="role" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                        Position Applying For *
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-xl border border-gray-200 bg-[#F9F5FC] text-sm focus:border-[#6B2D8B] focus:outline-none"
                      >
                        <option value="">Select a role...</option>
                        {jobs.map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="experience" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                        Relevant Experience
                      </label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Tell us about any relevant experience or qualifications..."
                        rows={3}
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="cvLink" className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                        CV / Portfolio Link (optional)
                      </label>
                      <Input
                        id="cvLink"
                        name="cvLink"
                        type="url"
                        value={formData.cvLink}
                        onChange={handleChange}
                        placeholder="Link to your CV (Google Drive, Dropbox, etc.)"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
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
                        placeholder="Tell us why you'd like to join Caccou Family Services..."
                        rows={4}
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-[#6B2D8B] hover:bg-[#4A1D6B] text-white rounded-full shadow-md hover:shadow-lg transition-all py-3 md:py-6 disabled:opacity-70"
                        style={{ fontWeight: 600 }}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
