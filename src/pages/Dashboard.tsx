import {Link} from "react-router-dom";
import { FaUserMd, FaHospitalSymbol, FaCalendarCheck } from "react-icons/fa";

const Card = ({ icon, title, description, buttonText }: {
  icon: JSX.Element;
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center w-full max-w-sm">
      <div className="text-5xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-blue-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  );
};
export const Dashboard = () => {
    return (
        <div className="bg-purple-50 flex flex-col items-center w-full min-h-screen">
            <div className="flex flex-wrap justify-center items-center w-full max-w-7xl px-4 sm:px-6 py-12 lg:flex-nowrap">
                <div className="flex flex-col w-full lg:w-1/2 gap-4 text-center lg:text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">20+ years of experience</h4>
                    <h1 className="text-purple-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Compassionate Care for Every Stage of Womanhood
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                        Your health and well-being are our top priorities. We provide compassionate and comprehensive gynecological care for women of all ages.
                    </p>
                    <div className="bg-purple-950 p-3 rounded-md text-white w-40 mt-5 flex items-center justify-center cursor-pointer hover:opacity-85">
                        <button className="text-sm sm:text-base md:text-lg">Learn More</button>
                    </div>
                </div>
                <div className="flex w-full lg:w-[550px] justify-center lg:justify-end mt-9">
                    <img src="https://i.pinimg.com/736x/ba/a0/0d/baa00d44eafbd51609a1d6f61a8faa25.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-8 bg-gray-100">
      <Card 
        icon={<FaUserMd />} 
        title="Our Doctors" 
        description="Search by name, specialty, location and more." 
        buttonText="Find a doctor" 
      />
      <Card 
        icon={<FaHospitalSymbol />} 
        title="Locations & Directions" 
        description="Find any of our 300+ locations." 
        buttonText="Get directions" 
      />
      <Card 
        icon={<FaCalendarCheck />} 
        title="Appointments" 
        description="Get the in-person or virtual care you need." 
        buttonText="Schedule now" 
      />
    </div>
        </div>
    );
};
