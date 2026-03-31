import React from 'react';
import { ShieldCheck, Smartphone, MapPin, Clock } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  'shield-check': ShieldCheck,
  'smartphone': Smartphone,
  'map-pin': MapPin,
  'clock': Clock
};

export const Trust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Families Trust BlissCare
          </h2>
          <p className="text-xl text-gray-600">
            Your parents' safety and happiness is our top priority
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mockData.trustFactors.map((factor, index) => {
            const Icon = iconMap[factor.icon];
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-emerald-100 text-lg">Happy Families</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-emerald-100 text-lg">Years of Service</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-emerald-100 text-lg">Trained Staff</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-emerald-100 text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
