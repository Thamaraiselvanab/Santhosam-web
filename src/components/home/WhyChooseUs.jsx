import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/home/gettyimages-1448673053-612x612-1-1.webp.bv_resized_mobile.webp.bv.webp';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Genuine Care',
      desc: 'We treat your parents like our own, ensuring trust and compassion in everything we do.'
    },
    {
      title: 'Health and Happiness',
      desc: 'Their well-being is always our priority, from medical care to emotional support.'
    },
    {
      title: 'Financial Support',
      desc: 'From property management to financial guidance, we help secure your family\'s future.'
    },
    {
      title: 'Seamless Connections',
      desc: 'Travel assistance and communication support to keep your bond strong.'
    },
    {
      title: 'Peace of Mind',
      desc: 'Knowing your parents are in safe hands, cared for with warmth and respect.'
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-100">
              <img
                src={img}
                alt="Elderly couple laughing"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#EA1273]/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#EA1273] mb-6 leading-tight tracking-tight">
              Why Choose us
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium max-w-xl">
              At Santhosam, we provide compassionate elder care services to support
              your parents and bring you peace of mind. From their daily needs to the
              family's financial welfare, we take care of everything with a personal touch,
              ensuring your family feels connected and cared for no matter where you are.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EA1273] mt-1.5 shrink-0 shadow-sm"></div>
                  <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed font-medium">
                    <span className="font-bold text-[#003366]">{reason.title}— </span>
                    {reason.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
