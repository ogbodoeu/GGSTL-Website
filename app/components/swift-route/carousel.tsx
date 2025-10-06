import { useState, useRef, useEffect } from 'react';

const data = {
  resources: [
    {
      title: 'Beautiful Landscape',
      imageUrl: '/images/flight.jpeg',
      link: '/images/flight.jpeg',
    },
    {
      title: 'City at Night',
      imageUrl: '/images/flight.jpeg',
      link: '/images/flight.jpeg',
    },
    {
      title: 'Mountain View',
      imageUrl: '/images/flight.jpeg',
      link: '/images/flight.jpeg',
    },
    {
      title: 'Sunny Beach',
      imageUrl: '/images/flight.jpeg',
      link: 'app/routes/swift-route/flight.jpeg',
    },
    // ...
  ],
};

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  const movePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const moveNext = () => setCurrentIndex((i) => Math.min(data.resources.length - 1, i + 1));
  const isDisabled = (direction: 'prev' | 'next') =>
    direction === 'prev' ? currentIndex <= 0 : currentIndex >= data.resources.length - 1;

  useEffect(() => {
    if (!carousel.current) return;
    carousel.current.scrollTo({
      left: carousel.current.offsetWidth * currentIndex,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        {/* nav buttons (on top) */}
        <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
          <button
            type="button"
            onClick={movePrev}
            disabled={isDisabled('prev')}
            className="pointer-events-auto w-12 h-full flex items-center justify-center disabled:opacity-40 bg-btn-primary-hover-swift/60 hover:bg-btn-primary-hover-swift z-10"
          >
            ‹<span className="sr-only">Prev</span>
          </button>

          <button
            type="button"
            onClick={moveNext}
            disabled={isDisabled('next')}
            className="pointer-events-auto w-12 h-full flex items-center justify-center disabled:opacity-40 bg-btn-primary-hover-swift/75 hover:bg-btn-primary-hover-swift z-10"
          >
            ›<span className="sr-only">Next</span>
          </button>
        </div>

        {/* slides */}
        <div
          ref={carousel}
          className="carousel-container relative flex gap-0 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x w-full"
        >
          {data.resources.map((resource, index) => (
            <div
              key={index}
              className="carousel-item group w-full h-64 flex-shrink-0 snap-start relative"
            >
              {/* background image */}
              <a
                href={resource.link}
                className="block h-full w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                aria-hidden
              />

              {/* overlay (title) — doesn't block pointer events when hidden) */}
              <a
                href={resource.link}
                className="absolute inset-0 flex items-end justify-center px-4 py-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-btn-primary-hover-swift/75"
              >
                <h3 className="text-white text-xl">{resource.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
