import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ReviewsContent = () => {
  const reviews = [
    {
      text: "Parent Care India provides excellent elder care services. My father feels safe, and I receive regular updates. It's a true relief knowing he's in good hands while I'm away.",
      name: "Anitha R.",
      location: "Singapore",
      rating: 5
    },
    {
      text: "I'm happy with the service. My parents are well taken care of, and the team responds quickly to any concerns. It's a trustworthy service.",
      name: "Mark Wilson",
      location: "USA",
      rating: 5
    },
    {
      text: "The caregivers are kind and helpful. My mother enjoys their company and feels supported daily. Highly recommend ParentCare India for elderly care.",
      name: "Ravi",
      location: "Canada",
      rating: 5
    },
    {
      text: "Santhosham has been a blessing for our family. Their property management services are top-notch, and they handle everything with extreme professionalism.",
      name: "Suresh Kumar",
      location: "UK",
      rating: 5
    },
    {
      text: "The healthcare coordination is seamless. They helped my parents get the best specialists in Chennai without any hassle. Very grateful.",
      name: "Meera J.",
      location: "Australia",
      rating: 5
    },
    {
      text: "Setting up video calls and attending family events virtually was made so easy for my parents. They don't feel lonely anymore. Thank you!",
      name: "Priya S.",
      location: "Dubai",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#EA1273] font-bold text-sm uppercase tracking-widest mb-2"
          >
            Testimonials
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-black text-[#003366]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-[#EA1273]/10 transition-colors">
                <FaQuoteLeft size={40} />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-8 italic relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#003366] text-base">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsContent;
