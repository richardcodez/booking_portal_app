import { useState } from "react";
import Home from "./components/Home";
import ResourceDirectory from "./components/ResourceDirectory";
import BookingForm from "./components/BookingForm";
import Modal from "./components/Modal";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-between">
        <div>
          {/* Skipping Navigation Link for Screen Readers */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-900 focus:text-white focus:p-3 focus:z-50 focus:rounded"
          >
            Skip to main content
          </a>

          {/* Header & Global Navigation */}
          <header className="bg-blue-950 text-white p-4 shadow-md">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <h1 className="text-2xl font-bold tracking-tight">
                <button
                  type="submit"
                  onClick={() => setActiveTab('home')}
                  className="hover:underline focus-visible:outline focus-visible:outline-white focus-visible:outline-offset-4 rounded text-left"
                  aria-label="Community Healthcare Clinic - Return to homepage"
                >
                  Community Healthcare Clinic
                </button>
              </h1>
              <nav aria-label="Main Application Navigation">
                <ul className="flex gap-2 sm:gap-4">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveTab("home")}
                      aria-current={activeTab === "home" ? "page" : undefined}
                      className={`px-3 py-1.5 rounded font-semibold transition-colors ${
                        activeTab === "home"
                          ? "bg-blue-800 text-white underline"
                          : "hover:bg-blue-900"
                      }`}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveTab("directory")}
                      aria-current={
                        activeTab === "directory" ? "page" : undefined
                      }
                      className={`px-3 py-1.5 rounded font-semibold transition-colors ${
                        activeTab === "directory"
                          ? "bg-blue-800 text-white underline"
                          : "hover:bg-blue-900"
                      }`}
                    >
                      Clinical Services
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveTab("booking")}
                      aria-current={
                        activeTab === "booking" ? "page" : undefined
                      }
                      className={`px-3 py-1.5 rounded font-semibold transition-colors ${
                        activeTab === "booking"
                          ? "bg-blue-800 text-white underline"
                          : "hover:bg-blue-900"
                      }`}
                    >
                      Book Appointment
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main Content View Switcher */}
          <main
            id="main-content"
            className="max-w-5xl mx-auto p-4 sm:p-6 w-full"
          >
            {activeTab === "home" && (
              <Home
                onNavigate={setActiveTab}
                onOpenInfoModal={() => setIsModalOpen(true)}
              />
            )}

            {activeTab === "directory" && <ResourceDirectory />}

            {activeTab === "booking" && (
              <div className="flex justify-center">
                <BookingForm />
              </div>
            )}
          </main>
        </div>

        {/* Shared Dialog Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Clinic Contact & Information"
        >
          <div className="space-y-3 text-gray-800">
            <p>
              <strong>Address:</strong> 124 Main Health Drive, Building B
            </p>
            <p>
              <strong>Hours:</strong> Monday – Friday, 7:30 AM – 5:00 PM
            </p>
            <p>
              <strong>Urgent Triage Desk:</strong> Walk-in evaluations are
              available weekdays before 3:00 PM.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-900 text-white font-bold rounded w-full"
            >
              Close Information Dialog
            </button>
          </div>
        </Modal>

        {/* Global Footer */}
        <footer className="bg-gray-200 text-gray-700 p-6 text-center border-t border-gray-300">
          <p className="text-sm">
            &copy; 2026 Community Healthcare Clinic.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
