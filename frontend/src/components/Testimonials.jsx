import React from 'react';
import { Star } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/8940023/pexels-photo-8940023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories That Touch Hearts
          </h2>
          <p className="text-xl text-gray-600">
            Real families, real experiences with BlissCare
          </p>
        </div>

        {/* Emotional Story */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-emerald-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-emerald-600">
                {mockData.story.headline}
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {mockData.story.text}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
