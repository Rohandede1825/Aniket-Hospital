import React from "react";

interface FeatureCardProps {
  logo: string; // URL of the logo image
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ logo, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center w-64">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
        <img src={logo} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
