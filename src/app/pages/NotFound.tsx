import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-8xl md:text-9xl mb-6" style={{ fontWeight: 700, color: '#6B2D8B' }}>
              404
            </div>
            <h1 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700, color: '#4A1D6B' }}>
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#6B2D8B] hover:bg-[#4A1D6B] text-white rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-[#6B2D8B]/30"
                style={{ fontWeight: 600 }}
              >
                <Home className="h-5 w-5" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#6B2D8B] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-[#6B2D8B]/30"
                style={{ fontWeight: 600 }}
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
