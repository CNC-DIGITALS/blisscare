import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Pricing = () => {
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose The Right Care Plan
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing with no hidden fees. All plans include daily updates and emergency support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockData.pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl scale-105 border-4 border-emerald-400'
                  : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? 'text-emerald-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.popular ? 'text-emerald-100' : 'text-gray-600'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular
                          ? 'bg-white/20'
                          : 'bg-emerald-100'
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 ${
                          plan.popular ? 'text-white' : 'text-emerald-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className={`w-full py-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-md'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Not sure which plan is right? <button onClick={scrollToContact} className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-4">Talk to our care specialist</button> for personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};
