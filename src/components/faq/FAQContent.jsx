import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQContent = () => {
  const [activeCategory, setActiveCategory] = useState('Healthcare');
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    'Healthcare', 'Wealth', 'Travel', 'Connect With Family', 'Legal', 'Banking Investment', 'Property'
  ];

  // Placeholder for questions - currently empty as requested
  const faqs = {
    'Healthcare': [
      {
        question: "What services do you offer?",
        answer: "Santhosam provide a wide range of healthcare services including general check-ups, specialist consultations, diagnostics, chronic disease management, and home health care support."
      },
      {
        question: "Do I need an appointment to visit /reschedule/cancel?",
        answer: "Yes, Appointments are recommended to reduce waiting time and check availability. Reschedule / cancel your appointments via phone two hours before your appointments."
      },
      {
        question: "santhosam offer home visit services?",
        answer: "Yes, santhosam provide home care for elderly, including nursing, physiotherapy, and doctor consultations."
      },
      {
        question: "What are your operating hours?",
        answer: "santhosam open from [09:30 AM - 7:00 PM], Monday to Saturday. Emergency services available 24/7."
      },
      {
        question: "How can I give feedback ?",
        answer: "You can provide feedback through our website, call our helpline, or speak to the front desk. We value your suggestions."
      },
      {
        question: "What are the payment methods available?",
        answer: "Payments can be made via cash, card, UPI, or net banking. Home care services may require advance booking and payment."
      },
      {
        question: "Are your services covered by insurance?",
        answer: "Yes, it depends upon hospital. Most major health insurance plans. Please bring your insurance card or contact us for specific provider coverage."
      },
      {
        question: "Santhosam provide online consultations?",
        answer: "Yes, teleconsultation with doctors(foreign/india) are available. You can book through our website or phone call"
      },
      {
        question: "What documents should I bring for my first visit?",
        answer: "Please bring a valid ID, previous medical records, and prescriptions (if any)."
      },
      {
        question: "Santhosam staff certified and trained?",
        answer: "Absolutely. All our doctors, nurses, and caregivers are qualified and trained with required certifications and experience."
      },
      {
        question: "Can I request a specific doctor or nurse for home care?",
        answer: "We try to accommodate preferences based on availability. Regular home care plans can include the same caregiver for consistency."
      },
      {
        question: "What safety measures do you follow?",
        answer: "We follow strict hygiene protocols, regular sanitization, and all staff wear protective gear. We prioritize patient safety."
      }
    ],
    'Wealth': [
      {
        question: "Who can afford wealth service provider?",
        answer: "NRIs and their parents who are lived in india."
      },
      {
        question: "How are you compensated?",
        answer: "We offer both fee-based and commission-based models. We are transparent about our fees, and details are shared upfront."
      },
      {
        question: "How do I get started?",
        answer: "Simply contact us via phone, email, or visit our office. We’ll schedule an initial consultation to understand your financial goals and design a suitable strategy."
      },
      {
        question: "What kind of wealth services provide in santhosham?",
        answer: (
          <>
            Santhosham provide a comprehensive approach to managing your financial life — including.<br />
            We offer following services based on client requriment:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Investments</li>
              <li>mutual funds</li>
              <li>portfolio management</li>
              <li>corporate leasing</li>
              <li>property value addition</li>
            </ul>
            <p className="mt-2 text-xs">real estate and tax strategies — tailored to your goals.</p>
          </>
        )
      },
      {
        question: "Are your advisors certified?",
        answer: "Yes. Our advisors hold authorised certifications."
      },
      {
        question: "Is my financial data secure?",
        answer: "Absolutely. We follow strict data security protocols and use encrypted platforms to protect your sensitive financial information."
      },
      {
        question: "Do you offer customized plans?",
        answer: "Yes. Every plan is tailored based on your financial goals, risk profile, income, and future needs"
      },
      {
        question: "Do you help with tax filing or only planning?",
        answer: "We assist with both. Tax planning is part of our service, and we can also coordinate with trusted CAs or tax professionals for filing."
      }
    ],
    'Travel': [
      {
        question: "What does Santhosham’ s travel service offer?",
        answer: "We arrange suitable transport and travel planning for your parents in India based on their needs—such as visits to friends or family. This ensures journeys are safe, comfortable, and hassle-free."
      },
      {
        question: "Can you help my parents visit family and friends?",
        answer: "Yes. The travel service includes assistance for visits to friends or relatives, ensuring the journey is safe and well-planned."
      },
      {
        question: "Will accommodation be arranged for outstation trips?",
        answer: "Yes. Accommodation planning is included in the outstation travel services, so your parents are comfortable throughout their journey."
      },
      {
        question: "Does Santhosham offer international travel services?",
        answer: "Yes. Santhosham arranges foreign tour packages through trusted partners, ensuring a comfortable and memorable experience abroad."
      },
      {
        question: "Is the transfer service available for both domestic and international travel?",
        answer: "Yes. Santhosham’ s transfer service covers both domestic and international travel arrangements."
      },
      {
        question: "Will someone be there to help my parents at the airport or station?",
        answer: "Yes. Assistance is provided at every step — including boarding support and check-in — to make travel easy and stress-free for seniors."
      }
    ],
    'Connect With Family': [
      {
        question: "Can you help my parents use video calls or mobile apps?",
        answer: "Yes, we teach them how to use WhatsApp, Zoom, or any app to stay in touch with you."
      },
      {
        question: "Do you assist them in attending online family functions or events?",
        answer: "Yes, we help set up calls or virtual meetings for weddings, birthdays, or festivals."
      },
      {
        question: "Can you send gifts, sweets, or personal items on my behalf?",
        answer: "Yes, we arrange deliveries for special occasions like anniversaries or religious events."
      },
      {
        question: "My parents feel lonely — do you provide emotional support?",
        answer: "Yes, we check in regularly, talk to them, and make them feel cared for."
      },
      {
        question: "Can you record video messages or photos and share them with me?",
        answer: "Yes, we can capture special moments and send them to you."
      }
    ],
    'Legal': [
      {
        question: "Are legal services handled by certified professionals?",
        answer: "Yes. All legal work is done in collaboration with experienced and registered legal experts to ensure complete compliance with Indian laws."
      },
      {
        question: "Can you help my parents create and register a will?",
        answer: "Yes. Parent Care India assists seniors in drafting, reviewing, and registering their wills legally, making sure all documentation is compliant and future-ready."
      },
      {
        question: "Is support available for property-related legal documents?",
        answer: "Absolutely. We help with property agreements, rental documents, sale deeds, and coordination for property registration or verification."
      },
      {
        question: "Can legal help be provided in case of disputes or encroachment?",
        answer: "Yes. We offer legal support for issues such as property disputes, encroachments, and resolving inheritance-related conflicts through proper legal channels."
      },
      {
        question: "Is the transfer service available for both domestic and international travel?",
        answer: "Yes. Santhosham’ s transfer service covers both domestic and international travel arrangements."
      },
      {
        question: "Will someone be there to help my parents at the airport or station?",
        answer: "Yes. Assistance is provided at every step — including boarding support and check-in — to make travel easy and stress-free for seniors."
      }
    ],
    'Banking Investment': [
      {
        question: "Can Santhosham assist with my parents' banking needs?",
        answer: "Yes. Santhosham provides support with banking services for elderly parents, making sure their financial matters are managed smoothly."
      },
      {
        question: "Do you help with investment tracking or updates for senior citizens?",
        answer: "Yes. The service includes monitoring and assistance with investment-related needs, helping families stay updated and organized."
      },
      {
        question: "Can you help my parents with bank visits if needed?",
        answer: "Yes. Santhosham can assist with bank visits and related tasks, ensuring seniors don’t have to handle it alone."
      },
      {
        question: "Do you provide reminders or updates related to investments?",
        answer: "Yes. As part of their financial care, Santhosham helps track and manage investment updates and follow-ups for families."
      },
      {
        question: "Will I be informed about financial activities handled by Santhosham?",
        answer: "Yes. All financial activities are conducted with complete transparency, so you are always in the loop."
      },
      {
        question: "Is the service limited to new investments, or do you also handle ongoing ones?",
        answer: "Santhosham supports both new and existing investment portfolios, offering continuous evaluation and strategic adjustments."
      }
    ],
    'Property': [
      {
        question: "What kind of property management services are offered?",
        answer: "Santhosham offers end-to-end property management including maintenance, rent collection, tenant management, legal support, repairs, renovations, and more."
      },
      {
        question: "Can Santhosham manage my property while I am away?",
        answer: "Yes. Whether you're overseas or busy, Santhosham handles everything related to your property while keeping you regularly updated."
      },
      {
        question: "Do you help with finding tenants and collecting rent?",
        answer: "Yes. Santhosham helps find reliable tenants, manage lease agreements, and ensure timely rent collection, so you don’t have to worry about disputes or delays."
      },
      {
        question: "What kind of property maintenance do you handle?",
        answer: "We manage routine cleaning, plumbing, electrical work, civil repairs, and general upkeep to maintain your property's value."
      },
      {
        question: "Do you oversee new construction and renovations?",
        answer: "Yes. We oversee new construction and renovation projects, ensuring high quality and timely completion."
      },
      {
        question: "Can Santhosham help with utility bills?",
        answer: "Yes. Santhosham takes care of electricity, water, and other utility bills, so you don’t have to handle the hassle."
      },
      {
        question: "How do you ensure property security?",
        answer: "We conduct regular security checks to confirm your property is safe and free from unauthorized use."
      }
    ]
  };

  const currentFaqs = faqs[activeCategory] || [];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] mb-8">
            Our Services
          </h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(null);
              }}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-[#4eb0f0] text-white shadow-lg' 
                  : 'bg-[#003366] text-white hover:bg-[#004a94]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="bg-[#f8f9fa] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-6 ${['Connect With Family', 'Legal', 'Banking Investment', 'Property'].includes(activeCategory) ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}
            >
              {currentFaqs.length > 0 ? (
                currentFaqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-fit"
                  >
                    <button 
                      onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    >
                      <span className="font-bold text-[#003366] text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      <div className="text-gray-400 group-hover:text-[#003366] transition-colors shrink-0">
                        {activeIndex === idx ? <FaMinus size={14} /> : <FaPlus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 text-[13px] md:text-sm leading-relaxed border-t border-gray-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 italic">
                  <p>No questions added yet for {activeCategory}.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FAQContent;
