import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    id: 'rose',
    name: 'Rose Gold',
    subtitle: 'Trust, Care & Support for Your Family',
    price: '₹4,999',
    period: '/ Month',
    gradient: 'linear-gradient(90deg, #9a6f7f 0%, #CBA3B2 22%, #fdf4f8 50%, #CBA3B2 78%, #9a6f7f 100%)',
    titleColor: '#5c222a',
    features: [
      { text: '24×7 Health Support Line' },
      { text: 'Master Health Check & Detailed Blood Profiling', note: '(Conducted by Physician Associate at registration)' },
    ],
    extraFeatures: [
      { text: 'Preventive Health Consultation', note: '(With Senior Medical Expert)' },
      { text: 'Quarterly Health Assessments', note: '(By Physician Associate)' },
      { text: 'Routine Medical Support', note: '(Guidance for hospital visits, tests & vaccinations)' },
      { text: 'Safety & Wellbeing Assessment', note: '(Intro Care Manager home visit)' },
      { text: 'Quarterly Care Manager Visits', note: '(Ensuring continuity of care)' },
      { text: 'Emotional & Family Support', note: '(Compassionate support & reassurance)' },
      { text: 'Convenience Assistance', note: '(Pharmacy, groceries & daily needs)' },
      {
        text: 'Annual Wellness Experience',
        note: '(Birthday SPA & ',
        link: { text: 'Naturopathy at Cauvery Centre', url: 'https://cauverynaturecurecentre.in/' },
        noteEnd: ')'
      },
    ],
    badge: null,
  },
  {
    id: 'gold',
    name: 'Gold',
    subtitle: 'Trust, Care & Support for Your Family',
    price: '₹5,999',
    period: '/ Month',
    gradient: 'linear-gradient(90deg, #a07a10 0%, #D4AF37 22%, #fff3b0 50%, #D4AF37 78%, #a07a10 100%)',
    titleColor: '#7a5a00',
    features: [
      { text: 'All services in Rose Gold' },
      { text: 'Two Monthly Physician Associate Visits', note: '(Regular in-person clinical review and health monitoring)' },
    ],
    extraFeatures: [
      { text: 'Two Monthly Virtual Routine Reviews & Annual In-Person Review', note: '(Includes yearly in-person consultation by Dr. Murugesh)' },
      { text: 'Two Monthly Care Manager Visits', note: '(Ongoing safety, wellness and home-environment checks)' },
      { text: 'Social Connections & Wellness Activities', note: '(Three escorted outings per year - up to 50 km total)' },
      { text: 'Enhanced Convenience Support', note: '(Pharmacy, groceries, event needs & personal errands)' },
      {
        text: 'Premium Wellness Experiences',
        note: '(Three Santhosam SPA & Naturopathy treatments yearly at ',
        link: { text: 'Cauvery Naturopathy Centre', url: 'https://cauverynaturecurecentre.in/' },
        noteEnd: ' (food and one-night stay included))'
      },
      { text: 'Additional Support Services', note: '(Advice on banking, accounting, investments & legal services)' },
    ],
    badge: 'Best Offer',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    subtitle: 'Trust, Care & Support for Your Family',
    price: '₹7,499',
    period: '/ Month',
    gradient: 'linear-gradient(90deg, #a4aaaf 0%, #D3D6D8 22%, #ffffff 50%, #D3D6D8 78%, #a4aaaf 100%)',
    titleColor: '#3a4450',
    features: [
      { text: 'All services in Gold' },
      { text: 'Monthly Physician Associate Visit', note: '(In-home clinical assessment and health monitoring every month)' },
    ],
    extraFeatures: [
      { text: 'Three Blood Tests Per Year', note: '(Lab investigations coordinated and reviewed as clinically indicated)' },
      { text: 'Monthly Virtual Consultation by Dr. Murugesh', note: '(Continuous preventive oversight and health guidance)' },
      { text: 'Twice-Yearly In-Person Home Visit by Dr. Murugesh', note: '(Comprehensive medical, wellness and safety review at home)' },
      { text: 'Monthly Care Manager Visit', note: '(Enhanced continuity of care and environment safety assessment)' },
      { text: 'Daily Meal Support Coordination', note: '(Assistance arranging daily nutritious food catering based on preference)' },
      { text: 'Outreach Physiotherapy Support', note: '(Coordination of physiotherapy services for mobility and strength)' },
      { text: 'Occupational Therapy Assessment on Registration', note: '(Home safety evaluation & guidance on special equipment)' },
      {
        text: 'Wellness & Naturopathy Benefit',
        note: '(Six Santhosam SPA & Naturopathy treatments yearly at ',
        link: { text: 'Cauvery Naturopathy Centre', url: 'https://cauverynaturecurecentre.in/' },
        noteEnd: '. Includes 3 overnight stays & 3 day visits & food)'
      },
      { text: 'Continued Advisory Support', note: '(Guidance on banking, accounting, investment and legal services)' },
    ],
    badge: null,
  },
  {
    id: 'combo',
    name: 'Combo',
    subtitle: 'SANTHOSAM Combo Plan — yearly care & convenience',
    price: '₹29,999',
    period: '/ Year',
    gradient: 'linear-gradient(90deg, #876a99 0%, #C8A2C8 22%, #f8f2ff 50%, #C8A2C8 78%, #876a99 100%)',
    titleColor: '#4b306e',
    features: [
      { text: 'Full body health check-up (hospital / home)' },
      { text: 'Care manager home visits — 3 per year' },
    ],
    extraFeatures: [
      { text: 'Preventive care consultation from Dr. Murugesh (U.K.)' },
      {
        text: '',
        link: { text: 'Cauvery Naturopathy Centre', url: 'https://cauverynaturecurecentre.in/' },
        noteEnd: ' Visit',
        note: '(Once a year)'
      },
      { text: 'Legal Consultation', note: '(1 physical meeting or through VC with expert)' },
      { text: 'Travelling', note: '(Travel arrangements / acting driver facility — up to 120 km (round trip))' },
      { text: 'Comprehensive Home & Lifestyle Services', note: '(House cleaning up to 1200 sq.ft (normal / deep cleaning))' },
      { text: 'Finance & Investment Support', note: '(Financial consultation — CA assistance / investment reviews with experts)' },
    ],
    badge: null,
  },
];

const cauveryInfo = {
  title: 'Cauvery Naturopathy Centre',
  paragraphs: [
    "It's a holistic wellness-centre in Erode, Tamil Nadu offering a blend of natural therapies — including Ayurveda, yoga, naturopathy, physiotherapy and acupuncture — all under one roof.",
    "The centre uses a comprehensive healing approach: internal purification, herbal remedies, diet, yoga/meditation and customized therapies based on an individual's body nature.",
    "It caters to a wide range of health needs: from back and knee pain, joint issues, diabetes and obesity to stress, skin problems, hormonal imbalances and lifestyle-related ailments.",
    "The facility is set in a spacious, green campus (on 10-acre grounds), with accommodations for patients — including separate treatment sections for men and women, and options for AC or non-AC rooms.",
    "Their goal is holistic healing and long-term wellness: not just alleviating symptoms but helping individuals transform lifestyle habits toward better physical, mental, and emotional health.",
  ],
};

/* ───────── Feature Note Renderer ───────── */
const FeatureNote = ({ feature, onHoverLink, onLeaveLink }) => {
  if (!feature.note && !feature.link) return null;
  return (
    <p className="text-[13px] text-gray-700 font-semibold ml-6 mt-[-2px] mb-1 leading-snug">
      {feature.note}
      {feature.link && (
        <a
          href={feature.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold underline underline-offset-2 hover:decoration-2 transition-all"
          onMouseEnter={onHoverLink}
          onMouseLeave={onLeaveLink}
        >
          {feature.link.text}
        </a>
      )}
      {feature.noteEnd || ''}
    </p>
  );
};

/* ───────── Single Plan Card ───────── */
const PlanCard = ({ plan, index, onHoverLink, onLeaveLink }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-6 pb-8 shadow-lg text-left flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 min-h-[520px]"
      style={{ backgroundImage: plan.gradient }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-[-35px] bg-[#ff3366] text-white text-xs font-bold py-1 px-11 rotate-45 z-10 whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      {/* Title */}
      <h3
        className="text-[42px] leading-tight font-bold mb-2 tracking-tight"
        style={{ color: plan.titleColor, textShadow: '0 1px 0 rgba(255,255,255,0.4)' }}
      >
        {plan.name}
      </h3>

      <p className="text-[15px] text-gray-900 font-bold mb-2">{plan.subtitle}</p>

      <p className="text-[38px] font-bold text-gray-900 mb-3 leading-tight">
        {plan.price}
        <span className="text-[15px] font-bold text-gray-800">{plan.period}</span>
      </p>

      {/* Base Features */}
      <ul className="list-none p-0 mb-4 flex-1">
        {plan.features.map((f, i) => (
          <li key={i}>
            <div className="relative pl-6 text-[16px] leading-relaxed font-bold text-gray-900 mb-2">
              <FaCheck className="absolute left-0 top-1 text-[12px] text-black" />
              {f.text}
            </div>
            <FeatureNote feature={f} onHoverLink={onHoverLink} onLeaveLink={onLeaveLink} />
          </li>
        ))}

        {/* Expanded Features */}
        {expanded && plan.extraFeatures.map((f, i) => (
          <li key={`extra-${i}`}>
            <div className="relative pl-6 text-[16px] leading-relaxed font-bold text-gray-900 mb-2">
              <FaCheck className="absolute left-0 top-1 text-[12px] text-black" />
              {f.text}
              {f.link && !f.text && (
                <a
                  href={f.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold underline underline-offset-2 hover:decoration-2 transition-all"
                  onMouseEnter={onHoverLink}
                  onMouseLeave={onLeaveLink}
                >
                  {f.link.text}
                </a>
              )}
              {!f.text && f.noteEnd}
            </div>
            <FeatureNote feature={f} onHoverLink={onHoverLink} onLeaveLink={onLeaveLink} />
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 items-center mt-auto">
        <a
          href="https://parentcaresanthosam.com/enquiry/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[85%] text-center py-2 px-4 rounded-full text-sm font-bold text-white shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg transition-all"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ff4b8a 0%, #ff6299 35%, #ff7fb0 70%, #ff9bc4 100%)',
          }}
        >
          Enquiry
        </a>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-[140px] py-2 px-4 rounded-full text-sm font-bold text-white shadow-md cursor-pointer hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg transition-all border-none"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ff4b8a 0%, #ff6299 35%, #ff7fb0 70%, #ff9bc4 100%)',
          }}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

/* ───────── Main Section ───────── */
const TariffPlans = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleHoverLink = () => {
    setShowPopup(true);
  };

  const handleLeaveLink = () => {
    setShowPopup(false);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4 tracking-tight">
            Tariff <span className="text-[#EA1273] italic">Plans</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#EA1273] mb-4">Launching Offer</p>
          <p className="text-gray-500 text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Whether it's health, daily needs, or emotional care, we're here.
            <br />
            Pick a plan that ensures your parents live with dignity and peace.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={i}
              onHoverLink={handleHoverLink}
              onLeaveLink={handleLeaveLink}
            />
          ))}
        </div>
      </div>

      {/* Cauvery Popup — Fixed Center Overlay */}
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black/20 z-[9998] pointer-events-none" />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)] max-w-[480px] w-[90%] z-[9999] text-left pointer-events-none animate-[fadeIn_0.15s_ease-out]"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">{cauveryInfo.title}</h4>
            {cauveryInfo.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2 font-medium">{p}</p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TariffPlans;
