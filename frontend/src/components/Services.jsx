import React from 'react';
import { Check } from 'lucide-react';
import { mockData } from '../mock';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Care, Tailored For Your Parents
          </h2>
          <p className="text-xl text-gray-600">
            From daily tasks to medical support, we handle everything with care and professionalism
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {mockData.services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Service {index + 1}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Need a custom care plan? We'll create one that fits your parents' unique needs.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="text-emerald-600 font-semibold text-lg hover:text-emerald-700 underline underline-offset-4 transition-colors duration-200"
          >
            Talk to Our Care Specialist →
          </button>
        </div>
      </div>
    </section>
  );
};
