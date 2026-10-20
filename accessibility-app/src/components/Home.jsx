function Home({ onNavigate, onOpenInfoModal }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="bg-white p-6 rounded-lg border shadow-sm"
      >
        <h2 id="hero-heading" className="text-2xl font-bold text-gray-900 mb-2">
          Accessible Community Healthcare Services
        </h2>
        <p className="text-gray-700 mb-4">
          Schedule clinical consultations, view practitioner availability, and
          access local triage care easily.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("booking")}
            className="px-4 py-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-600"
          >
            Book Appointment
          </button>
          <button
            type="button"
            onClick={onOpenInfoModal}
            className="px-4 py-2 bg-gray-200 text-gray-900 font-bold rounded hover:bg-gray-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-600"
          >
            View Clinic Hours & Info
          </button>
        </div>
      </section>

      {/* Featured Primary Care Cards */}
      <section aria-labelledby="featured-services-heading">
        <h3
          id="featured-services-heading"
          className="text-xl font-bold text-gray-900 mb-4"
        >
          Featured Primary Care Services
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <article className="p-4 bg-white border rounded shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                General Practitioner Consultations
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Routine health check-ups, ongoing treatment plans, and doctor
                referrals.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("booking")}
              className="mt-4 px-3 py-1.5 bg-blue-900 text-white font-semibold rounded text-sm w-fit hover:bg-blue-800 focus-visible:outline"
            >
              Book Practitioner
            </button>
          </article>

          <article className="p-4 bg-white border rounded shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Urgent Care & Triage
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Same-day evaluations for non-life-threatening health concerns.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("directory")}
              className="mt-4 px-3 py-1.5 bg-blue-900 text-white font-semibold rounded text-sm w-fit hover:bg-blue-800 focus-visible:outline"
            >
              View Service Directory
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
