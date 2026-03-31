import React from 'react';
import { Home, HeartPulse, Users, AlertCircle } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  'home': Home,
  'heart-pulse': HeartPulse,
  'users': Users,
  'alert-circle': AlertCircle
};

export const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Understand Your Worry
          </h2>
          <p className="text-xl text-gray-600">
            Living away from your parents comes with constant concerns about their wellbeing
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {mockData.problems.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emotional Hook */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-2xl font-semibold text-gray-800 italic">
            "Every missed call fills you with dread. Every festival, you wish you were there."
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
