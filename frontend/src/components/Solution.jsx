import React from 'react';
import { Heart, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Solution = () => {
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
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              The Solution You've Been Looking For
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Introducing BlissCare
            </h2>
            
            <p className="text-2xl text-emerald-700 font-semibold mb-6 italic">
              "{mockData.company.tagline}"
            </p>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BlissCare is Pune's most trusted elderly care service. We provide professional, 
              compassionate care and companionship to your parents while keeping you connected 
              every step of the way.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Verified & Trained Staff</h3>
                  <p className="text-gray-600">Background-checked professionals who care like family</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">24/7 Support</h3>
                  <p className="text-gray-600">Always available for emergencies and urgent needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Pune Expertise</h3>
                  <p className="text-gray-600">Deep local knowledge of hospitals, services, and community</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Daily Updates</h3>
                  <p className="text-gray-600">Photos, videos, and reports keep you connected</p>
                </div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Start Your Free Consultation
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional elderly care"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-gray-600 font-medium">Families Trust Us</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-emerald-600 mb-1">24/7</div>
              <div className="text-gray-600 font-medium">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
