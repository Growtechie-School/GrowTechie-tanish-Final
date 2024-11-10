// faq.tsx

'use client';

import React from 'react';
import Accordion from '@/components/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
  {
    question: "Is all courses are 100% online? Do I need to attend any classes in-person?",
    answer: "This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings, and assignments anytime and anywhere via the web or your mobile device.",
  },
  {
    question: "What is your refund policy?",
    answer: "If you registered, you get a 1-week free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time.",
  },
  {
    question: "Can I enroll or hire multiple courses or tutors?",
    answer: "Yes, you can hire or enroll in multiple courses. But managing time will be yours as there might be a collision of live sessions as experts might be different.",
  },
  {
    question: "Who are the tutors or mentors here?",
    answer: "All tutors and mentors of Growtechie are subject matter experts & industry experts who have experience in the skill, tool, or domain of their project and are passionate about sharing their knowledge to impact millions of learners around the world.",
  },
  {
    question: "Are all classes live, or will recordings be available?",
    answer: "All sessions will be live. We want our students to be serious about learning & executing products/projects during learning time only.",
  },
  {
    question: "What if I miss a call?",
    answer: "Mail us so that we can book another class or assign you to another group for that particular missed class.",
  },
];

export default function FAQ() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div data-aos="fade-up" className="text-center mt-10">
      <h1 className="text-[20px] lg:text-[40px] font-semibold text-white">FAQs</h1>
      <div 
        data-aos="fade-left" 
        className="my-20 lg:my-[10%] p-8  rounded-lg shadow-lg"
      >
        {faqData.map((faq, index) => (
          <Accordion 
            key={index} 
            question={faq.question} 
            answer={faq.answer} // Passing answer as string
          />
        ))}
      </div>
    </div>
  );
}
