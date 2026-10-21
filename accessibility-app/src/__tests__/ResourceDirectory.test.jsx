import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResourceDirectory from "../components/ResourceDirectory";

describe('ResourceDirectory Component', () => {
    test('renders directory heading and toggle button', () => {
        render(<ResourceDirectory />);
        expect(screen.getByRole('heading', { level: 2, name: /Clinic Service Directory & Practitioner Availability/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Toggle Specialty Triage Filters/i })).toBeInTheDocument();
    });

    test('toggles filter panel with correct aria-expanded attribute', async () => {
        const user = userEvent.setup();
        render(<ResourceDirectory />);

        const toggleBtn = screen.getByRole('button', { name: /Toggle Specialty Triage Filters/i });
        expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

        await user.click(toggleBtn);
        expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    });

    test('filters clinic services when a specialty filter is clicked', async () => {
        const user = userEvent.setup();
        render(<ResourceDirectory />);

        // Open filter accordion
        await user.click(screen.getByRole('button', { name: /Toggle Specialty Triage Filters/i }));
        const pediatricsBtn = screen.getByRole('button', { name: 'Pediatrics' });
        await user.click(pediatricsBtn);

        expect(pediatricsBtn).toHaveAttribute('aria-pressed', 'true');
        expect(screen.getByText(/Childhood Immunization Clinic/i)).toBeInTheDocument();
        expect(screen.queryByText(/General Practitioner Consultation/i)).not.toBeInTheDocument();
    });
});