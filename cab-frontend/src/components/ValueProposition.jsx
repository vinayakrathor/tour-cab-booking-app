import React from 'react';

const ValueProposition = () => {
  const features = [
    {
      id: 1,
      title: '24/7 Customer Support',
      desc: 'A dedicated 24x7 customer support team always at your service to help solve any problem',
      icon: (
        // Phone/24 Support Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          <text x="13" y="10" fontSize="8" fontWeight="bold" strokeWidth="0" fill="currentColor">24</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Your Safety First',
      desc: 'Keep your loved ones informed about your travel routes or call emergency services when in need',
      icon: (
        // Shield/Safety Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Top Rated Driver-Partners',
      desc: 'All our driver-partners are background verified and trained to deliver only the best experience',
      icon: (
        // Driver/Chauffeur Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#f4f5f6] py-10 w-full border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-5 group">
              
              {/* Icon Container (White Circle) */}
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300">
                {feature.icon}
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <h3 className="text-[17px] font-bold text-[#063b3d] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;