type Appointment = {
    _id: string;
    name: string;
    email: string;
    phone_no: string;
    date: string;
    time: string;
    reason_of_visit: string;
};

type Props = {
    appointment: Appointment;
    onAccept: (id: string) => void;
    onReject: (id: string) => void;
};

export const AppointmentItem = ({ appointment, onAccept, onReject }: Props) => {
    return (
        <tr className="border-t">
            <td className="p-2 ml-7 text-center ">{appointment.name}</td>
            <td className="p-2 ml-7 text-center ">{appointment.email}</td>
            <td className="p-2 ml-7 text-center ">{appointment.phone_no}</td>
            <td className="p-2 ml-7 text-center ">{appointment.date}</td>
            <td className="p-2 ml-7 text-center ">{appointment.time}</td>
            <td className="p-2 ml-7 text-center ">{appointment.reason_of_visit}</td>
            <td className="p-2 text-center   space-x-2 ml-7">
                <button onClick={() => onAccept(appointment._id)} className="bg-green-500 text-white px-3 py-1 rounded-md">Accept</button>
                <button onClick={() => onReject(appointment._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
            </td>
        </tr>
    );
};
