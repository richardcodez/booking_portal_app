import { useState } from "react";

function Resourcedirectory() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: "General Practitioner Consultation",
      specialty: "General",
      doctor: "Dr. Sarah Smith",
      slot: "Today at 2:00 PM",
    },
    {
      id: 2,
      name: "Urgent Triage Evaluation",
      specialty: "Triage",
      doctor: "On-Call Medical Team",
      slot: "Walk-ins available",
    },
    {
      id: 3,
      name: "Childhood Immunization Clinic",
      specialty: "Pediatrics",
      doctor: "Nurse Practitioner Adams",
      slot: "Tomorrow at 10:00 AM",
    },
  ];

  const specialties = ["All", "General", "Triage", "Pediatrics"];

  const filteredServices =
    selectedSpeciality === "All"
      ? services
      : services.filter((s) => s.specialty === selectedSpeciality);

  return (
    <section
      className="p-4 bg-gray-50 rounded border"
      aria-labelledby="clinic-directory-heading"
    >
      <h2 id="clinic-directory-heading" className="text-xl font-bold mb-4">
        Clinic Service Directory & Practitioner Availability
      </h2>

      <button
        type="button"
        aria-expanded={isFilterOpen}
        aria-controls="triage-filter-panel"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-900 font-bold rounded flex items-center justify-between gap-2 border"
      >
        <span>Toggle Specialty Triage Filters</span>
        <span aria-hidden="true">{isFilterOpen ? "▲" : "▼"}</span>
      </button>

      <div
        id="triage-filter-panel"
        hidden={!isFilterOpen}
        className="mb-6 flex gap-2 flex-wrap"
      >
        {specialties.map((spec) => (
          <button
            key={spec}
            type="button"
            aria-pressed={selectedSpecialty === spec}
            onClick={() => setSelectedSpecialty(spec)}
            className={`px-3 py-1.5 rounded border text-sm font-bold ${
              selectedSpecialty === spec
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {spec}
          </button>
        ))}
      </div>

      <ul className="grid gap-4" aria-live="polite">
        {filteredServices.map((item) => (
          <li key={item.id} className="p-4 bg-white border rounded shadow-sm">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-700">Practitioner: {item.doctor}</p>
            <p className="text-sm font-semibold text-blue-900">
              Next Slot: {item.slot}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Resourcedirectory;
