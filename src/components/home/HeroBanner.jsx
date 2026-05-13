import React from 'react';
import { Link } from 'react-router-dom';
import bannerVideo from '../../assets/Santhosam-1-2-1-1.mp4';

const HeroBanner = () => {
  const serviceLinks = [
    { name: "Health Care", path: "/health-care/", top: "26.6%", left: "82.5%" },
    { name: "Travel", path: "/travel-services/", top: "44.1%", left: "72.5%" },
    { name: "Property", path: "/value-added-property-management/", top: "76.6%", left: "72.5%" },
    { name: "Banking & Investments", path: "/banking-and-investment/", top: "94.1%", left: "82.5%" },
    { name: "Legal", path: "/legal-services/", top: "76.6%", left: "92.5%" },
    { name: "Connect with Family", path: "/family-communication/", top: "44.1%", left: "92.5%" }
  ];

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
      
      {/* Clickable Hexagon Overlays */}
      <div className="absolute inset-0 z-10">
        {serviceLinks.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="absolute cursor-pointer rounded-full"
            style={{
              top: service.top,
              left: service.left,
              width: "18%",
              height: "25%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "transparent",
            }}
            title={service.name}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
