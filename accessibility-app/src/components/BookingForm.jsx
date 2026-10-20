import { useId, useState } from "react";

function BookingForm() {
    const nameId = useId();
    const phoneId = useId();

    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [touched, setTouched] = useState({name: false, phone: false});
    const [announcement, setAnnouncement] = useState('');

    const isNameInvalid = touched.name && patientName.trim().length < 2;
    const isPhoneInvalid = touched.phone && phoneNumber.trim().length < 7;

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({name: true, phone: true});

        if (patientName.trim().length < 2 || phoneNumber.trim().length < 7) {
            setAnnouncement('Appointment submission failed. Please fix errors in the form.');
        } else {
            setAnnouncement('Your medical appointment has been scheduled successfully!');
        }
    }
    return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-lg p-4 bg-white rounded border">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
        </div>

        <h2 className="text-xl font-bold mb-2">Schedule Clinical Appointment</h2>

        <div>
            <label htmlFor={nameId} className="block font-bold text-gray-900">
            Patient Full Name <span aria-hidden="true">*</span>
            </label>
            <span id={`${nameId}-hint`} className="block text-sm text-gray-600">
            Enter patient's official full name.
            </span>
            <input
            id={nameId}
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            aria-invalid={isNameInvalid}
            aria-describedby={`${nameId}-hint ${isNameInvalid ? `${nameId}-error` : ''}`}
            className="mt-1 block w-full rounded border p-2 text-base focus-visible:outline focus-visible:outline-blue-700"
            />
            {isNameInvalid && (
            <p id={`${nameId}-error`} className="mt-1 text-sm text-red-600 font-semibold">
                Error: Full name must be at least 2 characters long.
            </p>
            )}
        </div>

        <div>
            <label htmlFor={phoneId} className="block font-bold text-gray-900">
            Contact Phone Number <span aria-hidden="true">*</span>
            </label>
            <span id={`${phoneId}-hint`} className="block text-sm text-gray-600">
            Provide a phone number for SMS booking reminders.
            </span>
            <input
            id={phoneId}
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            aria-invalid={isPhoneInvalid}
            aria-describedby={`${phoneId}-hint ${isPhoneInvalid ? `${phoneId}-error` : ''}`}
            className="mt-1 block w-full rounded border p-2 text-base focus-visible:outline focus-visible:outline-blue-700"
            />
            {isPhoneInvalid && (
            <p id={`${phoneId}-error`} className="mt-1 text-sm text-red-600 font-semibold">
                Error: Please enter a valid phone number.
            </p>
            )}
        </div>

        <button
            type="submit"
            className="px-4 py-2 bg-blue-900 text-white rounded font-bold hover:bg-blue-800 focus-visible:outline-4 focus-visible:outline-blue-600"
        >
            Confirm Appointment
        </button>
    </form>
    );
}

export default BookingForm;