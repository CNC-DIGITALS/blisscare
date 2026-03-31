import React, { useState } from 'react';

const charityImages = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=600&q=80',
    alt: 'Charity Event 1',
    caption: 'Supporting elderly with food kits',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=600&q=80',
    alt: 'Charity Event 2',
    caption: 'Medical camp for senior citizens',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=compress&w=600&q=80',
    alt: 'Charity Event 3',
    caption: 'Community engagement activities',
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
              className="rounded-2xl object-cover w-72 h-80 border-4 border-white"
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
