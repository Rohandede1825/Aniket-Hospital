import React, { JSX } from "react";
import { FaUserMd, FaBaby, FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

const ServiceCard = ({ icon, title, description }: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center w-full transition-all duration-300">
      <div className="text-5xl text-purple-900 mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-purple-950 mb-2">{title}</h3>
      <p className="text-gray-600 mt-2 min-h-[60px]">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
          <div className="flex flex-col lg:flex-row p-8 bg-purple-50"> 
              {/* Header Section */}
              <div className="container mx-auto px-6 pt-10">
                <h2 className="text-4xl font-bold text-blue-900">Services</h2>
                <p className="text-gray-500 mt-2">
                    <span className="text-orange-500">Home</span> / Services
                </p>
            </div>
            {/* Image on Right */}
            <div className="lg:w-1/2 flex justify-end">
                <img
                    src="https://res.cloudinary.com/deqwiyyxl/image/upload/v1742717353/Premium_Vector___Doctors_examining_patient_brain_with_mri_scanner_a6uto5.jpg"
                    alt="Medical Service"
                    className="max-w-lg w-full"
                />
            </div>
          </div>

            {/* Image & Text Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-orange-500 font-semibold uppercase tracking-wider">
                        Our Services
                    </h4>
                    <h2 className="text-4xl font-bold text-blue-900 mt-4 leading-tight">
                        Innovative Treatments for Optimal Women's Health
                    </h2>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <FaUserMd />,
                            title: "High-Risk Pregnancy Care",
                            description: "Specialized monitoring and treatment for women with complications such as hypertension or diabetes."
                        },
                        {
                            icon: <FaBaby />,
                            title: "Ultrasounds",
                            description: "Screening for conditions such as gestational diabetes and infections."
                        },
                        {
                            icon: <FaHeartbeat />,
                            title: "Blood Tests",
                            description: "Advanced fertility treatments and counseling for couples trying to conceive."
                        },
                        {
                            icon: <GiMedicines />,
                            title: "Genetic Testing",
                            description: "Options like amniocentesis or non-invasive prenatal testing (NIPT) to assess genetic disorders."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Pain Management:",
                            description: "Epidural Analgesia, Nitrous Oxide and Medication A common method for pain relief during labor and option for laboring mothe..."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Continuous Fetal Monitoring",
                            description: "Tracking the baby's heart rate and contractions during labor."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Assisted Delivery",
                            description: "Use of tools like forceps or vacuum extraction if needed during delivery."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Cesarean Delivery (C-section)",
                            description: "Surgical delivery for cases where vaginal birth is not possible or safe."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Recovery Care",
                            description: "Monitoring for complications post-delivery, including wound care for C-sections."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Breastfeeding Support",
                            description: "Assistance with latching, feeding techniques, and addressing challenges."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Newborn Care",
                            description: "Monitoring the baby for health issues, including jaundice and feeding difficulties."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Neonatal Intensive Care Unit (NICU)",
                            description: "Care for premature or critically ill newborns requiring specialized treatment."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Mental Health Support",
                            description: "Counseling and support for postpartum depression and anxiety."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Assisted Reproductive Technologies",
                            description: "Services such as IVF (in vitro fertilization) and IUI (intrauterine insemination)."
                        }
                        ,
                        {
                            icon: <GiMedicines />,
                            title: "Fertility Assessments",
                            description: "Evaluation and treatment options for couples struggling to conceive."
                        }
                    
                    ].map((card, index) => (
                        <ServiceCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;
