import React from 'react';
import { CharityCarousel } from './CharityCarousel';

export const Charity = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            At BlissCare, We Do Charity
          </h2>
          <p className="text-xl text-gray-600">
            Every month, we support the elderly in need through food drives, medical camps, and community events.
          </p>
        </div>

        {/* Charity Carousel */}
        <CharityCarousel />
      </div>
    </section>
  );
};
