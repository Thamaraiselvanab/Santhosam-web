import React from 'react';
import { motion } from 'framer-motion';

const VideoGallery = () => {
  // Video list order: Elderly Care first
  const videos = [
    { id: "EaIVXZ8PM40" }, // Elderly Care Services in Salem
    { id: "FJpz828w6Rw" }, // Detox Treatment
    { id: "GCDg22wGr3s" }, // You Won't Believe Who the Champions Are
    { id: "BiLL94h2HgI" }, // Lang Bank Medical Centre
    { id: "wEZl_4E0eII" }, // What Makes a Care Home Feel Like Home
    { id: "2y-OlbzDBVw" }  // NRI Parent Care in India
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video w-full shadow-lg rounded-sm overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
