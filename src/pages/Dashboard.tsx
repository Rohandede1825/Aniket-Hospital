// import { FaUserMd, FaHospitalSymbol, FaCalendarCheck } from "react-icons/fa";
import { FaUserMd, FaHospitalSymbol, FaCalendarCheck } from "react-icons/fa";
import { JSX } from "react";
import FeatureCard from "../components/FeatureCard";
import { FaUserDoctor, FaHeart, FaBaby } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

const Card = ({ icon, title, description, buttonText }: {
  icon: JSX.Element;
  name?: string;
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center w-full max-w-sm transition-all duration-300">
      <div className="text-5xl text-purple-900 mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-purple-950 mb-2">{title}</h3>
      <p className="text-gray-600 mt-2 min-h-[60px]">{description}</p>
      <button className="mt-4 bg-purple-950 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors duration-300 font-medium">
        {buttonText}
      </button>
    </div>
  );
};



const featureData = [
  {
      id: 1,
      logo: <FaUserDoctor className="text-4xl text-purple-900" />,
      title: "Gynaecology & Obstetrics",
      description: "Gynecology and obstetrics are two closely related fields of medicine that focus on women's health, particularly during reproductive years and childbirth."
  },
  {
      id: 2,
      logo: <FaHeart className="text-4xl text-purple-900" />,
      title: "Infertility Treatment",
      description: "Infertility treatment encompasses a variety of medical interventions aimed at helping individuals or couples conceive."
  },
  {
      id: 3,
      logo: <FaBaby className="text-4xl text-purple-900" />,
      title: "Laparoscopy Surgery",
      description: "Evaluating conditions such as endometriosis, pelvic inflammatory disease, and ovarian cysts. Assessing unexplained pelvic pain or infertility."
  },
  {
      id: 4,
      logo: <GiMedicines className="text-4xl text-purple-900" />,
      title: "Follow-Up and Preventive Care",
      description: "Regular Monitoring: Schedule follow-up visits to track progress, adjust treatment as needed, and address any ongoing concerns."
  }
];

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
          {/* <img src="https://res.cloudinary.com/deqwiyyxl/image/upload/v1742710135/aniket_hospital_pic_oy5kdh.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" /> */}
          <img src="https://i.pinimg.com/736x/ba/a0/0d/baa00d44eafbd51609a1d6f61a8faa25.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" />
        </div>
      </div>

      <div className="mb-3">
        <img src="https://res.cloudinary.com/deqwiyyxl/image/upload/v1742711819/aniket_hospital_pic_kdkonw.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" />
      </div>


    <div className="text-center text-2xl font-semibold p-4">
      We are experienced in providing a wide range of services
    </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-8 bg-purple-50">
        <Card
          icon={<FaUserMd />}
          title="Dr.Sunita Ajay Burande"
          name="Dr.Sunita Ajay Burande"
          description="MBBS, DGO, gynecologist, obstetrician, infertility specialist"
          buttonText= "Book Appointment"
        />
        <Card
          icon={<FaUserMd />}
          title="Dr.Ajay T. Burande"
          name="Dr.Sunita Ajay Burande"
          description="MBBS, DOMS , Eye-specialist,"
          buttonText= "Book Appointment"
        />
        <Card
          icon={<FaUserMd />}
          title="Dr.Aniket Ajay Burande"
          name="Dr.Aniket Ajay Burande"
          description="MBBS,"
          buttonText= "Book Appointment"
        />
        <Card
          icon={<FaHospitalSymbol />}
          title="Locations & Directions"
          description="location"
          buttonText="Get directions"
        />
        <Card
          icon={<FaCalendarCheck />}
          title="Appointments"
          description="Get the in-person or virtual care you need."
          buttonText="Schedule now"
        />
      </div>

      <div className="mt-8 mb-12 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 px-6">Our Medical Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {featureData.map(feature => (
                <div key={feature.id} className="h-full transform hover:scale-105 transition-transform duration-300">
                    <div className="h-full">
                        <FeatureCard
                            logo={feature.logo}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>


        <div>
    <div className="text-2xl font-bold text-center mb-8">
        <h1 className="text-purple-900">About Aniket Hospital</h1>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 font-semibold text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
                At Aniket Hospital, we are dedicated to providing comprehensive and compassionate care for women of all ages. Our experienced team specializes in a wide range of gynecological services, from routine exams to advanced treatments. Your health and comfort are our top priorities.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
                Your health and well-being are our top priorities. We provide compassionate and comprehensive gynecological care for women of all ages. Whether you're seeking routine exams, pregnancy care, or specialized treatments, our experienced team is here to support you.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
                At Aniket Hospital, our team is led by Dr. Sunita Burande, a board-certified gynecologist with 25 years of experience. We believe in empowering women through education and personalized care. Our welcoming office environment is designed to make every visit comfortable and reassuring.
            </p>
        </div>
    </div>
</div>
    </div>
  );
};
