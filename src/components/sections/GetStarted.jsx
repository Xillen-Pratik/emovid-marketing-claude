import React from 'react';

const checkItems = ['Join for Free', 'Nothing to install', 'Use Emovid your way'];

export default function GetStarted() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2 className="text-white font-['Manrope'] text-3xl font-semibold mb-8">
          Get started today
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {checkItems.map((text, index) => (
            <div key={index} className="flex items-center gap-2 text-white/80 text-sm font-['Inter']">
              <svg className="w-5 h-5 text-[#8B1A2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button className="border border-white text-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition font-['Inter'] cursor-pointer">
            Contact Us
          </button>
          <button className="bg-[#8B1A2B] text-white rounded-full px-8 py-3 hover:bg-[#6B1420] transition font-['Inter'] cursor-pointer">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
