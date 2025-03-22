import { useState, useEffect } from "react";
import { AppointmentItem } from "./AppointmentItem";

type Appointment = {
    _id: string;
    name: string;
    email: string;
    phone_no: string;
    date: string;
    time: string;
    reason_of_visit: string;
};

export const AppointmentsList = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/appointment/getAppointments`, {
            method: "GET",
            credentials: "include", 
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch appointments");
                return response.json();
            })
            .then((data: Appointment[]) => setAppointments(data))
            .catch((error) => console.error("Error fetching appointments", error));
    }, []);

    const handleAccept = (id: string) => {
        console.log("Accepted appointment", id);
    };

    const handleReject = (id: string) => {
        console.log("Rejected appointment", id);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Appointments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-md">
                    <thead>
                        <tr className="bg-purple-700 text-white">
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Phone</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Time</th>
                            <th className="p-2">Reason</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <AppointmentItem key={appointment._id} appointment={appointment} onAccept={handleAccept} onReject={handleReject} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
