import React, { ReactElement } from "react";

interface FeatureCardProps {
  logo: ReactElement; // Changed to ReactElement to accept React icons
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ logo, title, description }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center min-h-[320px] w-full">
      <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6">
        {logo}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-purple-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{description}</p>
    </div>
  );
};

export default FeatureCard;
