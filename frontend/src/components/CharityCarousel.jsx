import React, { useState } from 'react';
import img1 from '../assets/IMG_7091.jpg';
import img2 from '../assets/IMG_7194.jpg';
import img3 from '../assets/IMG_7103.jpg';

const charityImages = [
  {
    src: img1,
    alt: 'Charity Event 1',
    caption: 'Together, we’re making a difference by providing care',
  },
  {
    src: img2,
    alt: 'Charity Event 2',
    caption: 'Distributing essential food kits to support children',
  },
  {
    src: img3,
    alt: 'Charity Event 3',
    caption: 'Small efforts, big smiles',
  },
];

export const CharityCarousel = () => {
  const [active, setActive] = useState(0);

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % charityImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Carousel effect: center image focused, sides blurred/scaled
  return (
    <div className="relative flex items-center justify-center h-96 mt-8">
      {charityImages.map((img, idx) => {
        // Calculate position
        const offset = idx - active;
        let style =
          'absolute transition-all duration-700 ease-in-out flex flex-col items-center';
        if (offset === 0) {
          style +=
            ' z-20 left-1/2 -translate-x-1/2 scale-110 shadow-2xl';
        } else if (offset === -1 || (active === 0 && idx === charityImages.length - 1)) {
          style +=
            ' z-10 left-1/4 -translate-x-1/2 scale-90 blur-sm opacity-60';
        } else if (offset === 1 || (active === charityImages.length - 1 && idx === 0)) {
          style +=
            ' z-10 left-3/4 -translate-x-1/2 scale-90 blur-sm opacity-60';
        } else {
          style += ' hidden';
        }
        return (
          <div key={img.src} className={style} style={{ top: 0 }}>
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-2xl object-cover w-full h-80 border-4 border-white"
            />
            <div className="mt-4 text-center text-gray-700 font-semibold bg-white/80 px-4 py-2 rounded-xl shadow">
              {img.caption}
            </div>
          </div>
        );
      })}
    </div>
  );
};
