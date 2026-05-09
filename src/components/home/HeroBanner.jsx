import React from 'react';
import bannerVideo from '../../assets/Santhosam-1-2-1-1.mp4';

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-auto block"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeroBanner;
