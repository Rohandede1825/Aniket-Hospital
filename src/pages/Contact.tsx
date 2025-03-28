import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_no: "",
        date: "",
        time: "",
        reason_of_visit: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointment/createAppointment`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    ...(isAuthenticated && { credentials: "include" })
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                alert("Appointment booked successfully!");
                setFormData({ name: "", email: "", phone_no: "", date: "", time: "", reason_of_visit: "" });
                if (isAuthenticated) {
                    navigate('/appointment');
                }
            }
        } catch (error) {
            console.error("Error booking appointment", error);
            alert("Failed to book appointment");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
            <h1 className="text-3xl font-semibold text-purple-800 mb-5">Book an Appointment</h1>
            <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" type="text" placeholder="Full Name" required />
                <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" type="email" placeholder="Email" required />
                <input name="phone_no" value={formData.phone_no} onChange={handleChange} className="w-full p-2 border rounded-md" type="tel" placeholder="Phone Number" required />
                <input name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-md" type="date" required />
                <input name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded-md" type="time" required />
                <input name="reason_of_visit" value={formData.reason_of_visit} onChange={handleChange} className="w-full p-2 border rounded-md" type="text" placeholder="Reason for Appointment" required />
                <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800">Book Now</button>
            </form>
        </div>
    );
};