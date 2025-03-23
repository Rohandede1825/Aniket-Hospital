import React from 'react';

interface FeatureCardProps {
  logo: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ logo, title, description }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center min-h-[400px] h-full transition-all duration-300">
      <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">
        {logo}
      </div>
      <h3 className="text-xl font-bold text-purple-950 mb-4">{title}</h3>
      <div className="flex-grow overflow-auto">
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
