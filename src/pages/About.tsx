import { FaUserMd } from "react-icons/fa";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const About = () => {
    const doctors = [
        {
            name: "Dr. Sunita Ajay Burande",
            qualification: "MBBS, DGO",
            specialization: "Gynecologist, Obstetrician, Infertility Specialist",
            icon: <FaUserMd className="text-5xl text-purple-900" />
        },
        {
            name: "Dr. Ajay T. Burande",
            qualification: "MBBS, DOMS",
            specialization: "Eye Specialist",
            icon: <FaUserMd className="text-5xl text-purple-900" />
        },
        {
            name: "Dr. Aniket Ajay Burande",
            qualification: "MBBS",
            specialization: "General Physician",
            icon: <FaUserMd className="text-5xl text-purple-900" />
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            {/* Stats Section */}
            <section className="container mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-purple-600 text-4xl font-bold mb-2">23</p>
                        <p className="text-gray-700 font-medium">Patient Beds</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-purple-600 text-4xl font-bold mb-2">5</p>
                        <p className="text-gray-700 font-medium">Doctors & Nurses</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-purple-600 text-4xl font-bold mb-2">1550</p>
                        <p className="text-gray-700 font-medium">Happy Patients</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-purple-600 text-4xl font-bold mb-2">20</p>
                        <p className="text-gray-700 font-medium">Years Experience</p>
                    </div>
                </div>
            </section>

            <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-white shadow-md rounded-lg">
      {[
        { icon: <Phone className="text-green-500" size={28} />, bg: "bg-green-100", text: "8390090016 / 7887471999", subtext: "Call Today" },
        { icon: <Mail className="text-orange-500" size={28} />, bg: "bg-orange-100", text: "aniketnetrayalay@gmail.com", subtext: "Contact Hospital" },
        { icon: <Clock className="text-blue-500" size={28} />, bg: "bg-blue-100", text: "9 AM - 7 PM", subtext: "Open Hours" },
        { icon: <MapPin className="text-pink-500" size={28} />, bg: "bg-pink-100", text: "Govardhan Ghat, Borban Factory, Nanded, Maharashtra 431601", subtext: "Our Location" }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-sm border w-64 text-center">
          <div className={`${item.bg} p-4 rounded-full`}>{item.icon}</div>
          <p className="text-lg font-semibold text-blue-900 mt-2">{item.text}</p>
          <p className="text-gray-500 text-sm">{item.subtext}</p>
        </div>
      ))}
    </div>

          

            {/* Doctors Section */}
            <section className="container mx-auto px-6 mt-5">
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Medical Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                {doctor.icon}
                            </div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2">{doctor.name}</h3>
                            <p className="text-gray-600 font-medium mb-2">{doctor.qualification}</p>
                            <p className="text-gray-500">{doctor.specialization}</p>
                            <button className="mt-4 px-6 py-2 bg-purple-900 text-white font-medium rounded-lg shadow-md hover:bg-purple-800 transition">
                                Book Appointment
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
