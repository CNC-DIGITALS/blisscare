import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.company.phone}`;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mockData.hero.image}
          alt="Elderly care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 font-medium text-sm">
              Trusted by 500+ families across Pune
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {mockData.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {mockData.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Book Free Consultation
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 animate-in fade-in duration-700 delay-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">500+ Happy Families</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};
