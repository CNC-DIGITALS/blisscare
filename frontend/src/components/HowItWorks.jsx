import React from 'react';
import { Phone, UserCheck, Video } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  'phone': Phone,
  'user-check': UserCheck,
  'video': Video
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-xl text-gray-600">
            From your first call to daily care, we make the entire process seamless
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {mockData.howItWorks.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isLast = index === mockData.howItWorks.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-[120px_1fr] gap-6 pb-12">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 text-emerald-600 font-bold text-lg">
                      Step {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-emerald-300 to-teal-300 hidden md:block"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Your parents deserve the best care
            </p>
            <p className="text-gray-600">
              Let us be there for them when you can't. Start with a free consultation today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
